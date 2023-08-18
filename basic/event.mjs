import {EventEmitter} from 'events';

const emitter = new EventEmitter();

emitter.addListener("Hello", (name) => {
    console.log(`Hello ${name}`)
})

emitter.emit('Hello', 'Juang')