const repeatString = function(str, num) {
    if (num === 0 || str === ''){
        return '';
    } else if (num < 0){
        return 'ERROR';
    } 
    let finalString = '';
    for(var i = 1; i <= num; i++){
        finalString += str;
    }
    return finalString;
}

module.exports = repeatString
