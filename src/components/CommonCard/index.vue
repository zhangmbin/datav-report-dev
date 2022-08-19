<template>
  <div class="common-card">
    <div class="title">{{ title }}</div>
    <!-- 显示金额数据 -->
    <div class="value">{{ value }}</div>
    <div class="chart">
      <slot></slot>
    </div>
    <div class="line"></div>
    <div class="total">
      <!-- 允许在父组件中传入自己的样式，实现复用 -->
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommonCard",
  // props 传入内容
  props: {
    title: String,
    value: String,
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.title {
  font-size: 12px;
  color: #999;
}
.value {
  font-size: 25px;
  color: #000;
  margin-top: 5px;
  letter-spacing: 1px;
}
.chart {
  height: 50px;
  // background-color: rgb(138, 217, 142);
}
.line {
  margin: 10px 0;
  border-top: 1px solid #eee;
}
.total {
  font-size: 12px;
  color: #666;
}
</style>

<style lang="scss" >
// 全局样式，全局使用

.emphasis {
  margin-left: 5px;
  color: #333;
  font-weight: 700;
}

// 向上、向下的箭头
.increase,
    .decrease {
      width: 0;
      height: 0;
      border-width: 3px;
      border-style: solid;
    }
    .increase {
      border-color: transparent transparent red transparent;
      margin: 0 0 3px 5px;
    }
    .decrease {
      border-color: green transparent transparent transparent;
      margin: 3px 0 0 5px;
    }
</style>