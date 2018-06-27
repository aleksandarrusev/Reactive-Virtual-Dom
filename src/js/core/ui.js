import {vDOM} from '../';


const generateAttributes = (element, attributes) => {
    for (const attribute in attributes) {
        let attrToAdd;
        if (attribute === 'class') {
            attrToAdd = attributes[attribute].join(' ');
        } else {
            attrToadd = attributes[attribute];
        }
        element.setAttribute(attribute, attrToAdd)
    }
};

const updateDom = (rootEl, domObj, isChild) => {
    const root = isChild ? rootEl : document.querySelector(rootEl);

    const newElAttributes = domObj.attributes || null;
    const newElChildren = domObj.children || null;
    const newElEvents = domObj.events || null;

    const newEl = document.createElement(domObj.el.name);
    if (domObj.el.text) {
        const newElText = document.createTextNode(domObj.el.text);
        newEl.appendChild(newElText);
    }

    if (newElAttributes) {
        generateAttributes(newEl, newElAttributes)
    }

    if (newElChildren) {
        newElChildren.forEach((child) => {
            updateDom(newEl, child, true);
        })
    }
    if (newElEvents) {
        bindEvents(newElEvents, newEl);
    }

    root.appendChild(newEl);
}

const bindEvents = (eventObj, el) => {
    let action, params, fn;
    for (const event in eventObj) {
        action = eventObj[event]['action'];

        if(eventObj[event].hasOwnProperty('params')) {
            params = eventObj[event]['params'];
            el.addEventListener(event, (e) => action(e,  ...params));
        } else {
            el.addEventListener(event, (e) => action(e));
        }
    }
};

export const renderDom = () => {

    const root = vDOM();
    document.querySelector('#app').innerHTML = '';

    updateDom('#app', root);
}
