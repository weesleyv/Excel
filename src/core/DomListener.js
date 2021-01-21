import { caps } from "./utils";

export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error("$root not provided");
    }
    this.$root = $root;
    this.listeners = listeners;
  }

  initDOMListeners() {
    console.log(this.listeners, "listeners");
    this.listeners.forEach((listener) => {
      const method = methodName(listener);
      console.log(this[method]);
      if (!this[method]) {
        throw new Error(
            `Method ${method} is not implemented in ${this.name} Component`
        );
      }
      this[method] = this[method].bind(this);
      this.$root.on(listener, this[method]);
    });
  }

  removeDOMListeners() {
    this.listeners.forEach((listener) => {
      const method = methodName(listener);
      this.$root.off(listener, this[method]);
    });
  }
}

function methodName(eventName) {
  return "on" + caps(eventName);
}
