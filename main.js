// // var mang = [
// //     'trung',
// //     'trung1',
// //     'trung2'
// // ];

// // var arrayLength = mang.length;
// // for(var i = 0; i < arrayLength ; i++){
// //     console.log(mang[i]);
// // }

// // var orders = [
// //     {
// //         name: 'Khóa học HTML - CSS Pro',
// //         price: 3000000
// //     },
// //     {
// //         name: 'Khóa học Javascript Pro',
// //         price: 2500000
// //     },
// //     {
// //         name: 'Khóa học React Pro',
// //         price: 3200000
// //     }
// // ]
// // function getTotal (orders){
// // var tong = 0;
// // for ( var i = 0;i<orders.length;i++){
// //     tong= tong + orders[i].price;
// //     }
// //     return tong;
// // }

// // // Expected results:
// // getTotal(orders) // Output: 8700000

// // var trung = {
// //     name: 'le trung',
// //     age: 20,
// //     address:'Nam Dịnh' 
// // };
// // for( var key in trung){
// //     console.log(key);
// // }

// // function run(object){
// //     var arr = [];
// //     for ( var key in object){
// //         arr.push(`Thuộc tính ${key} có giá trị ${object[key]}` )
// //     }
// //     return arr;
// // }


// // for( var value  of languages){
// //     console.log(value);
// // }

// var arr = [
//     [1,2],
//     [3,4],
//     [5,6]
// ];

// for (var i=0;i<arr.length;i++){
//     for( var j = 0;j<arr[i].length;j++){
//         console.log(arr[i][j]);
//     }
// }

// forEach : duyệt từng phần tử của mảng.
// every :kiểm tra tất cả đk trong mảng xem thoả mãn đk phần tử của mảng

// var isFree = courses.every(function(courses,index){
//     return course.coin ===0;
// });
// console.log(isFree);

// some : chỉ cần 1 đk đúng lập tức ngừng

// find :Tìm kiếm chỉ 1 đối tượng trong mảng
 
// var course = courses.find(function(courses,index){
//     return course.name === 'Ruby';
// });
// console.log(course);

// filter : tìm kiến trả lại tất cả phần đúng đk.

// map : thay đổi elermen của 1 mảng.

// reduce : nhận về 1 giá trị duy nhất

// //sử dụng reduce
// var i = 0;
// function coinHandler(accumulator, currenValue,curentIndex, originArray) {
//     i++;
//     console.table({
//         'lượt chạy: i '
//         'biến tích trữ': accumulator
//     });
//     return 100;
// }

//================Reduce=============

// var sports = [
//     {
//         name: 'Bơi lội',
//         gold: 11
//     },
//     {
//         name: 'Boxing',
//         gold: 3
//     },
//     {
//         name: 'Đạp xe',
//         gold: 10
//     },
//     {
//         name: 'Đấu kiếm',
//         gold: 5
//     },
// ]

// function getTotalGold(sports){ 
//     return sports.reduce(function(accumulator,currentValue){ 
//         var golds = accumulator+currentValue.gold ;
//         return golds; },0)

// }

// // Expected results:
// console.log(getTotalGold(sports)) // Output: 23

//==========for of========================


// const user= ['Suzuki', 90, 'male'];
// for (let value of user){
//   console.log(value);
// }

// console.log("END");
// ======================================================
// function arrToObj(arr){
//     return arr.reduce(function(res,obj){
//         res[obj[0]] = obj[1];
//         return res;
//     },{})
// }
 
// // Expected results:
// var arr = [
//     ['name', 'Sơn Đặng'],
//     ['age', 18],
// ];
// console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }

//==============================tạo function-================
// function sumCb(a, b) {
//     return a+b;
// }
// function subCb(a, b) {
//     return a - b;
// }
// function multiCb(a, b){
//     return a * b;
// }
// function divCb(a, b){
//     return a/b;
// }

// function caculate(a, b, cb) {
//     return cb(a, b);
// }

// console.log(caculate(1, 2, sumCb));
// // Expected results
// console.log(caculate(1, 2, sumCb)) // Output: 3
// console.log(caculate(1, 2, subCb)) // Output: -1
// console.log(caculate(1, 2, multiCb)) // Output: 2
// console.log(caculate(3, 1, divCb)) // Output: 3

// ============================================================

// Array.prototype.myMap = function(cb){
//     var outPut = [], arrLength = this.length;

//     for(let i = 0;i<arrLength; i ++){
//     var results = cb(this[i],i)
//     outPut.push(result)
//     }
//     return outPut;
// }

// Array.prototype.myFilter = function(cb){
//     var result = [];
//     for( let index = 0; index<this.length; index++){
//         if( cb(this[index],index,this)){
//             result.push(this[index]);
//         }
//     }
//     return result;
// };

// Array.prototype.mySome = function(cb){
//     for(var index in this){
//         if(this.hasOwnProperty(index)){
//             var result = cb(this[index],index,this);
//             if(result){
//                 return true;
//             }
//         }
//     }
//     return false;
// }

// Array.prototype.myEvery = function(cb){
//     var output = true;
//     for( var index in this){
//         if(this.hasOwnProperty(index)){
//             var result = cb(this[index],index,this)
//             if(!result){
//                 output = false;
//                 break;
//             }
//         }
//     }
//     return output;
// }

// ============lấy Element trong DOM==============

// var productsListElement = document.querySelector('.products-list')
// console.log(productsListElement)
// var firstProductElement =document.querySelector('.product:first-child')
// console.log(firstProductElement)
// var buttonElements =document.querySelectorAll('button')
// console.log(buttonElements)


// var listItemNodes = document.querySelector('.box-1');
// console.log(listItemNodes);

// var headingElement = document.querySelector('h1');

// headingElement.title = 'Heading';

// document.querySelector('h1').title = 'F8 - Học lập trình để đi làm';
// document.querySelector('h1').setAttribute('data-title','F8 - Học lập trình để đi làm');
// document.querySelector('a').href = "https://fullstack.edu.vn/" ;
// document.querySelector('a').target = "_blank";

// var headingElement = document.querySelector('h1');

// headingElement.textContent = "F8 - Học lập trình để đi làm"

var boxElement = document.querySelector('.box');

function render(courses){
    var ulElement = document.querySelector('ul');
    ulElement.innerHTML = courses.map(course => `<li>${course}</li>`).join('');
}
 console.loc(render(courses))   

 function arrToObj(arr) { let ob = {} 
 // khởi tạo đối tượng kết quả là một đối tượng rỗng 
 arr.forEach((value) => { 
// duyệt qua mỗi phần tử của mảng arr bằng 
forEach ob[value[0]] = value[1]; 
// tạo một thuộc tính trong đối tượng với key là phần tử đầu tiên của mảng con và value là phần tử thứ hai của mảng con. 
}) return ob; 
// trả về đối tượng kết quả đã được tạo 
}
