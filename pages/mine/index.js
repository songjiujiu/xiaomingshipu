Page({
  data: {
    coverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVFZnzH9sgnPnnlxk52NtO_lB0OZJKR7355Ux6HdSXdVvr0hooiCSuSUOrhzfjK-c7f9KpI87tyV_W4xGhEbvGLP7Gh6k8hKm41DJz0zZz_Xlf3jZP_mcVsBrkj78clvxf9LU9Q04kaMmqEPdiOpm7WMDeieBQgn8sBqGaiuVrEgCqaJOXR1mecbOn9GmtWo5EymessOkx2rVqSQcXX1AHHhQY6rgFJIes6i_makETssg_9Yxjrt0ZRR6sPpOUdV18-xlPtSB45kWR",
    navs: [
      { name: "首页", icon: "⌂", url: "/pages/index/index" },
      { name: "分类", icon: "≡", url: "/pages/category/index" },
      { name: "今天吃啥", icon: "🎁", center: true, url: "/pages/lottery/index" },
      { name: "收藏", icon: "▱", url: "/pages/favorite/index" },
      { name: "我的", icon: "♙", active: true, url: "/pages/mine/index" }
    ]
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
