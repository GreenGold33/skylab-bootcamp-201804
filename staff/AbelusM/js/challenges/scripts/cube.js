'use strict';
/**
 * Calculates the cube of an input number, or array of numbers.
 * 
 * @example 
 * 
 * var res = cube(3); //->27
 * 
 * var res = cube([1, 2, 3]); // -> [1, 8, 27]
 * 
 * @param {number | number[]} number - The input number or array of numbers
 * 
 * @throws {Error} - If input number or array of numbers is not valid.
 * 
 * @returns {number | number []} - The cube of the input number or array of numbers. 
 */
function cube(num) {
    if (typeof num === 'number') return num **3;

    if (!(num instanceof Array)) throw Error('input is not a number, neither an array');
    
    for(var i; i<num.length;i++) {
        if (typeof num[i] !== 'number') throw Error ('input array is not a number at index' + i);
    }
}





// function cube(number) {
//     var arr = [];
//     var result;

//     if (typeof number == 'object') {
//         for (var i = 0; i < number.length; i++) {
//             var temp = number[i];
//             result = temp * temp * temp;
//             arr.push(result);
//         }
//         return arr;
//     } else {
//         var res = number * number * number;
//         return res;
//     }
// }