import { toast, ToastContent } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function message(message: string, status: "success" | "error"): ToastContent {
  if (status === "success") {
    return toast.success(message, { theme: "colored" });
  } else {
    return toast.error(message, { theme: "colored" });
  }
}
export default message;
