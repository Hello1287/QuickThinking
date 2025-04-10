global.luckyNum = 23;
console.log("Hello Seattle")
console.log(process.env.USERNAME)
setTimeout(()=>{
    console.log("Hey")
}, 1000)
process.on('exit', function(){
    console.log("hey")
})

const {EventEmitter} = require('events');
const eventEmitter = new EventEmitter();
eventEmitter.on('lunch', ()=>{
    console.log('yum')
})
eventEmitter.emit('EGH');

const {readFile, readFileSync} = require('fs').promises;

async function hello(){
    try {
        const txt = await readFile('./hello.txt', 'utf8')
        console.log(txt);
    }
    catch(error){
        console.log("error");
    }

}

const myModule = require('./my-module')
const express = require('express')


const app = express();
app.get('/', async (request, response) =>{
    try {
        response.send(await readFile('./index.html', 'utf8'))
    }
    catch{
        console.log("sorry there was an error")
    }
})
console.log(process.env);
app.listen(process.env.PORT || 3000, ()=>{console.log(`App available on http://localhost:3000`)});
console.log(myModule.city);
hello()