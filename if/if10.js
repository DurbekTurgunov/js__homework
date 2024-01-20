//1
let a = 10;
let x;

if (a > 0 && a % 2 === 1) {
    x = "musbat toq son";
}   else if (a > 0 && a % 2 === 0) {
    x = "musbat juft son";
}  else if (a < 0 && a % 2 === 1) {
    x = "musbat toq son";
}  else if (a < 0 && a % 2 === 0) {
    x = "musbat juft son";
} else {
    x = "son 0ga teng";
}
console.log(x);