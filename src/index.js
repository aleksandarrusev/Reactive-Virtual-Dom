import { initStore } from './reactivity';
import {render} from './ui';

window.init = function() {
    initStore();
    render();
}
