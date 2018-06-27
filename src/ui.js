import {store} from './store';
import {VDomElement} from "./models/v-dom-element";

const generateAttributes = (element, attributes) => {
    for (const attribute in attributes) {
        let attrToAdd;
        if(attribute === 'class') {
            attrToAdd = attributes[attribute].join(' ');
        } else {
            attrToadd = attributes[attribute];
        }
        element.setAttribute(attribute, attrToAdd)
    }
};

const render = (rootEl,domObj, isChild) => {
    const root = isChild ? rootEl : document.querySelector(rootEl);

    const newElAttributes = domObj.attributes || null;
    const newElChildren = domObj.children || null;
    const newElEvents = domObj.events || null;

    const newEl = document.createElement(domObj.el.name);
    if(domObj.el.text) {
        const newElText = document.createTextNode(domObj.el.text);
        newEl.appendChild(newElText);
    }

    if(newElAttributes) {
        generateAttributes(newEl, newElAttributes)
    }

    if(newElChildren) {
        newElChildren.forEach((child) => { render(newEl, child, true); })
    }
    if(newElEvents) {
        bindEvents(newElEvents, newEl);
    }

    root.appendChild(newEl);
}

function bindEvents(eventObj, el) {
    for (const event in eventObj) {
        el.addEventListener(event, eventObj[event]);
    }
};
export function updateDom() {
    let children = [
        new VDomElement({
            el:{name: 'strong', text: store.data.title}
        }),
        new VDomElement({
            el:{name: 'hr'}
        }),
        new VDomElement({
            el:{name: 'input'},
            attributes:{class: ['input']}
        }),
        new VDomElement({
            el:{name: 'button', text: 'Add' },
            events:{'click' : store.actions.addFruit}
        }),
        new VDomElement({
            el:{name: 'hr'}
        }),
        new VDomElement({
            el:{name: 'strong', text: store.data.arr}
        }),
    ];

    let parent = new VDomElement({
        el:{name:'div'},
        attributes:{class: ['test-class', 'test2']},
        children: children
    });
    
    document.querySelector('#app').innerHTML = '';

    render('#app',parent);
}
