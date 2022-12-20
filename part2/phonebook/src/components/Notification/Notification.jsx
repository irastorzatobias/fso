const Notification = ({ message, notificationType }) => {
  if (notificationType === "success") {
    return <p className="notification success">{message}</p>;
  }

  if (notificationType === "error") {
    return <div className="notification error">{message}</div>;
  }

  return null;
};

export default Notification;
