import React from "react";
import "tippy.js/dist/tippy.css";
import "tippy.js/dist/svg-arrow.css";
import Tippy, { TippyProps } from "@tippyjs/react";
import style from "./tooltip.module.scss";

type TooltipProps = {
  customArrow?: boolean;
} & TippyProps;
const Tooltip: React.FC<TooltipProps> = ({
  customArrow = true,
  offset = [0, 12],
  placement = "auto",
  children,
  ...rest
}) => {
  const arrow = `
      <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 10L4.37114e-07 10L7.24 2.95489e-07L14 10Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M8.05458e-05 10L14.0001 10L7.23993 0L8.05458e-05 10ZM1.50008 10L12.5469 10L7.21184 1.74402L1.50008 10Z" fill="#DAE0EB"/><rect y="10" width="14" height="1" fill="white"/></svg>
  `;
  return (
    <Tippy
      arrow={customArrow ? arrow : true}
      placement={placement}
      className={style.tooltip}
      offset={offset}
      {...rest}
    >
      {children}
    </Tippy>
  );
};

export default Tooltip;
