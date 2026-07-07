Page({
  data: {
    ingredients: [
      { name: "鸡腿", amount: "2个" },
      { name: "土豆", amount: "1个" },
      { name: "酱油", amount: "2勺" }
    ],
    navs: [
      { name: "首页", icon: "⌂", url: "/pages/index/index" },
      { name: "分类", icon: "⌕", url: "/pages/category/index" },
      { name: "发布", icon: "+", center: true, active: true, url: "/pages/publish/index" },
      { name: "收藏", icon: "▱", url: "/pages/favorite/index" },
      { name: "我的", icon: "♙", url: "/pages/mine/index" }
    ]
  },

  goBack() {
    if (getCurrentPages().length > 1) {
      wx.navigateBack()
      return
    }

    wx.redirectTo({ url: "/pages/index/index" })
  },

  onNavTap(event) {
    const url = event.currentTarget.dataset.url
    if (!url) return

    const pages = getCurrentPages()
    const current = pages.length ? `/${pages[pages.length - 1].route}` : ""
    if (current === url) return

    wx.redirectTo({ url })
  }
})
