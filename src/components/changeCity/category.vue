<template>
  <div class="categroy">
    <dl class="m-categroy">
      <dt>按拼音首字母查:</dt>
      <dd v-for="(item, i) in list" :key="i">
        <a :href="'#city-'+item">{{item}}</a>
      </dd>
    </dl>
    <dl v-for="(item, i) in cityGroup" :key="i" class="m-categroy-section" :id="'city-'+i">
      <dt>{{i}}</dt>
      <dd>
        <span v-for="(c, i) in item" :key="i" @click="changeCity(c.name)">{{c.name}}</span>
      </dd>
    </dl>
  </div>
</template>

<script>
import { getCityList, cityList } from '@/api/changeCity.js'
export default {
  data () {
    return {
      list: 'ABCDEFGHIGKLMNOPQRSTUVWXYZ'.split(''),
      cityList: [],
      cityGroup: {}
    }
  },
  async created() {
      const data = await getCityList()
      let obj = {}
      data.forEach(item => {
          if(!obj[item.firstChar.toUpperCase()]) {
              obj[item.firstChar.toUpperCase()] = []
          }
          obj[item.firstChar.toUpperCase()].push(item)
      })
      this.cityGroup = obj
  },
  async mounted() {
     const resp = await cityList()
      if(!resp) {
        return
     }
     const data = resp.forEach((item,i) => {
        return item.cityInfoList
     })

  },
  methods: {
    changeCity(item) {
      this.$store.dispatch('setPosition', item)
      this.$router.push({ name: 'index' })
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/css/changecity/categroy.scss';
</style>
