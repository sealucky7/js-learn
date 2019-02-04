"use strict";

import compiledFunction from './phone-catalogue.hbs';
import './style.css';
import Component from "../component";

export default class PhoneCatalogue extends Component {
  constructor(options) {
    super(options.el);
    this._phones = options.phones;

    this._render();

    this.on('click', this._onPhoneClick.bind(this), '[data-element="phone"]');
  }


  _render() {

    this._el.innerHTML = compiledFunction({
      phones: this._phones,
    });
  }

  _onPhoneClick(event) {
    let phoneElement = event.target.closest('[data-element="phone"]');

    this.trigger('phoneSelected', phoneElement.dataset.phoneId)
  }

}