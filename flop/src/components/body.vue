<template>
  <div class="bodyi">
    <p>{{url1}}</p>
    <p>{{url2}}</p>
    <p>{{url3}}</p>
    <p>{{url4}}</p>
    <button @click="ramdom()">kaishi</button>
    <div class="one" v-for="item in url1">
      <img :src="item.src" alt="">
      <img src="../assets/img/1.jpg" alt="">
    </div>
    <div  class="two" v-for="item in url2">

    </div>
    <div  class="three" v-for="item in url3">

    </div>
    <div  class="four" v-for="item in url4">

    </div>
</div>


</template>

<script>
export default {
  name: 'bodyi',
  data(){
    return{
      arr:[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8],
      url1:[],
      url2:[],
      url3:[],
      url4:[],

    }
  },
  methods:{
    ramdom(){
      var arr = ["../assets/img/1.jpg","../assets/img/1.jpg","../assets/img/2.jpg","../assets/img/2.jpg","../assets/img/3.jpg","../assets/img/3.jpg","../assets/img/4.jpg","../assets/img/4.jpg","../assets/img/5.jpg","../assets/img/5.jpg","../assets/img/6.jpg","../assets/img/6.jpg","../assets/img/7.jpg","../assets/img/7.jpg","../assets/img/8.jpg","../assets/img/8.jpg",];
      var arr1 =[];
      var arr2=[];
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

      this.url1=arr2[0];
      this.url2=arr2[1];
      this.url3=arr2[2];
      this.url4=arr2[3];


    }
  },


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.one,.two,.three,.four {
    display: flex;
  }

.one div,.two div,.three div,.four div {
    flex: 1;
    padding: 3px;
  border: solid 1px black;
  background:url("../assets/img/back.jpg") round;
  width: 80px;
  height: 120px;

  }

.one div,.two div,.three div,.four div:hover {
  flex: 1;
  padding: 3px;
  border: solid 1px black;
  background:url("../assets/img/1.jpg") round;
  transform:rotateY(-180deg);
  transition:0.6s;
  width: 80px;
  height: 120px;

}









</style>
