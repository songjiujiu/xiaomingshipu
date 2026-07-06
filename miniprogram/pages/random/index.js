const data = require("../../utils/data");

Page({
  data: {
    chips: [
      { label: "家常菜", icon: "♨", activeClass: "chip-active" },
      { label: "快手菜", icon: "▰", activeClass: "" },
      { label: "低脂餐", icon: "♧", activeClass: "" },
      { label: "汤羹", icon: "◒", activeClass: "" },
      { label: "甜品", icon: "▴", activeClass: "" }
    ],
    recipe: data.recipes[0],
    backups: [data.recipes[2], data.recipes[1], data.recipes[4], data.recipes[3]]
  },

  goDetail(event) {
    const id = event.currentTarget.dataset.id || "chicken-rice";
    wx.navigateTo({ url: "/pages/detail/index?id=" + id });
  },

  toast() {
    wx.showToast({ title: "换一个好主意", icon: "none" });
  }
});
