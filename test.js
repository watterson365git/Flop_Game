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









function ramdom(arr){
    var arr1 =[];
    var arr2=[]
    for(let i=0, len = arr.length; i < len; i++) {
        let index = parseInt(Math.random() * (len - 1));
        let tempValue = arr[i];
        arr[i] = arr[index];
        arr[index] = tempValue;
    }
   // console.log(arr);


    for(let i =0;i<arr.length;i++){
        var obj={src:arr[i]};
        arr1[i]= obj
    }

    for(var i=0,len=arr1.length;i<len;i+=4){
        arr2.push(arr1.slice(i,i+4));
    }

    console.log(arr2[0][0].src);


}

//调用方法
var arr = ["../assets/img/1.jpg","../assets/img/1.jpg","../assets/img/2.jpg","../assets/img/2.jpg","../assets/img/3.jpg","../assets/img/3.jpg","../assets/img/4.jpg","../assets/img/4.jpg","../assets/img/5.jpg","../assets/img/5.jpg","../assets/img/6.jpg","../assets/img/6.jpg","../assets/img/7.jpg","../assets/img/7.jpg","../assets/img/8.jpg","../assets/img/8.jpg",];
ramdom(arr)