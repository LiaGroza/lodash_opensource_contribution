const _ = {
    // ARRAY

    // Creates an array of elements split into groups the length of size. 
    // If array can't be split evenly, the final chunk will be the remaining elements.
    chunk(array, size) {
        if(size === undefined) {
            size = 1;
        }
        let newArray = [], auxArray = [];
        for(let i=0; i<array.length; i++) {
            if(auxArray.length === size) {
                auxArray = [array[i]];
            }
            else {
                auxArray.push(array[i]);
            }
            if(auxArray.length === size || i === array.length-1) {
                newArray.push(auxArray);
            }
        }
        return newArray;
    },

    // Creates a slice of array with n elements dropped from the beginning.
    drop(array, number) {
        if(number === undefined) {
            number = 1;
        }
        return array.slice(number, array.length);
    },

    // Creates a slice of array excluding elements dropped from the beginning. Elements are dropped until predicate returns falsey. 
    // The predicate is invoked with three arguments: (value, index, array).
    dropWhile(array, predicate) {
        const dropNumber = array.findIndex((element, index) => {return !predicate(element, index, array);});
        return this.drop(array, dropNumber);
    },


    // NUMBER

    // Clamps number within the inclusive lower and upper bounds
    clamp(number, lower, upper) {
        return Math.min(Math.max(number, lower), upper);
    },

    // Checks if n is between start and up to, but not including, end. 
    // If end is not specified, it's set to start with start then set to 0. 
    // If start is greater than end the params are swapped to support negative ranges.
    inRange(number, start, end) {
        if(end === undefined) {
            end = start;
            start = 0;
        }
        else if(end < start) {
            let aux = start;
            start = end;
            end = aux;
        }
        if(number >= start && number < end) {
            return true;
        }
        else {
            return false;
        }
    },


    // OBJECT

    // Returns the key of the first element predicate returns truthy for. If there is no such element, undefined is returned.
    findKey(object, predicate) {
        let result;
        Object.keys(object).some(key => {
            const value = object[key];
            if(predicate(value, key, object)) {
                result = key;
                return true;
            }
        });
        return result;
    },

    // Checks if path is a direct property of object.
    has(object, path) {
        return object != null && hasOwnProperty.call(object, path);
    },

    // Creates an object composed of the inverted keys and values of object. 
    // If object contains duplicate values, subsequent values overwrite property assignments of previous values.
    invert(object) {
        newObject = {};
        keys = Object.keys(object);
        for(key of keys) {
            const value = object[key];
            newObject[value] = key;
        }
        return newObject;
    },


    // STRING

    // Pads string on the left and right sides if it's shorter than length. 
    // Padding characters are truncated if they can't be evenly divided by length.
    pad(string, length, chars) {
        if(chars === undefined) {
            chars = ' ';
        }
        if(length <= string.length) {
            return string;
        }
        else {
            paddingLeftLength = Math.floor((length-string.length)/2);
            paddingRightLength = length-string.length-paddingLeftLength;

            wholeLeftPaddingTimes = Math.trunc(paddingLeftLength / chars.length);
            wholeRightPaddingTimes = Math.trunc(paddingRightLength / chars.length);

            leftRemainder = paddingLeftLength - wholeLeftPaddingTimes*chars.length;
            rightRemainder = paddingRightLength - wholeRightPaddingTimes*chars.length;

            newString = '';
            for(let i=0; i<wholeLeftPaddingTimes; i++) {
                newString += chars;
            }
            newString += chars.substring(0, leftRemainder) + string;
            for(let i=0; i<wholeRightPaddingTimes; i++) {
                newString += chars;
            }
            newString += chars.substring(0, rightRemainder);
            return newString;
        }
    },

    // Splits string into an array of its words.
    words(string, pattern) {
        // Function that checks whether a string has a unicode word
        const hasUnicodeWord = RegExp.prototype.test.bind(/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/);
        const asciiWords = string.match(/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g); // Checks for any alphanumeric characters matching
        // An alphanumeric character is not from [NULL - /], [: - @], [[ - `] or [{ - DELL] in ASCII
        if(pattern === undefined) {
            const result = hasUnicodeWord(string) ? unicodeWords(string) : asciiWords;
            return result || [];
        }
        return string.match(pattern) || [];
    }
};

module.exports = _;