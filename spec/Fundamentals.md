# Fundamentals



## Meta

Code is written like ordinary English text top-to-bottom left-to-right.

## Variable Declaration

```
5 =: num
"cool" =:: str
false =: bool
```

- no keywords, just the operators `=:` and `>`
- immutable by default similar to Rust, operator `=::` for mutability
- must initialise, can use `null` value

```js
const num = 5
let str = "cool"
const bool = false
```

## Variable Assignment

```
"cooler" > str
```

- `>`, `+>`, `->`, `*>`, `/>`, `%>`, `^>`
- like in JS, just `=` replaced with `>`

```js
str = "cooler"
```

## Comparison

- `?=`, `?!=`, `?>`, `?<`, `?>=`, `?<=`
- prefix with `?`, only single `=`
- exact equality, no coercion or magic, transitive

## Arithmetic

- `+`, `-`, `*`, `/`, `%`, `^`
- like in JS, except `^`

## Logic

- `&`, `|`

## Other

- `()` to group



## Functions

```
str >> hello {
  `Hello ${str}` return
}

"Paul" >> hello =: greeting

x, y >> add {
  x + y return
}
```

- no keyword, just the operator `>>`
- multiple arguments are provided by commas, no parentheses for arguments necessary

```js
function hello(str) {
  return `Hello ${str}`
}

let greeting := hello("Paul")
```

## If

```
str ?= num {

} str ?= bool {

} {

}

- no keywords, just the operator `?` before any boolean comparison
- single `=` instead of double `==`
- an expression like in Rust, not a statement

```js
if (str == num) {

} else if str == bool {

} else {

}
```

## For

```
{
  i >> print

  5 ?= i break
  1 +> i
} repeat for 1 =:: i
```

- `repeat` keyword for "for" loop
- conditions inside loop, can put wherever wants, allows to make `while`, `do while`, and other loops
<!-- todo: reconsider, since hard to parse -->
- `break` to break out, `skip` to skip next iteration

```js
for (let i = 1; i += 1; i == 5) {
  console.log(i);
}
```




## Objects

also mirrored vertically

```
{
  "Hello World": str,
  5: num
} =: obj let

num < obj
```

