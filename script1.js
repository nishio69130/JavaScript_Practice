function getGreeting() {
    return "Hello World";
}

const o = {};
o.f = getGreeting;
console.log(o.f());

// このスクリプトの意義は以下の通りです：

// 1. 配列の要素を関数で置き換える
const arr = [1, 2, 3];
arr[1] = getGreeting; // 配列の2番目の要素を関数で置き換え

// 2. 関数を直接参照する
let message = arr[1];
console.log(message); // 関数自体を出力（関数の定義が表示される）

// 3. 関数を実行して結果を取得する
message = arr[1]();
console.log(message); // 関数の実行結果（"Hello World"）を出力

// このスクリプトは、配列の要素として関数を格納し、
// その関数を直接参照する場合と実行する場合の違いを示しています。
// また、JavaScriptにおける関数の柔軟な扱いを示す例でもあります。




// この関数は、JavaScriptにおける引数の扱いと変数のスコープについて理解を深めるための教育的な例です。

function f(x) {
    console.log(`f called with ${x}`);
    x = 2;
    console.log(`x changed to ${x}`);
}

let x = 3;
console.log(`x before f call is ${x}`);
f(x);
console.log(`x after f call is ${x}`);

