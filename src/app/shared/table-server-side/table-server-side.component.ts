import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, ViewChild } from '@angular/core';
import { Subscription, Subject, Observable } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { TableServerSide } from './service/table-server-side';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-table-server-side',
  templateUrl: './table-server-side.component.html',
  styleUrls: ['./table-server-side.component.scss']
})
export class TableServerSideComponent implements OnInit {

  @ViewChild(DataTableDirective) dataTableElement: DataTableDirective;
  /**
   * Initial settings file
   */
  @Input() settings; // table options from parent component
  @Input() data; // data for the table
  @Input() tableReloadEvent: Observable<boolean>;

  @Output() action = new EventEmitter();

  public tableReloadSubscription;

  /** Table Data  */
  public headerContent;
  public bodyContent;
  /** Subscriptions */
  public loaderSubscription = new Subscription();
  public dataSubscription = new Subscription();
  /**  */

  /** Search terms  */
  public searchTerms = new Subject<any>();
  public dtElement: DataTableDirective;
  public loader = false;
  public searchTermSubscription;
  public dtOptions: any = {};
  public dataTablesParameters;
  public columnSearchModel = {};
  public callback;
  public emptyTableNotify = false;
  public tableProcessing = false;

  /** Remove Details */
  public removeLoader = false;
  public recordToDelete;
  public buttonData: any = [];
  public count = 0;

  public parentData: any = { error_cls: 'table-filter-error', formSubmitted: false, serviceDependency: true };
  public formData: any = {};
  public metaData = []; // assign the below JSON file to this variable

  public tableDefaultOptions = { // default table options
    tableId: 'myModal',
    tableActions: {},
    columnConditions: {},
    columnSearch: {
      show: true,
      columnSearchToggle: false,
      searchExceptions: []
    },
    filters: {
      showOnLoad: false,
      filterTable: false,
      filterOptions: [],
      filterSelected: {},
    },
    emptyDataTemplate: {
      show: true,
      message: 'Try adjusting your search or filter to find what you\'re looking for..',
      filterBtn: {
        show: true,
        label: 'Filter data'
      }
    },
    radioButton: {},
    showSerialNumber: true, // to enable serial number
    headerButtons: {},
    clickableColumns: {
      show: false,
      list: []
    },
    pageLengthMenu: { pageSizes: [10, 25, 50, 100] },
    stylings: {
      bodyHeight: 'calc(100vh - 280px)'
    },

    pageLength: 25,
    language: {
      lengthMenu: 'Show _MENU_ entries',
      zeroRecords: '',
      info: 'Showing page _PAGE_ of _PAGES_ (Total Records: _MAX_)',
      infoEmpty: '',
      infoFiltered: '(filtered from _MAX_ total records)'
    },
    scrollX: true,
    scrollCollapse: true,
    sortOptions: {},
    rowClick: false
  };
  public showTable = false;

  constructor(
    public sharedService: SharedService
  ) { }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges(changes: SimpleChanges) {
    if (changes.data) {
      if (this.count > 0) {
        this.setTableBodyData(this.data);
        this.resetSelectAll();
      }
      this.triggerTableResize();
    }
    const attribute = document.getElementsByClassName('dataTables_scrollHead')[0];
    if (attribute) {
      if (this.emptyTableNotify) {
        attribute.classList.add('scroll-table-header');
    } else {
      attribute.classList.remove('scroll-table-header');
    }
  }
    this.setFilterOptions();
    this.updateTableActions();
    this.updateTableHeaders();
  }

