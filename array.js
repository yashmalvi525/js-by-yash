let arr=new Array(1,2,3,4);
arr.push(5);  //(1,2,3,4,5)
console.log(arr);
arr.unshift(0); //(0,1,2,3,4,5)
console.log(arr);
arr.pop();
console.log(arr);
arr.shift();
console.log(arr);

console.log("after slcing the arr");
console.log(arr.slice(0,4));
console.log("this is the arr after slice");
console.log(arr);



console.log("after splicing the arr");
console.log(arr.splice(0,4));
console.log("this is the arr after slice");
console.log(arr);

console.log("THE INTERVIEW QUESTION , WHAT IS THE DIFFERENCE BETWEEN SLICE AND SPLICE")
console.log("CHECK HERE , SLICE IS JUST PRINTING THE SUBPART OF ARRAY , AND IT S NOT GOING TO MANIPULATE THE ORIGINAL ARRAY ");
console.log("WHERE THE SPLICE METHOD IS CHANGIN THE BASE ARRAY , MEANS IT WILL REMOVING THE ELEMENT FROM THE  REAL  ARRAY")