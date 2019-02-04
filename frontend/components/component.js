"use strict";

export default class Component {
  constructor(element) {
    this._el = element;
    
  }


  on(eventName, callback, selector = '') {
    this._el.addEventListener(eventName, (event) => {
      if(selector && !event.target.closest(selector)) {
        return ;
      }
      callback(event);
    })
  }
  off(eventName, callback) {
    this._el.removeEventListener(eventName, callback)
  }

  trigger(eventName, data = null){
    let customEvent = new CustomEvent(eventName, {
      detail: data,
    });

    this._el.dispatchEvent(customEvent);
  }

  hide() {
    this._el.classList.add('js-hidden');
  }

  show() {
    this._el.classList.remove('js-hidden');
  }

}