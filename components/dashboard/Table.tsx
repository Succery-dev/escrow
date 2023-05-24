import React, { useState } from "react";
import Image from "next/image";

import { arrow } from "../../assets";

// Constant Imports
import { projectDetailsInterfaceKeys } from "../../constants";

// Helper Function Imports
import { convertSeconds } from "../../utils";

// Interface Imports
import {
  ProjectDetailsInterface,
  ProjectDataInterface,
} from "../../interfaces";

const TableHeader = (): JSX.Element => {
  return (
    <div className="grid grid-cols-4 bg-black font-semibold items-center rounded-t-lg xs:min-h-[60px] min-h-[50px] xs:text-base text-xs">
      {projectDetailsInterfaceKeys.map((keyName: string, index: number) => {
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
            className="grid grid-cols-4 items-center border-t-[1px] border-b-[1px] border-[#CFCFCF] xs:min-h-[60px] min-h-[50px] xs:text-base text-[0.65rem] cursor-pointer bg-bg_primary hover:bg-primary text-[#CFCFCF] font-normal"
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
        className={`bg-bg_primary grid place-content-center xs:w-8 xs:h-8 w-7 h-7 xs:text-base text-xs rounded-sm border-[1px] border-[#cfcfcf] cursor-pointer ${
          currentPage === i + 1 ? "text-primary" : "text-white"
        }`}
        key={`table-footer-page-${i + 1}`}
        onClick={() => setCurrentPage(i + 1)}
      >
        {i + 1}
      </div>
    );
  }

  return (
    <div className="flex flex-row gap-2 justify-center bg-black text-primary font-semibold items-center rounded-b-lg xs:min-h-[60px] min-h-[50px]">
      {/* Previous Button */}
      <div className="bg-bg_primary grid place-content-center xs:w-8 xs:h-8 w-7 h-7 rounded-sm border-[1px] border-[#cfcfcf] rotate-90">
        <Image src={arrow} alt="▼" height={9} />
      </div>
      {/* Pages */}
      {pageElements}
      {/* Next Button */}
      <div className="bg-bg_primary grid place-content-center xs:w-8 xs:h-8 w-7 h-7 rounded-sm border-[1px] border-[#cfcfcf] rotate-[-90deg]">
        <Image src={arrow} alt="▼" height={9} />
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
    <div className="w-full h-full">
      <TableHeader />
      <TableContents mockData={mockData} />
      <TableFooter mockData={mockData} />
    </div>
  );
};

export { Table };
