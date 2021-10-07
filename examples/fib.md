# Fibonacci Sequence



## Simple

Inefficiently recomputes each element from scratch. Also doesn't validate argument that `n` is an non-negative integer

```
+ @ Number =: +
- @ Number =: -
?= @ Boolean =: ?=

n ->: {
  : 0 ?= n
  {
    0
  }
  _: 1 ?= n
  {
    1
  }
  _
  {
    (n - 1) -> fib + (n - 2) -> fib
  }
} =: fib

42 -> fib
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

fib(42);
```

### Things to note

- built-in data type operators need to be explicitly declared top-level
- function expression, no declaration
- if statement consists of conditionally executed blocks
- braces could have been on same line as condition, separate lines for readability
- mandatory spaces around infix operators `+`, `-` and `?=`



## Evolved

More efficient with memoization from previous elements. Still doesn't validate argument that `n` is an non-negative integer

```
+ @ Number =: +
- @ Number =: -
?= @ Boolean =: ?=

n, cache ->: {
  : 0 ?= n
  {
    0
  }
  _: 1 ?= n
  {
    1
  }
  _
  {
    :: ! n -> has @ cache
    {
      (n - 1, cache) -> fib + (n - 2, cache) -> fib -> add @ cache
    }
    n -> get @ cache
  }
} =: fib

-> new @ List =: cache
(0, 1) -> add @ cache

42, cache -> fib
```

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

fib(42);
```

### Things to note

- see simple
- non-exhaustive if statement has "longer" syntax `::` instead of `:`
- no optional and default arguments
- chained function calls aren't nested