//1
let a = 50;
let b = 89;
let c = 1;

if ((a < b && b < c) || (c < b && b < a)) {
    console.log(b);
}

 else if ((b < a && a < c) || (c < a && a < b)) {
    console.log(a);
}

 else {
    console.log(c);
}

//2
let a2 = 40;
let b2 = -20;
let c2 = 23;

if ((a2 < b2 && b2 < c2) || (c2 < b2 && b2 < a2)) {
    console.log(b2);
}

 else if ((b2 < a2 && a2 < c2) || (c2 < a2 && a2 < b2)) {
    console.log(a2);
}

 else {
    console.log(c2);
}

