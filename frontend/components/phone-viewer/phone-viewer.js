"use strict";

import compiledFunction from './phone-viewer.hbs';

export default class PhoneViewer {
  constructor(options) {
    this._el = options.el;
  }

  setPhone(phone) {
    this._phone = phone;
    this._render();
  }

  show() {
    this._el.classList.remove('js-hidden');
  }

  _render() {
    this._el.innerHTML = compiledFunction({
      phone: this._phone
    });
  }

}