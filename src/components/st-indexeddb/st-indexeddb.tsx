import {Component, Method, Prop} from '@stencil/core';
import {IndexDetails, IndexeddbWrapper} from "../services/indexeddb-wrapper";


@Component({
  tag: 'st-indexeddb',
  shadow: true
})
export class StIndexedDB {
  private _db: IndexeddbWrapper;

  @Prop() dbName: string;
  @Prop() version: number;

  componentDidLoad() {
    this._db = new IndexeddbWrapper(this.dbName, this.version);
  }

  @Method()
  openDatabase(version: number, upgradeCallback?: Function) {
    return this._db.openDatabase(version, upgradeCallback);
  }

  @Method()
  getByKey(storeName: string, key: any) {
    return this._db.getByKey(storeName, key);
  }

  @Method()
  getAll(storeName: string, keyRange?: IDBKeyRange, indexDetails?: IndexDetails) {
    return this._db.getAll(storeName, keyRange, indexDetails);
  }

  @Method()
  add(storeName: string, value: any, key?: any) {
    return this._db.add(storeName, value, key);
  }

  @Method()
  update(storeName: string, value: any, key?: any) {
    return this._db.update(storeName, value, key);
  }

  @Method()
  delete(storeName: string, key: any) {
    return this._db.delete(storeName, key);
  }

  @Method()
  openCursor(storeName: string, cursorCallback: (evt: Event) => void, keyRange?: IDBKeyRange) {
    return this._db.openCursor(storeName, cursorCallback, keyRange);
  }

  @Method()
  clear(storeName: string) {
    return this._db.clear(storeName);
  }

  @Method()
  getByIndex(storeName: string, indexName: string, key: any) {
    return this._db.getByIndex(storeName, indexName, key);
  }

  render() {
    return (<div></div>);
  }
}
