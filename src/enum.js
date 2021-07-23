'use strict';

export default class Enum {
    constructor(enumObject) {
        const handler = {
            get(target, prop) {
                if (typeof(target[prop]) !== undefined) {
                    return target[prop];
                }
                throw new Error(`No such enum value: ${prop}`);
            },
            set() {
                throw new Error('Cannot add/update properties on an Enum instance after it is defined');
            }
        }

        return new Proxy(enumObject, handler);
    }
}