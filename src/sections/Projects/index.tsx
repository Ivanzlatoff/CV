import React from 'react';

import { useLocales } from 'localization';

import Section from 'components/Section';
import Transition from 'components/Transition';

import { projects } from 'data/texts';

import s from './styles.module.scss';
import { projectApps } from './projects';

export default () => {
  const { t } = useLocales('sections.projects');
  return (
    <Section icon="react" title={t('title')} className={s.root}>
      <Transition paragraph text={projects} />
      <ul>
        {projectApps.map((app) => (
          <li
          key={app.name}
          style={{
            marginLeft: '40px',
            fontStyle: 'italic',
            color: 'skyblue'
            }}
          >
            <a href={app.website} target="_blank" style={{color: 'skyblue'}}>{app.name}</a>
          </li>
        ))}
      </ul>
    </Section>
  );
};
