<template>
    <el-row class="m-header-topbar">
      <el-col :span="14">
        <Geo />
      </el-col>
      <el-col :span="10">
        <Nav />
      </el-col>
    </el-row>
</template>
<script>
import Geo from './geo.vue'
import Nav from './nav'

export default {
  components: {
    Geo,
    Nav
  }

}
</script>
<style lang="scss">
@import '@/assets/css/public/header/topbar.scss'
</style>
