import type { CSSProperties } from 'react';

export type AlertType = 'info' | 'warning' | 'error' | 'success';
export type AlertDetail = { id: number; message: string; type: AlertType; options?: AlertOptions; className?: string };
export interface AlertOptions {
  floatingTime?: number;
  toastStyle?: CSSProperties;
}
export type AlertMethods = { [method in AlertType]: (message: string, options?: AlertOptions) => void };
export interface AlertContainerProps extends Pick<AlertOptions, 'floatingTime' | 'toastStyle'> {
  containerStyle?: CSSProperties;
}
export interface AlertProps extends AlertDetail {
  remove: (id: number) => void;
}
