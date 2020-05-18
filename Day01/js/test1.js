//1.找出数组中元素位置
function indexOf(arr, item) {
    var arr = [5, 8, 6, 7, 9, 45, 1, 23, 5];
    var item = 5;
    return arr.indexOf(item);
}
var a = indexOf();
console.log(a);

function indexOfS(arr, item) {
    var arr = [4, 5, 9, 56, 78, 55, 33, 12, 66];
    var item = 78;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == item)
            return i;
    }
}
var b = indexOfS();
console.log(b);

//2.数组求和
//for循环
function sum(arr) {
    var arr = [4, 5, 6, 7, 8, 9];
    var sum = 0;
    for (var i in arr) {
        sum += arr[i];
    }
    return sum;
}
var c = sum();
console.log(c);
//通过forEach遍历再求和
function sum1(arr) {
    var arr = [4, 5, 6, 7, 8, 9];
    var sum = 0;
    arr.forEach(function (a, index, arr) {
        sum += a;
    }, 0)
    return sum;
}
var d = sum1();
console.log(d);

//3.移除数组 arr 中的所有值与 item 相等的元素。不要直接修改数组 arr，结果返回新的数组

//直接遍历数组元素通过push放入新数组
function reMove(arr, item) {
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 6];
    var item = 6;
    var newarr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== item)
            newarr.push(arr[i]);
    }
    return newarr;
}
var e = reMove();
console.log(e);

// function reMoves(arr, item) {
//     var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 6];
//     var item = 6;
//     var newarr = arr.slice(0);
//     for (var i = 0; i < newarr.length; i++) {
//         if (newarr[i] == item)
//             newarr.splice(i, 1);
//         i--;
//     }
//     return newarr;
// }
// var f = reMoves();
// console.log(f);

//移除数组 arr 中的所有值与 item 相等的元素，直接在给定的 arr 数组上进行操作，并将结果返回
function remove2(arr, item) {
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 6];
    var item = 6;
    var i = 0;
    while (i < arr.length) {
        if (arr[i] == item) {
            arr.splice(i, 1);
        }
        else {
            i++;
        }
    } return arr;
}
var g = remove2();
console.log(g);

//4.在数组 arr 末尾添加元素 item。不要直接修改数组 arr，结果返回新的数组
//通过slice复制 再用push直接加在末尾
function add(arr, item) {
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 6];
    var item = 45;
    var newarr = arr.slice(0);
    newarr.push(item);
    return newarr;
}
var h = add();
console.log(h);
//将item变成数组，通过concat合并两个数组
function add2(arr, item) {
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 6];
    var item = 45;
    var arr2 = [item];
    var newarr = arr.concat(arr2);
    return newarr;
}
var i = add2();
console.log(i);

//5.删除数组 arr 最后一个元素。不要直接修改数组 arr，结果返回新的数组
//直接选取数组返回
function DeLete(arr, item) {
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 6];
    return arr.slice(0, arr.length - 1)
}
var j = DeLete();
console.log(j);
//通过pop删除
function DeLete2(arr) {
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 6];
    var a = arr.slice(0);
    a.pop();
    return a;
}
var k = DeLete2();
console.log(k);

//6.在数组 arr 开头添加元素 item。不要直接修改数组 arr，结果返回新的数组
function add3(arr, item) {
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 6];
    var item = 99;
    var newarr = arr.slice(0);
    newarr.unshift(item);
    return newarr;
}
var l = add3();
console.log(l);
//concat合并
function add4(arr, item) {
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 6];
    var item = 99;
    var a = [item];
    var newarr = a.concat(arr);
    return newarr;
}
var m = add4();
console.log(m);

//7.删除数组 arr 第一个元素。不要直接修改数组 arr，结果返回新的数组
function DeLete3(arr) {
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 6];
    var newarr = arr.slice(0);
    newarr.shift();
    return newarr;
}
var n = DeLete3();
console.log(n);

function DeLete4(arr) {
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 6];
    var newarr = arr.slice(1);
    return newarr;
}
var o = DeLete4();
console.log(o);

//8.在数组 arr 的 index 处添加元素 item。不要直接修改数组 arr，结果返回新的数组
function insert(arr, item, index) {
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 6];
    var index = 4;
    var item = 44;
    var newarr = arr.slice(0);
    newarr.splice(index, 0, item);
    return newarr;
}
var p = insert();
console.log(p);

//9.统计数组 arr 中值等于 item 的元素出现的次数
function count(arr, item) {
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 6];
    var item = 6;
    var a = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == item) {
            a++;
        }
    } return a;
}
var q = count();
console.log(q);

//10.找出数组 arr 中重复出现过的元素
function duplicates(arr) {
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 6];
    var a = arr.sort();
    var b = [];
    for (var i = 0; i < a.length; i++) {
        if (a[i] == a[i + 1] && a[i] != a[i - 1])
            b.push(a[i]);
    }
    return b;
}
var r = duplicates();
console.log(r);
//判断是否是第一个出现，且不是最后一个出现
function duplicates1(arr) {
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 6];
    var b = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) == i && arr.lastIndexOf(arr[i]) !== i)
            b.push(arr[i]);
    }
    return b;
}
var s = duplicates1();
console.log(s);