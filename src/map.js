const map = (list, mapfunction) => {
    var result = [];
    for (var position = 0; position < list.length; position ++){
        result.push(mapfunction(list[position]));
    }
    return result;
}

module.exports = map;