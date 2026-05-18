// hoisting fxn.(fxn keyword)
function add(a, b) {
    return a + b;
}
console.log(add(2, 3));

//non hoisting fxn.(arrow fxn.))
let addFun = function(a, b) {
    return a + b;
}
console.log(addFun(2, 3));

//anonymous fxn. and self invoking fxn.
(()=>console.log("Hello world"))();
//iife function expression
(function greet() {
    console.log("Hello world");
})();

