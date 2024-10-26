// 配列メソッドの詳細な説明と使用例

// 破壊的メソッド（元の配列を変更する）

// push(): 配列の末尾に1つ以上の要素を追加し、新しい配列の長さを返す
let arr = ['りんご', 'バナナ', 'オレンジ'];
console.log('push()前の配列:', arr); // ['りんご', 'バナナ', 'オレンジ']
let newLength = arr.push('ぶどう');
console.log('push()後の配列:', arr); // ['りんご', 'バナナ', 'オレンジ', 'ぶどう']  
console.log('新しい配列の長さ:', newLength); // 4

// pop(): 配列の最後の要素を削除し、その要素を返す
console.log('\npop()前の配列:', arr);
let removedItem = arr.pop();
console.log('pop()後の配列:', arr); // ['りんご', 'バナナ', 'オレンジ']
console.log('削除された要素:', removedItem); // ぶどう      

// shift(): 配列の最初の要素を削除し、その要素を返す
console.log('\nshift()前の配列:', arr);
let shiftedItem = arr.shift();
console.log('shift()後の配列:', arr); // ['バナナ', 'オレンジ']
console.log('削除された要素:', shiftedItem); // りんご

// unshift(): 配列の最初に1つ以上の要素を追加し、新しい配列の長さを返す
console.log('\nunshift()前の配列:', arr);
let unshiftLength = arr.unshift('グレープフルーツ');
console.log('unshift()後の配列:', arr); // ['グレープフルーツ', 'バナナ', 'オレンジ']
console.log('新しい配列の長さ:', unshiftLength); // 3

// splice(): 配列の指定した位置に要素を追加・削除する
console.log('\nsplice()前の配列:', arr);
arr.splice(1, 1, 'メロン');
console.log('splice()後の配列:', arr); // ['グレープフルーツ', 'メロン', 'オレンジ']

// 非破壊的メソッド（新しい配列を返し、元の配列は変更しない）

// concat(): 2つ以上の配列を結合して新しい配列を作成
let arr2 = ['赤', '青', '緑'];
console.log('\nconcat()前の配列:', arr2); // ['赤', '青', '緑']
let newArr = arr2.concat(['黄', '紫']);
console.log('concat()後の新しい配列:', newArr); // ['赤', '青', '緑', '黄', '紫']
console.log('元の配列（変更なし）:', arr2);

// slice(): 配列の一部を切り取って新しい配列を作成
console.log('\nslice()前の配列:', arr2);
let slicedArr = arr2.slice(1, 3); // インデックス1から2まで（3は含まない）
console.log('slice()で作成された新しい配列:', slicedArr); // ['青', '緑']
console.log('元の配列（変更なし）:', arr2); // ['赤', '青', '緑']   

// join(): 配列の全要素を連結して文字列を作成
console.log('\njoin()前の配列:', arr2);
let joinedString = arr2.join('-');
console.log('join()で作成された文字列:', joinedString); // 赤-青-緑
console.log('元の配列（変更なし）:', arr2); // ['赤', '青', '緑'] 

// filter(): 指定した条件を満たす要素を抽出し、新しい配列を作成
console.log('\nfilter()使用例:');
let filteredArr = arr2.filter(function(color) {
    return color === '青' || color === '緑';
});
console.log('filter()で抽出された配列:', filteredArr); // ['青', '緑']
console.log('元の配列（変更なし）:', arr2); // ['赤', '青', '緑']

// その他の便利なメソッド

// indexOf(): 指定した要素のインデックスを返す（見つからない場合は-1）
console.log('\nindexOf()使用例:'); //
console.log("'緑'のインデックス:", arr2.indexOf('緑')); // 2
console.log("'黒'のインデックス:", arr2.indexOf('黒')); // -1

// includes(): 配列に指定した要素が含まれているかをブール値で返す
console.log('\nincludes()使用例:'); //
console.log("'青'が含まれているか:", arr2.includes('青')); // true
console.log("'黄'が含まれているか:", arr2.includes('黄')); // false 

