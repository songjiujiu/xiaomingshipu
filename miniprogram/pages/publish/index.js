Page({
  data: {
    ingredients: [
      { name: "鸡腿", amount: "2个" },
      { name: "土豆", amount: "1个" },
      { name: "生抽", amount: "2勺" }
    ],
    selectors: [
      { icon: "😋", title: "口味", value: "请选择", tone: "taste" },
      { icon: "▰", title: "难度", value: "请选择", tone: "level" },
      { icon: "◷", title: "时长", value: "请选择", tone: "time" }
    ],
    steps: [
      { no: 1, image: "/images/recipe/publish-step1.jpg", text: "鸡腿剁成小块，冷水下锅焯水，捞出沥干备用。" },
      { no: 2, image: "/images/recipe/publish-step2.jpg", text: "锅中倒油，放入鸡块煎至两面微黄，加入姜片和蒜瓣炒香。" },
      { no: 3, image: "/images/recipe/publish-step3.jpg", text: "加入土豆块、生抽、老抽、料酒翻炒均匀，加水炖煮20分钟。" }
    ]
  },

  toast() {
    wx.showToast({ title: "原型演示", icon: "none" });
  }
});
