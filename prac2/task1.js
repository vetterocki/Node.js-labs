function add(num) {
    let sum = num;
    const innerAdd = nextNum => {
        if (nextNum !== undefined) {
            sum += nextNum;
            return innerAdd;
        }
        return sum;
    };
    return function next() {
        return arguments.length === 0 ? sum : innerAdd(arguments[0]);
    };
}

console.log(add(2)(5)(7)(1)(6)(5)(11)()); // 37