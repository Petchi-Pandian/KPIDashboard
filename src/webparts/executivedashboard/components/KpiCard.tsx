import * as React from 'react';
import styles from './KpiCard.module.scss';

export interface IKpiCardProps {
  label: string;
  target: number;
  actual: number;
  unit: string;
}

const KpiCard: React.FC<IKpiCardProps> = ({ label, target, actual, unit }) => {
  const pct = target > 0 ? (actual / target) * 100 : 0;

  let ragClass: string;
  let ragText: string;

  if (pct >= 100) {
    ragClass = styles.green;
    ragText = '● On Target';
  } else if (pct >= 80) {
    ragClass = styles.amber;
    ragText = '▲ At Risk';
  } else {
    ragClass = styles.red;
    ragText = '✕ Off Track';
  }

  let fillClass: string;
  if (pct >= 100) {
    fillClass = styles.fillGreen;
  } else if (pct >= 80) {
    fillClass = styles.fillAmber;
  } else {
    fillClass = styles.fillRed;
  }

  const barWidth = Math.min(pct, 100).toFixed(1);

  return (
    <div className={styles.kpiCard}>
      <div className={styles.label}>{label}</div>

      <span className={`${styles.statusBadge} ${ragClass}`}>
        {ragText}
      </span>

      <div className={styles.values}>
        <div className={styles.valueBlock}>
          <div className={styles.number}>{actual}<span style={{ fontSize: 16 }}> {unit}</span></div>
          <div className={styles.sublabel}>Actual</div>
        </div>
        <div className={styles.valueBlock}>
          <div className={styles.number}>{target}<span style={{ fontSize: 16 }}> {unit}</span></div>
          <div className={styles.sublabel}>Target</div>
        </div>
      </div>

      <div className={styles.progressBarTrack}>
        <div
          className={`${styles.progressBarFill} ${fillClass}`}
          style={{ width: `${barWidth}%` }}
        />
      </div>
      <div className={styles.pctLabel}>{pct.toFixed(1)}% of target</div>
    </div>
  );
};

export default KpiCard;