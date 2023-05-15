export {};


(async function () {
    async function runSequent<T, R>(array: T[], callback: (item: T, index: number) => Promise<R>): Promise<R[]> {
        return await Promise.all(
            array.map(async (item, index) => await callback(item, index))) as R[]
    }

    const array: Array<string> = ["one", "two", "three"];
    const results = await runSequent(array, (item, index) =>
        Promise.resolve({
            item,
            index,
        })
    );
    console.log(results);
})();
