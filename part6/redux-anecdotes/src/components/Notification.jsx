import { useSelector } from "react-redux";

const Notification = () => {
  const notification = useSelector((state) => state.notification);

  return (
    notification !== "" && (
      <div className="m-1 border border-gray-600 inline-flex px-1 rounded-md text-indigo-700 bg-indigo-200 font-bold">
        {notification}
      </div>
    )
  );
};

export default Notification;
