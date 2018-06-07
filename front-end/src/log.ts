var number = 1; //ES5 
let count = 2; //ES6 scoped

function log(message) {
  console.log(message);
}

var message = 'Hello world!';
log(message);

function doSomething() {
  for (var i = 0; i < 5; i++) {
    log(i);
  }
  for (let j = 0; j < 5; j++) { //j exists only in the "for" scope
    log(j);
  }
  log('Finally:' + i); //5
  //log('Finally:' + j); //error
}

doSomething();
