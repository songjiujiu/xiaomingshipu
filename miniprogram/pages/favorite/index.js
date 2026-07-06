const data = require("../../utils/data");

Page({
  data: {
    tabs: [
      { label: "全部", activeClass: "" },
      { label: "菜谱", activeClass: "tab-active" },
      { label: "菜单", activeClass: "" },
      { label: "作者", activeClass: "" }
    ],
    activeTab: 1,
    recipes: data.recipes.slice(0, 4).map((item, index) => ({
      ...item,
      savedTime: ["今天收藏", "昨天收藏", "3天前收藏", "1周前收藏"][index] || "最近收藏"
    })),
    weekly: [data.recipes[1], data.recipes[2], data.recipes[4], data.recipes[0], data.recipes[5]]
  },

  switchTab(event) {
    const activeTab = Number(event.currentTarget.dataset.index);
    this.setData({
      activeTab,
      tabs: this.data.tabs.map((tab, index) => ({
        ...tab,
        activeClass: index === activeTab ? "tab-active" : ""
      }))
    });
  },

  goDetail(event) {
    const id = event.currentTarget.dataset.id || "chicken-rice";
    wx.navigateTo({ url: "/pages/detail/index?id=" + id });
  }
});
