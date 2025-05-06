# Data-Table(Server - Side Rendering)


## Versions

| Angular| data-table |
| ------|:------:| 
| >=7.0.0 <9.0.0  | v1.x |

---

Table of contents
=================

  * [Features](#features)
  * [Getting started](#getting-started)
  * [API](#api)
  * [Custom styles](#custom-styles)
  * [Dependencies](#dependencies)
  * [Contributing](#contributing)
  * [Development](#development)
  * [Summary](#summary)

## Features

 * 1. Pagination
 * 2. Max number of rows display configuration
 * 3. column level search
 * 4. Data type based sorting (number, string, date)
 * 5. Editable
 * 6. Multiple column sorting
 * 7. Table filtering using simple dfm form - contains all type of form input elements
 * 8. Clickable rows/ row selections
 * 9. Actions emitting to the parent component. Action buttons Icons configuration.
 * 10. Cell coloring
 * 11. Icon customization
 * 12. Actions aligment configuration
 * 13. Page range seleciton
 * 14. Clickable cell based on header options
 * 15. All features can enable or disable with flag based on the particular function.
 * 16. Highly interactive and responsive supports in any size of devices

## Warning
Library is under active development and may have API breaking changes for subsequent major versions after 1.0.0.

## Getting started
### Step 1: Install `data-table`:

#### Clone this repository
```shell
    git clone <url of the repo>
    - navigate to example and run the sample project - for implementation
```

### Step 2: Import the DataTable module:

```ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableServerSideModule } from '.../path/to/table-server-side.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DataTableModule,
    TableServerSideModule
  ],
  exports: []
})
export class AppModule { }
```

#### Properties
| Property  | Type | Description |
| ------------- | ------------- | ------------- |
| tableId | string  | It defines ID of a Data Table|
| tableActions | Object | List of action buttons which are needed on each row of the table |
| columnSearch? | Object | To Search Particular Column Wise Data |
| searchExceptions? | Object | To disable search for Particular columns |
| filters? | Object | To Filter the table data by help of input form fields |
| showOnLoad? | boolean | used for default enabling of Filter on data table load|
| filterOptions? | Array | To define form input fields in a filter |
| filterSelected? | Object | Selected values from the form input fields is assigned in this object |
| emptyDataTemplate? | Object | To define Empty State Condition of a data table |
| message? | string | To define message or information in empty state |
| filterBtn? | Object | To enable filter button under Empty state |
| radioButton? | Object | To make visible check-box in a separate column for a data table |
| showSerialNumber? | boolean | To show serial number for a particular row in a data table |
| headerButtons? | Object | To define custom buttons |
| clickableColumns? | Object | To enable click event for a particular cell in a column |
| pageLengthMenu | number | To update the menu length of a data table |
| lengthMenu | string | To display Show Menu Entries |
| info | string | To define Paginaton options for Showing page Numbers and Total Records |
| scrollX | boolean | To display scroll horizantally |
| sortOptions? | Object | To enable sorting for particular columns |
| columnConditions? | Object | To enable - Particular cell click in a row , cell click based on Expressions |
| altText? | boolean | To allow text in a particular cell |
| stylings | boolean | To set height of a data table |


### Inputs
| Input  | Type  | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| [data] | `settings`  | yes | Allows to create custom options for the table-server-side component. |
| [data] | `data` | yes | Allows to generate data for the table-server-side component. |
| [data] | `tableReloadEvent`  | no | Allows to reload table-server-side component on every action trigger. |

### Outputs

| Output  | Description |
| ------------- | ------------- |
| (action)  | Fired when an emit event is triggered from `table-server-side` component. (example Event : `{action: 'fetchData'}` ) |


## Change Detection


## Custom styles
If you need to give custom styles Please override with same classes in global styles

## Dependencies

| Package name | Link | Description |
| ------------ | --------- | ----------- |
| fontawesome-4.7 Icons | download from cdn and keep in local | For all the icons used in this component |
| @ng-bootstrap/ng-bootstrap | npm component | Bootstrap -for css framework |
| @ng-select/ng-select | npm component | for Select Dropdown |
| toastr | npm | For Notification toasts |
| angular2-multiselect-dropdown | npm component | For select dropdown with checkbox |


## Contributing

Contributions are welcome. You can start by looking at [issues](https://github.com/ng-select/ng-select/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22) with label *Help wanted*  or creating new Issue with proposal or bug report.
Note that we are using https://conventionalcommits.org/ commits format.

## Development

Perform the _clone-to-launch_ steps with these terminal commands.

### Run demo page in watch mode
```
git clone <git url of the codebase of the example>
url : ``

```

### Release

`<how to release to npm or commit to components repo>`

## Summary
This component is created for usage in projects where there is requirement for a table with all custom `pagination,search-(column,global),sort-(column,global),`:)
