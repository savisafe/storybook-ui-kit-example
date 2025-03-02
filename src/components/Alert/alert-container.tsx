import { memo, useCallback, useEffect, useState } from 'react';
import type { AlertContainerProps, AlertDetail } from './type';
import './alert-container.scss';
import Alert from './alert.tsx';

const AlertContainer = memo(({ ...defaultOptions }: AlertContainerProps) => {
  const [alerts, setAlerts] = useState<AlertDetail[]>([]);

  const removeToast = useCallback((id: number) => {
    setAlerts((prevAlerts) => prevAlerts.filter((alert) => alert.id !== id));
  }, []);

  const handler = useCallback(
    ({ detail }: CustomEvent<AlertDetail>) => {
      if (detail.options) {
        setAlerts((prevState) => [...prevState, { ...detail, options: { ...defaultOptions, ...detail.options } }]);
        return;
      }

      setAlerts((prevState) => [...prevState, { ...detail, options: defaultOptions }]);
    },
    [defaultOptions]
  );

  useEffect(() => {
    window.addEventListener('toastAlert', handler as EventListener);

    return () => {
      window.removeEventListener('toastAlert', handler as EventListener);
    };
  }, [handler]);

  return (
    <div className="alertContainer">
      {alerts.map((alert) => (
        <Alert id={alert.id} type={alert.type} key={alert.id} remove={removeToast} message={alert.message} />
      ))}
    </div>
  );
});

export default AlertContainer;
