<!--
 * @Author: Li.chen
 * @Date: 2019-01-09 15:24:15
 * @LastEditors: Li.chen
 * @LastEditTime: 2019-01-15 17:11:52
 * @Description: File Description .
 -->
<template>
  <div id="Welcome">
    <div class="btn-back">
      <div class="box" v-if="loadShow" @click="hideWelcome">
        跳过
        <i>{{loadTime}}s</i>
      </div>
    </div>
    <!-- <img src="@/assets/banner_2.jpg" class="welcome-pro-img" alt v-if="loadShow"> -->
    <el-carousel class="swiper_banner" :autoplay="true" arrow="always">
      <el-carousel-item v-for="item in itemBanner" :key="item.id">
        <img :src="item.src" class="banner-pro-img" alt>
      </el-carousel-item>
    </el-carousel>
    <img src="@/assets/images/logo_2560.png" class="welcome-bg-img" alt>
  </div>
</template>

<script>
import Index from "./js/";
export default {
  name: "Welcome",
  data() {
    return {
      itemBanner: Index.banner,
      loadShow: false,
      loadTime: 10,
      sleepLoad: 1000
    };
  },
  mounted() {
    const _this = this;
    // 延时3s后加载商品图
    window.setTimeout(() => {
      _this.loadShow = !_this.loadShow;
      var loadTimer = window.setInterval(() => {
        _this.loadTime -= 1;
        if (_this.loadTime === 0) {
          window.clearInterval(loadTimer);
          _this.$store.commit("changeWelcomeFlag");
        }
      }, 1000);
    }, _this.sleepLoad);
  },
  methods: {
    hideWelcome() {
      const _this = this;
      _this.$store.dispatch("commitWelcomeFlag");
    }
  }
};
</script>

<style lang="less" scoped>
@import "./css/index.less";
</style>

