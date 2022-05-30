# Function



## Declaration

- create new child scope in parent scope
- link function to its scope for closure
- `in` and `out` not part of scope, are special variables local to function
- repeat as with module
- return last expression of scope



## Call

- find scope of function with identifier, continue there
- set `in` to argument, else `None`



## Block

- like Declaration
- set `in` to `None`



## Lint

- argument shouldn't be complex expression, e.g. variable declaration / assignment, if else, block, etc.