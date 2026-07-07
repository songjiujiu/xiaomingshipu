Page({
  data: {
    ingredients: [
      { name: "鸡腿", amount: "2个" },
      { name: "土豆", amount: "1个" },
      { name: "酱油", amount: "2勺" }
    ]
  },

  goBack() {
    if (getCurrentPages().length > 1) {
      wx.navigateBack()
      return
    }

    wx.redirectTo({ url: "/pages/index/index" })
  }
})
