[![Published on NPM](https://img.shields.io/npm/v/@advanced-rest-client/variables-drawer-editor.svg)](https://www.npmjs.com/package/@advanced-rest-client/variables-drawer-editor)

[![Build Status](https://travis-ci.org/advanced-rest-client/variables-drawer-editor.svg?branch=stage)](https://travis-ci.org/advanced-rest-client/variables-drawer-editor)

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/advanced-rest-client/variables-drawer-editor)


# variables-drawer-editor

A drawer like element to display variables editor.

## Usage

### Installation
```
npm install --save @advanced-rest-client/variables-drawer-editor
```

```js
import { LitElement, html } from 'lit-element';
import '@advanced-rest-client/variables-drawer-editor/variables-drawer-editor.js';
import '@advanced-rest-client/variables-manager/variables-manager.js';
import '@advanced-rest-client/variables-evaluator/variables-evaluator.js';
import '@advanced-rest-client/arc-models/variables-model.js';

class SampleElement extends LitElement {
  render() {
    return html`
    <variables-editor></variables-editor>

    <variables-model></variables-model>
    <variables-manager></variables-manager>
    <variables-evaluator jexl-path="..."></variables-evaluator>
    `;
  }
}
customElements.define('sample-element', SampleElement);
```


## Development

```sh
git clone https://github.com/advanced-rest-client/variables-drawer-editor
cd variables-drawer-editor
npm install
```

### Running the demo locally

```sh
npm start
```

### Running the tests

```sh
npm test
```

## API components

This components is a part of [API components ecosystem](https://elements.advancedrestclient.com/)
