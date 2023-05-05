import React from "react";
import { Chart as Chartjs, ArcElement, Tooltip, Legend } from "chart.js";
import type { Chart } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import type { ChartData, ChartOptions, Plugin } from "chart.js";

import { StatusEnum } from "../../enums/ProjectStatus";
import { ProjectDetailsInterface } from "../../interfaces/temporaryProjectDetailsInterface";

type DoughnutDataType = ChartData<"doughnut", number[], string>;
type DoughnutOptionsType = ChartOptions<"doughnut">;
type DoughnutPluginType = Plugin<"doughnut">[];

Chartjs.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({
  mockData,
}: {
  mockData: ProjectDetailsInterface[];
}): JSX.Element => {
  let totalProjects: number = 0;
  const frequencyCount = mockData.reduce(
    (
      accumulator: Record<StatusEnum, number>,
      curr: ProjectDetailsInterface
    ): Record<StatusEnum, number> => {
      if (!accumulator[curr.status]) {
        accumulator[curr.status] = 1;
        ++totalProjects;
      } else {
        ++accumulator[curr.status];
        ++totalProjects;
      }

      return accumulator;
    },
    {} as Record<StatusEnum, number>
  );

  const data: DoughnutDataType = {
    labels: Object.keys(frequencyCount),
    datasets: [
      {
        label: "Count",
        data: Object.values(frequencyCount),
        backgroundColor: [
          "#3E8EEC",
          "#FFAD4E",
          "#F1FF4E",
          "#91FF4E",
          "#FF634E",
        ],
        borderColor: ["#3E8EEC", "#FFAD4E", "#F1FF4E", "#91FF4E", "#FF634E"],
      },
    ],
  };

  const options: DoughnutOptionsType = {
    plugins: {
      legend: {
        display: false,
        position: "bottom",
      },
    },
    animation: {
      animateScale: true,
      animateRotate: true,
    },
    cutout: "60%",
  };

  // const doughnutLabel: DoughnutPluginType = [
  //   {
  //     id: "doughnutLabel",
  //     beforeDatasetsDraw(chart: Chart) {
  //       const { ctx, data } = chart;
  //       ctx.save();

  //       const xCoor = chart.getDatasetMeta(0).data[0].x;
  //       const yCoor = chart.getDatasetMeta(0).data[0].y;

  //       ctx.font = "bold 30px sans-serif";
  //       ctx.fillStyle = "black";
  //       ctx.textAlign = "center";
  //       ctx.textBaseline = "middle";
  //       ctx.fillText(`${mockData.length}`, xCoor, yCoor - 20);

  //       ctx.font = "24px sans-serif";
  //       ctx.fillStyle = "black";
  //       ctx.textAlign = "center";
  //       ctx.textBaseline = "middle";
  //       ctx.fillText("Total Projects", xCoor, yCoor + 20);
  //     },
  //   },
  // ];

  return (
    <div className="relative sm:w-1/3 w-full h-80 xl:h-[500px] lg:h-[350px] sm:h-[300px] bg-primary bg-opacity-10 rounded-lg border-[1px] border-[#CFCFCF] shadow-card p-4 grid place-items-center">
      <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <span className="font-bold xl:text-2xl">{`${totalProjects}`}</span>
        <br /> <span className="sm:text-[12px] xl:text-lg">Total Projects</span>
      </p>
      <Doughnut
        data={data}
        options={options}
        // plugins={doughnutLabel}
      />
    </div>
  );
};

export default DoughnutChart;
