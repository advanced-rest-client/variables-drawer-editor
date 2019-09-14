import { fixture, assert } from '@open-wc/testing';
import * as MockInteractions from '@polymer/iron-test-helpers/mock-interactions.js';
import '../variables-drawer-editor.js';

describe('<variables-drawer-editor>', function() {
  async function basicFixture() {
    return await fixture(`<variables-drawer-editor debouncetimeout="20"></variables-drawer-editor>`);
  }
  let element;
  beforeEach(async () => {
    element = await basicFixture();
  });

  it('Opens the element', function(done) {
    element.opened = true;
    setTimeout(function() {
      const display = getComputedStyle(element).getPropertyValue('display');
      assert.equal(display, 'block');
      done();
    }, 100);
  });

  it('Click on the close icon closes the drawer', function() {
    element.opened = true;
    const button = element.shadowRoot.querySelector('anypoint-icon-button');
    MockInteractions.tap(button);
    const display = getComputedStyle(element).getPropertyValue('display');
    assert.equal(display, 'none');
  });
});
