'use strict';

import Keys from './keys.js';

const keyMap = new Map([
    ['KeyA', Keys.LEFT],
    ['ArrowLeft', Keys.LEFT],

    ['KeyD', Keys.RIGHT],
    ['ArrowRight', Keys.RIGHT],

    ['KeyW', Keys.UP],
    ['ArrowUp', Keys.UP],

    ['KeyS', Keys.DOWN],
    ['ArrowDown', Keys.DOWN],
]);

export default class Controller {
    constructor() {
        this.buttonPressed = new Set();
        window.addEventListener('keydown', (event) => {
            const { code } = event;
            if (keyMap.has(code) && this.buttonPressed.size == 0 && !this.buttonPressed.has(keyMap.get(code))) {
                this.buttonPressed.add(keyMap.get(code));
            }
        });

        window.addEventListener('keyup', (event) => {
            const { code } = event;
            if (keyMap.has(code) && this.buttonPressed.size == 1 && this.buttonPressed.has(keyMap.get(code))) {
                this.buttonPressed.delete(keyMap.get(code));
            }
        });
    }
}