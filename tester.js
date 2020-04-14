function andProduct(a, b) {
//     let result= a;
//     a++;
//     for (let i=a; i<=b; i++ ){
//         result = result & i;
//     }
// return result;
    return a & ~((1 << Math.log2(a^b)) - 1);
}

console.log(andProduct(12, 15));
console.log(andProduct(2, 3));
console.log(andProduct(10, 11));

