var number = 1; //ES5
var count = 2; //ES6
function log(message) {
    console.log(message);
}
var message = 'Hello world!';
log(message);
function doSomething() {
    for (var i = 0; i < 5; i++) {
        log(i);
    }
    log('Finally:' + i);
}
doSomething();
