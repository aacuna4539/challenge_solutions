/**
 * Created by Armando on 6/7/2016.
 */
/*
* Given an integer, , perform the following conditional actions:
* If  is odd, print Weird
* If  is even and in the inclusive range of  to , print Not Weird
* If  is even and in the inclusive range of  to , print Weird
* If  is even and greater than , print Not Weird
*
* Constraints: 1 >= n && n <= 100
*
 ****/

function main(N) {
    var check_twoToFive = x => x < 6 && x > 1;
    var check_sixToTwnty = x => x > 5 && x < 21;
    var even = x => x % 2 === 0;
    var isOdd = x => Math.abs( x % 2) === 1;
    var isTrue = (x,y) => x === true && y === true;
    var inRange = (min, max) => (x) => x >= min && x <= max;
    var composeThree = function(fn1, fn2, fn3){return function(x){ return fn1(fn2(x), fn3(x));}};
    var test_even_twoToFive = composeThree(isTrue, even, inRange(2,5));
    var test_even_sixToTwenty = composeThree(isTrue, even, inRange(6,20));
    var composeSix = function (fn1, fn2, fn3, fn4, fn5, fn6) {
        return function (x) {
            return (fn6(fn1(x), fn2(x)) ? 'Not Weird' : fn6(fn3(x), fn4(x)) ? 'Weird' : fn5(x) ? 'Weird' : 'Not Weird');
        }
    };

    var testing = composeSix(check_twoToFive, test_even_twoToFive, check_sixToTwnty, test_even_sixToTwenty, isOdd, isTrue);
    console.log(testing(N));
}
