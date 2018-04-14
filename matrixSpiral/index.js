// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(int) {
    const matrix = [];
    const values = [];

    for (let i = 0; i < int; i++) {
    matrix.push([]);
    }
    console.log(matrix);

    for (let j = 1; j-1 < int*int; j++){
        values.push(j);
    }
    console.log(values);

    for (let matri of matrix){
        for (let value of values){
            matri.push(values.splice(0, 3));
        }
        console.log(matrix);
    }
}

matrix(3);