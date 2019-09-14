
import { html } from 'lit-html';
import { ArcDemoPage } from '@advanced-rest-client/arc-demo-helper/ArcDemoPage.js';
import '@advanced-rest-client/arc-demo-helper/arc-interactive-demo.js';
import '@advanced-rest-client/arc-models/variables-model.js';
import '@anypoint-web-components/anypoint-button/anypoint-button.js';
import '@advanced-rest-client/variables-manager/variables-manager.js';
import '@advanced-rest-client/variables-evaluator/variables-evaluator.js';
import '../variables-drawer-editor.js';

class DemoPage extends ArcDemoPage {
  constructor() {
    super();
    this.initObservableProperties([
      'compatibility',
      'outlined'
    ]);
    this._componentName = 'variables-drawer-editor';
    this.demoStates = ['Filled', 'Outlined', 'Anypoint'];

    this._demoStateHandler = this._demoStateHandler.bind(this);
    this._toggleMainOption = this._toggleMainOption.bind(this);
  }

  _toggleMainOption(e) {
    const { name, checked } = e.target;
    this[name] = checked;
  }

  _demoStateHandler(e) {
    const state = e.detail.value;
    this.outlined = state === 1;
    this.compatibility = state === 2;
  }

  _openOverlay() {
    document.querySelector('variables-drawer-editor').opened = true;
  }

  _demoTemplate() {
    const {
      demoStates,
      darkThemeActive,
      compatibility,
      outlined
    } = this;
    return html`
      <section class="documentation-section">
        <h3>Interactive demo</h3>
        <p>
          This demo lets you preview the variables drawer editor element with various
          configuration options.
        </p>

        <arc-interactive-demo
          .states="${demoStates}"
          @state-chanegd="${this._demoStateHandler}"
          ?dark="${darkThemeActive}"
        >
          <anypoint-button
            slot="content"
            ?compatibility="${compatibility}"
            @click="${this._openOverlay}"
            aria-label="Activate to open variables editor">Open overlay</anypoint-button>

        </arc-interactive-demo>

        <variables-drawer-editor
          ?compatibility="${compatibility}"
          ?outlined="${outlined}"
        ></variables-drawer-editor>
      </section>
    `;
  }

  contentTemplate() {
    return html`
      <variables-model></variables-model>
      <variables-manager></variables-manager>
      <variables-evaluator jexl-path="ArcVariables.JexlDev"></variables-evaluator>

      <h2>Variables drawer editor</h2>
      ${this._demoTemplate()}
    `;
  }
}

const instance = new DemoPage();
instance.render();
window._demo = instance;
