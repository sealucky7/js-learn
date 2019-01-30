"use strict";

class PhoneCatalogue {
  constructor(options) {
    this._el = options.el;
    this._phones = options.phones;
    const template = document.querySelector('#phone-catalogue-template').innerHTML;
    this._compiledFunction = _.template(template);
    this._render();
  }

  _render() {

    this._el.innerHTML = this._compiledFunction({
      phones: this._phones,
    });
  }

}