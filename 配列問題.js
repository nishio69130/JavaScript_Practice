let fruits = [
    { name: 'リンゴ', quantity: 10 },
    { name: 'バナナ', quantity: 4 },
    { name: 'ブドウ', quantity: 1 },
    { name: 'オレンジ', quantity: 2 },
    { name: 'キウイ', quantity: 12 },
];

let arr1 = fruits.filter(function(element){
    return element.quantity <= 5;
});

console.log(arr1);

let arr2 = arr1.sort((a,b) => {
    return a.quantity - b.quantity;
})

console.log(arr2);


/*
課題

let numbers = [1, [2, 3], [4, [5, 6]], 7];

1. flat() メソッドを使って、この配列を1つの配列にフラットにし、結果をコンソールに表示してください。
2. フラットにした配列から偶数の数だけを抽出し、新しい配列を作成し、その配列をコンソールに表示してください。
3. 新しい配列の各要素を2倍にした配列を作成し、その結果をコンソールに表示してください。
4. 各要素の合計値を reduce() メソッドを使って計算し、その合計をコンソールに表示してください。
*/

let numbers = [1, [2, 3], [4, [5, 6]], 7];
let numbers1 = numbers.flat(2);
console.log(numbers1);

let numbers2 = numbers1.filter((element) => {
    return element % 2 === 0;
})
console.log(numbers2);

let numbers3 = numbers2.map((element) => {
    return element * 2;
})
console.log(numbers3);

let number4 = numbers1.reduce((a,b) => {
    return a + b;
})
console.log(number4);



/*
課題

let words = [['Hello', 'World'], ['This', ['is', 'a']], 'test'];

1. flat() メソッドを使って、この配列を1つの配列にフラットにし、結果をコンソールに表示してください。
2. フラットにした配列から文字列の長さが偶数の要素だけを抽出し、新しい配列を作成し、その配列をコンソールに表示してください。
3. 新しい配列の各要素を、文字列の最初の文字を大文字に変換した配列を作成し、その結果をコンソールに表示してください。
4. 各文字列をスペースでつなげた1つの文章を reduce() メソッドを使って作成し、コンソールに表示してください。
*/

let words = [['Hello', 'World'], ['This', ['is', 'a']], 'test'];
let flatWords = words.flat(2);
console.log(flatWords);

let evenFlatWords = flatWords.filter((word) => {
    return word.length % 2 ===0;
})
console.log(evenFlatWords);

let changeWords = evenFlatWords.map((word) => {    
    return word.charAt(0).toUpperCase() + word.slice(1);
})
console.log(changeWords);

let addWords = flatWords.reduce((word1,word2) => {
    return word1 + ' ' + word2;
})
console.log(addWords);






/*
課題 1: slice() と splice() の活用
次の配列は、1週間の曜日を表しています。

javascript
コードをコピーする
let days = ['月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日', '日曜日'];
1. slice() メソッドを使って、平日のみを抽出した新しい配列を作成し、コンソールに表示してください。
2. splice() メソッドを使って、土曜日と日曜日を平日の配列に追加し、結果をコンソールに表示してください。
課題 2: reverse() と sort() の活用
次の配列はランダムな数値を表しています。

javascript
コードをコピーする
let numbers = [12, 45, 7, 32, 18, 9, 50];
1. sort() メソッドを使って、配列を昇順に並び替えてコンソールに表示してください。
2. reverse() メソッドを使って、並び替えた配列を逆順にしてコンソールに表示してください。
課題 3: every() と some() の活用
次の配列は数値を表しています。

javascript
コードをコピーする
let numbers = [10, 20, 30, 40, 50];
1. every() メソッドを使って、全ての要素が10以上であるかどうかを判定し、結果をコンソールに表示してください。
2. some() メソッドを使って、50以上の数が含まれているかどうかを判定し、結果をコンソールに表示してください。
課題 4: find() と findIndex() の活用
次の配列は果物の名前と在庫数を表しています。

javascript
コードをコピーする
let fruits = [
  { name: 'リンゴ', quantity: 10 },
  { name: 'バナナ', quantity: 0 },
  { name: 'オレンジ', quantity: 5 },
  { name: 'キウイ', quantity: 8 },
];
1. find() メソッドを使って、在庫が0の果物を見つけて、その果物をコンソールに表示してください。
2. findIndex() メソッドを使って、在庫が5以上の果物のインデックスを最初に見つけ、そのインデックスをコンソールに表示してください。
課題 5: concat() と join() の活用
次の配列は2つの異なる文字列のリストを表しています。

javascript
コードをコピーする
let list1 = ['赤', '青', '緑'];
let list2 = ['黄', '紫', '黒'];
1. concat() メソッドを使って、2つの配列を結合して新しい配列を作成し、その結果をコンソールに表示してください。
2. join() メソッドを使って、配列の全要素を "-" で結合した1つの文字列を作成し、その結果をコンソールに表示してください。
これらの課題を通じて、さらに多くの配列メソッドの使い方に慣れることができるでしょう。

*/

