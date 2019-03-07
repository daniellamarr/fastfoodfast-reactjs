/* eslint-disable require-jsdoc */
/* eslint no-use-before-define: 0 */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import 'babel-polyfill';
import sinon from 'sinon';
import React from 'react';
import { shallow, mount, unmount } from 'enzyme';

global.mount = mount;
global.unmount = unmount;
global.shallow = shallow;
global.React = React;
global.sinon = sinon;
class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = value;
  }

  removeItem(key) {
    delete this.store[key];
  }
}

global.document = {
  getElementsByClassName: document.getElementsByClassName,
};

global.localStorage = LocalStorageMock;
