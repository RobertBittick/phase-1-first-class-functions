
function receivesAFunction(cb) {
    return (cb())
}
receivesAFunction(function() {return ' hello'})

function returnsANamedFunction(){
    return function function1(){}
}

function returnsAnAnonymousFunction(){
    return function (){}
}