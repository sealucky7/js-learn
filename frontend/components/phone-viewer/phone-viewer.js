"use strict";

import compiledFunction from './phone-viewer.hbs';
import Component from "../component";

export default class PhoneViewer extends Component {
  constructor(options) {
    super(options.el);

    this.on('click', this._onBackButtonClick.bind(this), '[data-element="back-button"]');
    this.on('click', this._onAddButtonClick.bind(this), '[data-element="add-button"]');
  }

  setPhone(phone) {
    this._phone = phone;
    this._render();
  }

  _render() {
    this._el.innerHTML = compiledFunction({
      phone: this._phone
    });
  }

  _onBackButtonClick(event) {
    this.trigger('back');
  }
  _onAddButtonClick(event) {
    this.trigger('add');
  }

}