console.log('Hello World !!')
const fs = require('fs');
const os = require('os');
const notes = require('./notes')
const _ = require('lodash')
// console.log(_.isString('true'))
// console.log('Result: ', notes.add(9,2));
var filteredArray = _.uniq(['a',1,'a',1,2,3,4]);
console.log(filteredArray)
// var res = notes.addNote();
// console.log(res)
// var user = os.userInfo();
// fs.appendFile('greetings.txt',`Hello ${user.username}! You are ${notes.age}`,function(err){
//     if(err){
//         console.log('Unable to wire to file');
//     }
// });