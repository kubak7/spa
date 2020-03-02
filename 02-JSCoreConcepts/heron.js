// boki trójkąta
//a = 3;
b = 4;
c = 5;
h = 7
p = (h+b+c)/2;

// Pole trókąta o bokach ..., ... oraz ... wynosi ... .

let a = (h,b,c,p) => {
    let result = Math.sqrt(p*(p-h)*(p-b)*(p-c));
    console.log(`Pole trojkąta o bokach ${h},${b},${c}, wynosi ${result}`);
};

console.log( a(h,b,c,p) );