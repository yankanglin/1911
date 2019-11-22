<!--
 * @Author: Li.chen
 * @Date: 2019-01-09 18:22:33
 * @LastEditors: Li.chen
 * @LastEditTime: 2019-01-15 17:00:58
 * @Description: File Description .
 -->
<template>
  <div id="Index">
    <el-carousel class="swiper_banner" :autoplay="true" arrow="always">
      <el-carousel-item v-for="item in itemBanner" :key="item.id">
        <img :src="item.src" class="banner-pro-img" alt>
      </el-carousel-item>
    </el-carousel>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <div class="title">
          <span>选择门店</span>
          <p class="desc">门店影响能否正常下单哦</p>
        </div>
        <el-switch
          class="btn_switch"
          active-text="外送"
          inactive-text="自提"
          active-value="asdas"
          v-model="switchFlag"
        ></el-switch>
      </div>
      <ul class="infoList">
        <li v-for="item in itemProduct" :key="item.id" class="text item">
          <div>
            <span>{{item.name}}</span>
            <p>{{item.desc}}</p>
          </div>
          <i :class="item.icon"></i>
        </li>
      </ul>
    </el-card>
    <img src="./img/logo_1080.png" class="fot_banner" alt>
  </div>
</template>

<script>
import Index from "./js/";
export default {
  name: "Index",
  data() {
    return {
      switchFlag: false,
      itemProduct: Index.product,
      itemBanner: Index.banner
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="less" scoped>
@import "./css/index.less";
</style>

<style lang="less">
.el-card__body {
  padding: 0px 20px;
}
.el-carousel__container {
  height: 100%;
}
</style>
