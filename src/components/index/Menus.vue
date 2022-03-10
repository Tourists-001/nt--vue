<template>
  <div class="m-menu" @mouseleave="mouseleave">
    <dl class="nav">
      <dt>全部分类</dt>
      <dd v-for="(item, i) in menuList" :key="i" @mouseenter="menuEnter(item)">
        <i :class="item.type"></i>
        {{item.name}}
        <span class="arrow"></span>
      </dd>
    </dl>
    <div v-if="curDetail" class="detail" @mouseenter="detailEnter" @mouseleave="detailLeave">
      <template v-for="(item, i) in curDetail.items">
        <h4 :key="i">{{item.title}}</h4>
        <span v-for="(v, i) in item.items" :key="i + '-' + v">{{v}}</span>
      </template>
    </div>
  </div>
</template>

<script>
import { getSliderList } from '@/api/container.js'
export default {
  data () {
    return {
      curDetail: null,
      menuList: []
    }
  },
  async created () {
    const resp = await getSliderList()
    this.menuList = resp
  },
  methods: {
    menuEnter (e) {
      this.curDetail = e
    },
    mouseleave () {
      this.timer = setTimeout(() => {
        this.curDetail = ''
      }, 200)
    },
    detailEnter () {
      clearInterval(this.timer)
    },
    detailLeave () {
      this.curDetail = ''
    }
  }
}
</script>
