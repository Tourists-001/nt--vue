<template>
  <div :class="{'choose-wrap':true, disabled: disabled ? 'disabled' : ''}" @click="showWrapper" v-document-click="document">
    <div class="choose">
      <span>{{value}}</span>
      <i class="el-icon-caret-bottom"></i>
      <div :class="{'mt-content':true,'active':showWrapperActive}">
        <h2>{{title}}</h2>
        <div :class="['wrapper', className]">
          <div class="col" v-for="(l,i) in renderList" :key="i">
            <span :class="{'mt-item':true,'active':item.name == value}" v-for="(item,i) in l" :key="i" @click="changeVal(item)">{{item.name}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['list', 'value', 'title', 'showWrapperActive', 'disabled', 'className'],
  computed: {
    renderList() {
        let col = Math.ceil(this.list.length - 1 / 12)
        let resultList = []
        for(let i = 0; i< col; i++) {
            let data = this.list.slice(i *12 , i*12 +12)
            resultList.push(data)
        }
        return resultList
    }
  },
  methods: {
  showWrapper(e) {
    e.stopPropagation()
    if(!this.disabled) {
      this.$emit('change_Active',true)
    }
  },
  document (e) {
    this.$emit('change_Active',false)
  },
  changeVal(item) {
    this.$emit('change',item)
  },
},
}
</script>

<style lang="scss">
@import '@/assets/css/changecity/select.scss'
</style>
