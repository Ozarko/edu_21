import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from '@/components/table/table.template';
import {resizeHandler} from './table.resize';
import {canResize, isCell, matrix, nextSelector} from './table.function';
import {TableSelection} from './TableSelection';
import {$} from '@core/dom';
import * as actions from '../../redux/actions';

export class Table extends ExcelComponent {
  static className = 'excel-table';
  constructor($root, options) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown', 'keydown', 'input'],
      ...options,
    });
  }
  toHTML() {
    return createTable(35, this.store.getState());
  }
  prepare() {
    this.selection = new TableSelection();
  }
  init() {
    super.init();
    this.selectCell(this.$root.find('[data-id="0:0"]'));
    this.$on('formula:input', (text) => {
      this.selection.current.addText(text)
    });
    this.$on('formula:done', () => {
      this.selection.current.focus();
    });
  }
  selectCell($cell) {
    this.selection.select($cell);
    this.$emit('table:selected', $cell);
  }
  async resizeTable(event) {
    try {
      const data = await resizeHandler(this.$root, event);
      this.$dispatch(actions.tableResizeActionCr(data));
    } catch (e) {
      console.warn('Resize error', e.massage)
    }
  }
  onMousedown(event) {
    if (canResize(event)) {
      this.resizeTable(event);
    } else if (isCell(event)) {
      const $target = $(event.target);
      if (event.shiftKey) {
        const $cells = matrix($target, this.selection.current).map((id) =>
          this.$root.find(`[data-id="${id}"]`)
        );
        this.selection.selectGroup($cells);
      } else {
        this.selectCell($target);
      }
    }
  }
  onKeydown(event) {
    const keys = [
      'Enter',
      'Tab',
      'ArrowLeft',
      'ArrowRight',
      'ArrowDown',
      'ArrowUp',
    ];
    const {key} = event;
    if (keys.includes(key) && !event.shiftKey) {
      event.preventDefault();
      const id = this.selection.current.id(true);
      const $next = this.$root.find(nextSelector(key, id));
      this.selectCell($next);
    }
  }
  updateTextInStore(value) {
    this.$dispatch(
        actions.changeTextAction({
          id: this.selection.current.data.id,
          value
        })
    );
  }
  onInput(event) {
    console.log(event.target.textContent);
    this.updateTextInStore($(event.target).addText())
  }
}
