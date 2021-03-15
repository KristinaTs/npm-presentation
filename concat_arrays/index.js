function concatArray(array, values) {
    if(!Array.isArray(array)) {
        return [];
    }

    if(Array.isArray(array) && !Array.isArray(values)) {
        return array;
    }

    return _.concat(array, values);
}

module.exports = concatArray;
