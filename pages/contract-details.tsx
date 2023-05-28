import React from "react";
import type { NextPage } from "next";

// Interfaces Imports
import { CreateProject_ContractDetails, Notification } from "../components";

const ContractDetails: NextPage = () => {
  return (
    <div>
      <Notification />
      <CreateProject_ContractDetails />
    </div>
  );
};

export default ContractDetails;
