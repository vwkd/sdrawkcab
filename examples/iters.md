# Iterators



## Counter

- using iterator

```
{
    0 ~: id

    [
        {
            1 +~ id
            [
                id =: value
                false =: done
            ]
        } =: next
    ]
} =: counter
```

```js
const counter = (function() {
    let id = 0;

    return {
        next() {
            id += 1;
            return { value: id, done: false };
        }
    };
})();
```

- using generator

<!-- todo: figure sytax out -->

```
{
    0 ~: id

    {
        id <-
        1 +~ id
        -> loop
    } =: loop

    -> loop
} =: gen

-> gen =: counter

value @ next @ counter -> print
value @ next @ counter -> print
value @ next @ counter -> print
```

```js
function* gen() {
    let id = 0;

    while (true) {
        yield id;
        id += 1;
    }
}

const counter = gen();

console.log(counter.next().value)
console.log(counter.next().value)
console.log(counter.next().value)
```



## Fibonacci

- using iterator

```
{
    0 ~: n1
    1 ~: n2

    [
        {
            n1 =: current
            n2 ~ n1
            current +~ n2
            [
                current =: value
                false =: done
            ]
        } =: next
    ]
} =: fibonacci
```

```js
const fibonacci = (function() {
    let n1 = 0;
    let n2 = 1;

    return {
        next() {
            const current = n1;
            n1 = n2;
            n2 = current + n2;

            return { value: current, done: false };
        }
    };
})();
```

- using generator

<!-- todo: figure sytax out -->

```js
function* gen() {
    let n1 = 0;
    let n2 = 1;

    while (true) {
        yield n1;
        n1 = n2;
        n2 = current + n2;
    }
}

const fibonacci = gen();
```