[![Build Status](https://travis-ci.org/advanced-rest-client/variables-drawer-editor.svg?branch=stage)](https://travis-ci.org/advanced-rest-client/variables-drawer-editor)  

# variables-drawer-editor

A drawer like element to display variables editor.
Internally it uses `<variables-editor>` as a main element. The drawer is rendered
as a right hand side drawer of the application.

Suggested use with `with-backdrop` attribute set. Otherwise it should be styled
to distinguish opened element from the rest of the application.

### Example
```
<variables-drawer-editor with-backdrop></variables-drawer-editor>
```

### Styling
`<variables-drawer-editor>` provides the following custom properties and mixins for styling:

Custom property | Description | Default
----------------|-------------|----------
`--variables-drawer-editor` | Mixin applied to the element | `{}`
`--variables-drawer-editor-min-width` | Minimum width of the variables editor's drawer | `460px`
`--variables-drawer-editor-width` | Width of the drawer | `40%`
`--variables-drawer-editor-background-color` | Background color od the drawer | `#fff`
`--arc-font-headline` | Mixin applied to the title of the drawer | `{}`

