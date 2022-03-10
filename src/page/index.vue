<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <Menu />
      </el-col>
      <el-col :span="19">
        <Life />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <Container :navList="iStyleList" />
      </el-col>
      <el-col :span="24">
        <Container :navList="iStyleList" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Menu from '@/components/index/Menus.vue'
import Life from '@/components/index/Life.vue'
import Container from '@/components/index/container.vue'
export default {
  components: {
    Menu,
    Life,
    Container
  },
  data () {
    return {
      iStyleList: {
        title: '有格调',
        list: [
          {
            test: '全部',
            tab: 'all'
          },
          {
            test: '约会聚餐',
            tab: 'food'
          },
          {
            test: '丽人SPA',
            tab: 'spa'
          }
        ]
      }
    }
  }
}
</script>
<style lang="scss">
@import "@/assets/css/index/index.scss";
</style>
