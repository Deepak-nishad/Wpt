
// document.write("<h1>hello from external javaScript</h1>");
// document.write("<h1>hello from external javaScript</h1>");
// document.write("<h1>hello from external javaScript</h1>");
// document.write("<h1>hello from external javaScript</h1>");

// -------------------------------------------------------------------------
// console.log("from nodejs i get value")

function checkPrime(num){
console.log(num);
var flag=true;
    for(let i=2;i<num;i++){
        if(num%i==0){
            flag=false;
        }  
    }
    if(flag==true){
    //    document.write("<h1>"+num+" is not a prime number</h1>");
    document.getElementById("checkPrime").innerHTML="<h1>"+num+" is a prime number</h1>";
    }
    else{
        // document.write("<h1>"+num+" is a prime number</h1>");
            document.getElementById("checkPrime").innerHTML="<h1>"+num+" is not a prime  number</h1>";
    }
}

// -----------------------------------------------------------------------------------------------------------

function calCulateFact(num){
console.log(num);
alert("calculating factorial of "+num);
// confirm("calculating factorial of "+num);

fact=1;
    for(let i=1;i<=num;i++){
        fact=fact*i; 
    }

    alert("calculating factorial of "+fact);
    document.getElementById("factorial").innerHTML="<h1>factorial of "+num+" is "+fact+"</h1>";
 

}

// --------------------------------------------------------------------------------

function power(num){
console.log(num);

// confirm("calculating factorial of "+num);

fact=1;
    for(let i=1;i<=num;i++){
        fact=fact*i; 
    }

  
    document.getElementById("factorial").innerHTML="<h1>factorial of "+num+" is "+fact+"</h1>";
 

}
