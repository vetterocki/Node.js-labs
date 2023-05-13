function deepClone(obj) {
    if (typeof obj !== 'object' || obj === null)
        return obj;
    const newObj = Array.isArray(obj) ? [] : {};

    for (const key in obj) {
        newObj[key] = deepClone(obj[key]);
    }

    return newObj;
}

const obj1 = {
    name: 'Vitalii',
    age: 20,
    hobbies: ['studying'],
};

const obj2 = deepClone(obj1);

obj2.name = 'Not Vitalii';
obj2.hobbies.push('painting');

console.log(obj1);
console.log(obj2);
