const data = require("../../utils/data");

Page({
  data: {
    recipe: data.recipes[0],
    steps: data.steps,
    mainList: [
      { name: "鸡腿（去骨）", amount: "1个（约180g）" },
      { name: "米饭", amount: "1碗" },
      { name: "西兰花", amount: "50g" },
      { name: "胡萝卜", amount: "30g" }
    ],
    spiceList: [
      { name: "照烧酱", amount: "3汤匙" },
      { name: "生抽", amount: "1汤匙" },
      { name: "料酒", amount: "1汤匙" },
      { name: "蜂蜜", amount: "1茶匙" },
      { name: "蒜末", amount: "少许" },
      { name: "食用油", amount: "适量" }
    ],
    nutrition: [
      { label: "热量", value: "约632", unit: "kcal" },
      { label: "蛋白质", value: "31.2", unit: "g" },
      { label: "脂肪", value: "18.6", unit: "g" },
      { label: "难度", value: "简单", unit: "" }
    ]
  }
});
