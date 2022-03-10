<template>
  <div class="m-istyle">
    <dl @mouseover="over">
      <dt>{{navList.title}}</dt>
      <dd  v-for="(item, i) in navList.list" :key="i" :class="{active: kind === item.tab}" :data-type="item.tab">{{item.test}}</dd>
    </dl>
    <ul class="ibody">
      <li v-for="(item, i) in list" :key="i">
        <el-card :body-style="{ padding: '0px' }">
          <img
            :src="item.image"
            class="image"
          />
          <div class="cbody">
            <div class="title" :title="item.title">{{item.title}}</div>
            <div class="sub-title" :title="item.subTitle">{{item.subTitle}}</div>
            <div class="price-info">
              <span class="current-price-wrapper" v-if="item.rentNum">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{item.price}}</span>
              </span>
              <span class="current-price-wrapper" v-else>
                <span class="current-price numfont">抢光了</span>
              </span>
              <span class="old-price">门市价¥{{item.old_price}}</span>
              <span class="sold bottom-right-info">{{item.address}}</span>
            </div>
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>

<script>
import { getMainList } from '@/api/container.js'
export default {
  props: ['navList'],
  data () {
    return {
      kind: 'all',
      allList: [],
      list: []
    }
  },
  async mounted () {
      const resp = await getMainList()
      if(resp) {
        this.allList = resp
        const arr =  this.changeData(this.kind)
        this.list = arr
      }
  },
  methods: {
   async over (e) {
      let tagName = e.target.tagName.toLowerCase()
      if (tagName !== 'dd') {
        return false
      }
      this.kind = e.target.getAttribute('data-type')
      // !动态获取数据
       const arr =  this.changeData(this.kind)
       this.list = arr
    },
    changeData(kind) {
        const arr = [];
        if(!this.allList) {
            return
        }
       for(let key in this.allList) {
           if(key === kind) {
                this.allList[key].forEach((item,i) => {
                    let obj = {
                        ...item,
                        old_price: item.price+10,
                        price: item.price,
                        rentNum: Math.floor(Math.random() * 10)
                    }
                    arr.push(obj)
                })
           }
       }
         return arr
    }
    }
  }
</script>

<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>