  resetSelectAll() {
    try {
      if (this.settings && this.settings.radioButton && this.settings.radioButton.checkAllValue !== undefined) {
        this.settings.radioButton.checkAllValue = false;
      }
    } catch (error) {
      console.log(error);
    }
  }
  /**
   * Table row click action
   * @param rowDetails clicked/selected row data
   */
  rowClick(rowDetails) {
    try {
      if (this.settings.rowClick) {
        this.tableAction(rowDetails, 'rowClick');
      }
    } catch (error) {
      console.log(error);
    }
  }
  setFilterOptions() {
    try {
      if (this.settings.filters && this.settings.filters.filterOptions) {
        this.metaData = this.settings.filters.filterOptions;
        this.formData = this.settings.filters.filterSelected;
      }
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * Method to update the table action options
   */
  updateTableActions() {
    try {
      if (this.settings && this.settings.tableActions) {
        this.dtOptions.tableActions = this.settings.tableActions;
      }
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * Method to update table header options
   */
  updateTableHeaders() {
    try {
      if (!this.data || !this.data.headerContent || !this.headerContent) { return; }
      if (this.getCopy(this.data.headerContent) === this.getCopy(this.headerContent)) { return; }
      for (const th of this.data.headerContent) {
        const headerIndex = this.headerContent.findIndex(ele => ele.key === th.key);
        if (headerIndex > -1) {
          if (th.hasOwnProperty('editable')) {
            this.headerContent[headerIndex].editable = th.editable;
          }
          if (th.hasOwnProperty('disabled')) {
            this.headerContent[headerIndex].disabled = th.disabled;
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

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

  ngOnInit() {
    // this.setTableBodyData(this.data);
    this.setFilterOptions();
    this.setDefaultOptions();

    // Loader Triggers
    TableServerSide.loaderTrigger.subscribe(result => {
      // tslint:disable-next-line:no-string-literal
      if (this.settings.entity === result['entity']) {
        // tslint:disable-next-line:no-string-literal
        this.loader = TableServerSide.loaders[result['entity']];
      }
    });

    /** For debounce time  */
    this.searchTerms.pipe(debounceTime(1000), distinctUntilChanged()).subscribe(value => {
      this.reloadTable();
    });
    // default filter open check
    this.setDefaultFilterShow();
    this.observeTableReload();
  }

  /**
   * Method to subscribe the table reload from parent component
   */
  observeTableReload() {
    try {
      if (this.tableReloadEvent) {
        this.tableReloadSubscription = this.tableReloadEvent.subscribe((val: boolean) => {
          if (val === true) {
            this.reloadTable();
          }
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
  /**
   * Whenever search item changes
   * @param term - Current Search term
   */
  search(term) {
    this.searchTerms.next(term); // debounce service call
  }
  /**
   *  Exclude Sorting Columns
   */
  getExcludeSortColumns() {
    if (this.settings.sortOptions.disableAll) {
      return '_all';
    } else {
      const excludes = [];
      let counter = 0;
      try {
        if (this.settings.radioButton.show) {
          excludes.push(0);
          counter++;
        }
        if (this.settings.showSerialNumber) {
          this.settings.radioButton.show ? excludes.push(1) : excludes.push(0);
          counter++;
        }
        if (this.settings.tableActions.show) {
          excludes.push(this.headerContent.length + counter);
        }
      } catch (error) {
        console.log(error);
      }
      return excludes;
    }
  }

  /**
   * Method for emitting filter selection change event
   * @param fieldValue filter values
   */
  filterSelectFieldChange(fieldValue) {
    this.action.emit({
      action: 'filterChange',
      data: fieldValue
    });
  }



  /**
   * Fetch Table Data
   */
  fetchData() {
    try {
      const inputRequest = JSON.parse(JSON.stringify(this.dataTablesParameters));
      const excludeColIndexes = this.getExcludeSortColumns();
      if (excludeColIndexes !== '_all') {
        excludeColIndexes.sort();
        excludeColIndexes.reverse();
        excludeColIndexes.forEach(ind => {
          inputRequest.columns.splice(ind, 1);
        });
        inputRequest.column_search = this.columnSearchModel;
        inputRequest.search_details = [];
        if (inputRequest.column_search) {
          const keys = Object.keys(inputRequest.column_search);
          const columnSearchItems = [];
          for (const keyVal of keys) {
            columnSearchItems.push({
              key: keyVal,
              value: inputRequest.column_search[keyVal]
            });
          }
          inputRequest.search_details = columnSearchItems;
          inputRequest.searchDetails = columnSearchItems;
        }
      } else {
        inputRequest.search_details = [];
        inputRequest.searchDetails = [];
      }
      const filterSelected = JSON.parse(JSON.stringify(this.settings.filters.filterSelected));
      const filters = JSON.parse(JSON.stringify(this.settings.filters.filterSelected));
      const filterKeys = Object.keys(filters);
      for (const key of filterKeys) {
        if (filters[key] !== undefined && filters[key] !== null) {
          if ((typeof (filters[key]) === 'string' && filters[key].trim() !== '') || typeof (filters[key]) === 'number') {
            filters[key] = [filters[key]];
          }
          if (typeof (filters[key]) === 'string' && filters[key].trim() === '') {
            delete filters[key];
          }
        } else {
          delete filters[key];
        }
      }
      // this line is added as per request from BE team
      filterSelected.filters = filters;
      const parentObj = {
        action: 'fetchData',
        dataTableParameters: inputRequest,
        columnParameters: this.columnSearchModel,
        filterSelected,
        filters
      };
      // console.log(parentObj);
      this.action.emit(parentObj);
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * Set Table body data
   * @param result - result
   */
  setTableBodyData(result) {
    try {
      this.bodyContent = result.bodyContent;
      if (!this.callback) { return; }
      this.callback({
        recordsTotal: result.records_total,
        recordsFiltered: result.records_filtered,
        data: [],
      });
    } catch (error) {
      console.log(error);
    }
  }

  /** Remove a record */
  remove(row) {
    try {
      this.action.emit(
        {
          action: 'remove',
          record: row,
          dataTableParameters: this.dataTablesParameters
        }
      );
    } catch (error) {
      this.removeLoader = false;
    }
  }

  /**
   * Go To Edit Mode
   * @param row - record
   */
  goToEditMode(row) {
    try {
      this.action.emit(
        {
          action: 'edit',
          record: row,
          dataTableParameters: this.dataTablesParameters
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  // NgOnDestroy unsubscribe all items
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    if (this.loaderSubscription) {
      this.loaderSubscription.unsubscribe();
    }

    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }

    if (this.tableReloadSubscription) {
      this.tableReloadSubscription.unsubscribe();
      this.tableReloadSubscription = undefined;
    }
  }

  /**
   * Method for closing the filter pannel
   */
  closeFilter() {
    try {
      document.getElementById('filterCloseIcon_' + this.settings.tableId).click();

    } catch (error) {
      console.log(error);
    }
  }
  /**
   * Table filter submit action
   */
  filterSubmit() {
    try {
      this.parentData.formSubmitted = true;
      if (this.sharedService.getDisabledStatus(this.parentData.error_cls)) {
        return true;
      }
      this.settings.filters.filterSelected = JSON.parse(JSON.stringify(this.formData));
      if (this.dataTablesParameters) {
        this.reloadTable();
        this.closeFilter();
      }
    } catch (error) {
      console.log(error);
    }
  }
  /**
   * Table filter submit action
   */
  resetFormData() {
    this.formData = {};
  }

  /**
   * Method for emitting table actions
   * @param obj data which needs to pass to the parent component
   * @param type action type
   */
  tableAction(obj, type, event?) {
    try {
      if (event) {
        event.preventDefault();
      }
      if (this.tableProcessing) { return; }
      this.action.emit({
        data: obj,
        action: type
      });
    } catch (error) {
      console.log(error);
    }
  }
  /**
   * Method for initializing the table options
   */
  setDefaultOptions() {
    const self = this;
    this.settings = Object.assign(this.tableDefaultOptions, this.settings);
    const columnsVal = [];
    this.headerContent = this.data.headerContent;
    this.bodyContent = this.data.bodyContent;
    this.count++;

    for (const item of this.headerContent) {
      columnsVal.push({ name: item.key });
    }

    if (this.settings.tableActions && this.settings.tableActions.show) {
      columnsVal.push({ name: 'actions' });
    }
    if (this.settings.showSerialNumber) {
      columnsVal.unshift({
        name: 'slNo'
      });
    }
    if (this.settings.radioButton && this.settings.radioButton.show) {
      columnsVal.unshift({ name: 'checkbox' });
    }

    this.buttonData = [];
    if (this.settings.filters.filterTable) {
      this.buttonData.push({
        text: '<i aria-hidden="true" class="fas fa-filter"></i> Filter by',
        className: 'btn-new',
        key: '1',
        action: (e, dt, node, config) => {
          this.toogleSidebar();
        }
      });
    }
    if (this.settings.headerButtons.show) {
      this.settings.headerButtons.buttons.forEach(ele => {
        ele.action = (e, dt, node, config) => {
          this.tableAction({ config }, ele.type);
        };
        this.buttonData.push(ele);
      });
    }
    if (this.settings.columnSearch.columnSearchToggle) {
      this.buttonData.push({
        text: 'Search Column-level wise',
        key: '1',
        className: 'btn-new text-hide disabled',
        action: () => {
          return self.dtOptions.columnSearch = self.dtOptions.columnSearch === true ? false : true;
        }
      });
    }
    if (this.settings.addNew) {
      this.buttonData.push({
        text: 'Add New',
        className: 'btn btn-primary',
        key: '1',
        action: (e, dt, node, config) => {
          this.action.emit({
            action: 'addNew',
            dataTableParameters: this.dataTablesParameters,
            columnParameters: this.columnSearchModel
          });
        }
      });
    }
    const columnDefs = [
      { targets: this.getExcludeSortColumns(), orderable: false }
    ];


    /** Dt options  */
    const selfValue = this;
    this.dtOptions = {
      pagingType: 'simple_numbers', // 'full_numbers',
      pageLength: this.settings.pageLength,
      serverSide: true,
      ordering: true,
      order: [],
      searching: false,
      processing: true,
      // autoWidth: false,
      oLanguage: {
        sProcessing: '<div class="color-light-gray pt-lg-5 mt-3 p-4 ph-item text-center w-100"><span>Processing...</span></div>'
      },
      ajax: (dataTablesParameters: any, callback) => {
        this.dataTablesParameters = dataTablesParameters;
        this.callback = callback;
        this.fetchData();
      },
      initComplete: this.onInitTable(),
      language: this.settings.language,
      scroller: {
        loadingIndicator: true,
      },
      columnDefs,
      columns: columnsVal,
      tableActions: this.settings.tableActions,
      columnSearch: this.settings.columnSearch.show ? true : false,
      actionButtons: this.settings.tableActions,
      dom: 'lBfrtip', // 'lfrtip',
      buttons: {
        buttons: this.buttonData,
        style: 'float:right',
        dom: {
          button: {
            tag: 'button',
            className: 'remove-border',
            style: 'padding: 0 !important;border: none !important; background: none !important;'
          },
          buttonLiner: {
            tag: null
          }
        }
      },
      scrollY: this.settings.stylings.bodyHeight,
      scrollX: this.settings.scrollX,
      scrollCollapse: this.settings.scrollCollapse,
      aLengthMenu: this.settings.pageLengthMenu.pageSizes,
      fixedColumns: this.settings.fixedColumns,
      fnDrawCallback(settings) {
        selfValue.emptyTableNotify = settings.fnRecordsDisplay() === 0;
      },
    };
    setTimeout(() => {
      this.checkProcessingOption();
    }, 500);
  }

  // -------------toggle sidebar
  toogleSidebar() {
    try {
      document.getElementById('toggleSidebar_' + this.settings.tableId).click();
      this.modalBackdrop();
    } catch (error) {
      console.log(error);
    }
  }
  /** setting modal backdrop */
  modalBackdrop() {
    try {
      const element = document.getElementsByClassName('modal-backdrop fade show')[0];
      element.setAttribute('class', 'modalHide');
      const attribute = document.getElementsByClassName('modal')[0];
      attribute.setAttribute('style', 'top : 99px !important');
    } catch (error) {
      console.log(error);
    }
  }
  /**
   * Method to re-render the table with options
   */
  reloadTable() {
    this.dataTableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.draw();
    }).catch(e => console.log(e));
  }

  /**
   * Method to re-render the table with options
   */
  triggerTableResize() {
    if (!this.dataTableElement || !this.dataTableElement.dtInstance) { return; }
    this.dataTableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.columns.adjust();
    }).catch(e => console.log(e));
  }

  checkProcessingOption() {
    try {
      if (!this.dataTableElement || !this.dataTableElement.dtInstance) {
        setTimeout(() => {
          this.checkProcessingOption();
        }, 500);
        return;
      }
    } catch (error) {
      console.log(error);
    }
    this.dataTableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.on('processing.dt', (e, settings, processing) => {
        this.tableProcessing = processing ? true : false;
      });
    }).catch(e => console.log(e));
  }

  /**
   * To set default filter open/close
   */
  setDefaultFilterShow() {
    if (this.settings.filters.showOnLoad) {
      this.toogleSidebar();
    }
  }

  cellClick(row, col) { // cellEdit
    this.action.emit({
      data: { row, col },
      action: 'cellEdit'
    });
    // console.log(row, col);
  }
  changeCheckBox(event, index, tr) {
    this.action.emit({
      data: { event, index, tr },
      action: 'checkBoxSelect'
    });
  }
  changeCheckBoxAll(event) {
    if (!this.settings || !this.settings.radioButton || !this.settings.radioButton.key) { return; }
    this.bodyContent.map(row => row[this.settings.radioButton.key] = event);
    this.action.emit({
      data: { event },
      action: 'checkBoxSelect'
    });
  }
  onInitTable() {
    this.showTable = true;
  }
}
