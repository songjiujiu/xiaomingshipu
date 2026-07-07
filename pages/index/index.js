Page({
  data: {
    categories: [
      { name: "家常菜", icon: "🍜", color: "cat-orange" },
      { name: "快手菜", icon: "🍲", color: "cat-green" },
      { name: "烘焙甜点", icon: "🍰", color: "cat-pink" },
      { name: "饮品", icon: "🥤", color: "cat-purple" },
      { name: "全部分类", icon: "", color: "cat-blue", grid: true }
    ],
    actions: [
      { title: "今日推荐", sub: "每日灵感", icon: "⭐", color: "act-yellow" },
      { title: "收藏夹", sub: "我的最爱", icon: "🎟", color: "act-green" },
      { title: "本周食谱", sub: "7天不重样", icon: "📋", color: "act-orange" },
      { title: "最近浏览", sub: "继续查看", icon: "🕘", color: "act-blue" }
    ],
    recipes: [
      { title: "蒜蓉虾仁西兰花", tag: "家常菜", tagColor: "tag-orange", likes: "1.2w", time: "20分钟" },
      { title: "番茄鸡蛋汤", tag: "快手菜", tagColor: "tag-green", likes: "8563", time: "15分钟" },
      { title: "轻乳酪蛋糕", tag: "烘焙甜点", tagColor: "tag-pink", likes: "6231", time: "60分钟" },
      { title: "红烧肉", tag: "家常菜", tagColor: "tag-orange", likes: "1.1w", time: "45分钟" }
    ],
    navs: [
      { name: "首页", icon: "⌂", active: true, url: "/pages/index/index" },
      { name: "分类", icon: "≡", url: "/pages/category/index" },
      { name: "发布", icon: "+", center: true, url: "/pages/publish/index" },
      { name: "收藏", icon: "▱", url: "/pages/favorite/index" },
      { name: "我的", icon: "♙", url: "/pages/mine/index" }
    ]
  },

  onNavTap(event) {
    const url = event.currentTarget.dataset.url
    if (!url) return

    const pages = getCurrentPages()
    const current = pages.length ? `/${pages[pages.length - 1].route}` : ""
    if (current === url) return

    wx.redirectTo({ url })
  },

  goDetail() {
    wx.navigateTo({ url: "/pages/detail/index" })
  },

  goPublish() {
    wx.navigateTo({ url: "/pages/publish/index" })
  }
})
