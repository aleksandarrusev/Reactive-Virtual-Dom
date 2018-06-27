import { initStore } from './reactivity';
import {updateDom} from './ui';

window.init = function() {
    initStore();
    updateDom();
}
