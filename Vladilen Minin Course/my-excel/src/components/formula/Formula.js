import {ExcelComponent} from '@core/ExcelComponent';
import {$} from '@core/dom';

export class Formula extends ExcelComponent {
  static className = 'excel-formula';
  constructor($root, options) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'keydown'],
      ...options,
      subscribe: ['currentText']
    });
  }
  toHTML() {
    return `
    <div class="excel-formula-info">fx</div>
    <div
      class="excel-formula-input"
      contenteditable
      spellcheck="false"
      id="formula"
    ></div>
    `;
  }
  init() {
    super.init();
    this.$formula = this.$root.find('#formula');
    this.$on('table:selected', ($cell) => {
      this.$formula.addText($cell.addText());
    });
  }
  changeStore({currentText}) {
    this.$formula.addText(currentText);
  }
  onInput(event) {
    this.$emit('formula:input', $(event.target).addText());
  }
  onKeydown(event) {
    const keys = ['Enter', 'Tab'];
    if (keys.includes(event.key)) {
      event.preventDefault();
      this.$emit('formula:done');
    }
  }
}
