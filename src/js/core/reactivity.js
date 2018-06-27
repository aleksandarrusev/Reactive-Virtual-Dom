import {renderDom} from './ui';
import {store} from '../store';

const makeReactive = (obj, property) => {
    let referenceValue = obj[property];
    
    Object.defineProperty(obj, property, {
        configurable: true,
        get() { return referenceValue; },
        set(newValue) {
            referenceValue = newValue;
            renderDom();
        },
    });
}


export const makeStoreReactive = () => {
    for (const key in store.data) {
        makeReactive(store.data, key);
    }
};


