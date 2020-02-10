// function ramdom(arr){
//     var arr1 =[];
//     for(let i=0, len = arr.length; i < len; i++) {
//         let index = parseInt(Math.random() * (len - 1));
//         let tempValue = arr[i];
//         arr[i] = arr[index];
//         arr[index] = tempValue;
//     }
//     // return arr 此处输出随机打乱的arr数组
//
//     //下面输出4个一组分割后的二维数组
//     //[ [ 7, 8, 3, 8 ], [ 2, 6, 4, 6 ], [ 2, 5, 1, 7 ], [ 4, 5, 1, 3 ] ]
//     for(var i=0,len=arr.length;i<len;i+=4){
//         arr1.push(arr.slice(i,i+4));
//     }
//     console.log(arr1);
//     return arr1
//
// }
//
// //调用方法
// var arr = ["../assets/img/1.jpg","../assets/img/1.jpg","../assets/img/2.jpg","../assets/img/2.jpg","../assets/img/3.jpg","../assets/img/3.jpg","../assets/img/4.jpg","../assets/img/4.jpg","../assets/img/5.jpg","../assets/img/5.jpg","../assets/img/6.jpg","../assets/img/6.jpg","../assets/img/7.jpg","../assets/img/7.jpg","../assets/img/8.jpg","../assets/img/8.jpg",];
// ramdom(arr)


// arr:[{src:require("../assets/img/1.jpg")},{src:require("../assets/img/1.jpg")},{src:require("../assets/img/2.jpg")},{src:require("../assets/img/2.jpg")},{src:require("../assets/img/3.jpg")},{src:require("../assets/img/3.jpg")},{src:require("../assets/img/4.jpg")},{src:require("../assets/img/4.jpg")},{src:require("../assets/img/5.jpg")},{src:require("../assets/img/5.jpg")},{src:require("../assets/img/6.jpg")},{src:require("../assets/img/6.jpg")},{src:require("../assets/img/7.jpg")},{src:require("../assets/img/7.jpg")},{src:require("../assets/img/8.jpg")},{src:require("../assets/img/8.jpg")}],
var qarr =[1,2,3,4,5,6,7,8];
function ramdom(){
    var url =[];
    var arr =[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
    var arr1 =[];
    for(let i=0, len = arr.length; i < len; i++) {
        let index = parseInt(Math.random() * (len - 1));
        let tempValue = arr[i];
        arr[i] = arr[index];
        arr[index] = tempValue;
    }
    // return arr 此处输出随机打乱的arr数组
    console.log(arr)

    for(let i=0;i<arr.length;i++){
        url.push(qarr[arr[i]-1])
        console.log(url)
    }




    //下面输出4个一组分割后的二维数组
    //[ [ 7, 8, 3, 8 ], [ 2, 6, 4, 6 ], [ 2, 5, 1, 7 ], [ 4, 5, 1, 3 ] ]
    // for(var i=0,len=arr.length;i<len;i+=4){
    //     arr1.push(arr.slice(i,i+4));
    // }
    // console.log(arr1);
    //
    // var url1=[];
    // var url2=[];
    // var url3=[];
    // var url4=[];
    // for (let i =0;i<arr1.length;i++){
    //     // console.log(arr1[i]);
    //     for (let j =0;j<arr1[i].length;j++){
    //         // console.log(arr1[i][j]);
    //         if(i===0){
    //             url1.push(qarr[arr1[i][j]-1])
    //             console.log("i:"+i);
    //             console.log("j:"+j);
    //             console.log("pushu:"+qarr[arr1[i][j]-1]);
    //         }else if(i===1){
    //             url2.push(qarr[arr1[i][j]-1])
    //             console.log("i:"+i);
    //             console.log("j:"+j);
    //             console.log("pushu:"+qarr[arr1[i][j]-1]);
    //         }else if(i===2){
    //             url3.push(qarr[arr1[i][j]-1])
    //             console.log("i:"+i);
    //             console.log("j:"+j);
    //             console.log("pushu:"+qarr[arr1[i][j]-1]);
    //         }else if(i===3){
    //             url4.push(qarr[arr1[i][j]-1])
    //             console.log("i:"+i);
    //             console.log("j:"+j);
    //             console.log("pushu:"+qarr[arr1[i][j]-1]);
    //         }
    //     }
    // }
    // console.log(url1);
    // console.log(url2);
    // console.log(url3);
    // console.log(url4);


}
ramdom()
//调用方法
// var arr = ["../assets/img/1.jpg","../assets/img/1.jpg","../assets/img/2.jpg","../assets/img/2.jpg","../assets/img/3.jpg","../assets/img/3.jpg","../assets/img/4.jpg","../assets/img/4.jpg","../assets/img/5.jpg","../assets/img/5.jpg","../assets/img/6.jpg","../assets/img/6.jpg","../assets/img/7.jpg","../assets/img/7.jpg","../assets/img/8.jpg","../assets/img/8.jpg",];
// ramdom(arr)






//调用方法
// var arr = [{src:require("../assets/img/1.jpg")},{src:require("../assets/img/1.jpg")},{src:require("../assets/img/2.jpg")},{src:require("../assets/img/2.jpg")},{src:require("../assets/img/3.jpg")},{src:require("../assets/img/3.jpg")},{src:require("../assets/img/4.jpg")},{src:require("../assets/img/4.jpg")},{src:require("../assets/img/5.jpg")},{src:require("../assets/img/5.jpg")},{src:require("../assets/img/6.jpg")},{src:require("../assets/img/6.jpg")},{src:require("../assets/img/7.jpg")},{src:require("../assets/img/7.jpg")},{src:require("../assets/img/8.jpg")},{src:require("../assets/img/8.jpg")},];



