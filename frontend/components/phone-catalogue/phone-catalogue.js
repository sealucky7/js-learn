"use strict";

import compiledFunction from './phone-catalogue.hbs';
import './style.css';

export default class PhoneCatalogue {
  constructor(options) {
    this._el = options.el;
    this._phones = options.phones;
    //const template = require('./phone-catalogue.hbs');

    this._render();
  }

  _render() {

    this._el.innerHTML = compiledFunction({
      phones: this._phones,
    });
  }

}