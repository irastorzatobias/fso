import { toast } from 'react-toastify';

export const toastError = (errorMsg) => {
    return toast.error(errorMsg, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
        type: toast.TYPE.ERROR,
    });
};

export const toastSuccess = (successMsg) => {
    return toast.success(successMsg, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
        type: toast.TYPE.SUCCESS,
    });
};
