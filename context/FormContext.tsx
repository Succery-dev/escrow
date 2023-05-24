import React, { ReactNode, createContext, useState } from "react";
// Interfaces Imports
import {
  CreateProjectFormInterface,
  CreateProjectFormContextInterface,
} from "../interfaces";

const initialFormValue = {
  Title: "",
  Detail: "",
  "Deadline(UTC)": "",
  "Reward(USDC)": 0,
  "Lancer's Wallet Address": "",
};

// Create the context
export const FormContext = createContext<CreateProjectFormContextInterface>({
  form: initialFormValue,
  setForm: () => {},
});
// Create the context provider component
export const FormProvider = ({ children }: { children: ReactNode }) => {
  // State to store the form values
  const [form, setForm]: [
    form: CreateProjectFormInterface,
    setForm: React.Dispatch<React.SetStateAction<CreateProjectFormInterface>>
  ] = useState(initialFormValue);

  return (
    <FormContext.Provider value={{ form, setForm }}>
      {children}
    </FormContext.Provider>
  );
};
