# type-reverse
[![Build Status](https://travis-ci.org/whizkydee/type-reverse.svg?branch=master)](https://travis-ci.org/whizkydee/type-reverse)

> Lightweight reverse utility around strings, arrays, numbers and more.



## Install

```sh
$ npm install --save type-reverse
```


## Usage

```js
const reverse = require('type-reverse')
```

### API

#### reverse(input, callback)

**Params**

* `input` **{String|Number|Array|NodeList|Boolean}**
* `callback` **{Function}**
* `returns` **{undefined}**

```js
reverse('pizza')
//=> "azzip"

reverse('🦄🐴')
//=> "🐴🦄"

reverse(1234)
//=> -1234

reverse(-1234)
//=> 1234
```

## Booleans

I don't think there's any reason you would use this utility to reverse booleans when you can reverse them with a single not operator `!`, but for the record, this utility supports reversing booleans even though I consider it a bad practice.

```js
reverse(true)
//=> false

reverse(!1)
//=> true
```

## Non-destructive array reverse

When JavaScript's `Array.prototype.reverse()` method is used on arrays, the output of the array when reversed gets written into the original array, this is termed, **destructive array reversal**. On the other hand, this utility, adpots the **non-destructive array reversal** method, which means the `reverse()` function returns the reversed array and still retains the elements of the original array without making any changes to it.

```js
const arr = ['a', 'b', 'c']

reverse(arr)
//=> ['c', 'b', 'a']

console.log(arr)
//=> ['a', 'b', 'c']
```

### `callback`

The callback function accepts two optional parameters; `original` and/or `after`.
* `original` - the initial input that was passed into the function
* `after` - the reversed value of the input

```js
const text = 'I love cats'

reverse(text, (original, after) => {
  return `${original} was reversed to: ${after}`
})
//=> "I love cats was reversed to: stac evol I"
```

#### Manipulating stuff

```js
const text = 'I used to hate cats'

reverse(text, str => {
  return `${str}, but now ${str.replace('used to hate cats', `love 'em`)}`
})
//=> "I used to hate cats, but now I love 'em"
```


## Author

**Olaolu Olawuyi**

* [github/whizkydee](https://github.com/whizkydee)
* [twitter/mrolaolu](https://twitter.com/mrolaolu)

## License

MIT © [Olaolu Olawuyi](http://github.com/whizkydee)
