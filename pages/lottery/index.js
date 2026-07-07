Page({
  data: {
    activeIndex: 1,
    isDrawing: false,
    tabs: [
      { name: "家常菜", icon: "♨️", active: true },
      { name: "快手菜", icon: "🍲" },
      { name: "低脂餐", icon: "🥗" },
      { name: "汤羹", icon: "🥣" },
      { name: "甜品", icon: "🍰" }
    ],
    cells: [
      {
        title: "清炒时蔬",
        time: "12分钟",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8L1OG8t1_hNdfcnb0iUdHRRKdBGcBeaRYd2ncXa6f16I-aJT9ZUqMTO8rvj_R6EJ-d3dMdOXmbbe3L9XEJ5FJIenfk3ctAYNbV-TugDO80yiPyehCUMkPUt3RKM0X84DEGClvKmbAqKlBdainW-aUVpiI7ueEE-SlAvCFWAC8LbZYvqIrPZ79NaupYgKeH_NkUjHI4tbUWUMCq56CShzTnvfCcxBDU1ZpfJDAWVrhXcG-ucM1xJdMK4zpcAreKqtFxpfKv7-Ttaop"
      },
      {
        title: "照烧鸡腿饭",
        tag: "家常菜",
        desc: "酱香浓郁，简单美味，一人食首选",
        time: "约20分钟",
        people: "1人份",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgbGiK5DsVDQ5_vtdkmq7ERjCqvW_s0mRv849hTuQ7BeRSfEYPAoQ445mg7y3Ly1xJFfW-sFRDJU3KHv9lgys9OvbbAo7BB9_opfxQv6PwR0xMuBV4ETORGZ6gGlu7MvU5IEnQiU5JTeOEYw-TpVdtevA2_oIGV5bMOpXXIaqkR_PHCrIGU_BdgU3NDEDCuqKJTWNzVhBZ4PKZpBTqJ6maE2rCOW5eH6vpFlui4V0SzqYIQTXlYbvTrAXN-yTxjVfWghaaZDWLoKe1",
        resultImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvMxrpNkKufIq-pL15llGHi_abhF2yiFX38xFyT2RySt8heL2DKB2TZ5USWJPawQwhmrcKeERVlcvTJJwPliTMoueK-qxehmTqMz0k25WhxtQZo4z9yKudATYftSjKN33fTNF3KIsBU0BndRaoieQ9Wz9p6YE3eqTjLTLf_UjfuG_R8FFs4W0w1HG6nlS-82yrKJgei-PsC33GbIOzihXdGjYDjI7WU6iyVgL75bG2xXIvdzL4QADd5dVH_9sod1FMFZbvuJz1ln3A"
      },
      {
        title: "番茄鸡蛋汤",
        tag: "汤羹",
        desc: "酸甜开胃，汤汁浓郁",
        time: "15分钟",
        people: "1人份",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAmD0vhgts4tEc_3Vs4SNHFk5M27O9x1EHISNXrr4zP6JrFTwIDx2JleqfpM64n51BJq0FJmG6o5dOVhaCoUKfra2Gu7QHOVcJmu4TaUTpodCpBNh9usoxeJQ-enBxqYvZtWW4r-H1QeqwyRXK4-yx-tqKOSv5fE6GOIvhIeFoziXubQuMm1TFkzuvQld-UN-BQJjIif0jWEU5lI_kul3X0DjiI-BWZtUmnj1Hl-s_3kBR6e3b1N-CXZPr0qXBx6HPXOQdIplncCW4l"
      },
      {
        title: "土豆红烧肉",
        time: "45分钟",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAliu7G4X3bvhaDqIIpYle9RkelkdJUN2ZxQlTuYpJlmhNaIXYW66C1HbnnKLdgwoTbtCV6ZAay5gdAEZRgEeQvEb87Q5zZUFnS9bCNgvLW_VXEol5dC-8plaOfHrBGuaiRZY3WM-nof8Z8QQuAHSDpLcFF8lhzaJ0rRceBrXQP1LQNdlCSk0CrdWUPz670W3ZiS6AKVE1ecABKJNA-aNje8t0lFNgkGPmAek0HLRA_5CbpAfUvubXUi6m2V7H2pVopVA2wIeTyUu2B"
      },
      { button: true },
      {
        title: "蒜蓉虾仁西兰花",
        tag: "快手菜",
        desc: "清爽低脂，营养又美味",
        time: "20分钟",
        people: "1人份",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpwmoEdD0z8C8bePf7yKY47Dv1Laksd7dzJVJsYMJXdYZebW6bKDP5PPnDkcnrUKFBv39dIJkAd1YgpZv4AAGU0S201R8IAu5hvncTooPTMZN5u5Mcyj-nSoTPZ8bBMFbk1Un4QD1E7x0pF4K2ZfePuZX74ReMq98fJvsFLHoszhe5Mg3oXUq2WNGPODii7UlJ5o-U7GsXH5vZtGRseeo2kqZpl_Os-h8zjQQtDbYd5wamuDme7W_Oy7M9f8rLvXWapHRBHzMHHihK"
      },
      {
        title: "香煎三文鱼",
        time: "25分钟",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7eyUGZjmmGBMUKmIzkJ3VzJ4GvSpwlj0_UWE708X4Dw9Nsp_XwHA5OS-6RRtkS4SuKqXj4dXQH0hseY7cIWyfTXrh0tR_gZhMZro6VByZVE71h6wG3ic14Kbkckiv6lPH-gfnKlyiHWjIuhryA9pZI7dKcgNolOnc-TlpNtQ1eshs4XPgV3122VqYyMMCwqgcUJGBQFmVeiyoNCo2tZ-1EDkUDMANoiSvF_9r_zE7IkNpoq1xus95p1PcbGTc1WV-daBilo7i-1yq"
      },
      {
        title: "轻乳酪蛋糕",
        tag: "甜品",
        desc: "入口即化，奶香浓郁",
        time: "60分钟",
        people: "1人份",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAokgUu_LBwkfQI-uW4YZSdUdkKDOE2go5NfRv8wzNlXoZSC8CoNe_b57_MVkOqN0C2pyMpGwyM_F5xObEfPpwoJUnu9IuJq2BOWGFkRLYZgSyZZ5dsF1Qxwp9GKN1dyW4vxYQw60J_tt3k52sXFLiN-FmxdP-7AS7-0GdgTW6icUm07MiP80p_whTWE_Dp0c5gXgd92lowWgXB22Fs4Xe8Y-KAdC5zNJPOGwMODdWUu7lkoQs9mMSeedFG1aEJRp11JrRAE9s-__Bf"
      },
      {
        title: "红烧鸡翅",
        time: "30分钟",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgS5I41cz4gyiX31sHOiqVlyVBNbdvW6hFvcSu3ap21K1nRLB3z9HrbeIqeinTOfEA8wVXKtrBr_128zbmnW5iW-uH6rwbyBVB3rJEjC0OLOAc3GC5otCVl2reZoavicVSA3KzNP4Oh2VhdXrsv1RXaJvypl8P9Yw38a1ZX0zfmHVdxqwco1GFDnkmJGPAZ9WXF7YSd624YkEA6EVTX5SIOAo1uJ7kEIVO-lJyE0UNH667AzuMsiD9hydVTiQUAM5LBpzFaSQE-XBt"
      }
    ],
    result: {
      title: "照烧鸡腿饭",
      tag: "家常菜",
      desc: "酱香浓郁，简单美味，一人食首选",
      time: "约20分钟",
      people: "1人份",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvMxrpNkKufIq-pL15llGHi_abhF2yiFX38xFyT2RySt8heL2DKB2TZ5USWJPawQwhmrcKeERVlcvTJJwPliTMoueK-qxehmTqMz0k25WhxtQZo4z9yKudATYftSjKN33fTNF3KIsBU0BndRaoieQ9Wz9p6YE3eqTjLTLf_UjfuG_R8FFs4W0w1HG6nlS-82yrKJgei-PsC33GbIOzihXdGjYDjI7WU6iyVgL75bG2xXIvdzL4QADd5dVH_9sod1FMFZbvuJz1ln3A"
    },
    alternatives: [
      {
        title: "番茄鸡蛋汤",
        time: "15分钟",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBXdDW-UGBhf-PjQeahcdSayUcn-ac_4l9jiFQ7GKDB2mcK0CasXsy29k8aD_l6IVHEGMudL4FhICx-fhFT6F8ypNQNg9YJVSbgdof1mp7MCGHj-h0AZSSavcneNZM_8b9937OtYmOcPa39jW04Bxd_uWIE5yXCGv2UT8UzF3XhIyFvklbuG7X92OZOFoEpZPPZ_C3YbfgS9fGvGGmISKkscaR93gCp2TLKJTsTacGg4sApmKc6s-XDxLfk2w4VysNlvNxzM-O8mKZb"
      },
      {
        title: "蒜蓉虾仁西兰花",
        time: "20分钟",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwl6ZOD_POssw-0ECXkk9h0m2jbTyqH2130d0yg0f_iO0l4ngstiLQ-bz5SN-AyHHud-TuCfMP7bvED2lWZm5QFGjwMF9XqsZMq1fPWnYLGB_jOrqRiEkwlyjdEI-IIk-1NeaLbyed8f1QmqAniaVXuRFRS95GKZ4vbvAetY9J55a3xlAiU45PSxc7PWnujgT3gmV6kNGFJJalP_hmHSQRnxWBADxQSdjw_bazPeY6ZNG3I-mN_dbNXDb18uKrdhJMCRgjjLWtBGhL"
      },
      {
        title: "红烧鸡翅",
        time: "30分钟",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCd3wlGQx--CGjOc1k2yYIX6IWYzF671mNAY2bQbX1BGhokcdP5PxKjDo8kyJrgX6Wduypkm9qNr7w9KbXQbg_OCSiN02TmVULz7R1M6aUJQZzz9Hz_6HELMV1hnTR6pSlgp1K_j7K8J1KJyAcXSG9nOqAHKkWllbdgflKSsRewYb9I7tkK_wQzJVkdes9zxWAgWaJvfrNTW1CKgsh2pGW95yO6eN3R_4a2gsx1HuglUuKmG2C_vg1_YjsRiiodjITjZ9YfPQctl-q5"
      },
      {
        title: "轻乳酪蛋糕",
        time: "60分钟",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDgQhqIsrtZa6_SXfZ_7CMdZPaI67wKTA1JgR7Q5v4B5Qge8vOhOP18OMYWmYVdoIrTQlE89khdX8pB-rkVq3HyiKHUZO2P1YZqoJJ7xe3L5mj-fHzWvP1NjBvPomUV_7N8ar7gv1JBtlKbLTuL1tWVb382pOdqm_YJhVyetLBDCCu5vk6ol4c2Q0bHf5QfrgH_AzE53vmK_zZ0rSRo3NVoyX4z-KBZChjECqqybs54KUZ-Rfm6-3p9BKgSyPxvRXHz6ZBkA-2P_sD4"
      }
    ],
    navs: [
      { name: "首页", icon: "⌂", url: "/pages/index/index" },
      { name: "分类", icon: "≡", url: "/pages/category/index" },
      { name: "今天吃啥", icon: "🎁", center: true, active: true, url: "/pages/lottery/index" },
      { name: "收藏", icon: "▱", url: "/pages/favorite/index" },
      { name: "我的", icon: "♙", url: "/pages/mine/index" }
    ]
  },

  onUnload() {
    if (this._timer) clearInterval(this._timer)
  },

  onNavTap(event) {
    const url = event.currentTarget.dataset.url
    if (!url) return

    const pages = getCurrentPages()
    const current = pages.length ? `/${pages[pages.length - 1].route}` : ""
    if (current === url) return

    wx.redirectTo({ url })
  },

  onCellTap(event) {
    if (event.currentTarget.dataset.button) {
      this.startLottery()
    }
  },

  goDetail() {
    wx.navigateTo({ url: "/pages/detail/index" })
  },

  startLottery() {
    if (this.data.isDrawing) return

    const dishIndexes = this.data.cells
      .map((cell, index) => (cell.button ? -1 : index))
      .filter((index) => index >= 0)
    const finalIndex = dishIndexes[Math.floor(Math.random() * dishIndexes.length)]
    let step = 0

    this.setData({ isDrawing: true })
    this._timer = setInterval(() => {
      const currentIndex = dishIndexes[step % dishIndexes.length]
      this.setData({ activeIndex: currentIndex })
      step += 1

      if (step > 18 && currentIndex === finalIndex) {
        clearInterval(this._timer)
        this._timer = null
        const picked = this.data.cells[finalIndex]
        this.setData({
          isDrawing: false,
          result: {
            title: picked.title,
            tag: picked.tag || "家常菜",
            desc: picked.desc || "今天就吃这个，简单舒服不纠结",
            time: picked.time || "约20分钟",
            people: picked.people || "1人份",
            image: picked.resultImage || picked.image
          }
        })
      }
    }, 80)
  }
})
