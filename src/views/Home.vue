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

import { wordCloud, mapScatter, screenData } from "../api";

export default {
  name: "Home",
  components: {
    TopView,
    MapView,
    BottomView,
    SalesView,
  },
  data() {
    return {
      reportData: null,
      wordCloud: null,
      mapData: null,
    };
  },
  provide() {
    return {
      getReportData: this.getReportData,
      getWordCloud: this.getWordCloud,
      getMapData: this.getMapData,
    };
  },
  mounted() {
    screenData().then((res) => {
      this.reportData = res.data.data;
      console.log("reportData@@", this.reportData);
      // console.log(res);
    });
    wordCloud().then((res) => {
      this.wordCloud = res.data.data;
      // console.log(res);
      console.log("wordData@@", this.wordCloud);
    });
    mapScatter().then((res) => {
      this.mapData = res.data.data;
      console.log("mapData@@", this.mapData);

    });
    // this.getWordCloud();
    // this.getMapScatter();
    // this.getScreenData();
  },
  computed: {},
  methods: {
    // async getWordCloud() {
    //   const res = await wordCloud();
    //   this.wordData = res.data.data;
    //   console.log("wordData@@", this.wordData);
    //   return this.wordData;
    // },
    // async getMapScatter() {
    //   const res = await mapScatter();
    //   this.mapData = res.data.data;
    //   console.log("mapData@@", this.mapData);
    //   return this.mapData;
    // },
    // async getScreenData() {
    //   const res = await screenData();
    //   this.reportData = res.data.data[0];
    //   console.log("reportData@@", this.reportData);
    //   // console.log(this.reportData);
    //   return this.reportData;
    // },
    getReportData() {
      return this.reportData;
    },
    getWordCloud() {
      return this.wordCloud;
    },
    getMapData() {
      return this.mapData;
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  // height: 100%;
  padding: 20px;
  background: #eee;
  box-sizing: border-box;
}
</style>
