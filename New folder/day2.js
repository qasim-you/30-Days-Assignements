// create counter function in js 
function createValue(n) {
    let counterValue = n ;
    function counter() {
        const currentValue = counterValue ;
        counterValue += 1 ;
        return currentValue;
    } 
    return counter;
    
}
let result = createValue(5) ;
console.log(result());
console.log(result());
console.log(result());