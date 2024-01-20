//1
let a = 30;
let x;

if (1 < a < 99 && a % 2 === 1) {
    x = "Ikki xonali toq son";
}   else if (1 < a < 999 && a % 2 === 0) {
    x = "Ikki honali juft son";
}  else if (1 < a < 999 && a % 2 === 1) {
    x = "Uch xonali toq son";
}  else if (1 < a < 999 && a % 2 === 0) {
    x = "Uch honali juft son";
} else {
    x = "son 0ga teng";
}
console.log(x);