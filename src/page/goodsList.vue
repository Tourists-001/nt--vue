<template>
  <div class="page-product">
    <el-row>
      <Crumbs />
    </el-row>
    <el-row>
      <el-col :span="19">
        <el-row>
          <Category />
        </el-row>
        <el-row>
          <List />
        </el-row>
      </el-col>
      <el-col :span="5">map+goods</el-col>
    </el-row>

  </div>
</template>

<script>
import Crumbs from '@/components/products/crumb.vue'
import Category from '@/components/products/category.vue'
import List from '@/components/products/list.vue'
export default {
  components: {
    Crumbs,
    Category,
    List
}
}
</script>

<style lang="scss">
  @import '@/assets/css/products/index.scss';
</style>

