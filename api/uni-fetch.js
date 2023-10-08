// http请求文件
// 引入fetch
import { createUniFetch } from "uni-app-fetch";
// 使用自定义选项创建实例
const uniFetch = createUniFetch({
  // loading加载
  loading: { title: "加载中..." },
  baseURL: "https://slwl-api.itheima.net",
  intercept: {
    // 请求拦截
    request(options) {
      return options;
    },
    response(result) {
      return result;
    },
  },
});
// 模块导出
export default uniFetch;
