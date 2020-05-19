//1.为数组 arr 中的每个元素求二次方。不要直接修改数组 arr，结果返回新的数组
function square() {
    var arr = [1, 2, 3, 4, 5];
    var newarr = [];
    for (var i in arr) {
        newarr.push(arr[i] * arr[i]);
    }
    return newarr;
}
var a = square();
console.log(a);

//2.在数组 arr 中，查找值与 item 相等的元素出现的所有位置
function find(arr, item) {
    var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'a', 'b', 'c'];
    var item = 'a';
    var newarr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == item) {
            newarr.push(i);
        }
    } return newarr;
}
var b = find();
console.log(b);


// 3.实现 fizzBuzz 函数，参数 num 与返回值的关系如下：
// 1、如果 num 能同时被 3 和 5 整除，返回字符串 fizzbuzz
// 2、如果 num 能被 3 整除，返回字符串 fizz
// 3、如果 num 能被 5 整除，返回字符串 buzz
// 4、如果参数为空或者不是 Number 类型，返回 false
// 5、其余情况，返回参数 num
function fizzBuzz(num) {
    var num = 1024;
    if (typeof num != "number") {
        return false;
    }
    if (!(num % 3) && !(num % 5)) {
        return "fizzbuzz";
    } else if (!(num % 3)) {
        return "fizz";
    } else if (!(num % 5)) {
        return "buzz";
    } else {
        return num;
    }
}
var d = fizzBuzz();
console.log(d);

//4.将函数 fn 的执行上下文改为 obj 对象
//apply
function speak(fn, obj) {
    return fn.apply(obj);
}
//call
function speak(fn, obj) {
    return fn.call(obj);
}
//bind
function speak(fn, obj) {
    return fn.bind(obj)();
}

//5.题目描述
// 实现函数 functionFunction，调用之后满足如下条件：
// 1、返回值为一个函数 f
// 2、调用返回的函数 f，返回值为按照调用顺序的参数拼接，拼接字符为英文逗号加一个空格，即 ', '
// 3、所有函数的参数数量为 1，且均为 String 类型
function functionFunction(str) {
    return function (newstr) {
        var arr = [];
        arr.push(str);
        arr.push(" " + newstr);
        return arr.join(",");
    }
}
var p = functionFunction('Hello')('world');
console.log(p);

// 6.已知函数 fn 执行需要 3 个参数。请实现函数 partial，调用之后满足如下条件：
// 1、返回一个函数 result，该函数接受一个参数
// 2、执行 result(str3) ，返回的结果与 fn(str1, str2, str3) 一致
function partial(fn, str1, str2) {
    function result(str3) {
        return fn.call(this, str1, str2, str3);
    }

    return result;
}
var sayIt = function (greeting, name, punctuation) { return greeting + ', ' + name + (punctuation || '!'); }; partial(sayIt, 'Hello', 'Ellie')('!!!');
console.log(sayIt);
//7.函数 useArguments 可以接收 1 个及以上的参数。请实现函数 useArguments，返回所有调用参数相加后的结果。本题的测试参数全部为 Number 类型，不需考虑参数转换。
function useArguments() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
var u = useArguments(1, 2, 3, 4);
console.log(u);

//8.给定二进制字符串，将其换算成对应的十进制数字
function base10(str) {
    var str = '10101111000'
    return parseInt(str, 2);
    // return parseInt(str,8);八进制
    // return parseInt(str,10);十进制
    // return parseInt(str,16);十六进制
}
var k = base10();
console.log(k);

//9.给定字符串 str，检查其是否包含数字，包含返回 true，否则返回 false
function containsNumber(str) {
    var str = 'afb123'
    for (var i = 0; i < str.length; i++) {
        if (Number(str[i])) {
            return true;
        }
    }
    return false;
}
var f = containsNumber();
console.log(f);
//正则
function containsNumber2(str) {
    var str = 'afb123'
    var b = /\d/;
    return b.test(str);
}
var m = containsNumber2();
console.log(m);
//10. 实现一个打点计时器，要求
// 1、从 start 到 end（包含 start 和 end），每隔 100 毫秒 console.log 一个数字，每次数字增幅为 1
// 2、返回的对象中需要包含一个 cancel 方法，用于停止定时操作
// 3、第一个数需要立即输出
function count(start, end) {
    //立即输出第一个值
    var start = 1;
    var end = 6;
    console.log(start++);
    var timer = setInterval(function () {
        if (start <= end) {
            console.log(start++);
        } else {
            clearInterval(timer);
        }
    }, 100);
    //返回一个对象
    return {
        cancel: function () {
            clearInterval(timer);
        }
    };
}
count();

