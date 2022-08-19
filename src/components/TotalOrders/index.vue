<template>
  <div>
    <common-card title="累计订单量" value="2,071,288">
      <template>
        <v-chart :option="getOptions()" />
      </template>

      <template v-slot:footer>
        <span>昨日订单量</span>
        <span class="emphasis">30,000,000</span>
      </template>
    </common-card>
  </div>
</template>

<script>
import commonCardMixin from "../../mixin/commonCardMixin";

export default {
  name: "TotalOrders",
  mixins: [commonCardMixin],
  data() {
    return {};
  },

  mounted() {},

  methods: {
    getOptions() {
      return {
        xAxis: {
          type: "category",
          show: false,
          // 极限拉伸图表
          boundaryGap: false,
        },
        yAxis: {
          show: false,
        },
        series: [
          {
            type: "line",
            data: [
              620, 251, 523, 468, 356, 154, 515, 330, 220, 150, 410, 515, 854,
              123, 660,
            ],
            // 区域样式
            areaStyle: {
              color: "purple",
            },
            // 线样式
            lineStyle: {
              width: 0,
            },
            // 点样式
            itemStyle: {
              opacity: 0,
            },
            smooth: true,
          },
        ],
        grid: {
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
        },
      };
    },
  },
};
</script>

<style lang="scss" scoped>
</style>