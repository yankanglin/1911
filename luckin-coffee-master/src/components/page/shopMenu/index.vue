<!--
 * @Author: Li.chen
 * @Date: 2019-01-09 18:24:01
 * @LastEditors: Li.chen
 * @LastEditTime: 2019-01-15 17:35:14
 * @Description: File Description .
 -->
<template>
  <div id="shopMenu">
    <div class="title" v-text="title"></div>
    <el-carousel class="swiper_banner" :autoplay="true" arrow="always">
      <el-carousel-item v-for="item in itemBanner" :key="item.id">
        <img :src="item.src" class="banner-pro-img" alt>
      </el-carousel-item>
    </el-carousel>
    <el-container class="container">
      <el-container>
        <el-aside width="100px">
          <left-aside />
        </el-aside>
        <el-main>
          <router-view v-loading.fullscreen.lock="loading"/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Index from "./js/";
import leftAside from "./aside/index"
export default {
  name: "shopMenu",
  data() {
    return {
      title: '选择咖啡与小食',
      itemBanner: Index.banner
    };
  },
  components: {
    leftAside: leftAside
  },
  computed: {
      loading() {
        const _this = this;
			  return _this.$store.state.glLoading;
			}
  },
  watch: { // 数据监听
    watch_fn: function (val, oldVal) {
      console.log("new: %s, old: %s", val, oldVal);
    }
  },
  beforeCreate() {  // beforeCreate创建前状态
    const _this = this;
    // console.group("------beforeCreate创建前状态------");
  },
  created() { // created创建完毕状态
    const _this = this;
    // console.group("------created创建完毕状态------");
  },
  beforeMount() { // beforeMount挂载前状态
    const _this = this;
    // console.group("------beforeMount挂载前状态------");
  },
  mounted() { // mounted挂载结束状态
    const _this = this;
    // console.group("------mounted挂载结束状态------");
  },
  beforeUpdate() { // beforeUpdate更新前状态
    const _this = this;
    // console.group("beforeUpdate更新前状态===============》");
  },
  updated() { // updated更新完成状态
    const _this = this;
    // console.group("updated更新完成状态===============》");
  },
  beforeDestroy() { // beforeDestroy销毁前状态
    const _this = this;
    // console.group("beforeDestroy销毁前状态===============》");
  },
  destroyed() { // destroyed销毁完成状态
    const _this = this;
    // console.group("destroyed销毁完成状态===============》");
  },
  methods: {
    init() {
      console.log("V Init");
    }
  }
};
</script>

<style lang="less" scoped>
@import "./css/index.less";
</style>

