function ali(num){
    var result =1;
    for (var i=num;i>=1;i--){
        result=result*i;
    } 
    return result;
}
console.log(ali(6));