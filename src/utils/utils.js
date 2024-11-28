//获取图片
const getAssetsFile = (url) => {
  return new URL(`@/assets/images/${url}`, import.meta.url).href;
};

export {
  getAssetsFile,
};