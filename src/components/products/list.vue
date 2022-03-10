<template>
  <div class="m-products-list">
    <ul>
      <li v-for="(item, i) in nav" :key="i" :class="{'s-nav-active': item.active}">{{item.name}}</li>
    </ul>
    <el-row>
    <List :meta="item" v-for="(item, i) in productList" :key="i"/>
    </el-row>
  </div>
</template>

<script>
import List from './item.vue'
import { getProductList } from '@/api/products.js'
export default {
  components: {
      List
  },
  data() {
    return {
      nav:[{
        key: 's-default',
        name: '智能推荐',
        active: true,
      },{
        key: 's-price',
        name: '价格最低',
        active: true,
      },{
        key: 's-score',
        name: '人气最高',
        active: true,
      },{
        key: 's-comment',
        name: '评价最高',
        active: true,
      }],
      productList:  []
    }
  },
  async created () {
    const resp = await getProductList()
    this.productList = resp
  }

}
</script>

<style>

</style>
