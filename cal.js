function add(a,b){
    return a+b;
}
function even(a){
    if(a%2==0){
        return 'even'
    }
    else{
        return 'odd'
    }
}
function sub(a,b){
    return a-b;
}

exports.add=add
exports.even=even
exports.sub=sub