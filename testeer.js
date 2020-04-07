//const n = ~9 (base 10);
//console.log(n); // 0101 & 1101 = 0101
// expected output: 5;
//console.log((9).toString(2));

// const  numstring  =(9).toString(2);//(9).toString(2);
// const nArray = 32-numstring.length;
// const array1 = new Array(nArray);
// //const array1 = ['a', 'b', 'c'];
// //const array2 = ['d', 'e', 'f'];
//
// const numarray = numstring.split("");
// const array3 = array1.concat(numarray);
// console.log(numstring);
// console.log(array3);
// console.log(array3.length);
// // const res = array3.map((value, index) => {
// //     console.log(index);
// //     return value ==0? 1 : 0;
// // });
// const res = [];
// for(let i = 0; i < array3.length; i++) {
//     const r = array3[i] == 1? 0 : 1;
//     res.push(r);
// }
// console.log(res);
// console.log(res.join("").toString(10));
// console.log(parseInt((res + '').replace(/[^01]/gi, ''), 2));
// const getSubarray =(arr) =>
// {
//     const subarray = [];
//     const n =arr.length;
//     // Pick starting point
//     for (let i = 0; i < n; i++)
//     {
//         // Pick ending point
//         for (let j = i; j < n; j++)
//         {
//
//             // Print subarray between
//             // current starting
//             // and ending points
//             let na = [];
//             for (let k = i; k <= j; k++){
//                 //console.log(arr[k]);
//
//                 na.push(arr[k])
//             }
//             subarray.push(na)
//         }
//     }
//     return subarray;
// };

const getSubarray =(arr) =>
{
    const subarray = [];
    const n =arr.length;
    var res;
    // Pick starting point
    for (let i = 0; i < n; i++)
    {
        // Pick ending point
        let res2;
        for (let j = i; j < n; j++)
        {

            // Print subarray between
            // current starting
            // and ending points
            let res3;
            for (let k = i; k <= j; k++){
                //console.log(arr[k]);
                res3 = res3 ^ arr[k];
            }
            res2= res2 ^ res3;
        }
        res = res ^ res2;
    }
    return res;
};

function printSubsequences(arr)
{
    // Number of subsequences
    // is (2**n -1)
    const n =arr.length;
    const opsize = Math.pow(2, n);
    var res;
    /* Run from counter
    000..1 to 111..1*/
    for (let counter = 1; counter < opsize; counter++)
    {
        let res2;
        for ( let j = 0; j < n; j++)
        {
            /* Check if jth bit in
               the counter is set
               If set then print jth
               element from arr[] */
            let res3;
            if (counter & (1 << j)){
                // echo $arr[$j], " ";
                console.log(arr[j]);
                res3 = res3 ^ arr[j];
            }
            res2= res2 ^ res3;
        }
        console.log("");
        // echo "\n";
        res = res ^ res2;
    }
    return res;
}

function xorSubset(arr) {
    let res=0;
    if(arr.length % 2 == 0) return 0;
    else {
        for(let i=0; i < arr.length; i+=2) res ^= arr[i];
    }
    return res;
}
//
// function caca(arr){
//     for(let i=0; i < arr.length; i++) cin >> arr[i];
//     cout << xorSubset(arr) << endl;
// }

function sansaXor(arr) {
    var xorResult = (ai) => ai.reduce((accumulator, currentValue) => accumulator ^ currentValue);
    var subArrays = getSubarray(arr);
    var res= xorResult(subArrays[0]);
    for (let i=1; i < subArrays.length; i++) {
        res =  res ^ xorResult(subArrays[i]);
    }
    return res ;
}

// const a = [1, 2, 3];
// const a = [1, 2, 3, 4];
 const a = [4, 5, 7, 5];
console.log(getSubarray(a));
// console.log(printSubsequences(a));
console.log(xorSubset(a));
// console.log(sansaXor(a));
