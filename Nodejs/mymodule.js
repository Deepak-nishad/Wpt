export var num = 10;

export function isEven(n) {
  if (n % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

export function isPrime(n) {
  var flag = false;
  for (var i = 2; i < n; i++) {
    if (n % i == 0) {
      flag=true;
  }
 
}
if(flag==true){
    return true;
}
else{
    return flag;
}

}

export var arr=[11,2,33,4,50];

export var arrfr=["deepak", "manish", "vishal", "metri"];


export var cdate=new Date();
