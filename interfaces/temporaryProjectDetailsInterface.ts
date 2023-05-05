import { StatusEnum } from "../enums/ProjectStatus";

interface ProjectDetailsInterface {
  project: string;
  deadline: number;
  amount: number;
  status: StatusEnum;
}

export type { ProjectDetailsInterface };
