import { Myprint } from './console.js';
// var my = require('./console');
Myprint('a');
Myprint([1,2,3,4,5]);
Myprint( function(){});

function add(x,y){
    return x, y; 
}
console.dir(add);