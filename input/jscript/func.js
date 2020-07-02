var num;
document.write(typeof num);
document.write("<br>");
var num = 10;
document.write(typeof num);
document.write("<br>");
num = "nice";
document.write(typeof num);
document.write("<br>");
num = {
    name: "Hong",
    age: 10
}
document.write(typeof num);

// 연산..
var num1, num2, num3;
num1 = "Hello";
num2 = 15;
num3 = 30;
num = num1 + (num2 + num3);
console.log(num);

num3 = "15";
console.log(num2 !== num3);

var sum = 0;
var i=0;
for(; i<10; i++) {
    if(i<5)
        continue;
    sum = sum + i; // = sum += i; 같은의미
}
console.log("결과값은" + sum);

var $sum = 10;
var _sum = 20;
var sum1 = null;
var num1 = 10;
