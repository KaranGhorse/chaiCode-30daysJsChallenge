// todo Activity 1 For Loop 
//t1
for (let i = 1; i <= 10; i++) {
  console.log(i); 
}
console.log("*******************************");

//t2 
for (let i = 1; i <= 10; i++) {
  console.log(`5 * ${i} = ${5*i}`); 
}
console.log("*******************************");


// todo Activity 2 while Loop 
//t3
let i = 1, j = 1, sum=0;
while (i <= 10) {
  sum+=j;
  j++,i++;
}
console.log(sum,"\n*******************************");

//t4
let i4 = 10;
while (i4 >=1) {
  console.log(i4);
  i4--;
}
console.log("*******************************");


// todo Activity 3 Do while Loop 
//t5
let i5 = 1;
do{
  console.log(i5);
  i5++
}while (i5<=5);
console.log("*******************************");

//t6
let n = 5, fact = 1;
do {
  fact*=n;
  n--;
} while (n>=2);
console.log(fact,"\n*******************************");


// todo Activity 4 Nested Loop 
//t7
for (let i = 0; i < 5; i++) {
  for (let j = 0; j <= i; j++) {
    process.stdout.write(" * ");
  } 
  console.log();
}