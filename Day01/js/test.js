function remove_arr(arr) {
    var arr1 = [1, 1, 8, 5, 6, 8, 7, 6, 3, 5];
    arr1.sort();
    var arr2 = [arr1[0]];
    for (var i = 1; i < arr1.length; i++) {
        if (arr1[i] !== arr1[i - 1]) {
            arr2.push(arr1[i]);
        }
    }
    return arr2;
}
var a = remove_arr();
console.log(a);

