# Sdrawkcab

A programming language where things are backwards. Sometimes this is actually forwards.



## What?

Currently it's just a few examples. No compiler, no nothing. You can write it and compute the results yourself on paper.

It covers only a minimally useful language. Convenience features will be considered only once the basic language is firm, to avoid getting caught up.



## Why?

One day when reading code it occurred to me, that reading code is hard.

```js
foo.bar.baz.sayHi("Peter")
```

Why is reading it so hard?

It is so hard, because the interesting part is only at the end preceeded by many uninteresting things in the beginning, which all have to be read first. This led to the initial idea of flipping code around horizontally.

```js
("Peter")sayHi.baz.bar.foo
```

This is much easier to read, because the interesting things are in the beginning of the line, and the rest can be skipped easily.

When writing it up, I noticed more things that are easier to read when switched around, better syntax that make writing easier, and concepts that make the language simpler.

Ultimately, it grew into turning things around which hadn't been turned around before.



## Todo

- destructuring
- async
- ~~macros~~ Code replacement is intransparent, should just strive to make actual language easier, such that code replacement isn't needed, e.g. using functions