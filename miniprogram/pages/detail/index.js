const data = require("../../utils/data");

Page({
  data: {
    recipe: {
      ...data.recipes[0],
      displayImage: data.recipes[0].bigImage || data.recipes[0].image
    },
    tags: data.recipes[0].tags.map((item, index) => ({
      label: item,
      className: index === 1 ? "pill-green" : index === 2 ? "pill-orange" : "pill-red"
    })),
    highlights: [
      { name: "鸡腿肉", sub: "鲜嫩多汁", image: "/images/recipe/ing-chicken.png" },
      { name: "西兰花", sub: "清爽解腻", image: "/images/recipe/ing-broccoli.png" },
      { name: "胡萝卜", sub: "维生素丰富", image: "/images/recipe/ing-potato.png" },
      { name: "大米", sub: "饱满香软", image: "/images/recipe/ing-rice.png" },
      { name: "照烧酱", sub: "灵魂酱汁", image: "/images/recipe/ing-tofu.png" }
    ],
    nutrition: [
      { icon: "♨", value: "568", label: "千卡", tone: "orange" },
      { icon: "◒", value: "32.6g", label: "蛋白质", tone: "purple" },
      { icon: "◷", value: "72.3g", label: "碳水化合物", tone: "green" },
      { icon: "♢", value: "16.8g", label: "脂肪", tone: "red" }
    ],
    reasons: [
      { icon: "☺", title: "简单快手", sub: "20分钟左右即可完成" },
      { icon: "♥", title: "营养均衡", sub: "荤素搭配，营养丰富" },
      { icon: "★", title: "孩子爱吃", sub: "酱香浓郁，开胃下饭" }
    ],
    related: [data.recipes[2], data.recipes[5], data.recipes[4], data.recipes[1], data.recipes[3]]
  },

  onLoad(options) {
    const id = options && options.id;
    const found = data.recipes.find((item) => item.id === id) || data.recipes[0];
    const recipe = {
      ...found,
      displayImage: found.bigImage || found.image
    };
    this.setData({
      recipe,
      tags: (recipe.tags || data.recipes[0].tags).map((item, index) => ({
        label: item,
        className: index === 1 ? "pill-green" : index === 2 ? "pill-orange" : "pill-red"
      }))
    });
  },

  goCook() {
    wx.navigateTo({ url: "/pages/cook/index?id=" + this.data.recipe.id });
  }
});
