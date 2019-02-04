"use strict";

import compiledFunction from './shopping-cart.hbs';
import Component from "../component";

export default class ShoppingCart extends Component {
  constructor(options) {
    super(options.el);

    this._products = [];

    this._render();
  }

  addProduct(product) {
    this._products.push(product);
    this._render();
  }

  _render() {
    this._el.innerHTML = compiledFunction({
      phone: this._phone
    });
  }

};