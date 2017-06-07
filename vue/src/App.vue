<template>
  <el-row>
    <el-col :span='6'>&nbsp;</el-col>
    <el-col :span='12'>
      <router-view></router-view>
    </el-col>
    <el-col :span='6'>&nbsp;</el-col>
  </el-row>
  <table
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 3px;
}
</style>
