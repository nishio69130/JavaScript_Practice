// このスクリプトの意図は、JavaScriptにおける値渡しと参照渡しの違いを示すことです。

// 1. プリミティブ型（数値）の場合：値渡し
function f(x) {
    console.log(`f関数が ${x} で呼び出されました`); // f関数が 3 で呼び出されました
    x = 2;
    console.log(`関数内でxが ${x} に変更されました`); // 関数内でxが 2 に変更されました
}

let x = 3;
console.log(`f関数呼び出し前のxは ${x} です`); // f関数呼び出し前のxは 3 です
f(x);
console.log(`f関数呼び出し後のxは ${x} です`); // f関数呼び出し後のxは 3 です

// この部分は、プリミティブ型の引数が値渡しされることを示しています。
// 関数内でxの値を変更しても、元の変数xには影響しません。

// 2. オブジェクト型の場合：参照渡し
function g(obj) {
    console.log(`g関数が ${obj.message} で呼び出されました`); // g関数が こんにちは で呼び出されました
    obj.message = "こんばんは";
    console.log(`関数内でobj.messageが ${obj.message} に変更されました`); // 関数内でobj.messageが こんばんは に変更されました
}

let obj = { message: "こんにちは" };
console.log(`g関数呼び出し前のobj.messageは ${obj.message} です`); // g関数呼び出し前のobj.messageは こんにちは です
g(obj);
console.log(`g関数呼び出し後のobj.messageは ${obj.message} です`); // g関数呼び出し後のobj.messageは こんばんは です

// この部分は、オブジェクト型の引数が参照渡しされることを示しています。
// 関数内でオブジェクトのプロパティを変更すると、元のオブジェクトも変更されます。

// このスクリプトは、JavaScriptの関数呼び出しにおける引数の扱いの違いを
// 実践的に示すことで、プログラマーがこの重要な概念を理解するのを助けます。

function h(obj2) {
    console.log(`h関数が ${obj2.message} で呼び出されました`); // h関数が こんにちは で呼び出されました
    obj2.message = "こんばんは";
    console.log(`関数内でobj2.messageが ${obj2.message} に変更されました`); // 関数内でobj2.messageが こんばんは に変更されました
    obj2 = { message: "Hello" };
    console.log(`関数内でobj2が ${obj2.message} に変更されました`); // 関数内でobj2が Hello に変更されました
}

let obj2 = { message: "こんにちは" };
console.log(`h関数呼び出し前のobj2.messageは ${obj2.message} です`); // h関数呼び出し前のobj2.messageは こんにちは です
h(obj2);
console.log(`h関数呼び出し後のobj2.messageは ${obj2.message} です`); // h関数呼び出し後のobj2.messageは こんばんは です

// この例では、関数内でオブジェクトのプロパティを変更した後、
// 新しいオブジェクトを代入しています。しかし、元のオブジェクトへの
// 参照は変更されないため、関数外のobj2は最初の変更（"こんばんは"）のみが
// 反映されます。これは、JavaScriptにおける参照の動作を示しています。
