//引入pinia
import { createPinia } from "pinia";

// pinia持久化插件
// import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import piniaPluginPersistedstate from "@/stores/persist.js";

//实例化pinia
const pinia = createPinia();

export default function (app) {
  // 注册pinia持久化插件
  pinia.use(piniaPluginPersistedstate);
  app.use(pinia);
}
