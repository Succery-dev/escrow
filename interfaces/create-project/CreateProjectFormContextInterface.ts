import { CreateProjectFormInterface } from "./CreateProjectFormInterface";

interface CreateProjectFormContextInterface {
  form: CreateProjectFormInterface;
  setForm: React.Dispatch<React.SetStateAction<CreateProjectFormInterface>>;
}

export type { CreateProjectFormContextInterface };
