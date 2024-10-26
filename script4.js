const arr1 = [1, 2, 3, 4, 5];
const arr2 = ["one", 2 , "three"];
const arr3 = [[1,2,3], ["one", 4 , "three"]]
const arr4 = [[{
    name: "John",
    age: 20,
    city: "New York"
}, {
    name: "Jane",
    age: 22,
    city: "Los Angeles"
}], 12, function(){
    return "Hello World"
}]

console.log(arr1[0]); // 1
console.log(arr2[2]); // three
console.log(arr3[1][1]); // 2
console.log(arr4[0][1].name); // John
console.log(arr4[1]); // 12
console.log(arr4[2]()); // Hello World