import React, { forwardRef, ReactNode } from 'react';
import cn from 'classnames';
import style from './icon.module.scss';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  width: number | string;
  height: number;
  hoverType?: string;
  className?: string;
  children: ReactNode;
}

const Icon = forwardRef<HTMLDivElement, Props>(({ children, className, width, height, hoverType, ...rest }, ref) => {
  const styleSvg = {
    width: width,
    height: height,
  };
  return (
    <div {...rest} className={cn(style.main, className, style[hoverType || style.main])} style={styleSvg} ref={ref}>
      {children}
    </div>
  );
});

export default Icon;
