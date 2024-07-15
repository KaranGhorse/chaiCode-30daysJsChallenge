// todo Activity 1 Arithmetic OP
//t1
let na1 = 23, na2 = 45;
let na3 = na1 + na2;
console.log("Add :- " + na3);

//t2
let ns1 = 230, ns2 = 200;
let ns3 = ns1 - ns2;
console.log("Sub :- " + ns3);

//t3
let nm1 = 2, nm2 = 45;
let nm3 = nm1 * nm2;
console.log("Mult :- " + nm3);

//t4
let nd1 = 45, nd2 = 5;
let nd3 = nd1 / nd2;
console.log("Div :- " + nd3);

//t5
let nr1 = 45, nr2 = 7;
let nr3 = nr1 % nr2;
console.log("Rem :- " + nr3);


// todo Activity 2 Assignment OP
//t6
let asAddOp = 12;
asAddOp += 12;
console.log("\n+ Assign :- " + asAddOp);

// t7
let asSubOp = 12;
asSubOp -= 2;
console.log("- Assign :- " + asSubOp);


// todo Activity 3 Comparition OP
//t8 
let compVar1 = 12, compVar2 = 15;
console.log("\nComp > :- " , compVar1 > compVar2);
console.log("Comp < :- " , compVar1 < compVar2);

//t9
console.log("\nComp >= :- " , compVar1 >= compVar2);
console.log("Comp <= :- " , compVar1 <= compVar2);

// t10
compVar2 = '12'
console.log("\nComp > :- " , compVar1 == compVar2);
console.log("Comp < :- " , compVar1 === compVar2);


// todo Activity 4 Logical OP
// t11
console.log("\n");
console.log(compVar1>compVar2 && compVar1<compVar2);

//t12
console.log(compVar1>compVar2 || compVar1<compVar2);

// t13
console.log(!compVar1>compVar2)


// todo Activity 5 Ternary OP
//t14
console.log("\n");
let num = 12
let res = num > 0 ? "Positive Number" : "Nagetive Number";
console.log(res);