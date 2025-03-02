import { memo, useEffect, useState } from "react";
import "./alert.scss";
import IconLeft from "./icon";
import { AlertProps } from "./type";
import cn from "classnames";

const Alert = memo(
  ({ remove, id, message, type, options, className = "" }: AlertProps) => {
    const [isRemove, setIsRemove] = useState(false);

    useEffect(() => {
      const timer = setTimeout(
        () => setIsRemove(true),
        options?.floatingTime || 2000,
      );

      return () => {
        clearTimeout(timer);
      };
    }, [options?.floatingTime]);

    const showHide = isRemove ? "hide" : "show";

    return (
      <div
        data-testid="alert"
        className={cn("alert", `${showHide}`, `${type}`, `${className}`)}
        onAnimationEnd={isRemove ? () => remove(id) : undefined}
        onClick={() => setIsRemove(true)}
      >
        <IconLeft type={type} />
        {message}
      </div>
    );
  },
);

export default Alert;
