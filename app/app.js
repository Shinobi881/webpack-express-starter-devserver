// import angular from 'angular';
// var app2 = require('./app2')
// console.log(angular);

const testing = 'testing 123';

var myBody = document.getElementById('root');
console.log(myBody); 


const title = document.createElement('h2')
title.textContent = 'Is this thing on?';
myBody.appendChild(title);

// {
//   let newTest = '2'
//   console.log(newTest)
// }

console.log('this wordBreakks');
console.log('this works again');
console.log('this works again and again');
// document.write('hello')
// document.write('testing 123')

const tryagain = 'is my ES6 working?'

console.info(tryagain)
// console.log(module.hot)
if (module.hot) {
  module.hot.accept();
  
    if (title.parentNode !== null) {
  module.hot.dispose(function() {
      title.parentNode.removeChild(title);
  });
    }
}