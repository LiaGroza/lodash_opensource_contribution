# _lodash
 Ten of the most popular Lodash methods that add new functionality for numbers, strings, objects, and arrays reimplemented in JavaScript (ECMAScript2020).
 If you wanted to use this library in your own projects right now, you could load it, using a Content Delivery Network (CDN) link, in the <head> of your project’s index.html file, like so:
 
```html
<head>
  <script src='https://cdn.jsdelivr.net/npm/lodash@4.17.20/lodash.min.js'></script>
  <script src='file-that-uses-lodash.js'></script>
</head>
```

The following section contains the **official** [Lodash documentation]() (that I highly recommend you to visit) for the methods that I implemented in this repository.

## Methods:
### _.clamp(number, [lower], upper)

Clamps number within the inclusive lower and upper bounds.

#### Since
4.0.0

#### Arguments
**number (number)**: The number to clamp.
**[lower] (number)**: The lower bound.
**upper (number)**: The upper bound.

#### Returns
**(number)**: Returns the clamped number.

#### Example
```javascript
_.clamp(-10, -5, 5);
// => -5
 
_.clamp(10, -5, 5);
// => 5
```

