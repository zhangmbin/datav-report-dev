<template>
  <div class="top-view">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card shadow="hover">
          <total-sales></total-sales>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <total-orders></total-orders>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <today-users></today-users>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <total-users></total-users>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TotalSales from "../TotalSales";
import TodayUsers from "../TodayUsers";
import TotalOrders from "../TotalOrders";
import TotalUsers from "../TotalUsers";
export default {
  name: "TopView",
  components: { TotalSales, TodayUsers, TotalOrders, TotalUsers },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
</style>
