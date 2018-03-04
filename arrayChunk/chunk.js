// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//     // use splice:
//     // var myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
//     // var removed = myFish.splice(3, 1);
//     // removed is ["mandarin"]
//     // myFish is ["angel", "clown", "drum", "sturgeon"]
//     let newArry = [];
//     function chunkArry() {
//         let tempArry = [];
//         console.log(array.length);
//         if (array.length > 0) {
//             console.log('this is working');
//             for (let i = 0; i < size; i++) {
//                 tempArry.push(array[i]);
//             };
//         newArry.push(tempArry);
//         console.log(newArry);
//         if (size > 0) {
//             array.splice(0, size);
//             console.log('new array: ' + array);
//         }
//         chunkArry();
//         }
//     };
//     if (array.length > 0) {
//         chunkArry();
//     }
// };

function chunk(array, size) {
    const chunked = [];
    let index = 0;

    while (index < array.length) {
      chunked.push(array.slice(index, index + size));
      console.log('index: ' + index);
      console.log(chunked);
      index += size;
    }

    console.log(chunked);
}

chunk([1,2,3,4,5,6,7,8,9,10,11,12,13], 3);
