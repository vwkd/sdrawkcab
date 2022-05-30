# Variable



## Declaration

- check same identifier doesn't already exist in current scope, error if already exists
- create identifier with value, im/mutable
// todo: stack, heap variables



## Assignment

- pick identifier in closest parent scope, error if none exists
- check identifier is mutable, error if immutable
- check type of new value is same as existing value, error if types mismatch
- set identifier to value
// todo: stack, heap variables



## Access

- pick identifier in closest parent scope, error if none exists