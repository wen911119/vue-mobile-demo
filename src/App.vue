<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import './style/common.scss';
@font-face {
    font-family: 'iconfont';
    src:url('./assets/iconfont.ttf') format('truetype')
}
html,body{
  margin: 0;
  padding: 0;
}
#app {
  height: 100%;
}
ul,li{
  list-style: none;
  margin: 0;
  padding: 0;
}
  
i{
  font-style: normal;
}
  
*{
  box-sizing: border-box;
}
</style>
