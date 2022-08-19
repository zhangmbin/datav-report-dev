<template>
  <div>
    <common-card title="累计用户数" value="1,038,753">
      <template>
        <v-chart :option="getOptions()" />
      </template>

      <template v-slot:footer>
        <div class="user-footer">
          <span>日同比</span>
          <span class="emphasis">3.154%</span>
          <div class="increase"></div>
          <span class="month">月同比</span>
          <span class="emphasis">31.54%</span>
          <div class="decrease"></div>
        </div>
      </template>
    </common-card>
  </div>
</template>

<script>
import commonCardMixin from "../../mixin/commonCardMixin";

export default {
  name: "TotalUsers",
  mixins: [commonCardMixin],

  data() {
    return {};
  },

  mounted() {},

  methods: {
    getOptions() {
      return {
        color: "green",
        xAxis: {
          type: "value",
          show: false,
          max: function (value) {
            return value.max;
          },
        },
        yAxis: {
          type: "category",
          show: false,
        },

        series: [
          {
            // barGap: "-100%",
            stack: "总量",
            type: "bar",
            data: [200],
            barWidth: 10,
            itemStyle: {
              color: "#45c946",
            },
          },
          {
            // barGap: "-100%",
            stack: "总量",
            type: "bar",
            data: [500],
            itemStyle: {
              color: "#eee",
            },
          },
          {
            type: "custom",
            data: [200],
            stack: "总量",
            renderItem: (params, api) => {
              const value = api.value(0);
              const endPoint = api.coord([value, 0]);
              return {
                type: "group",
                position: endPoint,
                children: [
                  {
                    type: "path",
                    shape: {
                      d: "M512 6.4C505.6 0 492.8 0 480 0s-25.6 0-32 6.4c-12.8 6.4-19.2 19.2-25.6 25.6L6.4 761.6c-12.8 19.2-12.8 44.8 0 64 6.4 12.8 12.8 12.8 25.6 19.2s19.2 6.4 32 6.4h819.2c12.8 0 25.6 0 32-6.4 12.8-6.4 19.2-12.8 25.6-19.2 12.8-19.2 12.8-44.8 0-64L537.6 32C531.2 25.6 524.8 12.8 512 6.4z",
                      x: -5,
                      y: 5,
                      width: 10,
                      height: 10,
                      layout: "cover",
                    },
                    style: {
                      fill: "#45c946",
                    },
                  },
                  {
                    type: "path",
                    shape: {
                      d: "M535.466667 812.8l450.133333-563.2c14.933333-19.2 2.133333-49.066667-23.466667-49.066667H61.866667c-25.6 0-38.4 29.866667-23.466667 49.066667l450.133333 563.2c12.8 14.933333 34.133333 14.933333 46.933334 0z",
                      x: -5,
                      y: -15,
                      width: 10,
                      height: 10,
                      layout: "cover",
                    },
                    style: {
                      fill: "#45c946",
                    },
                  },
                ],
              };
            },
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
.user-footer {
  display: flex;
  align-items: center;
  .month {
    margin-left: 10px;
  }
}
</style>