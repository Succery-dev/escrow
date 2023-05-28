import React, { useContext } from "react";

// Interfaces Imports
import {
  CreateProjectFieldInterface,
  CreateProjectFormInterface,
} from "../../interfaces";

// Custom Components Imports
import { CustomButton } from "../index";

// Constants Imports
import { createProjectFields, signProjectEip712 } from "../../constants";

// Framer Motion Imports
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
import { useRouter } from "next/router";

// Ethers/Wagmi Imports
import { useAccount, useSignTypedData } from "wagmi";
import { NotificationContext } from "../../context/NotificationContext";

// Assets/Image Imports
import {
  IconNotificationSuccess,
  IconNotificationWarning,
  IconNotificationError,
} from "../../assets";

const FormFields = ({
  formField,
  index,
  form,
  updateFormField,
}: {
  formField: CreateProjectFieldInterface;
  index: number;
  form: CreateProjectFormInterface;
  updateFormField: (
    e:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLInputElement>,
    formFieldtitle: string
  ) => void;
}): JSX.Element => {
  return (
    <motion.div
      variants={fadeIn("down", 1.25, index, 0.15)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className="flex flex-col"
      key={`create-project-${formField.title}`}
    >
      <h2 className="text-lg font-semibold text-secondary">
        {formField.title}*
      </h2>
      <div className="grid place-items-center w-full blue-transparent-green-gradient lg:p-[1.5px] p-[1px] rounded-sm">
        {formField.type === "textArea" ? (
          <textarea
            className="w-full h-full border-none bg-bg_primary focus:bg-[#080e26] rounded-sm px-2 py-[0.3rem] text-sm outline-none text-[#D3D3D3]"
            placeholder={formField.placeholder}
            rows={4}
            value={form[formField.title as keyof typeof form]}
            onChange={(e) => updateFormField(e, formField.title)}
            required
          />
        ) : (
          <input
            type={formField.type}
            name={formField.title}
            id={formField.title}
            className="w-full h-full border-none bg-bg_primary focus:bg-[#080e26] rounded-sm px-2 py-[0.3rem] text-sm outline-none text-[#D3D3D3]"
            placeholder={formField.placeholder}
            min={0}
            value={form[formField.title as keyof typeof form]}
            onChange={(e) => updateFormField(e, formField.title)}
            required
          />
        )}
      </div>
    </motion.div>
  );
};

const CreateProjectForm = ({
  form,
  setForm,
}: {
  form: CreateProjectFormInterface;
  setForm: React.Dispatch<React.SetStateAction<CreateProjectFormInterface>>;
}): JSX.Element => {
  // Notification Context
  const context = useContext(NotificationContext);
  const setShowNotification = context.setShowNotification;
  const setNotificationConfiguration = context.setNotificationConfiguration;
  // Wagmi
  const { isConnected, address } = useAccount();
  const {
    signTypedDataAsync,
    data: signedProjectDetails,
    isSuccess,
    isError,
  } = useSignTypedData({
    domain: signProjectEip712.domain,
    types: signProjectEip712.types,
    value: {
      title: form.Title,
      detail: form.Detail,
      deadline: form["Deadline(UTC)"],
      reward: form["Reward(USDC)"],
      lancerAddress: form["Lancer's Wallet Address"],
    },
  });
  // Next Router
  const router = useRouter();
  const { pathname } = router;
  // Function Update Form Field
  const updateFormField = (
    e:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLInputElement>,
    formFieldtitle: string
  ) => {
    setForm({
      ...form,
      [formFieldtitle as keyof typeof form]: e.target.value,
    });
  };

  const signProjectDetails = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await signTypedDataAsync();
      setNotificationConfiguration({
        modalColor: "#62d140",
        title: "Success",
        message: "Message Signed!",
        icon: IconNotificationSuccess,
      });
      setShowNotification(true);
    } catch (error) {
      if (String(error).includes("invalid address")) {
        setNotificationConfiguration({
          modalColor: "#d1d140",
          title: "Invalid Address",
          message: "Invalid Address for signing Project Details!",
          icon: IconNotificationWarning,
        });
        setShowNotification(true);
      } else if (String(error).includes("UserRejectedRequestError")) {
        setNotificationConfiguration({
          modalColor: "#d14040",
          title: "Rejected",
          message: "Rejected Sigining Project Details",
          icon: IconNotificationError,
        });
        setShowNotification(true);
        console.log(error);
      } else {
        setNotificationConfiguration({
          modalColor: "#d14040",
          title: "Error",
          message: "Some error signing the Project Detials",
          icon: IconNotificationError,
        });
        setShowNotification(true);
      }
    }
    // if (isConnected && address === form["Lancer's Wallet Address"]) {
    //   await signTypedDataAsync();
    //   if (isSuccess) {

    //   } else if (isError) {

    //   } else {
    //     return;
    //   }
    // } else {
    //   console.log("Invalid Singing Address");
    //   setNotificationConfiguration({
    //     textColor: "#d1d140",
    //     title: "Invalid Address",
    //     message: "Invalid Address for signing Project Details!",
    //   });
    //   setShowNotification(true);
    // }
  };

  return (
    // Form Wrapper
    <motion.div
      variants={fadeIn("bottom", 0.4)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className="lg:w-1/2 lg:max-w-auto lg:mx-0 md:max-w-[70vw] mx-auto rounded-lg lg:p-[3px] p-[2px] blue-transparent-green-gradient"
    >
      <div className="w-full h-full rounded-lg bg-black px-6 py-14">
        {/* Heading */}
        <motion.h1
          variants={textVariant()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="xl:text-4xl lg:text-3xl md:text-4xl sm:text-xl text-3xl font-extrabold"
        >
          {pathname === "/create-project"
            ? "Create Project"
            : pathname === "/contract-details"
            ? "Contract Details"
            : null}
        </motion.h1>
        {/* Form Fields */}
        <div className="flex flex-col gap-6 pt-8">
          {createProjectFields.map((formField, index) => {
            if (pathname === "/create-project") {
              return (
                formField.title != "Lancer's Wallet Address" && (
                  <FormFields
                    formField={formField}
                    index={index}
                    form={form}
                    updateFormField={updateFormField}
                    key={index}
                  />
                )
              );
            } else if (pathname === "/contract-details") {
              return (
                <FormFields
                  formField={formField}
                  index={index}
                  form={form}
                  updateFormField={updateFormField}
                  key={index}
                />
              );
            } else return null;
          })}
        </div>

        {/* Buttons */}
        <div className="w-full flex flex-row justify-end">
          {pathname === "/create-project" ? (
            // "Create Button"
            <CustomButton
              text="Create"
              styles="w-full bg-[#3E8ECC] rounded-md text-center text-lg font-semibold text-white py-[4px] px-7 hover:bg-[#377eb5] mt-12"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                router.push("/contract-details");
              }}
            />
          ) : pathname === "/contract-details" ? (
            <div className="w-full flex flex-col gap-6 mt-12 justify-between">
              {/* Prepay Escrow Button */}
              <CustomButton
                text="Prepay Escrow"
                styles="bg-[#3E8ECC] rounded-md text-center text-lg font-semibold text-white py-[4px] px-7 hover:bg-[#377eb5]"
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                }}
              />
              {/* Pay Lancer Button */}
              <CustomButton
                text="Pay Lancer"
                styles="bg-[#40d1d1] rounded-md text-center text-lg font-semibold text-white py-[4px] px-7 hover:bg-[#31d1d1]"
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                }}
              />
              {/* Verify and Confirm Button */}
              <CustomButton
                text="Confirm"
                styles="bg-[#d14040] rounded-md text-center text-lg font-semibold text-white py-[4px] px-7 hover:bg-[#d13131]"
                type="submit"
                onClick={(e) => signProjectDetails(e)}
              />
            </div>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
};

export default CreateProjectForm;
