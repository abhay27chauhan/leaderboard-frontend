import toast from "react-hot-toast";
import errorMessage from "./ErrorMessage";

export function logger(functionName, error) {
  console.trace(
    "Error at: ",
    functionName,
    "\n",
    "ErrorResponse: ",
    error?.response?.data ?? error,
    "\n\n",
  );
}

export function errorToast(error, message) {
  toast.error(
    message ?? error?.response?.data?.message ?? errorMessage.INTERNAL_SERVER,
  );
}

export function errorToastLogger(functionName, error, message) {
  errorToast(error, message);
  logger(functionName, error);
}
