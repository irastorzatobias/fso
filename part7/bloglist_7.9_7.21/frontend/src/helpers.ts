import { toast } from "react-toastify";

const toastError = (errorMsg: string) => {
  return toast.error(errorMsg, {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 2000,
    type: toast.TYPE.ERROR,
  });
};

export { toastError }