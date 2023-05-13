function arrayChangeDelete<T>(array: Array<T>, filter: (item: T) => boolean): Array<T> {
    const deletedElements = array.filter(filter);
    array.splice(0, array.length, ...array.filter(item => !filter(item)));
    return deletedElements;
}

const array = [1, 2, 3, 6, 7, 9];
const deletedElements = arrayChangeDelete(array, (item) => item % 2 === 0);
console.log(array);
console.log(deletedElements);