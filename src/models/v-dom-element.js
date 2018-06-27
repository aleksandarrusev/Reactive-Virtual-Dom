export class VDomElement {
    constructor(config) {
        this.el = config.el;
        this.attributes = config.attributes;
        this.children = config.children;
        this.events = config.events;
    }
}