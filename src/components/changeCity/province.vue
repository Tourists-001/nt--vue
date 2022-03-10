<template>
  <div>
    <span class="name">按省份选择:</span>
    <Select
    :list="provinceList"
    title="省份"
    :value="province"
    :showWrapperActive="provinceActive"
    @change_Active="change_provActive"
    @change="changeProv"
    className="province"
    />
    <Select
    :list="cityList"
    title="城市"
    :value="city"
    :showWrapperActive="cityActive"
    @change_Active="change_cityActive"
     @change="changeCity"
    :disabled="cityDisabled"
    className="city"
    />
    <span>直接搜索</span>
     <el-select
        v-model="value"
        filterable
        remote
        reserve-keyword
        placeholder="请输入关键词"
        :remote-method="remoteMethod"
        :loading="loading">
    <el-option
      v-for="item in searchList"
      :key="item"
      :label="item"
      :value="item">
    </el-option>
  </el-select>
  </div>
</template>

<script>
import Select from './select.vue'
import { cityList } from '@/api/changeCity.js'
export default {
  data () {
    return {
      provinceList: [],
      cityList: [],
      provinceActive: false,
      cityActive: false,
      value: [],
      searchList: [],
      loading: false,
      province: '省份',
      city: '城市',
      cityDisabled: true
    }
  },
  components: {
    Select
  },
  methods: {
    change_provActive (bol) {
      this.provinceActive = bol
      if(bol) {
          this.cityActive = false
      }
  },
    change_cityActive (bol) {
      this.cityActive = bol
    if(bol) {
      this.provinceActive = false
    }
  },
  remoteMethod(item) {
    console.log(item);
  },
  changeProv(item) {
    this.cityDisabled = false
    this.province = item.name
      this.cityList = item.cityInfoList

  },
  changeCity(item) {
    this.city = item.name
    this.$store.dispatch('setPositions',item)
    this.$router.push('/index')
  }
},
 async created() {
  const resp = await cityList()
  this.provinceList = resp.map((item) => {
    item.name = item.provinceName
    return item
  })
  }
}
</script>

<style lang="scss">
@import '@/assets/css/changecity/iselect.scss';
</style>
