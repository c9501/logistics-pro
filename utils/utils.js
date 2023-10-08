// 项目工具
export const utils = {
  // 轻提示
  toast(title = "", icon = "none") {
    uni.showToast({
      title,
      icon,
      mask: true,
    });
  },
};

// 工具导出
uni.utils = utils;
