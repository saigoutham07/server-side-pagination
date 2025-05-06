import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CheckBoxListConfiguration } from './checkbox-list-interface';

@Component({
  selector: 'app-checkbox-list',
  templateUrl: './checkbox-list.component.html',
  styleUrls: ['./checkbox-list.component.scss']
})

export class CheckboxListComponent implements OnInit {
  @Input() options = [];
  @Input() config: any = {};
  @Output() action: EventEmitter<any>;
  public filterModal = {};
  constructor() {
    this.action = new EventEmitter();
  }

  ngOnInit() {
    this.setDefaultConfig();
    // console.log('options----', this.options);

  }

  // ngOnChanges() {
  //   console.log('ngOnchanges');

  //   this.setDefaultConfig();
  //   console.log('options----', this.options);
  // }
  parentAction(data: object, type: string) {
    this.action.emit({ type, data });
  }
  setDefaultConfig() {
    const config: CheckBoxListConfiguration = {
      maxItems: 10,
      itemHeight: 35,
      noItemsFound: 'No Items Found',
      hideFilter: false,
      multiSelect: true,
      uniqueKey: 'value',
      emitterType: 'objects',
      emitOutPut: false,
      selectAll: true
    };
    const parentOptions = JSON.parse(JSON.stringify(this.config));
    if (this.options.length >= (parentOptions.maxItems || 10)) {
      parentOptions.maxItems = this.options.length;
    }
    // if (this.options.length >= 10) {
    //   parentOptions.maxItems = this.options.length;
    // }
    this.config = Object.assign(config, parentOptions);
  }
  onCheckItem(event, item) {
    if (!this.config.multiSelect) {
      this.options.forEach(ele => {
        ele.selected = false;
      });
      item.selected = true;
    }
    if (this.config.emitOutPut) {
      this.createEveBasedOnType();
    }
  }
  createEveBasedOnType() {
    let obj: any = [];
    if (this.config.emitterType === 'objects') {
      obj = this.options.filter(ele => ele.selected);
    } else {
      obj = this.options.filter(ele => ele.selected).map(ele => ele.value);
    }
    if (!this.config.multiSelect) {
      obj = obj[0];
    }
    this.parentAction(obj, 'change');
  }

  checkUnCheckAll(type) {
    try {
      if (!type) { return; }
      switch (type) {
        case 'select':
          // this.options.map(item => item.selected = true);
          this.options.forEach(item => {
            if (item) {
              item.selected = true;
            }
          });
          break;
        case 'unselect':
          this.options.forEach(item => {
            if (item) {
              item.selected = false;
            }
          });
          break;
      }
      if (this.config.emitOutPut) {
        this.createEveBasedOnType();
      }
      // this.updateRefurbishmentList();
    } catch (error) {
      console.log(error);
    }
  }

}
