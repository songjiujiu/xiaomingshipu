Page({
  data: {
    stats: [
      { value: "128", label: "关注" },
      { value: "5620", label: "粉丝" },
      { value: "2.3w", label: "获赞" },
      { value: "89", label: "发布" }
    ],
    menus: [
      { icon: "▣", title: "我的作品", sub: "89 个作品", tone: "yellow" },
      { icon: "♥", title: "我的收藏", sub: "156 道食谱", tone: "red" },
      { icon: "◷", title: "浏览历史", sub: "最近浏览 36 道", tone: "green" },
      { icon: "▰", title: "草稿箱", sub: "12 个草稿", tone: "purple" },
      { icon: "●", title: "消息通知", sub: "3 条未读", tone: "gold" },
      { icon: "◆", title: "设置", sub: "账号与通用", tone: "blue" }
    ]
  },

  goPublish() {
    wx.redirectTo({ url: "/pages/publish/index" });
  }
});
