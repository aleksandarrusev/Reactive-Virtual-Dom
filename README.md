# Reactive-Virtual-Dom
Reactive Virtual Dom is a tiny UI library inspired partly by Vue.js core functionality.  
The ReactiveVDom uses data-driven approach and separates the actual state from the UI. Instead of manipulating the dom elements directly, it uses a Virtual DOM, which on each data change transforms the DOM. 

In order to initialize the app please run  
`npm install`  
`npm run build`
The state can modified in ./src/store.js.

The ReactiveVDom doesn't use templates (yet). Instead each 
node should be created in ./src/js/index.js the function **vDOM** as a new instance of **VDomElement** class.  
By default the rendering happens inside an element with id app (#app).
Example:  
```
function vDOM() {
    const span = new VDomElement({   
      el: {name: 'span', text: 'Inside span'},  
      attributes: {class: ['red']},  
    }), 
    return span;
}
``` 
NOTE: the vDOM function should always return a VDomElement instance; 

Upon initialization VDomElement class requires a config object with the following properties: el, attributes, children, events.
In order to simulate the tree structure of the DOM, the VDomElements can be nested. The nesting happens inside the **children** property. 
Events can be attached to each vDomElement in the events object.

Example: 
```
new VDomElement({
    el: {name: 'div'},
    attributes: {class: ['form']},
    children: [
        new VDomElement({
            el: {name: 'input'},
            attributes: {class: ['input']}
        }),
        new VDomElement({
            el: {name: 'button', text: 'Add'},
            events: {'click': {action: store.actions.addTodo}}
        }),
    ]
}),

```
Check the demo app for more examples.