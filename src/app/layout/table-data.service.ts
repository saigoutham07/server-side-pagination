import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableDataService {

  constructor() { }
  data = {
    headerContent: [
      {
        key: 'serviceGroupDesc',
        label: 'Service Group Desc.'
      },
      {
        key: 'serviceSubGroupDesc',
        label: 'Service Sub Group Desc.'
      },
      {
        key: 'serviceDesc',
        label: 'Service Description'
      },
      {
        key: 'sapGroupCode',
        label: 'SAP Group Code'
      },
      {
        key: 'sapCode',
        label: 'SAP Code'
      },
      {
        key: 'remarks',
        label: 'Upload Status'
      },
      {
        key: 'status',
        label: 'Active'
      }
    ],
    bodyContent: [
      {
        serviceGroupDesc: 'AMC ',
        serviceSubGroupDesc: 'AMC > 1Yr ',
        serviceDesc: 'AMC Chest Cooler > 10 Case',
        sapGroupCode: '47000560A ',
        sapCode: '3000053',
        remarks: 'Pending',
        status: 'Yes'
      },
      {
        serviceGroupDesc: 'AMC',
        serviceSubGroupDesc: 'AMC > 1Yr',
        serviceDesc: 'AMC Chest Cooler > 10 Case',
        sapGroupCode: '48000000A',
        sapCode: '3000055',
        remarks: 'Pending',
        status: 'No'
      },
      {
        serviceGroupDesc: 'Placement',
        serviceSubGroupDesc: 'Up Country',
        serviceDesc: 'AMC CO2 Coolers15- 20',
        sapGroupCode: '48000034B',
        sapCode: '3000055',
        remarks: 'Pending',
        status: 'Yes'
      },

      {
        serviceGroupDesc: 'Placement',
        serviceSubGroupDesc: 'Up Country',
        serviceDesc: 'AMC CO2 Coolers15- 20',
        sapGroupCode: '48000034B',
        sapCode: '3000055',
        remarks: 'Closed',
        status: 'Yes'
      },
      {
        serviceGroupDesc: 'Placement',
        serviceSubGroupDesc: 'Up Country',
        serviceDesc: 'AMC CO2 Coolers15- 20',
        sapGroupCode: '48000034B',
        sapCode: '3000055',
        remarks: 'Pending',
        status: 'No'
      },
      {
        serviceGroupDesc: 'Placement',
        serviceSubGroupDesc: 'Up Country',
        serviceDesc: 'AMC CO2 Coolers15- 20',
        sapGroupCode: '48000034B',
        sapCode: '3000055',
        remarks: 'Closed',
        status: 'Yes'
      },
      {
        serviceGroupDesc: 'Placement',
        serviceSubGroupDesc: 'Up Country',
        serviceDesc: 'AMC CO2 Coolers15- 20',
        sapGroupCode: '48000034B',
        sapCode: '3000055',
        remarks: 'Closed',
        status: 'Yes'
      },

      {
        serviceGroupDesc: 'Placement',
        serviceSubGroupDesc: 'Up Country',
        serviceDesc: 'AMC CO2 Coolers15- 20',
        sapGroupCode: '48000034B',
        sapCode: '3000055',
        remarks: 'Pending',
        status: 'Yes'
      },
      {
        serviceGroupDesc: 'Placement',
        serviceSubGroupDesc: 'Up Country',
        serviceDesc: 'AMC CO2 Coolers15- 20',
        sapGroupCode: '48000034B',
        sapCode: '3000055',
        remarks: 'Closed',
        status: 'No'
      },
      {
        serviceGroupDesc: 'Placement',
        serviceSubGroupDesc: 'Up Country',
        serviceDesc: 'AMC CO2 Coolers15- 20',
        sapGroupCode: '48000034B',
        sapCode: '3000055',
        remarks: 'Pending',
        status: 'Yes'
      },
      {
        serviceGroupDesc: 'Placement',
        serviceSubGroupDesc: 'Up Country',
        serviceDesc: 'AMC CO2 Coolers15- 20',
        sapGroupCode: '48000034B',
        sapCode: '3000055',
        remarks: 'Closed',
        status: 'No'
      },
      {
        serviceGroupDesc: 'Placement',
        serviceSubGroupDesc: 'Up Country',
        serviceDesc: 'AMC CO2 Coolers15- 20',
        sapGroupCode: '48000034B',
        sapCode: '3000055',
        remarks: 'Pending',
        status: 'Yes'
      },
      {
        serviceGroupDesc: 'Placement',
        serviceSubGroupDesc: 'Up Country',
        serviceDesc: 'AMC CO2 Coolers15- 20',
        sapGroupCode: '48000034B',
        sapCode: '3000055',
        remarks: 'Pending',
        status: 'Yes'
      },
      {
        serviceGroupDesc: 'Placement',
        serviceSubGroupDesc: 'Up Country',
        serviceDesc: 'AMC CO2 Coolers15- 20',
        sapGroupCode: '48000034B',
        sapCode: '3000055',
        remarks: 'Pending',
        status: 'No'
      },
      {
        serviceGroupDesc: 'AMC',
        serviceSubGroupDesc: 'AMC > 1Yr',
        serviceDesc: 'AMC Chest Cooler > 10 Case',
        sapGroupCode: '48000000A',
        sapCode: '3000055',
        remarks: 'Pending',
        status: 'No'
      },
      {
        serviceGroupDesc: 'AMC',
        serviceSubGroupDesc: 'AMC > 1Yr',
        serviceDesc: 'AMC Chest Cooler > 10 Case',
        sapGroupCode: '47000560A',
        sapCode: '3000055',
        remarks: 'Closed',
        status: 'Yes'
      },
      {
        serviceGroupDesc: 'AMC',
        serviceSubGroupDesc: 'AMC > 1Yr',
        serviceDesc: 'AMC Chest Cooler > 10 Case',
        sapGroupCode: '47000560A',
        sapCode: '3000055',
        remarks: 'Closed',
        status: 'No'
      },
      {
        serviceGroupDesc: 'AMC',
        serviceSubGroupDesc: 'AMC > 1Yr',
        serviceDesc: 'AMC Chest Cooler > 10 Case',
        sapGroupCode: '48000000A',
        sapCode: '3000055',
        remarks: 'Closed',
        status: 'No'
      },
      {
        serviceGroupDesc: 'AMC',
        serviceSubGroupDesc: 'AMC > 1Yr',
        serviceDesc: 'AMC Chest Cooler > 10 Case',
        sapGroupCode: '47000560A',
        sapCode: '3000055',
        remarks: 'Closed',
        status: 'Yes'
      },
      {
        serviceGroupDesc: 'AMC',
        serviceSubGroupDesc: 'AMC > 1Yr',
        serviceDesc: 'AMC Chest Cooler > 10 Case',
        sapGroupCode: '47000560A',
        sapCode: '3000055',
        remarks: 'Pending',
        status: 'No'
      },
      {
        serviceGroupDesc: 'AMC',
        serviceSubGroupDesc: 'AMC > 1Yr',
        serviceDesc: 'AMC Chest Cooler > 10 Case',
        sapGroupCode: '48000000A',
        sapCode: '3000055',
        remarks: 'Pending',
        status: 'Yes'
      },
      {
        serviceGroupDesc: 'Placement',
        serviceSubGroupDesc: 'Up Country',
        serviceDesc: 'AMC Chest Cooler > 10 Case',
        sapGroupCode: '47000560A',
        sapCode: '3000055',
        remarks: 'Pending',
        status: 'No'
      },
      {
        serviceGroupDesc: 'Placement',
        serviceSubGroupDesc: 'Up Country',
        serviceDesc: 'AMC Chest Cooler > 10 Case',
        sapGroupCode: '48000000A',
        sapCode: '3000055',
        remarks: 'Pending',
        status: 'Yes'
      },
      {
        serviceGroupDesc: 'Placement',
        serviceSubGroupDesc: 'Up Country',
        serviceDesc: 'AMC CO2 Coolers15- 20',
        sapGroupCode: '47000560A',
        sapCode: '3000055',
        remarks: 'Pending',
        status: 'No'
      },
      {
        serviceGroupDesc: 'Placement',
        serviceSubGroupDesc: 'Up Country',
        serviceDesc: 'AMC CO2 Coolers15- 20',
        sapGroupCode: '47000560A',
        sapCode: '3000055',
        remarks: 'Pending',
        status: 'Yes'
      },
      {
        serviceGroupDesc: 'Placement',
        serviceSubGroupDesc: 'Up Country',
        serviceDesc: 'AMC CO2 Coolers15- 20',
        sapGroupCode: '47000560A',
        sapCode: '3000055',
        remarks: 'Pending',
        status: 'No'
      },
      {
        serviceGroupDesc: 'Placement',
        serviceSubGroupDesc: 'Up Country',
        serviceDesc: 'AMC CO2 Coolers15- 20',
        sapGroupCode: '47000560A',
        sapCode: '3000055',
        remarks: 'Pending',
        status: 'No'
      },
      {
        serviceGroupDesc: 'Placement',
        serviceSubGroupDesc: 'Up Country',
        serviceDesc: 'AMC CO2 Coolers15- 20',
        sapGroupCode: '47000560A',
        sapCode: '3000055',
        remarks: 'Pending',
        status: 'Yes'
      },
      {
        serviceGroupDesc: 'Placement',
        serviceSubGroupDesc: 'Up Country',
        serviceDesc: 'AMC CO2 Coolers15- 20',
        sapGroupCode: '48000000A',
        sapCode: '3000055',
        remarks: 'Closed',
        status: 'No'
      },
      {
        serviceGroupDesc: 'Placement',
        serviceSubGroupDesc: 'Up Country',
        serviceDesc: 'AMC CO2 Coolers15- 20',
        sapGroupCode: '47000560A',
        sapCode: '3000055',
        remarks: 'Closed',
        status: 'Yes'
      },

      {
        serviceGroupDesc: 'Placement',
        serviceSubGroupDesc: 'Up Country',
        serviceDesc: 'AMC CO2 Coolers15- 20',
        sapGroupCode: '47000560A',
        sapCode: '3000055',
        remarks: 'Closed',
        status: 'Yes'
      },
      {
        serviceGroupDesc: 'Placement',
        serviceSubGroupDesc: 'Up Country',
        serviceDesc: 'AMC CO2 Coolers15- 20',
        sapGroupCode: '47000560A',
        sapCode: '3000055',
        remarks: 'Closed',
        status: 'No'
      },
      {
        serviceGroupDesc: 'Placement',
        serviceSubGroupDesc: 'Up Country',
        serviceDesc: 'AMC CO2 Coolers15- 20',
        sapGroupCode: '47000560A',
        sapCode: '3000055',
        remarks: 'Pending',
        status: 'Yes'
      },
      {
        serviceGroupDesc: 'Placement',
        serviceSubGroupDesc: 'Up Country',
        serviceDesc: 'AMC CO2 Coolers15- 20',
        sapGroupCode: '47000560A',
        sapCode: '3000055',
        remarks: 'Closed',
        status: 'No'
      },
      {
        serviceGroupDesc: 'Placement',
        serviceSubGroupDesc: 'Up Country',
        serviceDesc: 'AMC CO2 Coolers15- 20',
        sapGroupCode: '47000560A',
        sapCode: '3000055',
        remarks: 'Closed',
        status: 'No'
      },

      {
        serviceGroupDesc: 'Placement',
        serviceSubGroupDesc: 'Up Country',
        serviceDesc: 'AMC CO2 Coolers15- 20',
        sapGroupCode: '47000560A',
        sapCode: '3000055',
        remarks: 'Closed',
        status: 'No'
      },
      {
        serviceGroupDesc: 'Placement',
        serviceSubGroupDesc: 'Up Country',
        serviceDesc: 'AMC CO2 Coolers15- 20',
        sapGroupCode: '47000560A',
        sapCode: '3000055',
        remarks: 'Closed',
        status: 'Yes'
      },
      {
        serviceGroupDesc: 'Placement',
        serviceSubGroupDesc: 'Up Country',
        serviceDesc: 'AMC CO2 Coolers15- 20',
        sapGroupCode: '48000000A',
        sapCode: '3000055',
        remarks: 'Pending',
        status: 'No'
      },
      {
        serviceGroupDesc: 'Placement',
        serviceSubGroupDesc: 'Up Country',
        serviceDesc: 'AMC CO2 Coolers15- 20',
        sapGroupCode: '47000560A',
        sapCode: '3000055',
        remarks: 'Pending',
        status: 'Yes'
      },
      {
        serviceGroupDesc: 'Placement',
        serviceSubGroupDesc: 'Up Country',
        serviceDesc: 'AMC CO2 Coolers15- 20',
        sapGroupCode: '47000560A',
        sapCode: '3000055',
        remarks: 'Pending',
        status: 'No'
      },
      {
        serviceGroupDesc: 'Placement',
        serviceSubGroupDesc: 'Up Country',
        serviceDesc: 'AMC CO2 Coolers15- 20',
        sapGroupCode: '47000560A',
        sapCode: '3000055',
        remarks: 'Closed',
        status: 'Yes'
      },

      {
        serviceGroupDesc: 'Placement',
        serviceSubGroupDesc: 'Up Country',
        serviceDesc: 'AMC CO2 Coolers15- 20',
        sapGroupCode: '47000560A',
        sapCode: '3000055',
        remarks: 'Closed',
        status: 'No'
      },
      {
        serviceGroupDesc: 'Placement',
        serviceSubGroupDesc: 'Up Country',
        serviceDesc: 'AMC CO2 Coolers15- 20',
        sapGroupCode: '47000560A',
        sapCode: '3000055',
        remarks: 'Closed',
        status: 'Yes'
      },

      {
        serviceGroupDesc: 'Placement',
        serviceSubGroupDesc: 'Up Country',
        serviceDesc: 'AMC CO2 Coolers15- 20',
        sapGroupCode: '47000560A',
        sapCode: '3000055',
        remarks: 'Pending',
        status: 'No'
      },
      {
        serviceGroupDesc: 'Placement',
        serviceSubGroupDesc: 'Up Country',
        serviceDesc: 'AMC CO2 Coolers15- 20',
        sapGroupCode: '47000560A',
        sapCode: '3000055',
        remarks: 'Closed',
        status: 'Yes'
      },
      {
        serviceGroupDesc: 'Placement',
        serviceSubGroupDesc: 'Up Country',
        serviceDesc: 'AMC CO2 Coolers15- 20',
        sapGroupCode: '48000034B',
        sapCode: '3000055',
        remarks: 'Pending',
        status: 'No'
      },

      {
        serviceGroupDesc: 'Placement',
        serviceSubGroupDesc: 'Up Country',
        serviceDesc: 'AMC CO2 Coolers15- 20',
        sapGroupCode: '48000034B',
        sapCode: '3000055',
        remarks: 'Closed',
        status: 'Yes'
      },
      {
        serviceGroupDesc: 'Placement',
        serviceSubGroupDesc: 'Up Country',
        serviceDesc: 'AMC CO2 Coolers15- 20',
        sapGroupCode: '48000034B',
        sapCode: '3000055',
        remarks: 'Closed',
        status: 'Yes'
      },
      {
        serviceGroupDesc: 'Placement',
        serviceSubGroupDesc: 'Up Country',
        serviceDesc: 'AMC CO2 Coolers15- 20',
        sapGroupCode: '48000034B',
        sapCode: '3000055',
        remarks: 'Closed',
        status: 'No'
      },
      {
        serviceGroupDesc: 'Placement',
        serviceSubGroupDesc: 'Up Country',
        serviceDesc: 'AMC CO2 Coolers15- 20',
        sapGroupCode: '48000034B',
        sapCode: '3000055',
        remarks: 'Pending',
        status: 'Yes'
      },

      {
        serviceGroupDesc: 'Placement',
        serviceSubGroupDesc: 'Up Country',
        serviceDesc: 'AMC CO2 Coolers15- 20',
        sapGroupCode: '48000034B',
        sapCode: '3000055',
        remarks: 'Closed',
        status: 'No'
      },
      {
        serviceGroupDesc: 'Placement',
        serviceSubGroupDesc: 'Up Country',
        serviceDesc: 'AMC CO2 Coolers15- 20',
        sapGroupCode: '48000034B',
        sapCode: '3000055',
        remarks: 'Pending',
        status: 'Yes'
      },
      {
        serviceGroupDesc: 'Placement',
        serviceSubGroupDesc: 'Up Country',
        serviceDesc: 'AMC CO2 Coolers15- 20',
        sapGroupCode: '48000034B',
        sapCode: '3000055',
        remarks: 'Closed',
        status: 'No'
      },
      {
        serviceGroupDesc: 'Placement',
        serviceSubGroupDesc: 'Up Country',
        serviceDesc: 'AMC CO2 Coolers15- 20',
        sapGroupCode: '48000034B',
        sapCode: '3000055',
        remarks: 'Closed',
        status: 'Yes'
      },
      {
        serviceGroupDesc: 'Placement',
        serviceSubGroupDesc: 'Up Country',
        serviceDesc: 'AMC CO2 Coolers15- 20',
        sapGroupCode: '48000034B',
        sapCode: '3000055',
        remarks: 'Closed',
        status: 'No'
      },
      {
        serviceGroupDesc: 'Placement',
        serviceSubGroupDesc: 'Up Country',
        serviceDesc: 'AMC CO2 Coolers15- 20',
        sapGroupCode: '48000034B',
        sapCode: '3000055',
        remarks: 'Closed',
        status: 'Yes'
      },
      {
        serviceGroupDesc: 'Placement',
        serviceSubGroupDesc: 'Up Country',
        serviceDesc: 'AMC CO2 Coolers15- 20',
        sapGroupCode: '48000034B',
        sapCode: '3000055',
        remarks: 'Closed',
        status: 'Yes'
      },
      {
        serviceGroupDesc: 'Placement',
        serviceSubGroupDesc: 'Up Country',
        serviceDesc: 'AMC CO2 Coolers15- 20',
        sapGroupCode: '48000034B',
        sapCode: '3000055',
        remarks: 'Closed',
        status: 'No'
      },
      {
        serviceGroupDesc: 'Placement',
        serviceSubGroupDesc: 'Up Country',
        serviceDesc: 'AMC CO2 Coolers15- 20',
        sapGroupCode: '48000034B',
        sapCode: '3000055',
        remarks: 'Closed',
        status: 'Yes'
      },
      {
        serviceGroupDesc: 'Placement',
        serviceSubGroupDesc: 'Up Country',
        serviceDesc: 'AMC CO2 Coolers15- 20',
        sapGroupCode: '48000034B',
        sapCode: '3000055',
        remarks: 'Closed',
        status: 'No'
      },
      {
        serviceGroupDesc: 'Placement',
        serviceSubGroupDesc: 'Up Country',
        serviceDesc: 'AMC CO2 Coolers15- 20',
        sapGroupCode: '48000034B',
        sapCode: '3000055',
        remarks: 'Closed',
        status: 'Yes'
      }
    ]
  };
}
