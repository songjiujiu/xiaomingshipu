Page({
  data: {
    categories: [
      { name: "家常菜", icon: "🍲", color: "tone-orange" },
      { name: "快手菜", icon: "🥘", color: "tone-green" },
      { name: "减脂餐", icon: "🥗", color: "tone-mint" },
      { name: "早餐", icon: "🍞", color: "tone-yellow" },
      { name: "汤羹", icon: "🥣", color: "tone-purple" },
      { name: "烘焙甜点", icon: "🍰", color: "tone-orange" },
      { name: "饮品", icon: "🥤", color: "tone-blue" },
      { name: "小吃", icon: "🍢", color: "tone-cream" },
      { name: "宝宝辅食", icon: "👶", color: "tone-pink" },
      { name: "下饭菜", icon: "🍚", color: "tone-blue" },
      { name: "节日菜谱", icon: "🏮", color: "tone-red" },
      { name: "全部食材", icon: "", color: "tone-grid", grid: true }
    ],
    hotCategories: [
      {
        title: "家常菜",
        desc: "每天都能做",
        icon: "🍲",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJ63hJ5T0BjoNdoVUKg7inPLH3SO_YElcdKPccaUSN6Bc4hzUCdZwUlTzbPOAtujiQjfkb1EoMwWh4tc0wuIG_ramvP2L6Yb9MNpoGeVGiSkRpo24FNXo1UWhUXFVgrCyF_m9aoCqPAr6_cYw7RxW8YoSk-Amyqp5FEOU1k1_gRDQo2bG_Ehtm8KcMqUtE-zbu4OYGo3LTfPX96rGMOQapztORB7_BKAWoAfeHut7ksrufPeP2Dw2vFcsZdeloVycO0gpyymXQjAL0"
      },
      {
        title: "减脂餐",
        desc: "轻负担更美味",
        icon: "🥗",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFHge5OqWsQYmJg-1lonGk2mfGu5lmXPJWUNWVdIN_7bzgMTSPb4-MnWx6XafvzhkI0LLKAuzwh6ZB-UVYY_O9t0b8x5zmmFVzxttwVUklYZGjj5Cs6994ulfAcby2jkt5I26VTEquygGX6gtP4rul8ruLcQxFd_nBA4r9xZc6Jb4hMLwGjmq-wclH2qa2q3hH5lxtK9vbRwavAKHwMiBJUOESN0gaDEuDQCmf69ybi-VM2G7q2Lt2W4kbcC947o41FqA3LmZCEmKg"
      },
      {
        title: "快手菜",
        desc: "10分钟搞定",
        icon: "🥘",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9Nx7lMs1VUM12dUCLTZUtRSjfRP2RrdZZlWhCwYJlwNjT4JcTROTxyykqNWyqz0-VGN4z7wX6fUO6FLvVvQRognJ9dKO-zBKangKMAezBzMvlL95pu5V0k2ELA69JW8W7mKVTKVNm8INHVjeXMyqSqlig6lpLgjLxQql4K0hmOgIKhaT1N6qdZathEjeAeRlqpRuYOdIijdDr6n1qZuCijiWceGA9iWbLfzYa-WKAS08weAIXIJT6C1BzsTn8k_L8o1p5QsYPsv_B"
      },
      {
        title: "烘焙甜点",
        desc: "甜蜜治愈时光",
        icon: "🍰",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8tfMpW5Luma1xbMMm4OaOZP9zCKYxiHmx-DqyipDwWKsPLs_vXXxqESHmk2xAfqI65jD8nrYPfCYez8QmGFyqNumvmE0i5minCndtpqRkqPnpKsZ_A3Z9IlPSqaxoB8AeEoU05VDz68pSvZ0n3PwlT6BOfdSkpxEyVx4cWsmeoZoyzfyNle5LlFv2Mir892puokZSmOr0ObJ9_DxeqwuyvGJinoKT2Kf21PA2SSPrhHSpLtHwa7jl5odjWKmGB5G0RVVH8ODzbA2R"
      }
    ],
    ingredients: [
      { name: "鸡肉", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0_oURi43Sbi4lgvxBikk5-yV2KVo9aDV6rzb1aBI9CHNmDkJ4ps-VJ1A5iCWIjIVHUSIgvltqHyWIR7seU2H4z3uFakH9YHnVT4smzkdaTJ_oGPlTDJj4hK-IijUq_hvKSC66Sft5aHtrDZgIQ-pJdFgYZ4cM72jQ5qjfIneJF67D7EtQh1AFeL0L-V3S4zrLEiYcuKqI65VlIWlZ9zRUM5_gTicQJH0yo8Ad49YUczOyxSL2Yi2Nqf5cn4EU3jFHhujbheV6QWpt" },
      { name: "牛肉", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAbhli6sgL-iKE520T11G8Ccknqq6amIv07c71Trr4DfVvRHFjRYqaGf_fzjCMGRZCxL8gvJnwpT7fJzChHTExtRgVY7QihTG128thpP4gsN0j9LpYxJoWaE_1zIT3T3fJhG1l3jx68n7HLe-ygQ2fy6av9a1BjWPpJaU2t3XT4N9aA0p7Nwo-Wat2TouBJ8BajZvq8jgVHD9lKLA_YO57U_89PYQABwHYWDJ46vqnymQtqlulWRmjbctd-_pt9uWFvrKc1zrFPvAFJ" },
      { name: "虾仁", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjHRLtp1GvFd3kdN9dfsaAxWq2bUg8FxSvvtf02ChiEannn4pAWW1e4ncaBr2V5rnuuFG71hdnK05j8gmgRQSZgu6oSeU_5IUCZNDpHkzUMnUp1Q4TjCzA-EyPplVA80eR2JgmoaPpIWe_4a-IMZ8Mm5rbYnR1YV_00vkZFftMfNeD4vQ4Y0UXdDjlSlsyxLT3D6vaHxoo6t1sGpxDdxEYpN5rLxA3SAC6QgfHZLWusQ9EIjEedBqLSAnzJD5Xmk_50vDUq_epG41x" },
      { name: "鸡蛋", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBj6QJs7xlIV6cRJ67RVm13EUlrXlXlqqKo-wAmHiRkAFvFUgRtj4rVpxpO-N6jRPUAOGdwUuCpaA76EOJt3a6l12_jLvfdQJixFCopTPrtbUbX6iFFioB4GGZa6Gq3l2ol7ooAE34iV9B0fgYOELUon-anLXnmAL3N61wmhkZCikUM2jUHB898V4t-hwaIZa82mlQXRtQ_BqxrufG0gpoS-6oU4tAkwjFeTAEhz_GGK9kSWczyslgZoBGBHbjd3kjJdJB_DtPg0WCL" },
      { name: "番茄", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCK1wbCae_kPt7WBT-5u0s4iENwA2tAAEKHaOyf6ZUZebK6DS_cyUUnAmLdWMLJGMz_pWfhfSZ21M-gQOcG3cTMXajzYkndPez0zbfEPp71LC4LjGmWxN7TCVCe1xnu2gdKkHJfpAfCPRNd_1htqEJSdkQqIcOz4P53Glh76AeC8aWrsjCaZJJCy7i4VyuwdV_n8DP7x489Lb96GLrKdl8DnZU6UwurYv6vlpe3whZ5gweP_tvNr0-oVDfmMtHbify6WhVfVPZYAfhf" },
      { name: "西兰花", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAocZfHOhd1zA5vHACHpFK7W05Fx6uB7x3o-BgibiSoBfwGSfFxCY0Rl_5WgWLma_6yAOslxWjM8Se0WemFYaPEWox74T-AggqLDfmUIskvQsSxA5hXU12-f5E-F6BbF47TBvMVKxfx_CDok8NWJtju2RuyMLAfJKmQXEPIJvLjfJ5kQt6G2VRvfpD2z8dVbH9B_03hcKGn7sD2gcceEN5zZv-LScWnyBA6EIjfdiH-oQ1Ctqk-RZDnCuA0Db19h7-aPyWuj77t51Z-" },
      { name: "土豆", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBC_rD5b35cpEFYC96Bh-cceqrDiRxtkCrPh1qMcaMLYLxFlK_7l67202T6wM1KCBDgeFVEaD1uaH9l3XTsUHUMPMYBY_RzQhsFoZ4kTtaDPT26yU4Z1J9f7AjPzGCU02D5DQKEHMzgt4sOJLTnZHfOVd5aj0rlq6MqaNjaHcaDUArssXZRc5Od6gIizbv7Zj4WTXPYNBDHPTepcUxr8xfydjZwGBAysQYwmjOTecAhIsIINZFJax9X4bITjotATJpJBW75I4Y7SESM" },
      { name: "豆腐", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUWysqcaXewtQ6UTK8FS0Wx1k1fpfa9kGS7sB9rPJ26BUPECV9ZG-9aLdJ1Pnz7orV5IKhO9DVQuwDU7S35zrGPHP41VGRMSV3ch3V_ilN-yfj-m2gcjpQWjjaBXiv1KMK0i28U7L25xLguhaT54hXbh9FfVZt_DVG6eDIt_8k7COcjfFfNaW044q3p_qh7o1P-94WKEqos9Xs8ULhVNCT1r5-AVKtOAoVEfK6x1cDoyiuMlnvbg7JPWsCRj18YrQePmtf98OMKeEZ" },
      { name: "面条", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCWr6uWdc3g01ufmkSIqt8CGAam848L1IqfdD46wbUDvU6x6oFzkywabIgDknm3h1Si7OHPSss-DNCyvvctkva5q4zOaq-pWVKCOzsLW34a4Cr52kj5wCj7uUQ8rZ5KKZBEUQBg7lAsjqaA93EVVcTypBxyGC5LjV2DUp5vkhC7zFEkkd1cjenpEVqNUfnjoldqubE92cux_tipKaCQHgp0lWJlwmfhpkxgAc4RKVbHNbb9v1j8EiWk2WIvu1ENvetOaHoWiI3t1_Dn" },
      { name: "米饭", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtVFmmsBnZdjmoQjupccELiZC_z_Eq7h5XI6hegNOLYAt2EvAuiO0aJqJ2I_ZTy0clmqa7PWIRMQQt-OBhQQWYsf-_Vmg6RoeaYrLh4uUnCUnX2dhGyEog4iRYHWd2Fk8CwKfmaYL17n7usPcl2Cc4iSEA-2v3oUGRMwQwgwKUM7nWl4EDYvJweDYgqqIzHSITxwpPvsb2A_hL7IcG8s9VByV89wgRU0P7ZMAXq7aeeNxraKwdS-sJL16OZ0K8w9Lbz1uDQ8Rw-71O" }
    ],
    cuisines: [
      { name: "川菜", desc: "麻辣鲜香 🌶", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD83P2R-iKW-2GlG8vpS4U2QsoPNFnfbIDW_FbgqZf0k3RGJO6APyp_nHXKQZKL8tVEi8DcVybM6zdWMgAtmaeiEIcxABAFUz_HqShTlLFEMmBCvZFUNLz38IQv7lFZfj3CpSwqiNmAvJ_810URr3O_4qpN8lbabP7W73_MeVXQ5sNeyIlE_V8KfjqI4-XgcFWDmELcmGcvNyl4KV1ECtNDYxcGRHHrMusFVXRaAeGxmxz1Tt73Jfmri1PaIOHiK4SlhMMz8Rhzeih0" },
      { name: "粤菜", desc: "鲜香清淡 🦐", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCjQIq1DA6wqscN0kXGBurr_l9hrXDmKz0xDobFfZilcyvm618euW9KYHqjkaqrdQZ_DyiPjBcWQMqBCQhRqNgvrvNGBPobcM3PrI_jkfqRmTREXnCjgsFYUt1C5hVECoQtprQCqsK_VUoVfmj2-xhc_m1HWpZ0QBcB9Fd5GwJFDLHMYlQb2wz4TGoS4LdtIhjBkU4AjsY6AsU8x8fQN4VW_nudABgqXogo4NdzE97kEl4ZZuULgozJ0ghBmJI2yUczzNGb5OksNZU_" },
      { name: "湘菜", desc: "香辣下饭 🌶", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_las6Qm5bDKNQ3mqhF9mnIPb2JHm0bOCPXCy_QR5zD4efaw9QkriwKZUpoY8uD42_h3hBPSvxtkr3BDKQLqjy-9vc0bDSHEyJe2_yw4q1A3pOCHUcWz9ry3CuUOipIKQhImLw7-FO48RhVnIM5wFReMqw9zK-v-GZuGcTnF3G06fEjPZLB5Twy8eoBXEH61PIOE_Ommpq1epKF0JakkuTTYtJWQeEhPfzcfrvImuJWVGeI0njzVktQIrf2P4Mj_QT9SaXMcxPB56Y" },
      { name: "鲁菜", desc: "咸鲜醇厚 🔥", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKbFbuT4PGw54-z05qS9bqIel-b_2dKqgHQgEJpnuDf6ntCcn8ldDJkJrbNhiYnSu7g5r_yQSXaIDbRskHAS3N2zEjJEzNvpesKPc2QmMuVo4AIK9k-pcE2fhHWdnESifJeMt62REFqqojec2HdwfWzwYbEDKWrh5mpclTsK_M9AhEFjgd15hncaonWTJsUDk5lBVfpJyJg4V9igNoRoTYy-ot_4MoBZh5jotB-ICT02KEG-x1EjBSfLPotaK6TydLASKuzQ79p5dv" }
    ],
    navs: [
      { name: "首页", icon: "⌂", url: "/pages/index/index" },
      { name: "分类", icon: "▦", active: true, url: "/pages/category/index" },
      { name: "今天吃啥", icon: "🎁", center: true, url: "/pages/lottery/index" },
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
  }
})
