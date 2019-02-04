"use strict";

export default class Component {
  constructor(element) {
    this._el = element;
    
  }

  hide() {
    this._el.classList.add('js-hidden');
  }

  show() {
    this._el.classList.remove('js-hidden');
  }

}