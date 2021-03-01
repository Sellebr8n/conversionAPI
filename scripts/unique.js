exports.unique = (arr) => {
    const list = []
    arr.forEach(el => {
        if(list.indexOf(el) === -1){
            list.push(el)
        }
    });
    return list
}