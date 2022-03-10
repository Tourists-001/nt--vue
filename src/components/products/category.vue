<template>
<div class="m-product-categroy">
  <dl class="classic">
    <dt>全部</dt>
    <dt>分类</dt>
    <dd v-for="(item, i) in menuList" :key="i">
      <Select :name="item.title" :list="item.subList"/>
    </dd>
  </dl>
    <dl class="classic">
    <dt>区域</dt>
    <dt>分类</dt>
    <dd v-for="(item, i) in areaList" :key="i">
      <Select :name="item.title" :list="item.subList"/>
    </dd>
  </dl>
</div>
</template>

<script>
import Select from './select.vue'
import { getCategory } from '@/api/products.js'
export default {
  components: {
    Select
  },
  data() {
    return {
      menuList: [
          {
            title: "美食",
            type: "food",
            subList: [
              {
                name: "日本菜",
                id: "Japan"
              }
            ]
          },
          {
            title: "酒店住宿",
            type: "hotal",
            subList: [
              {
                name: "温泉酒店",
                id: "hot_spring"
              }
            ]
          }
        ],
      areaList: [{
        "title": "推荐商圈",
        "subList": [{
            "name": "望京",
            "id": 120000
        }, {
            "name": "昌平",
            "id": 12222
        }]
    }]
  }
  },
  async created () {
      const resp = await getCategory()
      console.log(resp)
  }
};
</script>
