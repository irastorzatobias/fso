const Notification = ({ message, notificationType }) => {
  if (message === null) {
    return null;
  }

  if (notificationType === "success") {
    return <p className="success">{message}</p>;
  }

  return <div className="error">{message}</div>;
};

export default Notification;
