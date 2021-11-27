const limit = require('../config.json').limit;

const format = (data) => {
    if (data === 0)
        return false;
    else if (data === 1)
        return true;
    else
        return data
}

const eSqlInarrayFormat = (array) => {

    let final_string = "";

    array && array.forEach(element => {
        final_string = final_string ? final_string + "," + element.chat_id : element.chat_id;
    });

    return final_string;
}

const getOffset = (pageNumber) => {

    if (pageNumber) {
        return ((pageNumber - 1) * limit);
    } else {
        return 0;
    }
}

module.exports = {
    format: format,
    eSqlInarrayFormat: eSqlInarrayFormat,
    getOffset: getOffset
}