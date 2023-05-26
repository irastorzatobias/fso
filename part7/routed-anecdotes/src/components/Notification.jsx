const Notification = ({ text }) => {
  return (
    <div className="p-1 border rounded-md text-amber-700 bg-amber-200">
      {text}
    </div>
  );
};

export default Notification;
