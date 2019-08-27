# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @CamilaRivera/lotide`

**Require it:**

`const _ = require('@CamilaRivera/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `middle(array)`: return the middle element of an array
* `tail(array)`: return an array with all the elements except the fist element
* `head(array)`: return the first element of an array
* `assertArraysEqual(array1, array2)`: if two arrays are equal print a true message else print a false message 
* `assertEqual(element1, element2)`: check if two elements are the same
* `flatten(upToOneNestedArray)`: receive an up to one grade nested array and returns a single array
* `countOnly(array, object)`: return the first element of an array
* `eqArray(array)`: check if two arrays are equal and return a boolean
