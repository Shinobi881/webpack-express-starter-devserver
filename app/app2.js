var myBody = document.getElementById('root');
console.log(myBody); 


const title = document.createElement('h2')
title.textContent = 'Is this thing on?';
myBody.appendChild(title);


console.log(module.hot)
if (module.hot) {
  module.hot.dispose(function() {
    title.parentNode.removeChild(title);
  });
}
