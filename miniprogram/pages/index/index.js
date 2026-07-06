const data = require("../../utils/data");

Page({
  data: {
    categories: data.categoryIcons.slice(0, 5),
    shortcuts: [
      { key: "random", icon: "★", title: "今日推荐", sub: "每日灵感", tone: "yellow" },
      { key: "favorite", icon: "▰", title: "收藏夹", sub: "我的最爱", tone: "green" },
      { key: "weekly", icon: "☰", title: "本周食谱", sub: "7天不重样", tone: "orange" },
      { key: "recent", icon: "◷", title: "最近浏览", sub: "继续查看", tone: "blue" }
    ],
    hotRecipes: [data.recipes[1], data.recipes[2], data.recipes[3], data.recipes[4]].map((item) => ({
      ...item,
      badgeClass: item.category === "快手菜" ? "badge-green" : ""
    }))
  },

  goCategory() {
    wx.redirectTo({ url: "/pages/category/index" });
  },

  goPublish() {
    wx.redirectTo({ url: "/pages/publish/index" });
  },

  goShortcut(event) {
    const key = event.currentTarget.dataset.key;
    const map = {
      random: "/pages/random/index",
      favorite: "/pages/favorite/index",
      weekly: "/pages/random/index",
      recent: "/pages/detail/index?id=chicken-rice"
    };
    wx.redirectTo({ url: map[key] || "/pages/index/index" });
  },

  goDetail(event) {
    const id = event.currentTarget.dataset.id || "chicken-rice";
    wx.navigateTo({ url: "/pages/detail/index?id=" + id });
  }
});
