function isAnagram(str1: string, str2: string): boolean {
    const arr1 = str1.split('').sort();
    const arr2 = str2.split('').sort();
    return arr1.join('') === arr2.join('');
}

console.log(isAnagram('@2%^prac', 'carp^%2@'))