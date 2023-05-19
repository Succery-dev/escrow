import { StatusEnum } from "../../enums/dashboard/ProjectStatus";

interface ProjectDetailsInterface {
  project: string;
  deadline: number;
  amount: number;
  status: StatusEnum;
}

export type { ProjectDetailsInterface };
