
import {render} from './ui';
import {store} from './store';


export const makeReactive = function(obj, property) {
    let referenceValue = obj[property];
    
    Object.defineProperty(obj, property, {
        configurable: true,
        get() { return referenceValue; },
        set(newValue) {
            console.log(referenceValue + ' was changed to ' + newValue)
            referenceValue = newValue;
            render();
        },
    });
}


export const initStore = function() {
    for (const key in store.data) {
        makeReactive(store.data, key);
    }
};
