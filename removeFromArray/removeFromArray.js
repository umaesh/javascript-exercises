const removeFromArray = function(arr, removeParam) {
    let args = arr.from
    for(var i = 0; i <= arr.length; i++){
        if (removeParam === arr[i]){
            arr.splice(i,1);
        }
    }
    return arr;
}

module.exports = removeFromArray
