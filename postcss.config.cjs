module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      viewportWidth: 1920, // 设计稿宽度，通常为 375 或 750
      viewportHeight: 1080, // 可选，设计稿高度
      unitPrecision: 5, // 转换后保留的小数位数
      viewportUnit: 'vw', // 转换的单位，推荐使用 vw
      selectorBlackList: ['.ignore', '.no-vw'], // 不进行转换的类名
      minPixelValue: 1, // 小于或等于 1px 不转换
      mediaQuery: false, // 是否允许在媒体查询中转换
    },
  },
};