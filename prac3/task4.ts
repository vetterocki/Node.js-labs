const calc = (a: number, b: number, c: number): number => a + b + c;

const wrapper = <T extends Function>(func: T) => {
    const cache: { [key: string]: unknown[] } = {};
    return (...args: unknown[]) => {
        const key = args.join(',');
        if (key in cache) {
            console.log(`${cache[key]} from cache`);
            return cache[key];
        } else {
            const result = func(...args);
            cache[key] = result;
            console.log(`${result} calculated`);
            return result;
        }
    };
};

const cachedCalc = wrapper(calc);
cachedCalc(2,2,3); // 7 calculated
cachedCalc(5,8,1); // 14 calculated
cachedCalc(2,2,3); // 7 from cache
