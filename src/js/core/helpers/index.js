
export const pushToArray = (arr, value) => {
    return [
        ...arr,
        value
    ]
};

export const popToArray = (arr, value) => {
    return [
        value,
        ...arr
    ]
};

export const removeFromArray= (arr, index, count = 1) => {
    const newArr = [...arr];
    newArr.splice(index, count);
    return newArr
}