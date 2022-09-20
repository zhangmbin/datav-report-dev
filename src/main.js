import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./plugins/element.js";
import "./plugins/vcharts.js";
import "./style/index.css";
import './mock/mockServer'


import  echarts from "echarts";
import VueEcharts from "vue-echarts";

import "default-passive-events";

Vue.config.productionTip = false;
// 将ECharts挂载原型，方便全局使用
Vue.prototype.$echarts = echarts;
// 将VueEcharts注册为 <v-chart/>组件使用
Vue.component("v-chart", VueEcharts);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
