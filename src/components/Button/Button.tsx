import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import './button.scss';
import cn from 'classnames';

export interface ButtonInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: 'lg' | 'md' | 'sm' | 'xs';
  variant: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'quinary' | 'senary' | 'septenary';
  className?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
}

const Button: FC<ButtonInterface> = ({
  children,
  size = 'lg',
  variant = 'primary',
  type = 'button',
  className = '',
  iconLeft,
  iconRight,
  ...rest
}) => {
  return (
    <button
      {...rest}
      data-testid="storybook-button"
      type={type}
      className={cn('button', `${size}`, `${variant}`, iconLeft && 'iconLeft', iconRight && 'iconRight', `${className}`)}
    >
      {iconLeft}
      {children || 'Button'}
      {iconRight}
    </button>
  );
};
export default Button;
