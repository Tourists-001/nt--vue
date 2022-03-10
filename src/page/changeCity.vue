<template>
<div class="page-changeCity">
  <el-row>
    <Province />
  </el-row>
  <el-row>
  <Hot title="热门城市" :list="list"/>
  </el-row>
  <el-row>
  <Hot title="最近访问" :list="search"/>
  </el-row>
  <el-row>
    <Category />
  </el-row>
</div>
</template>

<script>
import Province from '@/components/changeCity/province.vue'
import Hot from '@/components/changeCity/hot.vue'
import Category from '@/components/changeCity/category.vue'
import { hotList, searchList } from '@/api/changeCity.js'
export default {
  data () {
    return {
      list:[],
      search: []
    }
  },
  components: {
    Province,
    Hot,
    Category
  },
  async created () {
      const resp = await hotList()
      this.list = resp.map((item) => {
       return item.name
      })
      const list = await searchList()
      this.search = list.map((item) => {
       return item.name
      })
  }

}
</script>

<style>

</style>
