# Fibonacci Sequence



## Simple

Inefficiently recomputes each element from scratch. Also doesn't validate argument that `n` is an non-negative integer

```
+ in Number as +
- in Number as -
?= in Boolean as ?=

n of {
  if 0 ?= n
  {
    0
  }
  else if 1 ?= n
  {
    1
  }
  else
  {
    (n - 1) to fib + (n - 2) to fib
  }
} as fib

42 to fib
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
+ in Number as +
- in Number as -
?= in Boolean as ?=

n, cache of {
  if 0 ?= n
  {
    0
  }
  else if 1 ?= n
  {
    1
  }
  else
  {
    maybe ! n to has in cache
    {
      (n - 1, cache) to fib + (n - 2, cache) to fib to add in cache
    }
    n to get in cache
  }
} as fib

to new in List as cache
(0, 1) to add in cache

42, cache to fib
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
- non-exhaustive if statement has "longer" syntax `maybe` instead of `if`
- no optional and default arguments
- chained function calls aren't nested