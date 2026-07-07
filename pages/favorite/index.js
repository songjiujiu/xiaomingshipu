Page({
  data: {
    tabs: ["全部", "菜谱", "菜单", "作者"],
    activeTab: "菜谱",
    recipes: [
      {
        title: "照烧鸡腿饭",
        desc: "酱香浓郁，简单美味，一人食首选",
        tag: "家常菜",
        tagColor: "tag-orange",
        likes: "1.2w",
        time: "20分钟",
        savedAt: "今天收藏",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCeyt6K-bkKh9XhGoowL0JfQSXGMgfPJZM2VoAhUjDF5SIl1Kqa2vGcxt8d1MtnnhIBAXDvAbDv2PF7q1sJqbqHHfUaSA6ONB0iEhckCmwGndWKX6h8CvHZxKmqpr79c_TT1vl7_yZJmBXI3aDFqhW7vXfxS9XEp5wEU4wkOI9yGNYfwkbDiRyT3Tjjh4hXvnpn1X95rSoGuoxJmz_qdqoacQzBzepQSRC5UvW0SXsmEweCiewQYmRv8MHOoeNkNFUBbLPtKG6fZXA9"
      },
      {
        title: "蒜蓉虾仁西兰花",
        desc: "清爽低脂，营养又美味",
        tag: "快手菜",
        tagColor: "tag-green",
        likes: "8563",
        time: "15分钟",
        savedAt: "昨天收藏",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBj6Ph-qcgUnhIakDtdRiqdPZ9WZSopq7Qm4-93pYnRz3lm99Gh-tKlalabCE_fNyZiSEzSpqSysJCQbF3T7hCLlcTjfrlilu2O0-GlRrKfcS8pKHpapDqSX79m9EaDkdngo7FW3HgPSxjLpp2mwczXjxCNIFdyNPkCVwW5nEop2fgic_9guI_FdEuNW-SwhnbsInDlD4D9B4qU32Qsjb-KhM7aqG8C6V18fjo6UXZ9jtw6SgIdfm6kREBx1-HH-qzXlBVDcgKMfjib"
      },
      {
        title: "番茄鸡蛋汤",
        desc: "酸甜开胃，汤汁浓郁",
        tag: "汤类",
        tagColor: "tag-red",
        likes: "6231",
        time: "15分钟",
        savedAt: "3天前收藏",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1JrovlLrHzPPt_82y0zAMmybA7lybOPVJGUsctcXF19DgG-gFAmZo33s6VcBRuRVmSb_gfBWOXrmvNE8ca4wjJjwQyugqCkmFG-rihU_d8bUSIQkn4aqNDm-uqyu4iCvZwmpH5_y2VmETleyHNbORalxOPlXhIPcLjAyNzuaLrd2jiRyynBBJs0QzpGmByk9bG0121fgQhbcwLE7-7fLcqrYVCm6RtKI8hMpwJWsXjsY_68dQ9f3V_7IkZBfcjaI0SznpuV4kM2mE"
      },
      {
        title: "轻乳酪蛋糕",
        desc: "入口即化，奶香浓郁",
        tag: "烘焙甜点",
        tagColor: "tag-yellow",
        likes: "5123",
        time: "60分钟",
        savedAt: "1周前收藏",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2PYboSuMt0SIvMFj6-8_juszX4hv6PObJqT3mt6-B1NALUQcB8sr-xyzJKn5SGofx0mmjjt-bPOOOBqrvlHad3qowlh9GC2CrAkxJeRIS60ZXRQlgJfBYJc2IARGbvzHFzAVO5K1nqJrhqAtqWNkdVsN7a8Swp9zW9ZVhY20CFKtHJGqRc6P-UimEDX9emZZPLxP7kwSFi_vM6XpXkr6WSg6cvFZm6x67JshwHQueMG21LNx4g4rGcyYZ9jiqiU6b1ikUeg1ohph-"
      }
    ],
    weekly: [
      {
        rank: 1,
        title: "蒜蓉虾仁西兰花",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4FDYlN2g0QpADqbpbDVJbvxGIOwBuJPGvOsW8jnCVQae0Lu68E186piLyMORnviARJgsjkG_ynB8gGh-qEd9eDWfYOslFOzkW8CL-0of6DXkmw_7TTbirsTjcQxqUawsM1Bsq6a15EAmEZlZe2WMbXIjUhpcxwXsMS1z713hF5VuzokNthYOZ1ez4qXAQdjhb_xAGG3S3yHZrwhxNtIUHygTMNZxdIzY6hDRbiEu-sKB0zCVcUgZy5p80w0OqZiBngLl8yByaa5Sh",
        badge: "rank-one"
      },
      {
        rank: 2,
        title: "番茄鸡蛋汤",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7fni9BVduNyg3pNU7gAtXQ21NsMKOzJZwaz12OqAjbZq8ctUnPYjM_ubtjxFtSso790j22vyYrfU1YHCX01R82rXyPxou4kiPGWTswzEvFI3D-FKIY-yjUtbJuEfMIFG17miHHYewswfkbOOMKAuiBHq9aS9L25fp6O_8kyz41XwbkXTkirpYsnnc97pE0zuQjdTT06rBKEU-H_F9NZIK5YOkNmNN3npgV-lIUm7ImKfrIZif0aJIdKnbrQhTbxnYijRSW-plnoo-",
        badge: "rank-two"
      },
      {
        rank: 3,
        title: "土豆红烧肉",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDybug0_kD0jiFH9Aps8p_v2sCFiF2fScSs8D9QmnySCFnT4L4N2qNZkwo391EMxcUtz4VMm_mkQTNUTRBKH306hqpJSUKzUGmWsODFQktqNQKuD26dBbH5dKdLGep0qyt_2pk79TvAXADmogIHMNkIxSppcgpwuqZ_aSlWICmbauOPdSzrn3W6RcjBJVe0PJHNJJUhbLzSHEBF20j43-QEIBElbEXFViO3rraqjOSmmE0Ks8VZJbQj0_IoqX2kPRp-6h_cIh_k9_1X",
        badge: "rank-three"
      },
      {
        rank: 4,
        title: "香烤鸡翅",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZXhdaTpY-4i7KxP5UyoNblmDQERGdi_ZLDTmeAkvbxcn-bjgA-f3QzubtpxrF1h5--Kb_nkT73WEon8WEtTL6NeQX34zi82Igv3Io1CyLkHo5PpZSwzEMHonGBn3LwX8-F21Ib31--y2u3joeq0jZznW-Ee5YSinTnu2coToo2MpuXNpLtOhSkAFHNBNe1qG-a-D-ySkApadTXGJdJ-vreFvvNv3EhzYN_SMR3UwV_OgFvibBG-3RAPB3EEYGGg4FE-91MVj9KYBL"
      },
      {
        rank: 5,
        title: "清炒时蔬",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9UppZwQ_O0KNHCvZ9A9xqyguhEmQBnytjcZhUu7pD2Ju2lwmsjIDl6amscdeWdlNBiKrbiAvJI4U0aQO-bDJ-e2GSuf468AoovscGy7Q0XxQhjf4AiODwboiIf06KmvQYcCPn4K0Ul6FePOVYu44Ntn4-o2kJ--o740mxGSvgevZjygz_RYYHTgjm2F7uaHv-dcjKK-jVi-kHrgtfTyrbgtfTVfE2LRt20L2Xl4g1Y51OablBlO4UtM-lxULyM7p7oVW-MbrK1v99"
      }
    ]
  },

  goDetail() {
    wx.navigateTo({ url: "/pages/detail/index" })
  }
})
