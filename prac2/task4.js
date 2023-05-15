const calc = (a, b, c) => a + b + c;
const wrapper = (func) => {
    const cache = {};
    return function (...args) {
        const key = args.join(',');
        if (cache[key]) {
            console.log(`${cache[key]} from cache`);
            return cache[key];
        } else {
            const result = func(...args);
            cache[key] = result;
            console.log(`${result} calculated`);
            return result;
        }
    }
};

const cachedCalc = wrapper(calc);
cachedCalc(2,2,3); // 7 calculated
cachedCalc(5,8,1); // 14 calculated
cachedCalc(2,2,3); // 7 from cache
