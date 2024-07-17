// todo Activity 1 Functions 
//t1
function evenOdd(number) {
  if (number % 2 == 0) {
    return `${number} is Even Number`;
  }
  else {
  return (`${number} is Odd Number`);
  }
}

//t2
function squareOfNum(number) {
  return (number * number);
}


// todo Activity 2 Function exp.
//t3
function maxNumber(number1,number2) {
  return number1>number2 ? number1 : number2; 
}

//t4
function addString(str1,str2) {
  return str1+str2; 
}


// todo Activity 3 Arrow Function
//t5
let sumOfNumbers = (n1,n2)=>{
  return n1+n2;
}

//t6
let canContainChar = (str,char)=>{
  return str.includes(char)
}


// todo Activity 4 params & Default value  
//t7
function productOfTwoNums(n1,n2=2) {
  return n1 * n2;
}

//t8
function greetToUser(name,age=20) {
  return `Hello !, ${name}, \n You are ${age} year old :)`
}


// todo Activity 5 High Order Functions 
//t9
function multyFun(fun,n) {
  let val = 0;
  for (let i = 0; i < n; i++) {
    val += fun()
  }
  
  return val;
}

//t10
function multyFuns(fun1,fun2,n) {
  let res1 = fun1(n);
  let res2 = fun2(res1);
  return res2;
}


//? colling of all functions
let fun1Res = evenOdd(3)
let fun2Res = squareOfNum(3)
let fun3Res = maxNumber(3,5)
let fun4Res = addString("Mr. ","Karan")
let fun5Res = sumOfNumbers(3,5)
let fun6Res = canContainChar("KaranGhorse",'h')
let fun7Res = productOfTwoNums(3,5)
let fun8Res = greetToUser("karan")
let fun9Res = multyFun(()=>squareOfNum(3),2)
let fun10Res = multyFuns(squareOfNum,squareOfNum,5)

console.log(fun1Res);
console.log(fun2Res);
console.log(fun3Res);
console.log(fun4Res);
console.log(fun5Res);
console.log(fun6Res);
console.log(fun7Res);
console.log(fun8Res);
console.log(fun9Res);
console.log(fun10Res);
