<template>
  <div>
    <common-card title="今日交易用户数" :value="orderUser">
      <template>
        <v-chart :options="getOptions()" />
      </template>
      <template v-slot:footer>
        <span>退货率 </span>
        <span class="emphasis">{{ returnRate }}</span>
      </template>
    </common-card>
  </div>
</template>

<script>
import commonCardMixin from "../../mixin/commonCardMixin";
import commonDataMixin from "../../mixin/commonDataMixin";

export default {
  name: "TodayUsers",
  mixins: [commonCardMixin, commonDataMixin],

  data() {
    return {};
  },

  mounted() {},

  methods: {
    getOptions() {
      return {
        color: ["#3398DB"],
        xAxis: {
          type: "category",
          show: false,
          data: this.orderUserTrendAxis,
        },
        yAxis: {
          show: false,
        },
        series: [
          {
            type: "bar",
            barWidth: "60%",
            data: this.orderUserTrend,
          },
        ],
        tooltip: {},
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

<style lang="scss" scoped></style>
