import { ExcelComponent } from "../../core/ExcelComponent";

export class Formula extends ExcelComponent {
  static className = "excel__formula";
  constructor($root) {
    super($root, {
      name: "Formula",
      listeners: ["input"],
    });
  }
  toHTML() {
    return `
      <div class="formula__info">Fx</div>
      <div class="formula__input" contenteditable="true" spellcheck="false">
      </div>
    `;
  }

  onInput(event) {
    console.log("onInput Formula", event);
    console.log(this.$root);
  }
}
