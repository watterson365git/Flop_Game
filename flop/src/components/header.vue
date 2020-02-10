<template>
  <div class="header">
    <div class="count">
      <p>步数(steps)</p>
      <div>{{$store.state.count}}</div>
    </div>

    <div class="time">
      <p>时间(sec s)</p>
      <div>{{time}}</div>
    </div>
    <button @click="start()"></button>
  </div>
</template>

<script>
export default {
  name: 'headeri',
  data(){
    return{
       time:440,

    }
  },
  methods:{
    get(){
      this.time ++;
      console.log(this.time);
    },
    start() {
      this.timer = setInterval(this.get, 1000);
    },
    stop(){
      clearInterval(this.timer);
    }


  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header{
    display: flex;
  }
.count{
  background-color: powderblue;
  text-align: center;
  line-height: 5px;
  height:55px;
  flex: 1;
}

  .time{
    background-color: #8cd4fb;
    text-align: center;
    line-height: 5px;

    height: 55px;
    flex: 1;
  }


</style>
