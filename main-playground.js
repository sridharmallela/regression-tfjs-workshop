// Tensor Basics Example
// var a = tf.tensor([1, 2, 3, 4], [2, 2]);
// // tf.tensor1d([1,2,3]);
// // tf.tensor2d([...], [...])
// console.log(a.rank); // 2
// console.log(a.shape); // (2) [2, 2]
// a.print();

// QUIZ
// make a rank 1 tensor of 4,5,6
// const r1 = tf.tensor([4, 5, 6]); // simpler
// const r1 = tf.tensor1d([4, 5, 6]); // using 1d
// const r1 = tf.tensor([4, 5, 6], [3]); // second param is shape
// console.log(r1.rank); // 2
// console.log(r1.shape); // (2) [2, 2]
// r1.print();
// then a rank 2 tensor of [4], [5], [6]
// const r2 = tf.tensor([[4], [5], [6]]); // simpler
// const r2 = tf.tensor2d([[4], [5], [6]]); // same
// const r2 = tf.tensor2d([4, 5, 6], [3, 1]); // second param means like 3 elements and 1 element so x, y
// console.log(r2.rank); // 2
// console.log(r2.shape); // (2) [2, 2]
// r2.print();
// then a rank 3 tensor of [[4]], [[5]], [[6]]
// const r3 = tf.tensor([[[4]], [[5]], [[6]]]); // simple
// const r3 = tf.tensor3d([[[4]], [[5]], [[6]]]); // simple 3d
// const r3 = tf.tensor3d([4, 5, 6], [3, 1, 1]); // x, y, z dimension
// console.log(r3.rank); // 2
// console.log(r3.shape); // (2) [2, 2]
// r3.print(); // returns an new object created

// Addition of two matrix
// var a = tf.tensor([3, 8, 4, 6], [2, 2]);
// var b = tf.tensor([4, 0, 1, -9], [2, 2]);

// // basic math operations
// a.add(b).print(); // simple math as coordinates
// a.sub(b).print();
// a.div(b).print();
// a.mul(b).print(); // element wise multiplication

// https://mathinsight.org/dot_product_matrix_notation
// https://www.mathsisfun.com/algebra/matrix-multiplying.html
// var a = tf.tensor([1, 2, 3, 4, 5, 6], [2, 3]);
// a.print();
// var b = tf.tensor([7, 8, 9, 10, 11, 12], [3, 2]);
// b.print();
// a.dot(b).print(); // dot product multiplication

// QUIZ
// Multiply both these matrices using element wise and dot
// [4,5,6] [2,
//          3,
//          4]
// var a = tf.tensor([4, 5, 6], [1, 3]);
// a.print();
// var b = tf.tensor([2, 3, 4], [3, 1]);
// b.print();
// a.mul(b).print(); // multiply
// a.dot(b).print(); // dot

// TODO: Now complicated stuff
const x = tf.variable(tf.scalar(4.12)); // .variable is ssomething which will changes, so assigning scalar value
// as we declared x as variable it will modify x
const ys = tf.tensor([2, 2, 2, 2, 2], [5, 1]);
// but as ys is tensor it will never be modified
/**
 * [
 *  2,
 *  2,
 *  2,
 *  2,
 *  2
 * ]
 */
const res = ys.mul(x).mean().square();
res.print(); // res is an object like image eventhough it is number
console.log(res.dataSync()); // will actual get the value
// we want to learn the change the value of x, as we know x should be 0
// we will create .optimizer
// SGD - stochastic gradient descent
// https://en.wikipedia.org/wiki/Stochastic_gradient_descent
// here we are training that it down by 0.001, by 4.12
const optimizer = tf.train.sgd(0.001); // change sgd by bigger value you can see bigger change

// let see if it is training
console.log(x.dataSync());

for (let index = 0; index < 3000; index++) {
    optimizer.minimize(() => {
        return ys.mul(x).mean().square();
    });
    console.log(x.dataSync());
}

// we are passing data and loss function to tensor and training them to chew up some data
// this is not rocket science but i have no clue
