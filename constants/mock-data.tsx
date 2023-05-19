import { StatusEnum } from "../enums/dashboard/ProjectStatus";
import { ProjectDetailsInterface } from "../interfaces/dashboard/temporaryProjectDetailsInterface";
import { ProjectDataInterface } from "../interfaces/dashboard/temporaryProjectDataInterface";

const mockData: ProjectDataInterface = {
  total: 50,
  page: 1,
  per_page: 10,
  data: [
    {
      project: "Project - 1",
      deadline: 59,
      amount: 900,
      status: StatusEnum.completed,
    },
    {
      project: "Project - 2",
      deadline: 120,
      amount: 800,
      status: StatusEnum.completed,
    },
    {
      project: "Project - 3",
      deadline: 140,
      amount: 2000,
      status: StatusEnum.completed,
    },
    {
      project: "Project - 4",
      deadline: 3601,
      amount: 600,
      status: StatusEnum.completed,
    },
    {
      project: "Project - 5",
      deadline: 3900,
      amount: 300,
      status: StatusEnum.notSubmitted,
    },
    {
      project: "Project - 6",
      deadline: 7201,
      amount: 500,
      status: StatusEnum.onGoing,
    },
    {
      project: "Project - 7",
      deadline: 7900,
      amount: 700,
      status: StatusEnum.onGoing,
    },
    {
      project: "Project - 8",
      deadline: 1036801,
      amount: 200,
      status: StatusEnum.prePaid,
    },
    {
      project: "Project - 9",
      deadline: 5260300,
      amount: 500,
      status: StatusEnum.prePaid,
    },
    {
      project: "Project - 10",
      deadline: 5260500,
      amount: 1000,
      status: StatusEnum.notApproved,
    },
  ],
};

export { mockData, StatusEnum };
