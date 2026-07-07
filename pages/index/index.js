Page({
  data: {
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCeyt6K-bkKh9XhGoowL0JfQSXGMgfPJZM2VoAhUjDF5SIl1Kqa2vGcxt8d1MtnnhIBAXDvAbDv2PF7q1sJqbqHHfUaSA6ONB0iEhckCmwGndWKX6h8CvHZxKmqpr79c_TT1vl7_yZJmBXI3aDFqhW7vXfxS9XEp5wEU4wkOI9yGNYfwkbDiRyT3Tjjh4hXvnpn1X95rSoGuoxJmz_qdqoacQzBzepQSRC5UvW0SXsmEweCiewQYmRv8MHOoeNkNFUBbLPtKG6fZXA9",
    categories: [
      { name: "家常菜", icon: "🍜", color: "cat-orange" },
      { name: "快手菜", icon: "🍲", color: "cat-green" },
      { name: "烘焙甜点", icon: "🍰", color: "cat-pink" },
      { name: "饮品", icon: "🥤", color: "cat-purple" },
      { name: "全部分类", icon: "", color: "cat-blue", grid: true }
    ],
    actions: [
      { title: "今天吃啥", sub: "随机抽菜", icon: "抽", color: "act-yellow", url: "/pages/lottery/index" },
      { title: "收藏夹", sub: "我的最爱", icon: "藏", color: "act-green", url: "/pages/favorite/index" },
      { title: "本周食谱", sub: "7天不重样", icon: "周", color: "act-orange" },
      { title: "最近浏览", sub: "继续查看", icon: "看", color: "act-blue" }
    ],
    recipes: [
      { title: "蒜蓉虾仁西兰花", tag: "家常菜", tagColor: "tag-orange", likes: "1.2w", time: "20分钟", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBj6Ph-qcgUnhIakDtdRiqdPZ9WZSopq7Qm4-93pYnRz3lm99Gh-tKlalabCE_fNyZiSEzSpqSysJCQbF3T7hCLlcTjfrlilu2O0-GlRrKfcS8pKHpapDqSX79m9EaDkdngo7FW3HgPSxjLpp2mwczXjxCNIFdyNPkCVwW5nEop2fgic_9guI_FdEuNW-SwhnbsInDlD4D9B4qU32Qsjb-KhM7aqG8C6V18fjo6UXZ9jtw6SgIdfm6kREBx1-HH-qzXlBVDcgKMfjib" },
      { title: "番茄鸡蛋汤", tag: "快手菜", tagColor: "tag-green", likes: "8563", time: "15分钟", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1JrovlLrHzPPt_82y0zAMmybA7lybOPVJGUsctcXF19DgG-gFAmZo33s6VcBRuRVmSb_gfBWOXrmvNE8ca4wjJjwQyugqCkmFG-rihU_d8bUSIQkn4aqNDm-uqyu4iCvZwmpH5_y2VmETleyHNbORalxOPlXhIPcLjAyNzuaLrd2jiRyynBBJs0QzpGmByk9bG0121fgQhbcwLE7-7fLcqrYVCm6RtKI8hMpwJWsXjsY_68dQ9f3V_7IkZBfcjaI0SznpuV4kM2mE" },
      { title: "轻乳酪蛋糕", tag: "烘焙甜点", tagColor: "tag-pink", likes: "6231", time: "60分钟", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2PYboSuMt0SIvMFj6-8_juszX4hv6PObJqT3mt6-B1NALUQcB8sr-xyzJKn5SGofx0mmjjt-bPOOOBqrvlHad3qowlh9GC2CrAkxJeRIS60ZXRQlgJfBYJc2IARGbvzHFzAVO5K1nqJrhqAtqWNkdVsN7a8Swp9zW9ZVhY20CFKtHJGqRc6P-UimEDX9emZZPLxP7kwSFi_vM6XpXkr6WSg6cvFZm6x67JshwHQueMG21LNx4g4rGcyYZ9jiqiU6b1ikUeg1ohph-" },
      { title: "红烧肉", tag: "家常菜", tagColor: "tag-orange", likes: "1.1w", time: "45分钟", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDybug0_kD0jiFH9Aps8p_v2sCFiF2fScSs8D9QmnySCFnT4L4N2qNZkwo391EMxcUtz4VMm_mkQTNUTRBKH306hqpJSUKzUGmWsODFQktqNQKuD26dBbH5dKdLGep0qyt_2pk79TvAXADmogIHMNkIxSppcgpwuqZ_aSlWICmbauOPdSzrn3W6RcjBJVe0PJHNJJUhbLzSHEBF20j43-QEIBElbEXFViO3rraqjOSmmE0Ks8VZJbQj0_IoqX2kPRp-6h_cIh_k9_1X" }
    ]
  },

  goDetail() {
    wx.navigateTo({ url: "/pages/detail/index" })
  },

  goPublish() {
    wx.navigateTo({ url: "/pages/publish/index" })
  },

  onActionTap(event) {
    const url = event.currentTarget.dataset.url
    if (!url) return
    wx.navigateTo({ url })
  }
})
