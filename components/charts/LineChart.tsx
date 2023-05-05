import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as Chartjs,
  LineElement,
  CategoryScale, // x-axis
  LinearScale, //y-axis
  PointElement,
  Legend,
  Tooltip,
} from "chart.js";
import type { ChartData, ChartOptions, Plugin } from "chart.js";

import { ProjectDetailsInterface } from "../../interfaces/temporaryProjectDetailsInterface";

type LineDataType = ChartData<"line", number[], string>;
type LineOptionsType = ChartOptions<"line">;
// type LinePluginType = Plugin<"line">[];

Chartjs.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
);

let totalAmount: number = 0;

const LineChart = ({
  mockData,
}: {
  mockData: ProjectDetailsInterface[];
}): JSX.Element => {
  const data: LineDataType = mockData.reduce(
    (accumulator: LineDataType, current: ProjectDetailsInterface) => {
      if (!accumulator.labels) {
        accumulator.labels = [];
      }

      if (!accumulator.datasets) {
        accumulator.datasets = [
          {
            data: [],
          },
        ];
      }

      accumulator.labels.push(current.project);
      accumulator.datasets[0].data?.push(current.amount);

      totalAmount += current.amount;

      return accumulator;
    },
    {} as LineDataType
  );

  data.datasets[0] = {
    ...data.datasets[0],
    label: "Price-Project",
    backgroundColor: "transparent",
    borderColor: "#3E8EEC",
    pointBackgroundColor: "#3E8EEC",
  };

  const options: LineOptionsType = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        position: "bottom",
      },
    },
    layout: {
      padding: {
        top: 10,
      },
    },
  };

  return (
    <div className="sm:w-2/3 w-full h-80 xl:h-[500px] lg:h-[350px] sm:h-[300px] bg-primary bg-opacity-10 rounded-lg border-[1px] border-[#CFCFCF] shadow-card p-4 grid place-items-center">
      <div className="h-[90%] w-[100%]">
        <Line data={data} options={options} />
      </div>
      <div className="md:text-lg font-semibold">
        <p>
          Total Amount:{" "}
          <span className="font-bold text-primary md:text-xl">
            ${totalAmount}
          </span>
        </p>
      </div>
    </div>
  );
};

export default LineChart;
