function greet(){
    console.log("hello yash");
}
console.log("this is the output of the plain fucntion");
greet();


let sum = function(a,b){
    return (a+b);
}
let ans=sum(2,3);
console.log("this is the output of variable declaration of the function");
console.log(ans);

let mul=(a,b)=>{
    return(a*b);
}
let ans2=mul(2,3);
console.log("this is the answer of the arrow function");
console.log(ans2);