<template>
  <div class="eg_container">
    <slot>我是内容区域</slot>
  </div>
</template>
<script>
export default {
  name: 'lay-container'
}

</script>
<style scoped>
.eg_container {
  display: flex;
  flex-direction: column;
  flex: 1;
  flex-basis: auto;
  box-sizing: border-box;
  min-width: 0;
  text-align: center;
  justify-content: center;
}

.eg_container .isRow {
  flex-direction: row;
}

.eg_header,
.eg_footer {
  display: flex;
  flex: 0 0 50px;
  background-color: #ccc;
  justify-content: center;
  align-items: center;
}

.eg_left {
  order: 1;
  flex: 0 0 150px;
  background-color: #8ca08c;
  justify-content: center;
  align-items: center;
}

.eg_content {
  height: 600px;
  flex-grow: 1;
  order: 2;
  background-color: #997ca0;
  align-items: center;
  text-indent: 2em;
  overflow-y: auto;
}

</style>
