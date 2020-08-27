const fib = (x) => {
    if (!x || x <= 1) return 1;
    return fib(x-1) + fib(x-2);
};

const decorator = (fnc) => {
    const cache = new Map();
    return (x) => {
        if(cache.has(x)) {
            return cache.get(x);
        };

        cache.set(x, fnc(x));

        return cache.get(x);
    };
};

const memoizedFib = decorator(fib);

console.log(memoizedFib(40));

console.log(memoizedFib(40));
console.log(memoizedFib(40));
console.log(memoizedFib(40));
console.log(memoizedFib(40));
