import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  type IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneSlider
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IReadonlyTheme } from '@microsoft/sp-component-base';

import * as strings from 'ExecutivedashboardWebPartStrings';
import Executivedashboard from './components/Executivedashboard';
import { IExecutivedashboardProps } from './components/IExecutivedashboardProps';
import { IKpiDashboardWebPartProps } from './IKpiDashboardWebPartProps';

export default class ExecutivedashboardWebPart extends BaseClientSideWebPart<IKpiDashboardWebPartProps> {

  private _isDarkTheme: boolean = false;
  private _environmentMessage: string = '';

  // ✅ KEY: disableReactivePropertyChanges = false means live preview
  protected get disableReactivePropertyChanges(): boolean {
    return false;
  }

  public render(): void {
    const element: React.ReactElement<IExecutivedashboardProps> = React.createElement(
      Executivedashboard,
      {
        kpiLabel: this.properties.kpiLabel || 'KPI',
        kpiTarget: Number(this.properties.kpiTarget) || 100,
        kpiActual: Number(this.properties.kpiActual) || 0,
        kpiUnit: this.properties.kpiUnit || '',
        isDarkTheme: this._isDarkTheme,
        environmentMessage: this._environmentMessage,
        hasTeamsContext: !!this.context.sdks.microsoftTeams,
        userDisplayName: this.context.pageContext.user.displayName
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onInit(): Promise<void> {
    return this._getEnvironmentMessage().then(message => {
      this._environmentMessage = message;
    });
  }

  private _getEnvironmentMessage(): Promise<string> {
    if (!!this.context.sdks.microsoftTeams) {
      return this.context.sdks.microsoftTeams.teamsJs.app.getContext()
        .then(context => {
          let environmentMessage: string = '';
          switch (context.app.host.name) {
            case 'Office':
              environmentMessage = this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentOffice : strings.AppOfficeEnvironment;
              break;
            case 'Outlook':
              environmentMessage = this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentOutlook : strings.AppOutlookEnvironment;
              break;
            case 'Teams':
            case 'TeamsModern':
              environmentMessage = this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentTeams : strings.AppTeamsTabEnvironment;
              break;
            default:
              environmentMessage = strings.UnknownEnvironment;
          }
          return environmentMessage;
        });
    }
    return Promise.resolve(this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentSharePoint : strings.AppSharePointEnvironment);
  }

  protected onThemeChanged(currentTheme: IReadonlyTheme | undefined): void {
    if (!currentTheme) return;
    this._isDarkTheme = !!currentTheme.isInverted;
    const { semanticColors } = currentTheme;
    if (semanticColors) {
      this.domElement.style.setProperty('--bodyText', semanticColors.bodyText || null);
      this.domElement.style.setProperty('--link', semanticColors.link || null);
      this.domElement.style.setProperty('--linkHovered', semanticColors.linkHovered || null);
    }
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: 'Configure your KPI card'
          },
          groups: [
            {
              groupName: 'KPI Settings',
              groupFields: [
                PropertyPaneTextField('kpiLabel', {
                  label: 'KPI Label',
                  placeholder: 'e.g. Revenue, Customer Satisfaction'
                }),
                PropertyPaneTextField('kpiUnit', {
                  label: 'Unit',
                  placeholder: 'e.g. £M, %, Pts'
                }),
                PropertyPaneSlider('kpiTarget', {
                  label: 'Target Value',
                  min: 0,
                  max: 10000,
                  step: 1,
                  showValue: true
                }),
                PropertyPaneSlider('kpiActual', {
                  label: 'Actual Value',
                  min: 0,
                  max: 10000,
                  step: 1,
                  showValue: true
                })
              ]
            }
          ]
        }
      ]
    };
  }
}