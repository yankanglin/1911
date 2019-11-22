<template>
  <div id="app">
    <Welcome v-if="!isWelcome"/>
    <router-view v-if="isWelcome" class="container"/>
    <bottom-menu v-if="isWelcome"/>
  </div>
</template>

<script>

export default {
  name: "App",
  data() {
    return {
      // isWelcome: this.$store.state.isWelcome
    };
  },
  created: function () {
    // 刷新跳转首页
    this.$router.push('/')
  },
  computed: {
    isWelcome() {
      return this.$store.state.isWelcome;
    }
  },
  components: {},
  mounted() {}
};
</script>

<style lang="less" scoped>
#app {
  height: 100%;
  width: 100%;
  position: relative;
  overflow-y: scroll;

  .container {
    height: calc(100% - 50px);
  }
}
</style>

