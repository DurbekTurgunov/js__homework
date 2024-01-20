//1
let a = 28;
let b = -4;
let c = 35;
let d = 58;
let x;

if (21 < a < 40) {
    x = "Normal";
}   else if (a <= 0) {
    x = "Freezing";
}   else if (20 < a < 40) {
    x = "Hot";
}   else if (a >= 40) {
    x = "Very Hot";
}   

console.log(x);