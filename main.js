import App from "./App";
//导入工具包
import "./utils/utils.js";
//引入全局配置
import { globalRegister } from "./global/index.js";

// #ifndef VUE3
import Vue from "vue";
import "./uni.promisify.adaptor";
Vue.config.productionTip = false;
App.mpType = "app";
const app = new Vue({
  ...App,
});
app.$mount();
// #endif

// #ifdef VUE3
import { createSSRApp } from "vue";
export function createApp() {
  const app = createSSRApp(App);
  // 全局统一注册使用
  app.use(globalRegister);
  return {
    app,
  };
}
// #endif
