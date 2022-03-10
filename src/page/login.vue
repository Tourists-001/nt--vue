<template>
 <div class="page-login">
   <div class="login-header">
     <a class="logo" href="http://www.meituan.com"></a>
   </div>
   <div class="login-panel">
     <div class="banner">
       <img src="https://mss.sankuai.com/static-prod01/com.sankuai.fe.www.sso/page/static/banner/www.jpg" width="480" height="370" alt="美团网">
     </div>
     <div class="form">
       <h4 v-show="error" :class="{tips: (!username || !password)  && error}">{{(username&&password)  ? '' : error}}</h4>
       <p>账号登录</p>
       <el-input :class="{error: !username  && error}" v-model="username" placeholder="请输入用户名" prefix-icon="profile"></el-input>
       <el-input :class="{error: !password  && error}" v-model="password" placeholder="请输入密码" type="password" prefix-icon="password"></el-input>
        <div class="foot">
          <a href="#">忘记密码</a>
        </div>
        <el-button type="warning" class="btn-login" @click="submit">登录</el-button>
        <p class="reg">
          <span>还没有账号</span>
          <router-link :to="{name:'register'}">免费注册</router-link>
          </p>
          <div class="user-agreement-wrap-text">
             <el-checkbox v-model="checked" fill="#fff"></el-checkbox>
             <div class="user-agreement-content user-agreement-common">
                 我已阅读并同意<a href="https://rules-center.meituan.com/rules-detail/4" class="j-terms" id="meituanTos" target="_blank">《美团用户协议》</a><a href="https://rules-center.meituan.com/rules-detail/2" class="j-terms" id="meituanTos" target="_blank">《隐私政策》</a>
                 ，并授权美团使用该美团账号信息（如昵称、头像、收货地址）进行统一管理
              </div>
            </div>
            <div class="oauth-wrapper J-oauth-wrapper">
            <h3 class="title-wrapper"><span class="title">用合作网站账号登录</span></h3>
            <div class="oauth cf">
                <span class="oauth__link oauth__link--qq third-login-btn" data-href="/account/connect/tencent" target="_blank" id="J-third-tencent"></span>
                <span class="oauth__link oauth__link--weibo third-login-btn" data-href="/account/connect/sina" target="_blank" id="J-third-sina"></span>
            </div>
            <i id="thirdLoginRiskpartner" data-riskpartner="0"></i>
        </div>
     </div>
   </div>
   <footer>
           <ul>
               <li><a href="#">关于美团</a></li>
               <li><a href="">加入我们</a></li>
               <li><a href="">商家入驻</a></li>
               <li><a href="">帮助中心</a></li>
               <li><a href="">美团手机版</a></li>
           </ul>
           <p>©2018 美团网团购 meituan.com 京ICP证070791号 京公网安备11010502025545号</p>
       </footer>
 </div>
</template>
<script>
import { login } from '@/api/login.js'
export default {
  data() {
    return {
        username: '',
        password: '',
        checked: false,
        error: ''
    }
  },
  methods: {
  async  submit() {
     if(!this.username) {
         this.error = '请输入账号'
         return false
     }
      if(!this.password) {
         this.error = '请输入密码'
         return false
     }
     if(!this.checked) {
        this.$message('勾选协议')
       return false
     }
    const resp = await login({username: this.username,password: this.password})
    if(resp.status != 'success') {
      this.$router.push({name: 'Index'})
    } else {
      this.$message('账号或密码错误')
    }
}
  }

}
</script>

<style lang="scss">
@import '@/assets/css/login/index.scss';
</style>
