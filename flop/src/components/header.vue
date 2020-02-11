<template>
  <div class="header">
    <div class="count">
      <p>步数(steps)</p>
      <div>{{$store.state.count}}</div>
    </div>

    <div class="time">
      <p>时间(sec s)</p>
      <div>{{$store.state.time}}</div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'headeri',
  data(){
    return{

       timer:''

    }
  },
  methods:{


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
