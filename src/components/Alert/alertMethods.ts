import type { AlertDetail, AlertMethods, AlertType } from "./type";

let id = 0;

function dispatch(type: AlertType): AlertMethods[AlertType] {
  return (message, options) => {
    id += 1;
    window.dispatchEvent(
      new CustomEvent<AlertDetail>("toastAlert", {
        detail: { id, message, options, type },
      })
    );
  };
}

const alert: AlertMethods = {
  info: dispatch("info"),
  success: dispatch("success"),
  warning: dispatch("warning"),
  error: dispatch("error"),
};

export default alert;
