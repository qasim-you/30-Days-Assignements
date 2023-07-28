// create a function hello word function

function helloWord() {
    return function sayFunction() {
        return  "Hello Word ! " ;
    }
    return sayFunction() ;
}
let result = helloWord() ;
console.log(result());



