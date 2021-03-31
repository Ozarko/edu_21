import {DOMListener} from '@core/DOMListener';

export class ExcelComponent extends DOMListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || '';
    this.emitter = options.emitter;
    this.store = options.store;
    this.subscribe = options.subscribe || [];
    this.unSubscribers = [];
    this.prepare();
    this.storeSub = null;
  }
  prepare() {}
  toHTML() {
    return '';
  }
  $emit(event, ...args) {
    this.emitter.emit(event, ...args);
  }
  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn);
    this.unSubscribers.push(unsub);
  }
  $dispatch(action) {
    this.store.dispatch(action);
  }
  changeStore() {
  }
  isWatching(key) {
    return this.subscribe.includes(key)
  }
  init() {
    this.initDOMListeners();
  }
  destroy() {
    this.removeDOMListeners();
    this.unSubscribers.forEach((unsub) => unsub());
    this.storeSub.unSubscribers()
  }
}
