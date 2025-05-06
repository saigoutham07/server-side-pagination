import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class FilterDFMService {

  constructor(public sharedService: SharedService) { }

  public get dataTableForm() {
    return this.getCopy(this.defaultdataTableForm);
  }
  public defaultdataTableForm = [
    {
      placeholder: 'Select',
      type: 'select',
      name: 'Service Group',
      key: 'serviceGroup',
      disabled: true,
      required: true,
      bindValue: 'value',
      bindLabel: 'label',
      caption: 'Single-Select',
      columns: 12,
      options: [
        { value: 'AMC', label: 'AMC' },
        { value: 'placement', label: 'Placement'},
      ]
    },
    {
      placeholder: '',
      type: 'multiselect',
      name: 'Service Sub Group',
      key: 'serviceSubGroup',
      disabled: true,
      required: true,
      bindValue: 'value',
      bindLabel: 'label',
      caption: 'Multi-Select',
      columns: 12,
      options: [
        { value: '220', label: 'AMC > 1Yr' },
        { value: '221', label: 'Up Country' }
      ]
    },
    {
      placeholder: '',
      type: 'multiselectwithall',
      name: 'Service Description',
      key: 'serviceDesc',
      disabled: true,
      required: true,
      bindValue: 'value',
      bindLabel: 'label',
      caption: 'Multi-Select with All',
      addAll: true,
      columns: 12,
      options: [
        { value: 'all', label: 'All' },
        { value: '102', label: 'AMC CO2 Coolers15- 20 Case > 1 Yr' },
        { value: '103', label: 'AMC CO2 Coolers15- 20 Case > 2 Yr' }
      ]
    },
    {
      placeholder: '',
      type: 'text',
      name: 'SAP Group Code',
      key: 'SAPGroupCode',
      disabled: true,
      required: true,
      caption: 'Text Field',
      columns: 12
    },
    {
      placeholder: '',
      type: 'textNumber',
      name: 'SAP Code',
      key: 'callNo',
      required: true,
      disabled: true,
      caption: 'Number Field with Max Validation',
      columns: 12,
      maxCharlength: 10
    },
    {
      placeholder: 'From Date',
      type: 'date',
      name: 'From Date',
      key: 'fromDate',
      required: true,
      selectMode: 'single',
      pickerType: 'calendar',
      disabled: true,
      columns: '12',
      caption: 'Date not to be greater than Today',
      errorMsg: 'Please Select From Date',
      validations: ['todayValid']
    },
    {
      placeholder: 'To Date',
      type: 'date',
      name: 'To Date',
      key: 'toDate',
      required: true,
      selectMode: 'single',
      pickerType: 'calendar',
      disabled: true,
      columns: '12',
      caption: 'Date to be less than From date',
      errorMsg: 'Please Select To Date',
      validations: ['todayValid', 'greaterValid'],
      fromKey: 'fromDate'
    },
    {
      placeholder: 'Select',
      type: 'checkbox-list',
      name: 'Active',
      key: 'active',
      disabled: true,
      required: true,
      bindValue: 'value',
      bindLabel: 'label',
      columns: 12,
      caption: 'Check-box',
      options: [
        { value: 'Y', label: 'Yes' },
        { value: 'N', label: 'No' }
      ],
      config: {
        maxItems: 2,
        itemHeight: 35,
        noItemsFound: 'No Items Found',
        hideFilter: true,
        multiSelect: true,
        uniqueKey: 'value',
        emitterType: 'string',
        emitOutPut: true
      }
    }
  ];


  getCopy(objVal) {
    try {
      if (objVal) {
        return JSON.parse(JSON.stringify(objVal));
      } else {
        return objVal;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
