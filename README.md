[![Published on NPM](https://img.shields.io/npm/v/@advanced-rest-client/variables-drawer-editor.svg)](https://www.npmjs.com/package/@advanced-rest-client/variables-drawer-editor)

[![Build Status](https://travis-ci.org/advanced-rest-client/variables-drawer-editor.svg?branch=stage)](https://travis-ci.org/advanced-rest-client/variables-drawer-editor)

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/advanced-rest-client/variables-drawer-editor)


# variables-drawer-editor

A drawer like element to display variables editor.

## Example:

```html
<variables-drawer-editor></variables-drawer-editor>
```

## API components

This components is a part of [API components ecosystem](https://elements.advancedrestclient.com/)

## Usage

### Installation
```
npm install --save @advanced-rest-client/variables-drawer-editor
```

### In an html file

```html
<html>
  <head>
    <script type="module">
      import './node_modules/@advanced-rest-client/variables-drawer-editor/variables-drawer-editor.js';
    </script>
  </head>
  <body>
    <variables-drawer-editor></variables-drawer-editor>
  </body>
</html>
```

### In a Polymer 3 element

```js
import {PolymerElement, html} from './node_modules/@polymer/polymer/polymer-element.js';
import './node_modules/@advanced-rest-client/variables-drawer-editor/variables-drawer-editor.js';

class SampleElement extends PolymerElement {
  static get template() {
    return html`
    <variables-drawer-editor></variables-drawer-editor>
    `;
  }
}
customElements.define('sample-element', SampleElement);
```

### Installation

```sh
git clone https://github.com/advanced-rest-client/variables-drawer-editor
cd api-url-editor
npm install
npm install -g polymer-cli
```

### Running the demo locally

```sh
polymer serve --npm
open http://127.0.0.1:<port>/demo/
```

### Running the tests
```sh
polymer test --npm
```
