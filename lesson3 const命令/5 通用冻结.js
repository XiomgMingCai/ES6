/**
 * Created by xiongmingcai on 16/12/21.
 */
// //彻底冻结函数的通用方法
// var constantize  = (obj) => {
//     Object.freeze(obj);
//     Object.keys(obj).forEach(key,value) =>{
//         if (typeof  obj[key] === 'object'){
//             constantize(obj[key])
//         }
//     }
// }/*
/*
 //让 item 等于一个新的字符串对象
 var item = "test";
 //itemRef 也引用相同的字符串对象
 var itemRef = item; //在字符串对象上串联一个新的对象
 // 注意:这创建了一个新的对象,并不修改初始对象
 item += "ing";
 //item 和 itemRef 的值并不相等,因为 //一个全新的对象被创建了
 console.log( item != itemRef );*/
/*


 function sendMessage(msg, obj) {
 if (arguments.length == 2) {
 obj.handleMsg(msg);
 }
 else {
 console.log(msg)
 }
 }

 sendMessage('hallo world', {
 handleMsg: function (msg) {
 console.log("This is a custom message: " + msg)
 }
 });
 */
//
// //一个使用任意数目参数创建一个数组的函数
// function makeArray() {
//     var arr = []
//     for (var i = 0; i < arguments.length; i++) {
//         arr.push( arguments[i])
//     }
//     return arr
// }
//
// console.log(makeArray(1,2,3,4,5,6))
//
// //传入N个 参数求出参数的和
//     function addArray() {
//         var  nums = null;
//         for (var i =0;i<arguments.length;i++){
//             nums += arguments[i]
//         }
//         return nums
//     }
//
//     var arr = addArray(1,2,3,3)
//         console.log(arr)
/*


 //  显示错误消息和缺省消息
 function displaError(msg) {
 if ( typeof msg == 'undefined' ) {
 msg = "An error occurred.";
 }
 console.log(msg)
 }
 displaError()*/
/*


 var foo  = 'text';
 if(1){
 var foo = 'new text'
 }
 console.log(foo == 'new text')*/


console.log(a);
var a = 1;
console.log(a);

function a() { console.log(2)
}

console.log(a);
var a = 3;
console.log(a);

function a() {  console.log(4);
}
console.log(a);
console.log(a-3);
