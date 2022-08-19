<template>
  <div class="sales-view">
    <el-card shadow="hover" :body-style="{ padding: ' 0' }">
      <template v-slot:header>
        <div class="menu-wrapper">
          <el-menu
            mode="horizontal"
            :default-active="activeIndex"
            @select="onMenuSelect"
            class="sales-view-menu"
          >
            <el-menu-item index="1">销售额</el-menu-item>
            <el-menu-item index="2">访问量</el-menu-item>
          </el-menu>
          <div class="menu-right">
            <el-radio-group v-model="radioSelect" size="small">
              <el-radio-button label="今日"></el-radio-button>
              <el-radio-button label="本周"></el-radio-button>
              <el-radio-button label="本月"></el-radio-button>
              <el-radio-button label="今年"></el-radio-button>
            </el-radio-group>
            <el-date-picker
              v-model="date"
              type="daterange"
              range-separator="-"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              size="small"
              :picker-options="pickerOptions"
              unlink-panels
              class="sales-view-date-picker"
            >
              ></el-date-picker
            >
          </div>
        </div>
      </template>
      <template>
        <div class="sales-view-chart-wrapper">
          <!-- 图表 -->
          <v-chart :option="chartOptions"></v-chart>

          <div class="sales-view-list">
            <div class="sales-view-title">排行榜</div>
            <div class="list-item" v-for="item in rankData" :key="item.no">
              <!-- class的数组写法 -->
              <div :class="['list-item-no', +item.no <= 3 ? 'top-no' : '']">
                {{ item.no }}
              </div>
              <div class="list-item-name">{{ item.name }}</div>
              <div class="list-item-money">{{ item.money }}</div>
            </div>
          </div>
        </div>
      </template>
    </el-card>
  </div>
</template>

<script>
import { color } from "echarts";
export default {
  name: "SalesView",

  data() {
    return {
      activeIndex: "1",
      radioSelect: "今日",
      date: null,

      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const start = new Date();
              const end = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },

      rankData: [
        {
          no: 1,
          name: "麦当劳",
          money: "323,234",
        },
        {
          no: 2,
          name: "麦当劳",
          money: "323,234",
        },
        {
          no: 3,
          name: "麦当劳",
          money: "323,234",
        },
        {
          no: 4,
          name: "麦当劳",
          money: "323,234",
        },
        {
          no: 5,
          name: "麦当劳",
          money: "323,234",
        },
        {
          no: 6,
          name: "麦当劳",
          money: "323,234",
        },
        {
          no: 7,
          name: "麦当劳",
          money: "323,234",
        },
      ],

      chartOptions: {
        title: {
          text: "年度销售额",
          textStyle: {
            fontSize: 12,
            color: "#666",
          },
          left: 25,
          top: 20,
        },
        xAxis: {
          type: "category",
          data: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月",
          ],
          axisTick: {
            alignWithLabel: true,
            lineStyle: {
              color: "#999",
            },
          },
          axisLine: {
            lineStyle: {
              color: "#999",
            },
          },
          axisLabel: {
            color: "#333",
          },
        },
        yAxis: {
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            lineStyle: {
              type: "dotted",
              color: "#eee",
            },
          },
          axisLabel: {
            color: "#333",
          },
        },
        series: [
          {
            type: "bar",
            barWidth: "35%",
            data: [200, 250, 300, 350, 400, 450, 500, 550, 400, 450, 300, 250],
          },
        ],
        color: ["#3398DB"],
        grid: {
          top: 70,
          left: 60,
          right: 60,
          bottom: 50,
        },
      },
    };
  },

  mounted() {},

  methods: {
    onMenuSelect(index) {
      this.activeIndex = index;
      console.log(this.activeIndex);
    },
  },
};
</script>

<style lang="scss" scoped>
.top-no {
  background-color: #000;
  border-radius: 50%;
  color: #fff;
  font-weight: 700;
}
.el-card {
  padding-bottom: 20px;
}
.sales-view {
  margin-top: 20px;
  font-size: 12px;

  .menu-wrapper {
    display: flex;
    position: relative;
    .sales-view-menu {
      width: 100%;
      .el-menu-item {
        height: 50px;
        line-height: 50px;
        margin: 0 20px;
      }
    }
    .menu-right {
      position: absolute;
      right: 20px;
      top: 0;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .sales-view-date-picker {
        margin-left: 20px;
      }
    }
  }
  .sales-view-chart-wrapper {
    display: flex;
    height: 270px;
    .echarts {
      flex: 0 0 70%;
      width: 70%;
      height: 100%;
    }
    .sales-view-list {
      // margin-top: 15px;
      flex: 1;
      width: 100%;
      height: 100%;
      overflow: hidden;
      justify-content: center;
      align-items: center;
      .sales-view-title {
        font-size: 12px;
        margin-top: 20px;
        margin-bottom: 15px;
        color: #666;
        font-weight: 500;
      }
      .list-item {
        display: flex;
        padding: 6px 20px 6px 0;
        .list-item-no {
          height: 20px;
          text-align: center;
          width: 20px;
        }
        .list-item-name {
          margin-left: 10px;
        }
        .list-item-money {
          display: block;
          flex: 1;
          text-align: right;
        }
      }
    }
  }
}
</style>
