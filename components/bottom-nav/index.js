Component({
  properties: {
    active: {
      type: String,
      value: "home"
    }
  },

  data: {
    items: [
      { key: "home", label: "首页", icon: "首", url: "/pages/index/index" },
      { key: "category", label: "分类", icon: "类", url: "/pages/category/index" },
      { key: "publish", label: "发布", icon: "+", center: true, url: "/pages/publish/index" },
      { key: "favorite", label: "收藏", icon: "藏", url: "/pages/favorite/index" },
      { key: "mine", label: "我的", icon: "我", url: "/pages/mine/index" }
    ]
  },

  methods: {
    onTap(event) {
      const url = event.currentTarget.dataset.url
      if (!url) return

      const pages = getCurrentPages()
      const current = pages.length ? `/${pages[pages.length - 1].route}` : ""
      if (current === url) return

      wx.redirectTo({ url })
    }
  }
})
