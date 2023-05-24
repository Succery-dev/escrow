// Interface Imports
import { ProjectDetailsInterface } from "../../../interfaces/dashboard/temporaryProjectDetailsInterface";

// Type Imports
import {
  DoughnutDataType,
  DoughnutOptionsType,
} from "../../../types/dashboard/charts";

// Enum Imports
import { StatusEnum } from "../../../enums/dashboard/ProjectStatus";

export function getDoughnutChartConfig(
  mockData: ProjectDetailsInterface[],
  chartColors: string[]
): [
  data: DoughnutDataType,
  totalProjects: number,
  options: DoughnutOptionsType,
  frequencyCount: Record<StatusEnum, number>
] {
  let totalProjects: number = 0;
  const frequencyCount: Record<StatusEnum, number> = mockData.reduce(
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
        backgroundColor: chartColors,
        borderColor: chartColors,
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

  return [data, totalProjects, options, frequencyCount];
}
