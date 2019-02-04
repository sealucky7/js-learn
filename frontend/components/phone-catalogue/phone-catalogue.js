"use strict";

import compiledFunction from './phone-catalogue.hbs';
import './style.css';
import Component from "../component";

export default class PhoneCatalogue extends Component {
  constructor(options) {
    super(options.el);
    this._phones = [];

    this._render();

    this._el.addEventListener('click', this._onPhoneClick.bind(this));
  }

  setPhones(phones) {
    this._phones = phones;
    this._render();
  }


  _render() {

    this._el.innerHTML = compiledFunction({
      phones: this._phones,
    });
  }

  _onPhoneClick(event) {
    let phoneElement = event.target.closest('[data-element="phone"]');

    if(!phoneElement) {
      return;
    }

    let customEvent = new CustomEvent('phoneSelected', {
      detail: phoneElement.dataset.phoneId,
    });

    this._el.dispatchEvent(customEvent);
  }

}