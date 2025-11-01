// var data= require('./mymodule')
var data= require('./mymodule.js')
console.log(data.num);

console.log(data.isEven(10));

console.log(data.isPrime(15));

console.log(data.arr.toString());



console.log(data.arr.sort(function(a,b){
return a-b;
}))

console.log(data.cdate.getDate()+ " "+ data.cdate.getMonth()+ " "+ data.cdate.getFullYear() );

console.log(new Date().getMinutes());


console.log(data.arrfr.toString())

