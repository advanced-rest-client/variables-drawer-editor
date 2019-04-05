/**
@license
Copyright 2018 The Advanced REST client authors <arc@mulesoft.com>
Licensed under the Apache License, Version 2.0 (the "License"); you may not
use this file except in compliance with the License. You may obtain a copy of
the License at
http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
License for the specific language governing permissions and limitations under
the License.
*/
import {PolymerElement} from '../../@polymer/polymer/polymer-element.js';
import {mixinBehaviors} from '../../@polymer/polymer/lib/legacy/class.js';
import {IronOverlayBehavior} from '../../@polymer/iron-overlay-behavior/iron-overlay-behavior.js';
import {html} from '../../@polymer/polymer/lib/utils/html-tag.js';
import '../../@polymer/paper-icon-button/paper-icon-button.js';
import '../../@advanced-rest-client/variables-editor/variables-editor.js';
import '../../@advanced-rest-client/arc-icons/arc-icons.js';
/**
 * A drawer like element to display variables editor.
 * Internally it uses `<variables-editor>` as a main element. The drawer is rendered
 * as a right hand side drawer of the application.
 *
 * Suggested use with `with-backdrop` attribute set. Otherwise it should be styled
 * to distinguish opened element from the rest of the application.
 *
 * ### Example
 *
 * ```html
 * <variables-drawer-editor with-backdrop></variables-drawer-editor>
 * ```
 *
 * ### Styling
 *
 * `<variables-drawer-editor>` provides the following custom properties and mixins for styling:
 *
 * Custom property | Description | Default
 * ----------------|-------------|----------
 * `--variables-drawer-editor` | Mixin applied to the element | `{}`
 * `--variables-drawer-editor-min-width` | Minimum width of the variables editor's drawer | `460px`
 * `--variables-drawer-editor-width` | Width of the drawer | `40%`
 * `--variables-drawer-editor-background-color` | Background color od the drawer | `#fff`
 * `--arc-font-headline` | Mixin applied to the title of the drawer | `{}`
 * `--variables-drawer-editor-close-color` | Color of the close icon | ``
 * `--variables-drawer-editor-close-background-color` | Background color of the close icon | ``
 *
 * @memberof UiElements
 * @customElement
 * @polymer
 * @demo demo/index.html
 * @appliesMixin Polymer.IronOverlayBehavior
 */
class VariablesDrawerEditor extends
  mixinBehaviors([IronOverlayBehavior], PolymerElement) {
  static get template() {
    return html`
    <style>
    :host {
      position: fixed;
      min-width: var(--variables-drawer-editor-min-width, 460px);
      width: var(--variables-drawer-editor-width, 40%);
      top: 0;
      right: 0;
      height: 100vh;
      background-color: var(--variables-drawer-editor-background-color, #fff);
      overflow-y: auto;
    }

    .title-area {
      display: flex;
      flex-direction: row;
      align-items: center;
      font-size: var(--arc-font-body1-font-size);
      font-weight: var(--arc-font-body1-font-weight);
      line-height: var(--arc-font-body1-line-height);
      padding: 0 12px;
    }

    h2 {
      font-size: var(--arc-font-headline-font-size);
      font-weight: var(--arc-font-headline-font-weight);
      letter-spacing: var(--arc-font-headline-letter-spacing);
      line-height: var(--arc-font-headline-line-height);
      flex: 1;
      flex-basis: 0.000000001px;
    }

    .close-button {
      color: var(--variables-drawer-editor-close-color);
      background-color: var(--variables-drawer-editor-close-background-color);
    }
    </style>
    <div class="title-area">
      <h2>Variables</h2>
      <paper-icon-button
        icon="arc:close"
        on-click="close"
        class="close-button"
        title="Close variables editor"
        alt="Close variables icon"></paper-icon-button>
    </div>
    <variables-editor
      environment="{{environment}}"
      environments="{{environments}}"
      variables="{{variables}}"
      has-variables="{{hasVariables}}"
      has-environments="{{hasEnvironments}}"></variables-editor>
`;
  }

  static get is() {
    return 'variables-drawer-editor';
  }

  static get properties() {
    return {
      /**
       * Currently activated environment.
       */
      environment: String,
      /**
       * List of all available environments.
       * @type {Array<Object>}
       */
      environments: Array,
      /**
       * List of available variables for the environment.
       * @type {Array<Object>}
       */
      variables: Array,
      /**
       * Computed value, true if variables are available for current
       * environment.
       */
      hasVariables: Boolean,
      /**
       * Computed value, true if there's a list of environments set.
       */
      hasEnvironments: Boolean
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('aria-label', 'variables');
  }
}
window.customElements.define(VariablesDrawerEditor.is, VariablesDrawerEditor);
