import React from 'react';
import cn from 'classnames';

import { useLocales } from 'localization';

import Transition from 'components/Transition';

import s from './styles.module.scss';

type Props = {
  className?: string;
};

export default ({ className }: Props): JSX.Element => {
  const { l } = useLocales();
  const langName = l({
    en: 'Ivan Zlatov',
    ru: 'Иван Златов',
    uk: 'Іван Златов'
  });
  return (
    <Transition node="h1" text={langName} className={cn(s.root, className)} />
  );
};
