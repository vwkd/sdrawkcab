# Fibonacci Sequence



## Simple

- inefficient 
- todo:
    - validate args, n is int >= 0
    - cache results
    - etc.

```
n -> fib {
    0 ?= n {
        0
    } 1 ?= n {
        1
    } {
        n-1 -> fib + n-2 -> fib
    }
}
```

- note, no return is needed because the `if` is the last expression, hence its value is returned which is the last values in the selected branch
- todo:
    - grouping necessary?

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