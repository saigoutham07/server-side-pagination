import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { SharedService } from 'src/app/shared/shared.service';
import { FilterDFMService } from 'src/app/shared/filter-dfm.service';
import { TableDataService } from '../table-data.service';
import { LoaderService } from '../../shared/loader/loader-service.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  public editId = {};
  public saveTableFilterData;
  public tableSettings = { // table configs
    entity: 'data-table',
    tableActions: {
      show: true,
      actionButtons: [
        {
          class: 'btn-class-edit',
          icon: '',
          type: 'edit',
          text: 'Edit',
          onlyText: true
        },
        {
          class: 'btn-class-edit',
          icon: '',
          type: 'delete',
          text: 'Delete',
          onlyText: true
        }
      ]
    },
    columnSearch: {
      show: true,
      columnSearchToggle: true,
      searchExceptions: ['status']
    },
    stylings: {
      bodyHeight: 'calc(100vh - 215px)'
    },
    filters: {
      filterTable: true,
      filterOptions: [],
      filterSelected: {
      }
    },
    headerButtons: {
      show: true,
      buttons: [
        {
          text: 'Create',
          className: 'btn-new',
          key: '2',
          type: 'create'
        },
      ]
    },
    columnConditions: {
      icons: {
        status: {
          Yes: { icon: 'fa fa-check-circle', class: 'icon-success', tooltip: 'Yes' },
          No: { icon: 'fa fa-times-circle-o', class: 'icon-error', tooltip: 'No' }
        }
      },
    },
    radioButton: {
      class: 'checkbox',
      show: true,
      hidden: false,
      title: '',
      key: 'markAsUrgent',
      showSelectAll: true
    },
    clickableColumns: {
      show: true,
      list: ['sapGroupCode'],
      class: ''
    },
    addNew: true,
  };
  public displayForm = false;
  public tableData: any = {
    headerContent: [],
    bodyContent: [],
    records_filtered: 0,
    records_total: 0
  };
  private tableReloadSubject: Subject<boolean> = new Subject<boolean>();

  constructor(
    public sharedService: SharedService,
    public filtersDFM: FilterDFMService,
    public serversideData: TableDataService,
    public loaderService: LoaderService
  ) { }

  ngOnInit() {
    try {
      this.setFiltersDFM();
    } catch (error) {
      console.log(error);
    }
  }
  /**
   * getting the Removal reason data
   * @param data input passing for requesting an api
   */
  getDataTable(onInit) {
    try {
      if (onInit === true) {
        this.tableData.headerContent = this.serversideData.data.headerContent;
        this.loaderService.show();
      } else {
        this.tableData = this.serversideData.data;
        this.loaderService.hide();
        this.headerStatusDefine();
        this.tableData.records_total = this.serversideData.data.bodyContent.length; // response.data.tableData.bodyContent.length;
        this.tableData.records_filtered = this.serversideData.data.bodyContent.length;
      }
    } catch (error) {
      console.log(error);
    }
  }
  setFiltersDFM() {
    try {
      this.tableSettings.filters.filterOptions = this.filtersDFM.dataTableForm;
      this.getDataTable(true);
    } catch (error) {
      console.log(error);

    }
  }
  /**
   *
   * @param val is the angular datatable parameters
   */
  performAction(val) {
    try {
      switch (val.action) {
        case 'addNew':
          console.log('add', val);
          this.sharedService.serviceWarningMessage('Custom Button Actions');
          break; 
        case 'edit':
          console.log('edit', val);
          this.sharedService.serviceWarningMessage('Internal Table - Button Actions for editing');
          break;
        case 'delete':
          console.log('delete', val);
          this.sharedService.serviceWarningMessage('Internal Table - Button Actions for deletion');
          break;
        case 'fetchData':
          console.log('fetchingTableData', val);
          this.getDataTable(false);
          break;
        case 'create':
          console.log('create', val);
          this.sharedService.serviceWarningMessage('Custom Header Button');
          break;
        case 'checkBoxSelect':
          console.log('checkBoxSelect', val);
          if (val.data && val.data.event === true && val.data.tr) {
            this.sharedService.serviceWarningMessage('You have Checked the box having SAP Group Code ' + val.data.tr.sapGroupCode);
          } else if (val.data && val.data.event === false && val.data.tr && val.data.tr.markAsUrgent === true) {
            this.sharedService.serviceWarningMessage('You have Un-Checked the box having SAP Group Code ' + val.data.tr.sapGroupCode);
          } else if (val.data && val.data.event === true) {
            this.sharedService.serviceWarningMessage('You have Checked all the boxes');
          } else if (val.data && val.data.event === false) {
            this.sharedService.serviceWarningMessage('You have Un-Checked all the boxes');
          }
          break;
        case 'cellEdit':
          console.log('cellEdit', val);
          if (val.data.col.key === 'sapGroupCode') {
            this.sharedService.serviceWarningMessage('You Clicked on  ' + val.data.row.sapGroupCode);
            break;
          }
          if (val.data.col.key === 'remarks') {
            this.sharedService.serviceWarningMessage
              ('Dynamic Cell Click On a Particular Column and You have Clicked on a cell ' + val.data.row.remarks);
            break;
          }
      }
    } catch (error) {
      console.log(error);
    }
  }

  headerStatusDefine() {
    try {
      const alignText = ['status'];
      alignText.forEach((val) => {
        const indexNew = this.tableData.headerContent.findIndex(ele => ele.key === val);
        if (indexNew > -1) {
          this.tableData.headerContent[indexNew].icon = true;
          this.tableData.headerContent[indexNew].classList = ['text-center'];
        }
      });
      const key = 'remarks';
      const index = this.tableData.headerContent.findIndex(ele => ele.key === key);
      if (index > -1) {
        const obj = {
          show: true,
          type: 'alphabetCondition',
          condition: {
            sign: '!=',
            value: 'Closed',
            key: 'remarks'
          }
        };
        this.tableData.headerContent[index].clickAble = obj;
      }
    } catch (error) {
      console.log(error);
    }
  }
  reloadTable() {
    try {
      this.tableReloadSubject.next(true);
    } catch (error) {
      console.log(error);
    }
  }
}
