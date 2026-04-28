export interface IExecutivedashboardProps {
  kpiLabel: string;
  kpiTarget: number;
  kpiActual: number;
  kpiUnit: string;
  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;
}