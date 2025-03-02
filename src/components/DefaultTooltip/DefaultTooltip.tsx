import { ReactNode, useState } from "react";
import style from "./tooltip.module.scss";

interface Props {
  children: ReactNode;
  tooltipText: string;
}

const DefaultTooltip = ({ children, tooltipText }: Props) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div
      className={style.tooltipContainer}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {showTooltip && <div className={style.tooltip}>{tooltipText}</div>}
    </div>
  );
};
export default DefaultTooltip;
