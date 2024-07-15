// todo Activity 1 if else 
//t1
let num = 23
if (num > 0) {
  console.log(num,"number is positive");
} else if(num<0) {
  console.log(num,"number is nagetive");
}
else{
  console.log(num, "number is Zero");
}

// t2
let age = 18
if (age >= 18) console.log("you are eligible for Vote"); 
else console.log("you are not eligible for vote");


// todo Activity 2 Nested if else 
// t3
let n1 = 124, n2 = 23, n3 = 14
if (n1>n2) {
  if (n1>n3) {
    console.log(n1,"is greater number");
  }
  else{
    onsole.log(n3,"is greater number");
  }
} else if(n2>n3) {
  console.log(n2,"is greater number");
}
else{
  console.log(n3,"is greater number");
}

// todo Activity 3 Switch Case 
// t4
let dayNum = 4
switch (dayNum) {
  case 1:
    console.log("today is Monday");
    break;
  case 2:
    console.log("today is Tuseday");
    break;
  case 3:
    console.log("today is Wednesday");
    break;
  case 4:
    console.log("today is Thirsday");
    break;
  case 5:
    console.log("today is Friday");
    break;
  case 6:
    console.log("today is Saterday");
    break;
  case 7:
    console.log("today is Sunday");
    break;

  default:
    console.log("invalid Day number");
    break;
}

// t5
let score = 85;
switch (true) {

  case score<33:
    console.log(score,"Gread :- 'F'");
    break;

  case score < 50 && score >= 33:
    console.log(score,"Gread :- 'D'");
    break;

  case score < 65 && score >= 50:
    console.log(score,"Graed :- 'C'");
    break;

  case score < 80 && score >= 65:
    console.log(score,"Graed :- 'B'");
    break;

  case score < 90 && score >= 80:
    console.log(score,"Graed :- 'A'");
    break;

  case score <= 100 && score >= 90:
    console.log(score,"Graed :- 'A+'");
    break;

  default:
    console.log("Invailid Score");
    break;
}


// todo Activity 4 Ternary OP
// t6
let t6Num = 23
console.log(t6Num%2==0 ? `${t6Num} Number is Even`: `${t6Num} Number is Odd`); 


// todo Activity 5 Leep Year
// t6
let year = 2000
if (year % 400 == 0 || year % 100 != 0 && year % 4 == 0 ) {
  console.log(`${year} is leap year`);
}
else {
  console.log(`${year} is not leap year`);
}