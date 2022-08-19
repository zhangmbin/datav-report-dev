<template>
  <div class="bottom-view">
    <!-- 左边卡片 -->
    <div class="view">
      <el-card shadow="hover">
        <template v-slot:header>
          <!-- 标题 -->
          <div class="title-wrapper">
            <div class="title">关键词搜索</div>
          </div>

          <div class="chart-wrapper">
            <div class="chart-inner">
              <div class="chart">
                <div class="chart-title">搜索用户数</div>
                <div class="chart-data">198,782</div>
                <v-chart :option="searchUserOption"></v-chart>
              </div>
              <div class="chart">
                <div class="chart-title">搜索量</div>
                <div class="chart-data">198,782</div>
                <v-chart :option="searchUserOption"></v-chart>
              </div>
            </div>
            <!-- 表格 -->
            <div class="table-wrapper">
              <el-table :data="tableData" stripe>
                <el-table-column prop="rank" label="排名" />
                <el-table-column prop="keyword" label="关键词" width="180" />
                <el-table-column prop="count" label="总搜索量" width="180" />
                <el-table-column prop="users" label="搜索用户数" />
                <el-table-column prop="range" label="搜索占比" />
              </el-table>
              <!-- 分页器 -->

              <el-pagination
                layout="prev, pager, next"
                :total="total"
                :page-size="pageSize"
                background
                @current-change="onPageChange"
              >
              </el-pagination>
            </div>
          </div>
        </template>
      </el-card>
    </div>

    <!-- 右边卡片 -->
    <div class="view">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title-wrapper">
            <div class="title">分类销售排行</div>
            <div class="radio-wrapper">
              <el-radio-group v-model="radioSelect" size="small">
                <el-radio-button label="品类"> </el-radio-button>
                <el-radio-button label="商品"> </el-radio-button>
              </el-radio-group>
            </div>
          </div>
        </template>
        <!-- 表格 -->
        <template>
          <div class="chart-wrapper">
            <v-chart :option="categoryOptions"></v-chart>
          </div>
        </template>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "BottomView",

  data() {
    return {
      categoryOptions: {},
      total: 100,
      pageSize: 4,
      searchUserOption: {
        xAxis: {
          type: "category",
          boundaryGap: false,
        },
        yAxis: { show: false },
        series: [
          {
            type: "line",
            data: [100, 150, 200, 250, 150, 350, 200],
            areaStyle: {
              color: "rgba(95,187,255,.5)",
            },
            lineStyle: {
              color: "rgba(95,187,255)",
            },
            itemStyle: {
              opacity: 0,
            },
            smooth: true,
          },
        ],
        grid: {
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        },
      },
      searchNumOption: {},
      tableData: [                                            
        {
          id: 1,
          rank: 1,
          keyword: "北京",
          count: 100,
          users: 90,
          range: "90%",
        },
        {
          id: 2,
          rank: 2,
          keyword: "北京",
          count: 100,
          users: 90,
          range: "90%",
        },
        {
          id: 3,
          rank: 3,
          keyword: "北京",
          count: 100,
          users: 90,
          range: "90%",
        },
        {
          id: 4,
          rank: 4,
          keyword: "北京",
          count: 100,
          users: 90,
          range: "90%",
        },
      ],
      radioSelect: "品类",
    };
  },

  mounted() {
    this.renderPieChart();
  },

  methods: {
    onPageChange() {},
    renderPieChart() {
      const mockData = [
        {
          // 独立名称
          legendname: "粉面粥店",
          value: "67",
          percent: "15.40%",
          itemStyle: {
            color: "#e7e702",
          },
          name: "粉面粥店 | 15.40%",
        },
        {
          legendname: "简餐便当",
          value: "97",
          percent: "22.30%",
          itemStyle: {
            color: "#8d7fec",
          },
          name: "简餐便当 | 22.30%%",
        },
        {
          legendname: "汉堡炸鸡",
          value: "92",
          percent: "21.15%",
          itemStyle: {
            color: "#5085f2",
          },
          name: "汉堡炸鸡 | 21.15%%",
        },
      ];
      this.categoryOptions = {
        title: [
          {
            text: "品类分布",
            textStyle: {
              fontSize: 14,
              color: "#666",
            },
          },
          // 副标题
          {
            text: "累计订单量",
            subtext: "320",
            x: "34.5%",
            y: "42.5%",
            textAlign: "center",
            textStyle: {
              fontSize: 14,
              color: "#999",
            },
            subtextStyle: {
              fontSize: 28,
              color: "#333",
            },
          },
        ],
        // 饼图不需要坐标系
        series: [
          {
            // 用于tooltip的区分
            name: "品类分布",
            type: "pie",
            data: mockData,
            // 标签名
            label: {
              show: true,
              position: "outter",
              formatter: function (params) {
                // console.log(params);
                return params.data.legendname;
              },
            },
            // 圆心点位置[左,右]
            center: ["35%", "50%"],
            // radius表示半径[内半径,外半径],百分比相对的是宽高的最小值作为饼图的直径的百分比
            radius: ["45%", "60%"],
            // 指向文字的注释线
            labelLine: {
              length: 5,
              length2: 3,
              smooth: true,
            },
            // 是否顺时针显示
            clockwise: false,
            // 修改item样式
            itemStyle:{
              borderWidth:4,
              borderColor:'#fff'
            }
          },
        ],
        // 小标签,需要和mockData中的name属性搭配
        legend: {
          type: "scroll",
          orient: "vertical",
          height: 250,
          left: "70%",
          top: "middle",
          textStyle: {
            color: "#333",
          },
        },
        // 鼠标悬停时的提示文本
        tooltip: {
          //表示触发
          trigger: "item",
          // formatter对展示信息进行定制
          formatter: function (params) {
            // console.log(params);
            const str =
              params.seriesName +
              "<br />" +
              params.marker +
              params.data.legendname +
              "<br />" +
              "数量：" +
              params.data.value +
              "<br />" +
              "占比：" +
              params.data.percent +
              "%";
            return str;
          },
        },
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.bottom-view {
  margin-top: 20px;
  display: flex;

  .view {
    flex: 1;
    width: 50%;
    box-sizing: border-box;

    &:first-child {
      padding: 0 10px 0 0;
    }

    &:last-child {
      padding: 0 0 0 10px;
    }

    .title-wrapper {
      display: flex;
      align-items: center;
      height: 60px;
      box-sizing: border-box;
      border-bottom: 1px solid #eee;
      font-size: 14px;
      font-weight: 500;
      padding: 0 0 0 20px;

      .radio-wrapper {
        display: flex;
        justify-content: flex-end;
        flex: 1;
        text-align: right;
        margin-right: 20px;
      }
    }

    .chart-wrapper {
      display: flex;
      flex-direction: column;
      height: 452px;

      .chart-inner {
        display: flex;
        padding: 0 10px;
        margin-top: 20px;

        .chart {
          flex: 1;
          padding: 0 10px;

          .chart-title {
            color: #999;
            font-size: 14px;
          }
          .chart-data {
            font-size: 22px;
            color: #333;
            font-weight: 500;
            letter-spacing: 2px;
          }

          .echarts {
            height: 50px;
          }
        }
      }

      .table-wrapper {
        flex: 1;
        margin-top: 20px;
        padding: 0 20px 20px;

        .el-pagination {
          display: flex;
          justify-content: flex-end;
          margin-top: 15px;
        }
      }
    }
  }
}
</style>
