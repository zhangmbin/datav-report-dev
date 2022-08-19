<template>
  <div class="total-sales">
    <common-card title="累计销售额" value="123456">
      <template>
        <div class="compare-wapper">
          <div class="compare">
            <span>日同比</span>
            <span class="emphasis">7.33%</span>
            <div class="increase"></div>
          </div>
          <div class="compare">
            <span>月同比</span>
            <span class="emphasis">37.33%</span>
            <div class="decrease"></div>
          </div>
        </div>
      </template>

      <!-- 传给footer插槽 -->
      <template v-slot:footer>
        <span>昨日销售额 </span>
        <span class="emphasis">￥ 30,000,000</span>
      </template>
    </common-card>
  </div>
</template>

<script>
import CommonCard from "../CommonCard";
export default {
  name: "TotalSales",
  components: { CommonCard },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.compare-wapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .compare {
    display: flex;
    align-items: center;
    font-size: 12px;
    // background: rgb(239, 157, 157);
    margin-top: 3px;
    color: #666;
    
  }
}
</style>