import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerDetailsFormatService {

  constructor() { }
  public returnData = [];
  customerDetailsFormat(data, sectionsToInclude, settings?) {
    try {
      this.returnData = [];
      if (!Array.isArray(sectionsToInclude)) { return; }
      if (sectionsToInclude.includes('customerDetails')) {
        this.returnData.push(
          {
            sectionName: 'Customer Details',
            showBody: true,
            labels: [
              {
                value: data.customerdata.customerName || '',
                cols: '6',
                label: 'Customer Name'
              },
              {
                value: data.customerdata.gccId || '',
                cols: '6',
                label: 'Customer ID'
              },
              {
                value: data.customerdata.customerCategoryDesc || '',
                cols: '6',
                label: 'Customer Category'
              },
              {
                value: data.customerdata.customerSubGroup || '',
                cols: '6',
                label: 'Customer Sub Group'
              },
              {
                value: data.customerdata.address || '',
                cols: '6',
                label: 'Address',
                type: 'address'
              },
              {
                value: data.customerdata.contactPerson || '',
                cols: '6',
                label: 'Contact Person'
              },
              {
                value: data.customerdata.town || '',
                cols: '6',
                label: 'Town'
              },
              {
                value: data.customerdata.districtDesc || '',
                cols: '6',
                label: 'District'
              },
              {
                value: data.customerdata.mobileNo || '',
                cols: '6',
                label: 'Mobile Number'
              },
              {
                value: data.customerdata.telephone || '',
                cols: '6',
                label: 'Landline Number'
              },
              {
                value: data.customerdata.tradeChannel || '',
                cols: '6',
                label: 'Trade Channel'
              },
              {
                value: data.customerdata.vpoClass || '',
                cols: '6',
                label: 'VPO Class'
              },
              {
                value: data.customerdata.marketArea || '',
                cols: '6',
                label: 'Distributor / Market Area'
              },
              {
                value: data.customerdata.businessDays || '',
                cols: '6',
                label: 'No. of days in Business'
              },
              {
                value: data.customerdata.stlName || '',
                cols: '6',
                label: 'STL Name'
              },
              {
                value: data.customerdata.asmName || '',
                cols: '6',
                label: 'ASM Name'
              },
              {
                value: data.customerdata.distributionChannel || '',
                cols: '6',
                label: 'Distribution Channel'
              }
            ]
          });
      }
      if (sectionsToInclude.includes('existingEquipment')) {
        this.returnData.push(
          {
            sectionName: 'Existing Equipment',
            tableData: {
              data: data.equipmentdata || [],
              tableSettings: { rowClick: settings ? settings.existingRowClick ? settings.existingRowClick : false : false }
            }
          });
      }
      if (sectionsToInclude.includes('pendingRequest')) {
        this.returnData.push(
          {
            sectionName: 'Pending Request for Customer',
            tableData: {
              data: data.pendingdata || []
            }
          });
      }
      if (sectionsToInclude.includes('stockAvailability')) {
        this.returnData.push(
          {
            sectionName: 'Plant Level Stock Availability',
            tableData: {
              data: data.stockAvailability || []
            }
          });
      }
      return this.returnData;
    } catch (error) {
      console.log(error);
    }
  }
}
