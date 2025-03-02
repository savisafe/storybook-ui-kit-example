import { ReactNode } from 'react';
import Icon from '../Icon/Icon';
import style from './breadCrumbs.module.scss';
import Cancel from './icons/tuiIconChevronLeftLarge.svg';

interface Props {
  title: string;
  subTitle?: string | ReactNode;
  step: number;
}
const BreadCrumbs = ({ title, subTitle, step }: Props) => {
  return (
    <div className={style.breadCrumbs}>
      <div className={style.step}>{`Этап ${step}`}</div>
      <div className={style.title}>
        <Icon width={24} height={24}>
          <Cancel />
        </Icon>
        {title}
      </div>
      {subTitle && <p className={style.subTitle}>{subTitle}</p>}
    </div>
  );
};

export default BreadCrumbs;
