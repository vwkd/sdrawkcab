# Fibonacci Sequence



## Simple

Inefficiently recomputes each element from scratch. Also doesn't validate argument that `n` is an non-negative integer

```
+ of Number is +
- of Number is -
?= of Boolean is ?=

&{
  in is n
  if 0 ?= n {
    0
  }
  else if 1 ?= n {
    1
  }
  else {
    n - 1 to fib + n - 2 to fib
  }
} is fib

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
+ of Number is +
- of Number is -
?= of Boolean is ?=

&{
  in is [ n, cache ]
  if 0 ?= n {
    0
  }
  else if 1 ?= n {
    1
  }
  else {
    maybe ! n to has of cache {
      ([ n - 1 is n, cache ] to fib + [ n - 2 is n, cache ] to fib) to add of cache
    }
    n to get of cache
  }
} is fib

to new of List is cache
(0, 1) to add of cache

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