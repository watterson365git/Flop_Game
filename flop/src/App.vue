<template>
  <div id="app">
    <div class="papa">
      <img src="./assets/img/拍手.webp" alt="">
    </div>
    <headeri></headeri>
    <bodyi></bodyi>



  </div>
</template>

<script>
import headeri from './components/header'
import bodyi from './components/body'

export default {
  name: 'App',
  components: {
    headeri,
    bodyi
  }
}
</script>

<style>
#app{
  margin: 8px auto;
  width: 400px;

  background-color: #d8e8ea;
  border: 5px ridge #437699;
}
  .papa{
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -100px; /* 高度的一半 */
    margin-left: -100px; /* 宽度的一半 */



  }
.papa img{
  width: 200px;
}
</style>
