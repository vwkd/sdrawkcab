# Variable



## Declaration

- check same identifier doesn't already exist in current scope, error if already exists
- create identifier with value, im/mutable
// todo: stack, heap variables
- check identifier is not `in` or `out`, can't declare special variables



## Assignment

- pick identifier in closest parent scope, error if none exists
- check identifier is mutable, error if immutable
- check type of new value is same as existing value, error if types mismatch
- set identifier to value
// todo: stack, heap variables
- check identifier is not `in`, error if immutable special variable `in`
- on assignment to `out` return value from scope, i.e. first assignment, as later ones are never reached



## Access

- pick identifier in closest parent scope, error if none exists



## Lint

- multiple assignments to `out` in same scope, never reaches later ones