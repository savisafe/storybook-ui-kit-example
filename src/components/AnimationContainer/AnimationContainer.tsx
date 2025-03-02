import { Transition } from 'react-transition-group';
import cn from 'classnames';
import ReactDOM from 'react-dom';
import { FC, PropsWithChildren, useEffect } from 'react';
import style from './animation-container.module.scss';

interface Props extends PropsWithChildren {
  delay?: number;
  isOpen: boolean;
  className: string[];
  onClose: () => void;
  shadowOff?: boolean;
  darkening?: boolean;
}

const Portal = ({ children }: PropsWithChildren) => ReactDOM.createPortal(children, document.body);

const AnimationContainerComponent: FC<Props> = ({ isOpen, delay = 300, children, className, onClose, shadowOff = false, darkening = true }) => {
  useEffect(() => {
    const body = document.body;
    isOpen ? body.classList.add(style.disableScroll) : body.classList.remove(style.disableScroll);

    return () => {
      body.classList.remove(style.disableScroll);
    };
  }, [isOpen]);

  return (
    <Portal>
      <div className={cn(style.wrapper, !isOpen ? style.wrapperClose : '')}>
        {!shadowOff && (
          <Transition in={isOpen} timeout={delay!} unmountOnExit={true}>
            {(state) => (
              <div
                style={{ background: darkening ? 'rgb(0 0 0 / 25%)' : 'transparent' }}
                className={cn(style.shadowOff, style.shadowOn, `${state}`)}
                onClick={onClose}
              />
            )}
          </Transition>
        )}

        <Transition in={isOpen} timeout={delay!} unmountOnExit={true}>
          {(state) => <div className={cn(...className, `${state}`)}>{children}</div>}
        </Transition>
      </div>
    </Portal>
  );
};
export default AnimationContainerComponent;
