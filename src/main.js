import Vue from "vue";
import App from "./App.vue";
import HighchartsVue from "highcharts-vue";
import Highcharts from "highcharts";
import mapInit from "highcharts/modules/map";
import tiledwebmap from "highcharts/modules/tiledwebmap.js";
import mapData from "@highcharts/map-collection/custom/world.geo.json";

mapInit(Highcharts);
tiledwebmap(Highcharts);

Highcharts.maps["myMapName"] = mapData;

Vue.use(HighchartsVue);

new Vue({
  el: "#app",
  render: (h) => h(App),
});
