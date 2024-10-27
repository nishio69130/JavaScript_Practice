// //1. 次の配列 numbers を使用して、それぞれの要素を2倍にした新しい配列を作成してください（map() を使用）。
// //const numbers = [1, 2, 3, 4, 5];
// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.map(num => num * 2));

// //2. 上記の配列 numbers を使用して、3以上の数値だけを含む新しい配列を作成してください（filter() を使用）。
// console.log(numbers.filter(num => num >=3))

// //3. prices という配列があるとします。この配列の全ての値を合計して、合計金額を計算してください（reduce() を使用）。
// //const prices = [100, 200, 300, 400];
// const prices = [100, 200, 300, 400];
// console.log(prices.reduce((acc, total) => acc + total));

// //4. names 配列から Alex という名前を持つ要素を探し、最初に見つかったその要素を取得してください（find() を使用）。
// //const names = ["John", "Alex", "Emma", "Alex"];
// const names = ["John", "Alex", "Emma", "Alex"];
// console.log(names.find(name => 'Alex'));

// //5. 上記の names 配列から Emma がどこにあるか（インデックス番号）を探してください（findIndex() を使用）。
// console.log('Emma がどこにあるか（インデックス番号）' + names.indexOf('Emma'))

// //6. letters 配列をアルファベット順に並べ替えてください（sort() を使用）。
// //const letters = ["b", "a", "d", "c"];
// const letters = ["b", "a", "d", "c"];
// console.log(letters.sort());

// //7. letters 配列の最初の2つの要素を取り出し、新しい配列を作成してください（slice() を使用）。
// const newLetters = letters.slice(0,2);
// console.log(newLetters);

// //8. fruits 配列の2番目の位置に "banana" を追加し、その位置にある他の要素を削除してください（splice() を使用）。
// //const fruits = ["apple", "orange", "grape"];
// const fruits = ["apple", "orange", "grape"];
// fruits.splice(1, 1, "banana");
// console.log(fruits);

// let numbers = [1, 2, 3, 4, 5, 6];
// let evenNumbers = numbers.filter(num => num % 2 ===0);
// console.log(evenNumbers);
// let doubleEvenNumbers = evenNumbers.map(num => num *2);
// console.log(doubleEvenNumbers);

// let nestedArray = [1, [2, [3, 4]], 5];
// let newArray = nestedArray.flat(2);
// console.log(newArray.map(num => num*2));

// 問題
// ネストされた配列 nestedArray を受け取り、全ての要素をフラットにして、それぞれの要素を2倍にした配列を返してください。
// 配列の深さは不定で、再帰的にフラットにする必要があります。


// let nestedArray = [1, [2, [3, [4]], 5]];

// function flattenAndDouble(arr) {
//     return arr.reduce((accumulator, currentValue) => {
//         if(Array.isArray(currentValue)) {
//             return accumulator.concat(flattenAndDouble(currentValue));
//         }else{
//             return accumulator.concat(currentValue *2);
//         }
//     },[])
// }


// console.log(flattenAndDouble(nestedArray));

