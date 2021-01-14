const filter = (list, filterItem) => {
    let result = [];
    for(var i = 0; i < list.length; i++){
        if(filterItem(list[i])){
            result.push(list[i]);
        }
    }
    return result;
}

module.exports = filter;