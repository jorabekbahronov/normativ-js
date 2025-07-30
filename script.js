
// 1-masala 
// let input = +prompt()
// let x = "chetniye chisla"
// let y = "ne chetniye chisla"

// if (input % 2 == 0) {
//     console.log(x)
// } else {
//     console.log(y)
// }


// 2 - masala

//   let input = +prompt()
//   let x = "polojitelnoe"
//   let y = "otritsatelnoe"
//   let z = 0

//    if (input > 0) {
//     console.log(x)
//    } 
//     else if (input == 0) {
//         console.log(z);
//    }
//    else {
//     console.log(y)
//    }


//3 massala


// function найтиБольшееЧисло(a, b) {
//   if (a > b) {
//     console.log(`x = ${a}, число a больше числа b`);
//   } else if (b > a) {
//     console.log(`x = ${b}, число b больше числа a`);
//   } else {
//     console.log("Числа a и b равны");
//   }
// }




// function name(params) {
    
// }



// 4-misol


// function bahoVaNatija(ball) {
//     let baho = "";
//     let natija = "";

//     if (ball >= 1 && ball <= 59) {
//         baho = 2;
//         natija = "ine proshol examen";
//     } else if (ball >= 60 && ball <= 69) {
//         baho = 3;
//         natija = "proshol examen";
//     } else if (ball >= 70 && ball <= 89) {
//         baho = 4;
//         natija = "proshol cherez examen";
//     } else if (ball >= 90 && ball <= 100) {
//         baho = 5;
//         natija = "proshol cherez examen";
//     } else {
//         return "Notog'ri ball kiritildi";
//     }

//     console.log(baho)
      
// }

// 5 misol

// function studentGrade(x) {
//   let result = "";
//   if (x >= 1 && x <= 59) {
//     result = "2";
//   } else if (x >= 60 && x <= 69) {
//     result = "3";
//   } else if (x >= 70 && x <= 89) {
//     result = "4";
//   } else if (x >= 90 && x <= 100) {
//     result = "5";
//   } else {
//     return "Noto'g'ri ball kiritildi";
//   }

//   let status = x >= 60 ? "o'tdi" : "o'tmadi";
//   return Talabaning bahosi ${result}, imtihondan ${status};
// }


// 2 normativ misolari
// 1 chisi
// for (let i = 1; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }
// 2 chisi

// let n = prompt("n ni kiriting:");
// n = parseInt(n); 
// let sum = 0;

// for (let i = 1; i <= n; i++) {
//   sum += i;
// }

// console.log("Yig'indi:", sum);
// 3 chisi
// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//   let son = parseInt(prompt(i + "-sonni kiriting:"));
//   if (son > 0 && son % 2 === 0) {
//     sum += son;
//   }
// }
// console.log("Musbat va juft sonlar yig'indisi:", sum);

// 4 chisi

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("Число " + i + " кратно и 3, и 5");
//   }
// }
// 5 chisi
// let arr = [2, -8, 2, 1, 5, 4, -15, 9, 13];

// let max = Math.max(...arr);
// let min = Math.min(...arr);

// console.log("Самый большой элемент:", max);  
// console.log("Самый маленький элемент:", min);  


//3 normativ misolari

// 1chi masalasi
// let arr1 = [25, 3, 8, 9, 7];
// let last = arr1[arr1.length - 1];
// arr1.unshift(last ** 2);
// console.log(arr1); 


// 2 masalasi

// let arr2 = [9, 8, 5, 1, 6, 4];
// let evenSum = arr2.filter(n => n % 2 === 0).reduce((a, b) => a + b, 0);
// console.log("2)", evenSum); // 18


// 3 masalasi

// let arr3 = [2, -8.9, 1.5, 3.0, 5];
// let positiveSum = arr3.filter(n => n > 0).reduce((a, b) => a + b, 0);
// console.log("3)", positiveSum); 


// 4 masalasi

// let arr4 = [6, 1, 3, 5, 6, 2, 0, 4];
// let squaredFilteredSorted = arr4
//   .filter(n => n > 2)
//   .map(n => n * n)
//   .sort((a, b) => a - b);
// console.log("4)", squaredFilteredSorted); // [9, 16, 25, 36, 36]



// 5 masalasi

// let arr5 = [1, [2, 3], [4, [5, 6, 7]]];
// function flattenAndFilterOdds(arr) {
//   return arr.flat(Infinity).filter(n => n % 2 === 1);
// }
// console.log("5)", flattenAndFilterOdds(arr5)); // [1, 3, 5, 7]
