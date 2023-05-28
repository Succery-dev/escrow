interface notificationConfigurationInterface {
  modalColor: string;
  title: string;
  message: string;
  icon: HTMLImageElement;
}

interface NotificationContextInterface {
  showNotification: boolean;
  setShowNotification: React.Dispatch<React.SetStateAction<boolean>>;
  notificationConfiguration: notificationConfigurationInterface;
  setNotificationConfiguration: React.Dispatch<
    React.SetStateAction<notificationConfigurationInterface>
  >;
}

export type {
  NotificationContextInterface,
  notificationConfigurationInterface,
};
