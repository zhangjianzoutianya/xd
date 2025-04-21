// 导出接口
export default {
  url: [
    {
      url: "getLanguageList", //获取语言
      type: "post",
      code: "/languageList",
    },
    {
      url: "getProductCateList", //获取产品大类
      type: "post",
      code: "/cateList",
    },
    {
      url: "getProductLoad", //获取产品详情
      type: "post",
      code: "/pruductLoad",
    },
    {
      url: "getSelectionP", //获取产品详情
      type: "post",
      code: "/selectionP",
    },
    {
      url: "getProductInfo", //获取产品详情
      type: "post",
      code: "/productInfo",
    },
    {
      url: "getUnitList", //单位列表
      type: "post",
      code: "/unitList",
    },
    {
      url: "getBaseUnitList", //基础单位列表
      type: "post",
      code: "/baseUnitList",
    },
    {
      url: "goUsingUnitSave", //保存使用单位
      type: "post",
      code: "/usingUnitSave",
    },
    {
      url: "changeUnit", //切换单位
      type: "post",
      code: "/changeUnit",
    },
  ],
};
