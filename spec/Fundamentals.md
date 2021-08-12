# Fundamentals



## Meta

Code is written like ordinary English text top-to-bottom left-to-right.

## Variables

```
5 =: num let
"Hello World" =: str const
```

## Functions

```
} (str)hello function
  `Hello ${str}` return
{

(str)hello =: greeting const
(str)log.console
```

## Objects

```
} =: obj const
  "Hello World": str,
  5: num
{

(num.obj)log.console
```

## If Statements

```
} (str == num) if
  // ...   
} else {
  // ...
{
```