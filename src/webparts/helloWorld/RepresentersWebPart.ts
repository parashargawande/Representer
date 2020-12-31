import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';

import { PropertyFieldDateTimePicker, DateConvention, TimeConvention, IDateTimeFieldValue } from '@pnp/spfx-property-controls/lib/PropertyFieldDateTimePicker';

import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import * as strings from 'RepresentersWebPartStrings';
import { IRepresenter } from './components/Representer/IRepresenter';
import Representer from './components/Representer/Representer';
import {sp} from '@pnp/sp'

export interface IRepresentersWebPartProps {
  description: string;
  startDate: IDateTimeFieldValue;
  endDate: IDateTimeFieldValue;
}

export default class RepresentersWebPart extends BaseClientSideWebPart<IRepresentersWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IRepresenter> = React.createElement(
      Representer,
      {
        description: this.properties.description,
        context: this.context
      }
    );

    ReactDom.render(element, this.domElement)
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected onInit(): Promise<void> {
    return super.onInit().then(_ => {
      sp.setup({
        spfxContext: this.context
      });
    });
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            },
            {
              groupName: "Event Information",
              groupFields: [
                PropertyFieldDateTimePicker('startDate', {
                  label: 'Select Start Time',
                  initialDate: this.properties.startDate,
                  dateConvention: DateConvention.Date,
                  timeConvention: TimeConvention.Hours12,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  properties: this.properties,
                  onGetErrorMessage: null,
                  deferredValidationTime: 0,
                  key: 'startDate',
                  showLabels: false
                }),
                PropertyFieldDateTimePicker('endDate', {
                  label: 'Select End Date',
                  initialDate: this.properties.endDate,
                  dateConvention: DateConvention.Date,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  properties: this.properties,
                  onGetErrorMessage: null,
                  deferredValidationTime: 0,
                  key: 'endDate',
                  showLabels: false
                }),
                PropertyPaneTextField('additionalInformation', {
                  label: 'Additional Information'
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
