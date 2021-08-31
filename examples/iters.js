
// IMPLEMENTATION






// USER

const counter = (function() {
    let id = 0;

    return {
        next() {
            id += 1;
            return { value: id, done: false };
        }
    };
})();

const iterable = { iterator() {
    let id = 0;

    return {
        next() {
            id += 1;
            return { value: id, done: false };
        }
    };
}}

function mw1(value) {
    // ...do something
    value = value * 2;
    return value;
}

function mw2(value) {
    // ...do something
    return value;
}

// ...more

// iterable -> mw1 -> mw2