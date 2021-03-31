import {createToolbar} from './toolbar.tamplate';
import {$} from '@core/dom';
import {ExcelStateComponent} from '@core/ExcelStateComponent';

export class Toolbar extends ExcelStateComponent {
  static className = 'excel-toolbar';
  constructor($root, options) {
    super($root, {
      name: 'Toolbar',
      listeners: ['click'],
      ...options
    });
  }
  get 
  toHTML() {
    return createToolbar()
  }
  onClick(event) {
    const $target = $(event.target)
    if ($target.data.type === 'button') {
      console.log($target.data.value);
    }
  }
}
