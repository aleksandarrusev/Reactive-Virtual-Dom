import {makeStoreReactive} from './reactivity';
import {renderDom} from './ui';

export const init = () => {
    makeStoreReactive();
    renderDom();
}