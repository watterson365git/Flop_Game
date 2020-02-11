<template>

  <div class="bodyi">
    <div>
      <button @click="ramdom()">洗牌+翻牌</button>
      <button @click="show()">我要看3秒钟</button>


      提示语

    </div>

<div class="contain">
  <div class="fonter">
      <div v-for="item in url" class="font1"  :style="{backgroundImage:'url('+item.src+')'}"> </div>
</div>

  <div class="back">
    <div v-for="(item,index) in back" class="back1"  :style="{backgroundImage:'url('+item.src+')'}" @click="flip(index)" :class="{flop:isfloped==index,flop2:match[index]==index}"> </div>
</div>
</div>
</div>

</template>

<script>
export default {
  name: 'bodyi',
  data(){
    return{
      arr:[{src:require("../assets/img/1.jpg")},{src:require("../assets/img/2.jpg")},{src:require("../assets/img/3.jpg")},{src:require("../assets/img/4.jpg")},{src:require("../assets/img/5.jpg")},{src:require("../assets/img/6.jpg")},{src:require("../assets/img/7.jpg")},{src:require("../assets/img/8.jpg")}],
      url:[],
      back:[{src:require("../assets/img/back.jpg"),boolen:false},{src:require("../assets/img/back.jpg"),boolen:false},{src:require("../assets/img/back.jpg"),boolen:false},{src:require("../assets/img/back.jpg"),boolen:false},{src:require("../assets/img/back.jpg"),boolen:false},{src:require("../assets/img/back.jpg"),boolen:false},{src:require("../assets/img/back.jpg"),boolen:false},{src:require("../assets/img/back.jpg"),boolen:false},{src:require("../assets/img/back.jpg"),boolen:false},{src:require("../assets/img/back.jpg"),boolen:false},{src:require("../assets/img/back.jpg"),boolen:false},{src:require("../assets/img/back.jpg"),boolen:false},{src:require("../assets/img/back.jpg"),boolen:false},{src:require("../assets/img/back.jpg"),boolen:false},{src:require("../assets/img/back.jpg"),boolen:false},{src:require("../assets/img/back.jpg"),boolen:false},],
      isfloped:16,
      shunxv:[],
      match:[99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99],
      tip:'',
    }
  },
  methods:{
    ramdom(){
      // var arr =[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
      // var arr1 =[];
      // for(let i=0, len = arr.length; i < len; i++) {
      //   let index = parseInt(Math.random() * (len - 1));
      //   let tempValue = arr[i];
      //   arr[i] = arr[index];
      //   arr[index] = tempValue;
      // }
      // // return arr 此处输出随机打乱的arr数组
      //
      // //下面输出4个一组分割后的二维数组
      // //[ [ 7, 8, 3, 8 ], [ 2, 6, 4, 6 ], [ 2, 5, 1, 7 ], [ 4, 5, 1, 3 ] ]
      // for(var i=0,len=arr.length;i<len;i+=4){
      //   arr1.push(arr.slice(i,i+4));
      // }
      // console.log(arr1);
      //
      // var url1=[];
      // var url2=[];
      // var url3=[];
      // var url4=[];
      // for (let i =0;i<arr1.length;i++){
      //   // console.log(arr1[i]);
      //   for (let j =0;j<arr1[i].length;j++){
      //     // console.log(arr1[i][j]);
      //     if(i===0){
      //       url1.push(this.arr[arr1[i][j]-1])
      //     }else if(i===1){
      //       url2.push(this.arr[arr1[i][j]-1])
      //     }else if(i===2){
      //       url3.push(this.arr[arr1[i][j]-1])
      //     }else if(i===3){
      //       url4.push(this.arr[arr1[i][j]-1])
      //     }
      //   }
      // }
      // this.url1=url1.concat()
      // this.url2=url2.concat()
      // this.url3=url3.concat()
      // this.url4=url4.concat()


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
      this.shunxv =arr.concat()
      for(let i=0;i<arr.length;i++){
        url.push(this.arr[arr[i]-1])

      }

      this.url=url.concat()
      this.isfloped = 16;
      this.match = [99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99]


      this.$store.commit('clearcount');
      this.stop()


    },
    flip(index){
      if(this.isfloped===16){
        this.start()
      }



      var standed = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
      this.$store.commit('addcount');


      console.log(this.isfloped);
      console.log(index);

      if(this.shunxv[this.isfloped]===this.shunxv[index]){
        let matc = this.match.concat();
        matc[index]=index;
        matc[this.isfloped]=this.isfloped;

        this.match=matc.concat()

      }
      this.isfloped =index

      console.log(JSON.parse(JSON.stringify(this.match)) );


      if( JSON.parse(JSON.stringify(this.match)).toString()== standed.toString()){
        this.stop1();
        this.tip = '游戏完成，洗牌再来一次吧'
      }

    },
    show(){
      this.stop1();
      this.isfloped = 16;
      this.match = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
      setTimeout(this.hidden, 3000);

    },

    hidden(){
      this.match = [99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99]

    },

    get(){
      this.$store.commit('addtime');
      // console.log(this.$store.state.time);
    },
    start() {
      this.timer = setInterval(this.get, 1000);
    },
    stop(){
      clearInterval(this.timer);
      this.$store.commit('cleartime');

    },
    stop1(){
      clearInterval(this.timer);


    }




  },
  created(){
    this.ramdom()
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .contain{
    height: 573px;
    position: relative;
  }

.fonter,.back{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.font1,.back1{
  flex: 0 0 24.5%;

  height: 141px;
  width:98px;
  background-repeat:no-repeat;
  background-size:cover;
  margin: 1px;
}

.back{
  position: absolute;
  top: 0;


}

 .flop{
   transform:rotateY(-180deg);
   transition:1s;
   backface-visibility:hidden;
 }

  .flop2{
    transform:rotateY(-180deg);
    transition:0s;
    backface-visibility:hidden;
  }
</style>
