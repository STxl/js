//1.打印乘法口诀表
function num() {
    for (var i = 1; i <= 9; i++) {
        for (var j = 1; j <= i; j++) {
            var sum = i * j;
            console.log(i + "*" + j + "=" + sum + "\t");
        }
        console.log("\t");
    }
}
num();

//2.打印100-200的素数
function sum() {
    for (var i = 100; i <= 200; i++) {
        for (var j = 2; j <= 100; j++) {
            var flag = false;
            if (i % j == 0) {
                flag = false;
                break;
            } else {
                flag = true;
            }
        }
        if (flag) {
            console.log("素数" + i)

        }
    }
}
sum();

//3.求出1-1/2+1/3-1/4…..1/100的结果
function sum2() {
    var j = 0;
    for (var i = 1; i <= 100; i++) {
        if (i % 2 == 0) {
            j += -1 / i;
        }
        else {
            j += 1 / i;
        }
    }
    console.log(1 + j);
}
sum2();

//4.输出100到200之间既是3的倍数又是5的倍数的数字
function sum3() {
    var min = 100;
    var max = 200;
    console.log(min + "到" + max + "之间的数既是3的倍数也是5的倍数有：")
    for (var i = min; i <= max; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log(i);

        }
    }
}
sum3();

//5.鸡兔同笼：鸡和兔子一共35只，笼子里一共有94只脚，用程序计算出鸡和兔子分别多少只
function sum4() {
    var chicken = 35;
    var ribbit = 94;
    console.log("鸡兔同笼:一共35只,94支脚");
    for (var i = 0; i <= chicken; i++) {
        if (i * 4 + (chicken - i) * 2 == ribbit) {
            console.log("兔子数量:" + i + " 鸡的数量:" + (chicken - i));
        }
    }
}
sum4();

//6.求1!+2!+3!+...+10!的和
function sum5() {
    var sum = 0;
    var a = 1;
    for (var i = 1; i <= 10; i++) {
        for (var j = 1; j <= i; j++) {
            a *= j;
        }
        sum += a;
    }
    console.log(sum);
}
sum5();
