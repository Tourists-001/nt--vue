<template>
    <div class="m-geo">
        <div class="position">
            <i class="el-icon-location" />
            {{this.$store.state.position.name}}
            <router-link class="changeCity" :to="{name: 'changeCity'}">切换城市</router-link>
            [
                <a href="#" v-for="(item, index) in nearCity" :key="index"> {{item.name}} </a>
            ]
        </div>
        <div class="m-user">
            <router-link class="login" :to="{name: 'Login'}">立即登录</router-link>
            <router-link class="register" :to="{name: 'register'}">注册</router-link>
        </div>
    </div>
</template>
<script>
import { currentPos } from '@/api/changeCity.js'
export default {
  data() {
    return {
        nearCity: [],
        city: '',
    }
  },
  async created() {
      const resp = await currentPos()
      this.$store.dispatch('setPositions',resp)
      this.nearCity = resp.nearCity
  },
  watch: {
    '$store.state.position'() {
      this.nearCity = this.$store.state.position.nearCity
      }
}
}
</script>

<style>

</style>
