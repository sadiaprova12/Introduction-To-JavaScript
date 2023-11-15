var price = 100;
//console.log(price);
//console.log(typeof price); // typeof deyar reason [price er j variable ase sei variable ta ki dhoroner maan ase setar bujhar jonno. answer: number type]

var price = '100';
//console.log(typeof price); // string types

var isHappy = true;
//console.log(typeof isHappy); // boolean type

var unSocail;
//console.log(unSocail); //undefinied

var num1 = 0.1;
var num2 = 0.2;
var sum = num1 + num2;
sum = sum.toFixed(1); // toFixed deyar reason just 0.1 and 0.2 r khetre sob sommoy dhoshomik r por 8,9 tar maan besi digit ase .  tar jonno toFixed(2) deya hoise dhoromik r por jeno 2 ta digit show kore .
sum = parseFloat(sum); // purnno shonkha anar jonno
console.log(sum);