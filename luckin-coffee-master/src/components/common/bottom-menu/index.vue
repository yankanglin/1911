<!--
 * @Author: Li.chen
 * @Date: 2019-01-09 19:05:53
 * @LastEditors: Li.chen
 * @LastEditTime: 2019-01-15 17:10:48
 * @Description: File Description .
 -->
<template>
  <div id="Menu">
    <ul class="item-list">
      <li class="item" v-for="item in itemList" :class="[item.index == defActive ? 'active' : '']" @click="handleClick(item.index)" :key="item.id">
        <div>
          <i :class="item.icon"></i>
        </div>
        <div>{{item.name}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import Index from './js/'
export default {
  name: "bottom-menu",
  data() {
    return {
      itemList: Index.item,
      defActive: Index.item[0].index
    };
  },
  computed: {},
  mounted() {
    const _this = this;
  },
  methods: {
    handleClick(active) {
      const _this = this;
      _this.defActive = active;
      _this.$router.push(active);
    }
  }
};
</script>

<style lang="less" scoped>
@import "./css/index.less";
</style>

