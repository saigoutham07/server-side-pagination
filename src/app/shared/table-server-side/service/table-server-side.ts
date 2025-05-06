import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

export class TableServerSide {
    static data = {}; // if more than one table , maintain data for both of them .
    /**
     * data = {
     *    "entitiy_1": {
     *        "headerContent": [],
     *        "bodyContent": [],
     *    },
     *    "entitiy_2": {
     *        "headerContent": [],
     *        "bodyContent": [],
     *    }
     * }
     */

    /**
     * Loaders = {
     *    'entity_1': {
     *        "contentLoader": true,
     *        "removeLoader": true
     *    }
     * }
     */

    static loaders = {};
    // Loader also same problem .

    /** == Data triggering == */
    static dataTrigger = new Subject();
    /** ===== */

    /** == Data triggering == */
    static loaderTrigger = new Subject();
    /** ===== */

    constructor() {

    }

    /**
     * On HOLD
     * Setting Table Data
     * @param data - Table data { headerContent: [], bodyContent: []}
     * @param entity - entity Name
     */
    setTableData(data, entity) {
        try {
            if (!TableServerSide.data[entity]) {
                TableServerSide.data[entity] = {};
            }
            TableServerSide.data[entity] = data;
            TableServerSide.dataTrigger.next({ entity, data });
        } catch (error) {
            console.log(error);
        }
    }

    /**
     * For All Removal Loaders
     * Setting up loader values
     * @param value - true or false
     * @param entity - Entity Name for which loader has to be acitvated
     */
    setLoader(value, entity) {
        if (!TableServerSide.loaders[entity]) {
            TableServerSide.loaders[entity] = false;
        }
        TableServerSide.loaders[entity] = value;
        TableServerSide.loaderTrigger.next({ entity });
    }

    //   getDataTrigger() : Observable<any>{
    //     return TableServerSide.dataTrigger.asObservable();
    //   }
}
