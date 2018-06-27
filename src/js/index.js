import '../scss/style.scss';

import {init} from './core';
import {store} from './store';
import {VDomElement} from './core/models/v-dom-element';

// @returns vDomElement
export const vDOM = () => {
    const children = [
        new VDomElement({
            el: {name: 'h1', text: store.data.title}
        }),
        new VDomElement({
            el: {name: 'h3', text: 'Add a Todo'}
        }),
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
        new VDomElement({
            el: {name: 'h5', text: 'Todos count: ' + store.data.todos.length}
        }),

    ];

    store.data.todos.forEach((item, index) => {
        children.push(
            new VDomElement({
                el: {name: 'div', text: item},
                attributes: {class: ['todo']},
                children: [
                    new VDomElement({
                        el: {name:'span', text: 'X'},
                        attributes: {class: ['remove']},
                        events: {
                            'click': {
                                action: store.actions.removeTodo,
                                params: [index]
                            }
                        },
                    })
                ]
            }))
    });

    const root = new VDomElement({
        el: {name: 'div'},
        attributes: {class: ['test-class', 'test2']},
        children: children
    });

    return root;

}

window.addEventListener('DOMContentLoaded', function () {
    init();
}, true);
