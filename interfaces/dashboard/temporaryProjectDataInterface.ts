import { ProjectDetailsInterface } from "./temporaryProjectDetailsInterface";

interface ProjectDataInterface {
  total: number;
  page: number;
  per_page: number;
  data: ProjectDetailsInterface[];
}

export type { ProjectDataInterface };
