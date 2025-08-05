
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





// 4 normativ misolari

// 1chi masalasi

// let arr1 = ['Muhammad', 'Erik', 'Yusufjon', 'Asad'];
// let result1 = arr1.filter(name => name.length > 5);
// console.log("1)", result1); // ['Muhammad', 'Yusufjon']

// 2 chi masalasi
// let arr2 = [5, 8, 1, 6, 0, 3];
// let max2 = Math.max(...arr2);
// let min2 = Math.min(...arr2);
// console.log("2) Max:", max2, "Min:", min2); // Max: 8 Min: 0


//3 chi masalai
// let arr3 = ['Sardorbek', 'Ali', 'Bekzod', 'Erkinbek'];
// let result3 = arr3.filter(name => name.toLowerCase().endsWith("bek"));
// console.log("3)", result3); // ['Sardorbek', 'Erkinbek']

//4 chi masalasi
// let arr4 = [1, 2, 3, 4, 5];
// let set = new Set([2, 4, 6, 7]);
// let result4 = arr4.filter(item => set.has(item));
// console.log("4)", result4); // [2, 4]

// 5 chi masalasi
// let arr5 = [1, 2, 2, 3, 4, 4, 5];
// let result5 = arr5.filter(item => arr5.indexOf(item) === arr5.lastIndexOf(item));
// console.log("5)", result5); // [1, 3, 5]

// 5 normativ misolari

// let obj = {
//   valyuta: "dollar",
//   miqdor: 100,
//   kimsanbek: {
//     valyuta: "dollar",
//     miqdor: 55
//   },
//   avaz: {
//     ismi: "Avaz",
//     familiyasi: "Ganiyev",
//     yoshi: 37,
//     yoshi_katta: true
//   },
//   holat: {
//     ism: "Anvar",
//     age: 22,
//     city: "Tashkent"
//   },
//   talabalar: [
//     { ism: "Ali", yosh: 20, foiz: 60 },
//     { ism: "Vali", yosh: 25, foiz: 90 },
//     { ism: "Salim", yosh: 50, foiz: 30 }
//   ]
// };

// // 1
// console.log(obj);

// // 2
// console.log(obj.kimsanbek.valyuta, obj.kimsanbek.miqdor);

// // 3
// console.log(obj.avaz.yoshi > 30); // true

// // 4
// console.log(obj.holat.ism, obj.holat.age, obj.holat.city);

// // 5
// obj.talabalar.forEach(talaba => {
//   if (talaba.foiz >= 70) {
//     console.log(talaba);
//   }
// });


// 6 normativ misolari
//  1 chi masalasi
// obj.yuza = function(uzunlik, eni) {
//   return uzunlik * eni;
// };
// console.log("Yuza:", obj.yuza(5, 10)); // Пример: 5*10 = 50

 // 2chi masalasi
// console.log("Barcha qiymatlar:");
// for (let key in obj) {
//   console.log(key, ":", obj[key]);
// }console.log("Barcha qiymatlar:");
// for (let key in obj) {
//   console.log(key, ":", obj[key]);
// }


//3chi masalasi



// obj.anor = 20;
// console.log("Yangi anor narxi:", obj.anor);

// 4 chi masalasi
// delete obj.users.vali;
// console.log("Vali o'chirildi:", obj.users);

// 5 chisi

// let allFruits = ["mandarin", "banan", "apelsin"];
// console.log("Yo'q mevalar:");
// for (let fruit of allFruits) {
//   if (!(fruit in obj)) {
//     console.log(fruit);
//   }
// }


// 7 normativ misolari

// 1 chi masalasi

//  let obj = {
//    Salim, 25
//    Ali, 17
//    Malik 2
//  }

// let obj = {
//   salim: 25,
//   ali: 17,
//   malik: 2
// }

// for (let key in obj) {
//   console.log(obj[key] + 2);
// }



 users = [{name: "Ali", age: 20}, {name: "Vali", age: 25}, {name: "Sami", age: 22}].
