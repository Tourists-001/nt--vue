<template>
    <div class="search-panel">
      <el-row class="m-header-searchbar">
        <el-col :span="3" class="left">
          <img src="//s0.meituan.net/bs/fe-web-meituan/10afbf1/img/logo.png" alt="">
        </el-col>
        <el-col :span="15" class="center">
          <div class="wrapper">
            <el-input v-model="searchWorld"  placeholder="请输入内容" @focus="focus" @blur="blur" @input="input"></el-input>
            <el-button type="primary" icon="el-icon-search" @click="handleClick"></el-button>
            <dl class="hotPlace" v-show="isHotPlace">
              <dt>热门搜索</dt>
              <dd><router-link :to="{name: 'goods', params: {name: item}}" v-for="(item, i) in hotList" :key="i">{{item}}</router-link></dd>
            </dl>
            <dl class="searchList" v-show="isSearchList">
              <dd  v-for="(item, i) in searchList" :key="i"> <router-link :to="{name: 'goods', params: {name: item}}">{{item}}</router-link></dd>
            </dl>
          </div>
          <div class="suggest">
            <router-link :to="{name: 'goods', params: {name: item}}" v-for="(item, i) in hotList" :key="i">{{item}}</router-link>
          </div>
        </el-col>
      </el-row>
    </div>
</template>
<script>
import { getHostList, getSearchList } from '@/api/header.js'
export default{
  data () {
    return {
      searchWorld: '',
      isFocus: false,
      hotList : [],
      searchList: '',
    }
  },
  async created() {
    const list  =  await getHostList()
    this.hotList = list;
  },
  computed: {
    isHotPlace () {
      return this.isFocus && !this.searchWorld
    },
    isSearchList () {
      return this.isFocus && this.searchWorld
    }
  },
  methods: {
    focus () {
      setTimeout(() => {
        this.isFocus = true
      }, 200)
      },
    blur () {
      setTimeout(() => {
        this.isFocus = false
      }, 200)
    },
    async input() {
      let searchWorld = this.searchWorld
      const {list} = await getSearchList()
      this.searchList =  list.filter((item, i) => {
          return item.indexOf(searchWorld) > -1
      })
    },
   async handleClick() {
      if(this.searchWorld === '') {
          this.$message('请输入内容');
          return
      }
      this.$router.push(`/s/${this.searchWorld}`)
    }
  }

}
</script>
<style lang="scss">
    @import "@/assets/css/public/header/index.scss";
    @import "@/assets/css/public/header/search.scss";
</style>
