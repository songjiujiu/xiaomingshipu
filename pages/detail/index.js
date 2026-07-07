Page({
  data: {
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCU2m-QRvRY9cjejRFEa5NOLQZkq_5tUdox5D8i2fodqMErCyPwX-_wONHZvtcafS-vKNimjnNfUyFFeSvV8AAw5ZwNUlOwkvIh7hGS1C445OBK2m24Lsvtq_8MZksbj7m-i47GQfgKo0Er_aEHonWnVIYIbRieGTuyOc3FiJlJS6YqlKYFIFX6UXQzeYag6hAiGPie8cz2Hx8PQq-1012yvktyvdd_3w3f9sGyu2-vj5Mw2-zMLuvIRbBShN67Yvcjk3blp1HYs7mS",
    authorAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBaJi9KwG1_1jYhmhpnhUlCLqse02xETr3c9m0PDNmeR-MDRpZi8MYcYRmu7Rhe2hdnCU3nZ30kON1kuv4MdM-o3_qPAxrWv46e552hgUgf2cnVbJUbIiH9aOYHtTCVtSYe0ePR_BUV19pcTP6Pa0sEe3fwSwLFgrsMRLxvjQhPtKP1ZkmY4cqVRVP-ftJhYn_DTi2jwiahWc77YW7LFpApYDqM6ODu0LmLKSdIxWvdCsJ8rMkdCCuj9bwHGBE0JrXZFa3IaBawEwYK",
    ingredients: [
      { name: "鸡腿肉", desc: "鲜嫩多汁", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuADs8YPzAmLHbz-eRlGk8HUl--XlmB8NZGUHT2pSdGcp7eERHjitTjhMd80bhHICVc41MMMMqjlHkd47NHID_IQZe3Zh_2PxEvLVbQDcpZzQlhopLz_p5lvb6PHVoESHD0nYHljKh1yxHLOXHtMY_znvVDxhBgMkaqqlBScZq_8zulorB-Y1KSAnI9yiqAx7mNm6KzGNw6OND9YAbFIOzezpSEeeh3hOYelP95wvHjDfgx3YAi3ryhe866cCfh8z__J0ZP4ZOtHy_D3" },
      { name: "西兰花", desc: "清爽解腻", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuANPeIJJEewG_JNJEg50XPb5Ni_CGySiT3npFxUiT0vtaji0Bru4hTvAjsJkeDMrC1_SnHV2jFd4zHkmW_vjCCg5N_bgPkoaCIhKe_VIszcCxSx1b-upPG47-fDVzOje3CIHbkKeEg_yi2qWWZ53Yusx8eiv1j5nS_CzgtwWzT0njYIEli0i6hDFVeMeYm4sCrOiZzYbfChIznzdizCngTXEVw3qoMOO6wsr3ma8rL8e8U01zp_jt8HPdDBh-XtWlfCrKJR5guoOaE5" },
      { name: "胡萝卜", desc: "维生素丰富", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6YrH8q6XuWlOoVBtBb64vKL-Bj3pdPTGIssORtByZN0QmtUASINZFWUJQyR2uLqdfYBwvw7GP0WOaNmLjTBvG9tCHc17j7TZjBFDkFhrKlaJ0MO6McgCYxwJZ6PMbjpIITlFupXg-n354rbjaK34fJSTaR9e8PZc-wAXZByPh2LVSi7IOPv1z-YCXxvkWppELwaADm5XwP6FNTHedmPQbl45Yj0G9eT1BGaV6okceEpqq-1MG_vJSKlAX0mYtJ3iQEDHMn6UaRNP1" },
      { name: "大米", desc: "饱满香软", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHPA1EMVpM3_uRJpn778JytfdCf7KGoGIYa5m5jQBH5DdeTe1U1sKhdMZcV8G6-ykuPudDoC9zhUKK46yQDSMuOJp3BovbhzNj3bVDPOhaol-Df-cylsPGg-4NnaWennwJKZpBlDplYua1XEjlTS-Jy2hcUtzDcLFVLso86o0rCvRo2mnRQErSIRpHZ4skOVuTfnYOa9yVvCFzbNT9tXZJZzdtirylQ141LGvZXv12uN9Z4HSpmt6sI3k6034IP0iOSLWZzU-iHSqj" },
      { name: "照烧酱", desc: "灵魂酱汁", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnW7NqFpU-oNR0UGH55kwc4vsXhEVsEMyZFawsl1kuDE36D3dTjkL_uV99GRvf0iE2oYaqjheHH4PJeNOKf0cWD9WSDy2h_UyvBSHHkz0oEjHseVTdcTQ7bXePftG34B2xR4OUU30aeF5T1XDww_yfS1KB0InT1jMvMzNRXtLttMjneLhMgVlBD5qCC4j0_iZg_VbyyCU0rkYUepxQr2GrmXGPXST2SbwA0I0gfZaCsqEYG1SAxsxAUnzHrIFtxXHYwxOvKOtYOw8W" }
    ],
    nutrition: [
      { icon: "🔥", value: "568", label: "千卡", color: "nut-orange" },
      { icon: "🧬", value: "32.6g", label: "蛋白质", color: "nut-blue" },
      { icon: "🍚", value: "72.3g", label: "碳水化合物", color: "nut-green" },
      { icon: "💧", value: "16.8g", label: "脂肪", color: "nut-yellow" }
    ],
    reasons: [
      { icon: "😊", title: "简单快手", desc: "20分钟左右即可完成" },
      { icon: "❤️", title: "营养均衡", desc: "荤素搭配，营养丰富" },
      { icon: "⭐", title: "孩子爱吃", desc: "酱香浓郁，开胃下饭" }
    ],
    steps: [
      "鸡腿去骨，洗净后用厨房纸吸干水分，两面划几刀，方便入味。",
      "放入照烧酱、生抽、料酒、蜂蜜、蒜末，抓匀腌制15分钟以上。",
      "热锅倒油，放入鸡腿皮面朝下煎至金黄，翻面煎2分钟。",
      "倒入剩余酱汁，小火焖煮5分钟，收汁至浓稠即可。"
    ],
    related: [
      { name: "番茄鸡蛋汤", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfkrSOTeTSDpXJShiLg8swu5Ns7NRF-xshDuQtOWg8Sggrt3pyRGvkYGWd8bLpZ8KietFB7If1kFhW7KoaYN3SAGb1cb1peNfdRo4y1k4yVGika-6NgHPhiT9Wt1zrWd1xy7Eyf_l-OHaPUwH02h-hWLfGC1vWTKBaFPD7_kkMY9JKgRXJWRUgoYJSa7aTjghw1K4lXhhAvYElwZvkZsoZE7ltfdxSv7ZoLkYrasIHueJ4bKUuKAHwskUwA-9vIs0ctwLlbO8FTtZp" },
      { name: "清炒时蔬", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWKX3bohN_cP9XV955UurJur9kiLpFD8ugGJPZeEHpYvRL00TtjBJ1fQ4MpLLf-12zm4NDkvG23R2L1gPKWpQg3hvMod9MHg-YyHcMkUEE78JWdnCpq8a_GtbP62y4IFaa1jTS6ffqCbuHzsu9u010Hq0oODYhAQA7bbQUzC1qRKgWJPmul7XXPCtTSJ206r1nKYh8mO9EdU0E4sufSgoKYg3an6vHSurJpWn2TlWzLToEBI7ookl3VVn_AcM8Av5usibhvHGDtYaD" },
      { name: "红烧鸡翅", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFtAmFRNXi7v-CANPRmBOTzyyRsB0_2whVlpaP_F0xMkWAHqHLRAViTBB4D4s3Zg3j-zA-LzWxfiHX-9owO2TPsLpIgNXsMIjWe1vcKI2ZS3Ll4wljz78-fA35Zy3IcySVLQ5r1rMR0RQaN7llQSEpyHSgG1m7hmQEX16Ou9tyv9NkTpXrgpAmcrxolH61uHQgT1aLvy1xbWevpjtQJMpJMrJ_ZPl-F4UXtUIgQm3pHprovpOn1q8TCaB59LuEBsE3pDVU1MTBCB3A" },
      { name: "土豆红烧肉", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDrygHmYiOBC6SI3pZjSwUu3XdNViAiaQWTSuSiE-6VhHlv6szcgLTgr-a8yPi-7bbsUL4kOTqtuqXo5lSRs6Ygr6Lap_zatC09-b-J_IuaKOkOE8wVMUC6P6Ql88Zw86P7hGl-drzlh_dBiaeK9tG8jD1eCql7XvQHiHw1bhG-paz6292hxyaq6x-IY2NKstxkbOCG8usKwi_e-oEbI_5aIsc2AFuc-OQDsrm8uauPohTjsC7q3SmaNrWKhEicWDRJKiqAPvZbYSuM" },
      { name: "轻乳酪蛋糕", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAFWXU4xNY12-8stHd0kSuH5aU07AcmRAtUCtt_8hxqxD2j1Vre0drONDELARFpFs6R5KM8lODryhub-FQHZa36l6PipheiyIWEqUpTZWT15L2XSyI2F7JdZtfSUmqYLsKmtWVf_uuzBp5pJvIMdCp6qrOJ7kkbmlGkFAErzxZ5O5kcvmHLNFl_4jAl6f8b0oE6FOyTH7CrVEjLcAXmGOmt4P4mH3hqpMVi9tYARTUI2EVTo7_eIfPU4zvWMohrZ1kJj2K8qJxIaVCn" }
    ],
    reviewerAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLG5jI4DrFaazWc-Y7Ggw71zizU1pUv7LWIHgf4aTqIQ74WWUEBbPdn08Y2AG5h0dnj0P-cr91ujgMEKgoR5Sb0Oi-6dp4jPG5g34EZtMytDJ18g4nEQydi5G-vcDaMWDkl5242fYekc1FIapvGDmW3scBCZojwb_8sPLSD-XgmbmzlIsxC-UXg1YZp5LTAb65d1zUDhVgXPdody5ltQNoJy17hA2gHIHBm9s0rOWjQvtWwAZPOBVvYTput9AxD0wqXxA_MB-OYymH"
  },

  goBack() {
    if (getCurrentPages().length > 1) {
      wx.navigateBack()
      return
    }

    wx.redirectTo({ url: "/pages/index/index" })
  }
})
