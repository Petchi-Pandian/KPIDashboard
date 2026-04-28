import * as React from 'react';
import styles from './Executivedashboard.module.scss';
import type { IExecutivedashboardProps } from './IExecutivedashboardProps';
import KpiCard from './KpiCard';

export default class Executivedashboard extends React.Component<IExecutivedashboardProps> {
  public render(): React.ReactElement<IExecutivedashboardProps> {
    const {
      kpiLabel,
      kpiTarget,
      kpiActual,
      kpiUnit,
      hasTeamsContext
    } = this.props;

    return (
      <section className={`${styles.executivedashboard} ${hasTeamsContext ? styles.teams : ''}`}>
        <KpiCard
          label={kpiLabel}
          target={kpiTarget}
          actual={kpiActual}
          unit={kpiUnit}
        />
      </section>
    );
  }
}