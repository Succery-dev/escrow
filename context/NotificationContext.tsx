import React, { ReactNode, createContext, useState } from "react";
// Interface Imports
import {
  NotificationContextInterface,
  notificationConfigurationInterface,
} from "../interfaces";

export const NotificationContext = createContext<NotificationContextInterface>({
  showNotification: false,
  setShowNotification: () => {},
  notificationConfiguration: {} as notificationConfigurationInterface,
  setNotificationConfiguration: () => {},
});

export const NotificationContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationConfiguration, setNotificationConfiguration] = useState(
    {} as notificationConfigurationInterface
  );

  return (
    <NotificationContext.Provider
      value={{
        showNotification,
        setShowNotification,
        notificationConfiguration,
        setNotificationConfiguration,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
