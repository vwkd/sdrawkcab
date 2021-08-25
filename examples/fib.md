# Fibonacci Sequence



## Simple

- inefficient 
- todo:
    - validate args, n is int >= 0
    - cache results
    - etc.

```
n ->: {
    0, n -> equal @ Boolean =: isN0
    1, n -> equal @ Boolean =: isN1
    n, 1 -> subtract @ Number =: nMinus1
    n, 2 -> subtract @ Number =: nMinus2

    isN0 : {
        0
    } isN1 :. {
        1
    } :: {
        (nMinus1 -> fib), (nMinus2 -> fib) -> add @ Number
    }
} =: fib
```
<!-- is the grouping in the else necessary? -->

```
can compute fibonacci
    if n is smaller than 2
        return 2
    else
        return sum of fibonacci of n minus 1 plus fibonacci of n minus 2
```

```js
function fib(n) {
    if (n == 0) {
        return 0;
    } else if (n == 1) {
        return 1;
    } else {
        return fib(n-1) + fib(n-2);
    }
}
```


## Evolved

- with memoization

```
// cache is list, by default with 0, 1 values
n, cache {
    0, n -> equal @ Boolean =: isN0
    1, n -> equal @ Boolean =: isN1
    n, 1 -> subtract @ Number =: nMinus1
    n, 2 -> subtract @ Number =: nMinus2
    (n -> has @ cache) -> not @ Boolean =: isntCached

    isN0 : {
        0
    } isN1 :. {
        1
    } :: {
        isntCached : {
            ((nMinus1, cache -> fib), (nMinus2, cache -> fib) -> add @ Number) ~ n -> add @ cache
        }
        n -> get @ cache <-
    }
} =: fib
```

<!-- todo: hasn't yet figured out how to make arguments optional and give default value -->

```js
function fib(n, cache = [0, 1]) {
    if (n == 0) {
        return 0;
    } else if (n == 1) {
        return 1;
    } else {
        if (!cache[n]) {
            cache[n] = fib(n-1, cache) + fib(n-2, cache);
        }
        return cache[n];
    }
}
```