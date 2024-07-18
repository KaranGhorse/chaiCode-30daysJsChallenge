// todo Activity 1 Array  
// t1 & t2
let arr1 = [1,2,3,4,5];
console.log(arr1);
console.log(arr1[0],arr1[arr1.length-1]);


// todo Activity 2 Array Methods (Basics)
// t3
arr1.push(6)
console.log(arr1);

// t4
arr1.pop()
console.log(arr1);

// t5 
arr1.shift()
console.log(arr1);

// t6
arr1.unshift(11)
console.log(arr1);


// todo Activity 3 Array Methods (mid-level)
// t7
let arr2 = [1,2,3,4,5,6,7,8]
let mapArr2 = arr2.map((elem)=> elem*2)
console.log(mapArr2);

// t8
let filterArr2 = arr2.filter((elem)=> {
  if(elem%2==0)
    return elem;
})
console.log(filterArr2);

// t9
let reduceArr2 = arr2.reduce((felem,i)=> felem+i)
console.log(reduceArr2);


// todo Activity 4 Array iteration
// t10
for (let i = 0; i < arr2.length; i++) {
  console.log(arr2[i]);
}

// t11
arr2.forEach(elem => {
  console.log(elem);
});


// todo Activity 5 Mult-Dimansional Array 
// t12
let mdArr = [[1,2,3],[4,5,6],[7,8,9]]
mdArr.forEach(elem => {
  elem.forEach(elem2 => {
    console.log(elem2);
  });
});

// t13
mdArr[1][2] = 23;
mdArr[1][1] = 25;
console.log(mdArr[1][2]);
console.log(mdArr);