import { Fragment, useContext } from "react";
import MainNavigation from "./main-navigation";
import NotificationContext from "../../store/notification-context";
import Notification from "../ui/notifications/notification";

export default function Layout({ children }) {
  const notificatioCtx = useContext(NotificationContext);
  const activeNotification = notificatioCtx.notification;

  return <Fragment>
    <MainNavigation />
    <main>
      { children }
    </main>
    {
      activeNotification && 
        <Notification {...activeNotification} />
    }
  </Fragment>
}