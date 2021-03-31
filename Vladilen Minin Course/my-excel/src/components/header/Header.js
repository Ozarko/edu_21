import {ExcelComponent} from '@core/ExcelComponent';

export class Header extends ExcelComponent {
  static className = 'excel-header';
  constructor($root, options) {
    super($root, {
      name: 'Header',
      ...options,
    });
  }
  toHTML() {
    return `
    <input type="text" class="excel-header-input" value="Нова Таблиця" />
    <div class="excel-header-bbox">
      <div class="excel-header-button">
        <span class="material-icons"> delete </span>
      </div>
      <div class="excel-header-button">
        <span class="material-icons"> exit_to_app </span>
      </div>
    </div>
    `;
  }
}
