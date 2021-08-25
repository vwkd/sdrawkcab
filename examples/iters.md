# Iterators



## Counter

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



## Fibonacci

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