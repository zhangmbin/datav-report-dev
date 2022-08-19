<template>
  <div class="home">
    <top-view></top-view>
    <sales-view></sales-view>
    <bottom-view></bottom-view>
    <map-view></map-view>
  </div>
</template>

<script>
import TopView from "@/components/TopView";
import MapView from "@/components/MapView";
import BottomView from "@/components/BottomView";
import SalesView from "@/components/SalesView";

export default {
  name: "Home",
  components: {
    TopView,
    MapView,
    BottomView,
    SalesView,
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  padding: 20px;
  background: #eee;
  box-sizing: border-box;
}
</style>
