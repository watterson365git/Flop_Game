<template>
  <div id="app">

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

</style>