// find(): 指定した条件を満たす最初の要素を返す
console.log('\nfind()使用例:'); //
let foundElement = arr2.find(function(element) {
    return element.length > 1;
});
console.log('長さが1より大きい最初の要素:', foundElement); // 青

// findIndex(): 指定した条件を満たす最初の要素のインデックスを返す
console.log('\nfindIndex()使用例:'); //
let foundIndex = arr2.findIndex(function(element) {
    return element === '緑';
});
console.log('findIndex()で取得したインデックス:', foundIndex); // 2

// some(): 配列内に少なくとも1つ条件を満たす要素が存在するかどうかをチェック
let hasBlue = arr2.some(function(color) {
    return color === '青';
});
console.log('some()で"青"が含まれているか:', hasBlue); // true

// every(): 配列内の全要素が条件を満たすかどうかをチェック
let allGreen = arr2.every(function(color) {
    return color === '緑';
});
console.log('every()で全てが"緑"か:', allGreen); // false

// reduce(): 配列の各要素に対して関数を実行し、1つの値にまとめる
let arr3 = [1, 2, 3, 4];
let total = arr3.reduce(function(sum, number) {
    return sum + number;
}, 0);
console.log('reduce()で合計を計算:', total); // 10

// flat(): ネストされた配列を指定した深さまでフラットにする
let arr4 = [1, [2, [3, 4]], 5];
let flattenedArr = arr4.flat(2);
console.log('flat()後の配列:', flattenedArr); // [1, 2, 3, 4, 5]

// sort(): 配列を昇順に並び替える
let arr5 = [5, 3, 8, 1];
arr5.sort(function(a, b) {
    return a - b;
});
console.log('sort()後の配列:', arr5); // [1, 3, 5, 8]

// これらのメソッドを使うことで、配列の操作をより効率的に行うことができます。
// 初心者の方は、各メソッドの動作をよく理解し、適切な場面で使用することが重要です。




// //課題1: 次の配列 ['猫', '犬', '鳥'] に "魚" を追加し、最終的な配列と配列の長さをコンソールに表示してください。
// let arr3 = ['猫', '犬', '鳥'];
// arr3.push('魚');
// console.log(arr3);
// console.log(arr3.length);


// //課題2: 次の配列 ['太陽', '月', '星'] から最後の要素を削除し、その削除された要素と、削除後の配列をコンソールに表示してください。
// let arr4 = ['太陽', '月', '星'];
// let arr5 = arr4.pop();
// console.log(arr4);
// console.log(arr5);


// //課題3: 次の2つの配列 ['赤', '青'] と ['緑', '黄'] を結合し、新しい配列を作成してコンソールに表示してください。
// let arr6 = ['赤', '青'].concat(['緑', '黄']);
// console.log(arr6);


// //課題4: 次の配列 ['アップル', 'バナナ', 'チェリー', 'デーツ'] から、インデックス1からインデックス3（3は含まない）までの要素を新しい配列として切り取り、コンソールに表示してください。
// console.log(['アップル', 'バナナ', 'チェリー', 'デーツ'].slice(1,3));


// //課題5:次の配列 ['火', '水', '風'] の要素を - で区切って1つの文字列にし、その文字列をコンソールに表示してください。
// console.log(['火', '水', '風'].join('-'));

// //課題6:次の配列 ['山', '川', '海'] から、要素 '川' のインデックスを取得し、そのインデックスをコンソールに表示してください。
// console.log(['山', '川', '海'].indexOf('川'));

// //課題7:次の配列 ['リンゴ', 'バナナ', 'オレンジ'] に、要素 'バナナ' が含まれているかどうかを判定し、その結果をコンソールに表示してください。
// console.log(['リンゴ', 'バナナ', 'オレンジ'].includes('バナナ'));

// //課題8:次の配列 ['あ', 'い', 'う', 'え', 'お'] から、文字数が2以上の最初の要素を取得し、その要素をコンソールに表示してください。
// let arr7 = ['あ', 'いい', 'う', 'え', 'お'];
// console.log(arr7.find(function(elements) {
//     return elements.length > 1;
// }));