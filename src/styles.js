import { css } from 'lit-element';

export default css`
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

.icon {
  display: block;
  width: 24px;
  height: 24px;
  fill: currentColor;
}
`;
