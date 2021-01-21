import { ExcelComponent } from "../../core/ExcelComponent";

export class Header extends ExcelComponent {
  static className = "excel__header";
  toHTML() {
    return `
        <input type="text" class="header__input" placeholder="New Table" />

        <div class="header__buttons">
        <div class="button">
            <span class="material-icons">exit_to_app</span>
        </div>

        <div class="button">
            <span class="material-icons">delete</span>
        </div>
        </div>
    `;
  }
}
