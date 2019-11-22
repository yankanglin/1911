<!--
 * @Author: Li.chen
 * @Date: 2019-01-11 17:39:08
 * @LastEditors: Li.chen
 * @LastEditTime: 2019-01-15 17:11:25
 * @Description: File Description .
 -->
<template>
  <div id="Aside">
    <ul>
      <li v-for="item in itemMenu" :key="item.id" :class="[item.path == defActive ? 'active' : '']" @click="handleClick(item.path)">
          {{item.name}}
      </li>
    </ul>
  </div>
</template>

<script>
import Index from "./js/";
export default {
  name: "Aside",
  data() {
    return {
      defActive: Index.itemList[0].path,
      itemMenu: Index.itemList
    };
  },
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

