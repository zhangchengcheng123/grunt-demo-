#!/usr/bin/node

const add=require('./sum');
var x=process.argv[2]||1,
    y=process.argv[3]||1;
//console.log(`${x}+${y}=${Number(x)+Number(y)}`);
console.log(`${x}+${y}=${add(x,y)}`)
