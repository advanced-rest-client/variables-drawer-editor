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
import { LitElement, html } from 'lit-element';
import { ArcOverlayMixin } from '@advanced-rest-client/arc-overlay-mixin/arc-overlay-mixin.js';
import { close } from '@advanced-rest-client/arc-icons/ArcIcons.js';
import '@anypoint-web-components/anypoint-button/anypoint-icon-button.js';
import '@advanced-rest-client/variables-editor/variables-editor.js';
import styles from './styles.js';
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
 * @demo demo/index.html
 * @appliesMixin Polymer.IronOverlayBehavior
 */
export class VariablesDrawerEditor extends ArcOverlayMixin(LitElement) {
  static get styles() {
    return styles;
  }

  render() {
    const { compatibility, outlined } = this;
    return html`
    <div class="title-area">
      <h2>Variables</h2>
      <anypoint-icon-button
        class="close-button"
        aria-label="Activate to close variables editor"
        title="Close variables editor"
        @click="${this.close}"
        ?compatibility="${compatibility}">
        <span class="icon">${close}</span>
      </anypoint-icon-button>
    </div>
    <variables-editor
      ?compatibility="${compatibility}"
      ?outlined="${outlined}"></variables-editor>`;
  }

  static get properties() {
    return {
      /**
       * Enables compatibility with Anypoint platform
       */
      compatibility: { type: Boolean },
      /**
       * Enables Material Design Outlined inputs
       */
      outlined: { type: Boolean }
    };
  }

  connectedCallback() {
    /* istanbul ignore else */
    if (super.connectedCallback) {
      super.connectedCallback();
    }
    this.setAttribute('aria-label', 'variables');
  }
}
