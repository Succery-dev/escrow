import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import Image from "next/image";

import { useEffect, useState } from "react";

import { DoughnutChart, LineChart, Navbar, CustomButton } from "../components";
import { mockData, projectDetailsInterfaceKeys } from "../constants/mock-data";

import { ProjectDetailsInterface } from "../interfaces/temporaryProjectDetailsInterface";

import arrowDown from "../assets/arrow.svg";

import { convertSeconds } from "../utils/index";
import { ProjectDataInterface } from "../interfaces/temporaryProjectDataInterface";

const TableHeader = (): JSX.Element => {
  return (
    <div className="grid grid-cols-4 bg-primary text-white font-semibold items-center rounded-t-lg min-h-[60px] xs:text-base text-sm">
      {projectDetailsInterfaceKeys.map((keyName: string, index) => {
        return (
          <p className="lg:mx-5 sm:mx-3 mx-1" key={`table-heading-${keyName}`}>
            {keyName.toUpperCase()}
          </p>
        );
      })}
    </div>
  );
};

const TableContents = ({
  mockData,
}: {
  mockData: ProjectDataInterface;
}): JSX.Element => {
  return (
    <div>
      {mockData.data.map((project: ProjectDetailsInterface, index: number) => {
        return (
          <div
            className="grid grid-cols-4 items-center border-[1px] border-[#CFCFCF] min-h-[60px] xs:text-base text-xs cursor-pointer hover:bg-primary hover:bg-opacity-10"
            key={`${project.project}`}
          >
            {Object.keys(project).map((projectKey, index) => {
              return (
                <p
                  className="lg:mx-5 sm:mx-3 mx-1"
                  key={`table-data-${projectKey}-${index}`}
                >
                  <span
                    className={`${
                      projectKey === "amount" ? "inline" : "hidden"
                    }`}
                  >
                    ${" "}
                  </span>
                  {projectKey === "deadline"
                    ? convertSeconds(project.deadline)
                    : project[projectKey as keyof typeof project]}
                </p>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

const TableFooter = ({
  mockData,
}: {
  mockData: ProjectDataInterface;
}): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(mockData.page);

  const pageElements = [];
  for (let i = 0; i < Math.ceil(mockData.total / mockData.per_page); i++) {
    pageElements.push(
      <div
        className={`bg-white grid place-content-center w-8 h-8 rounded-sm border-[1px] border-[#cfcfcf] cursor-pointer ${
          currentPage === i + 1 ? "text-primary" : "text-black"
        }`}
        key={`table-footer-page-${i + 1}`}
        onClick={() => setCurrentPage(i + 1)}
      >
        {i + 1}
      </div>
    );
  }

  return (
    <div className="flex flex-row gap-2 justify-center bg-primary text-black font-semibold items-center rounded-b-lg min-h-[60px]">
      {/* Previous Button */}
      <div className="bg-white grid place-content-center w-8 h-8 rounded-sm border-[1px] border-[#cfcfcf] rotate-90">
        <Image src={arrowDown} alt="▼" height={9} />
      </div>
      {/* Pages */}
      {pageElements}
      {/* Next Button */}
      <div className="bg-white grid place-content-center w-8 h-8 rounded-sm border-[1px] border-[#cfcfcf] rotate-[-90deg]">
        <Image src={arrowDown} alt="▼" height={9} />
      </div>
    </div>
  );
};

const Table = ({
  mockData,
}: {
  mockData: ProjectDataInterface;
}): JSX.Element => {
  return (
    <div className="xs:col-start-2 xs:col-end-12 col-start-1 col-end-13 xs:mx-0 mx-[12px] my-8 bg-primary bg-opacity-10 rounded-lg shadow-card grid grid-rows-10">
      <TableHeader />
      <TableContents mockData={mockData} />
      <TableFooter mockData={mockData} />
    </div>
  );
};

const dashboard: NextPage = () => {
  const [data, setData] = useState({} as ProjectDataInterface);

  useEffect(() => {
    setData(mockData);
  }, []);

  if (!data) {
    return null;
  }

  return (
    <div>
      <Head>
        <title>QubePay</title>
        <meta
          name="description"
          content="Empowering relation between Freelancers and Organizations"
        />
        <link rel="icon" href="/logo.png" />
      </Head>

      <Navbar />

      <div className="grid grid-cols-12 gap-1 pb-12">
        {/* Heading and Charts */}
        <div className="col-start-2 col-end-12">
          {/* Heading */}
          <div className="flex flex-row gap-28 items-center py-12 pb-6">
            <h1 className="font-extrabold text-4xl">Active Projects</h1>
            <CustomButton
              text="+ Create"
              styles="bg-primary text-xl rounded-md text-center text-white md:px-6 md:py-3"
            />
          </div>
          {/* Charts */}
          <div className="flex sm:flex-row flex-col gap-8 w-full">
            {data.data?.length > 0 && <DoughnutChart mockData={data.data} />}
            {data.data?.length > 0 && <LineChart mockData={data.data} />}
          </div>
        </div>
        {/* Table */}
        {data.data?.length > 0 && <Table mockData={data} />}
      </div>
    </div>
  );
};

export default dashboard;
