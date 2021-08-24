# Sdrawkcab

A programming language where things are backwards. Sometimes this is actually forwards.



## Why?

One day when reading code it occurred to me, that reading code is hard because the stuff I care about is always at the end preceeded by lots of stuff I didn't care about in the beginning.

This led to the initial idea of mirroring code horizontally. This then grew more general to turning things around, most of which had never been turned around.

Consider calling a method on an object.

```
foo.bar.baz.sayHi("Peter")
```

Most often you're interested in what does the actual work, which here is the argument and the method, not the intermediary objects. The information you need is at the end of the line, requiring you to skip over details you're not interested in.

Consider instead

```
("Peter")sayHi.baz.bar.foo
```

Notice, how you didn't even bother reading the line to the end? That's because the information you wanted was right at the beginning of the line! And the information you didn't want was at the end, so you could skip it easily!



## Todo

- type annotation
- destructuring
- async