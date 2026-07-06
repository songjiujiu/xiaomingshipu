const data = require("../../utils/data");

Page({
  data: {
    categories: data.categoryIcons,
    hotCategories: data.hotCategories,
    ingredients: data.ingredients,
    cuisines: data.cuisines
  },

  goHome() {
    wx.redirectTo({ url: "/pages/index/index" });
  },

  goDetail() {
    wx.navigateTo({ url: "/pages/detail/index?id=chicken-rice" });
  }
});
