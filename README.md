# _lodash
 Ten of the most popular Lodash methods that add new functionality for numbers, strings, objects, and arrays reimplemented in JavaScript (ECMAScript2020).
 If you wanted to use this library in your own projects right now, you could load it, using a Content Delivery Network (CDN) link, in the <head> of your project’s index.html file, like so:
 
```html
<head>
  <script src='https://cdn.jsdelivr.net/npm/lodash@4.17.20/lodash.min.js'></script>
  <script src='file-that-uses-lodash.js'></script>
</head>
```

The following section contains the **official** [Lodash documentation](https://lodash.com/docs/4.17.15) (that I highly recommend you to visit) for the methods that I implemented in this repository. *I only own the implementations included in this repo. This is part of my attempt to contribute to Lodash, but these implementations are not included in the official open-source repository.*

## **Methods:**
## **Number Methods**
### **_.clamp(number, [lower], upper)**

Clamps number within the inclusive lower and upper bounds.

#### **Since**
4.0.0

#### **Arguments**
**number (number)**: The number to clamp.
**[lower] (number)**: The lower bound.
**upper (number)**: The upper bound.

#### **Returns**
**(number)**: Returns the clamped number.

#### **Example**
```javascript
_.clamp(-10, -5, 5);
// => -5
 
_.clamp(10, -5, 5);
// => 5
```
---
### **_.inRange(number, [start=0], end)**

Checks if n is between start and up to, but not including, end. If end is not specified, it's set to start with start then set to 0. If start is greater than end the params are swapped to support negative ranges.

#### **Since**
3.3.0

#### **Arguments**
**number (number)**: The number to check.
**[start=0] (number)**: The start of the range.
**end (number)**: The end of the range.

#### **Returns**
**(boolean)**: Returns true if number is in the range, else false.

#### **Example**
```javascript
_.inRange(3, 2, 4);
// => true
 
_.inRange(4, 8);
// => true
 
_.inRange(4, 2);
// => false
 
_.inRange(2, 2);
// => false
 
_.inRange(1.2, 2);
// => true
 
_.inRange(5.2, 4);
// => false
 
_.inRange(-3, -2, -6);
// => true
```
---



