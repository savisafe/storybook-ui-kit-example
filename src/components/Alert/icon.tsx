import React from "react";
import Icon from "../Icon/Icon";
import CriticalAlertIcon from "./icons/critilcal.svg";
import SuccessAlertIcon from "./icons/success-alert-icon.svg";
import WarningAlertIcon from "./icons/warning-alert-icon.svg";
import InfoAlertIcon from "./icons/info-alert-icon.svg";

interface IconLeftProps {
  type: "error" | "success" | "warning" | "info";
}

const IconLeft: React.FC<IconLeftProps> = ({ type }) => {
  const icon = {
    error: <CriticalAlertIcon />,
    success: <SuccessAlertIcon />,
    warning: <WarningAlertIcon />,
    info: <InfoAlertIcon />,
  };

  return (
    <Icon width={22} height={22}>
      {icon[type]}
    </Icon>
  );
};
export default IconLeft;
