import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.scss']
})
export class MultiselectComponent implements OnInit {
  @Input() DropDownInfo: any;
  @Input() settings: any;
  @Input() SelectedInfo: any;
  @Output() SelectedValues: EventEmitter<any>;
  // tslint:disable-next-line:variable-name
  @Input() form_Control: FormControl;
  dropdownList = [];
  selectedItems = [];
  constructor() {
    this.SelectedValues = new EventEmitter<any>();
  }


  ngOnInit() {
    if (this.form_Control === undefined) {
      this.form_Control = new FormControl([], Validators.nullValidator);
    }
    // console.log(this.SelectedInfo);
    if (this.SelectedInfo) {
      this.selectedSetData();
    }
    if (this.settings.DefaultSelect) {
      for (const item of this.dropdownList) {
        this.selectedItems.push(item);
      }
    }
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges(changes: SimpleChanges) {
    if (changes.DropDownInfo) {
      if (changes.DropDownInfo.currentValue) {
        this.DropDownInfo = [];
        this.DropDownInfo = changes.DropDownInfo.currentValue;
        this.dropdownSetData();
      }
    }
    if (changes.SelectedInfo) {
      if (changes.SelectedInfo.currentValue) {
        this.SelectedInfo = [];
        this.SelectedInfo = changes.SelectedInfo.currentValue;
        this.selectedSetData();
      }
    }
  }

  dropdownSetData() {
    // this.selectedItems = [];
    if (typeof (this.DropDownInfo) === 'undefined') {
      this.DropDownInfo = [];
    }
    this.dropdownList = [];
    if (this.DropDownInfo.length > 0) {
      this.dropdownList = this.DropDownInfo;
    }
    // for (let i = 0; i < this.DropDownInfo.length; i++) {
    //   const temp = {
    //     id: this.DropDownInfo[i].value,
    //     itemName: this.DropDownInfo[i].label,
    //     key: this.DropDownInfo[i].value,
    //   };
    //   this.dropdownList.push(temp);
    // }
  }
  selectedSetData() {
    if (typeof (this.SelectedInfo) === 'string') {
      this.SelectedInfo = [this.SelectedInfo];
    } else if (typeof (this.SelectedInfo) === 'undefined') {
      this.SelectedInfo = [];
    }
    this.selectedItems = [];
    if (this.settings.fullObject === true) {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.SelectedInfo.length; i++) {
        this.selectedItems.push(this.SelectedInfo[i]);
      }
    } else {
      // tslint:disable-next-line:prefer-for-of
      for (let j = 0; j < this.DropDownInfo.length; j++) {
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.SelectedInfo.length; i++) {
          if (this.SelectedInfo[i] === this.DropDownInfo[j].value) {
            this.selectedItems.push(this.DropDownInfo[j]);
            // console.log('inside selected data');
          }
        }
      }
    }
    // console.log(this.selectedItems);
  }
  emitData(event) {
    if (event) {
      this.SelectedValues.emit(this.SelectedInfo);
    }
  }
  onItemSelect(item: any) {
    this.utilityFunction();
  }
  onItemDeSelect(item: any) {
    this.utilityFunction();
  }
  onSelectAll(items: any) {
    this.utilityFunction();
  }
  onDeSelectAll(items: any) {
    this.utilityFunction();
  }
  utilityFunction() {
    // let TempObj = {};
    const ObjectPush = [];
    if (this.settings.fullObject === true) {
      this.SelectedInfo = this.selectedItems;
      this.SelectedValues.emit(this.SelectedInfo);
    } else if (this.settings.fullObject === false) {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.selectedItems.length; i++) {
        // ObjectPush.push(this.selectedItems[i].key);
        ObjectPush.push(this.selectedItems[i][this.settings.primaryKey]);
      }
      this.SelectedInfo = ObjectPush;
      this.SelectedValues.emit(ObjectPush);
      // console.log(this.selectedItems);
    }
    // this.SelectedValues.emit(this.SelectedInfo);
  }
  refreshFunc() {
    this.selectedItems = [];
  }
}
