const assetRoot = "/images/recipe/";

const recipes = [
  {
    id: "chicken-rice",
    title: "照烧鸡腿饭",
    category: "家常菜",
    desc: "酱香浓郁，简单美味，一人食首选",
    author: "金小明",
    likes: "1.2w",
    collects: "8563",
    time: "20分钟",
    servings: "1人份",
    difficulty: "简单",
    rating: "4.9",
    price: "￥12-18",
    image: assetRoot + "food-chicken.jpg",
    bigImage: assetRoot + "chicken-rice-large.jpg",
    hero: assetRoot + "recipe-hero.jpg",
    tags: ["甜咸适中", "酱香浓郁", "家常美味", "快手菜", "下饭神器"]
  },
  {
    id: "shrimp-broccoli",
    title: "蒜蓉虾仁西兰花",
    category: "快手菜",
    desc: "清爽低脂，营养又美味",
    author: "金小明",
    likes: "8563",
    collects: "6120",
    time: "15分钟",
    servings: "1人份",
    difficulty: "简单",
    rating: "4.8",
    image: assetRoot + "food-shrimp.jpg",
    tags: ["低脂", "清爽", "高蛋白"]
  },
  {
    id: "tomato-egg",
    title: "番茄鸡蛋汤",
    category: "汤羹",
    desc: "酸甜开胃，汤汁浓郁",
    author: "金小明",
    likes: "6231",
    collects: "4302",
    time: "15分钟",
    servings: "2人份",
    difficulty: "简单",
    rating: "4.7",
    image: assetRoot + "food-tomato.jpg",
    tags: ["开胃", "暖汤", "家常"]
  },
  {
    id: "cheesecake",
    title: "轻乳酪蛋糕",
    category: "烘焙甜点",
    desc: "入口即化，奶香浓郁",
    author: "金小明",
    likes: "5123",
    collects: "3988",
    time: "60分钟",
    servings: "4人份",
    difficulty: "中等",
    rating: "4.9",
    image: assetRoot + "food-cheesecake.jpg",
    tags: ["甜点", "烘焙", "下午茶"]
  },
  {
    id: "braised-chicken",
    title: "红烧鸡翅",
    category: "家常菜",
    desc: "鲜香入味，孩子爱吃",
    author: "金小明",
    likes: "1.1w",
    collects: "7210",
    time: "30分钟",
    servings: "2人份",
    difficulty: "简单",
    rating: "4.8",
    image: assetRoot + "cat-family.jpg",
    tags: ["下饭", "红烧", "家常"]
  },
  {
    id: "stir-veg",
    title: "清炒时蔬",
    category: "减脂餐",
    desc: "爽脆清香，轻负担美味",
    author: "金小明",
    likes: "4280",
    collects: "2890",
    time: "10分钟",
    servings: "1人份",
    difficulty: "简单",
    rating: "4.6",
    image: assetRoot + "cat-quick.jpg",
    tags: ["低脂", "蔬菜", "快手"]
  }
];

const categoryIcons = [
  { name: "家常菜", icon: assetRoot + "icon-family.png" },
  { name: "快手菜", icon: assetRoot + "icon-quick.png" },
  { name: "减脂餐", icon: assetRoot + "icon-light.png" },
  { name: "早餐", icon: assetRoot + "icon-breakfast.png" },
  { name: "汤羹", icon: assetRoot + "icon-soup.png" },
  { name: "烘焙甜点", icon: assetRoot + "icon-bake.png" },
  { name: "饮品", icon: assetRoot + "icon-drink.png" },
  { name: "小吃", icon: assetRoot + "icon-snack.png" },
  { name: "宝宝辅食", icon: assetRoot + "icon-baby.png" },
  { name: "下饭菜", icon: assetRoot + "icon-rice.png" },
  { name: "节日菜谱", icon: assetRoot + "icon-festival.png" },
  { name: "全部食材", icon: assetRoot + "icon-all.png" }
];

const hotCategories = [
  { title: "家常菜", subtitle: "每天都能做", icon: assetRoot + "icon-family.png", image: assetRoot + "cat-family.jpg" },
  { title: "减脂餐", subtitle: "轻负担更美味", icon: assetRoot + "icon-light.png", image: assetRoot + "cat-light.jpg" },
  { title: "快手菜", subtitle: "10分钟搞定", icon: assetRoot + "icon-quick.png", image: assetRoot + "cat-quick.jpg" },
  { title: "烘焙甜点", subtitle: "甜蜜治愈时光", icon: assetRoot + "icon-bake.png", image: assetRoot + "cat-dessert.jpg" }
];

const ingredients = [
  { name: "鸡肉", image: assetRoot + "ing-chicken.png" },
  { name: "牛肉", image: assetRoot + "ing-beef.png" },
  { name: "虾仁", image: assetRoot + "ing-shrimp.png" },
  { name: "鸡蛋", image: assetRoot + "ing-egg.png" },
  { name: "番茄", image: assetRoot + "ing-tomato.png" },
  { name: "西兰花", image: assetRoot + "ing-broccoli.png" },
  { name: "土豆", image: assetRoot + "ing-potato.png" },
  { name: "豆腐", image: assetRoot + "ing-tofu.png" },
  { name: "面条", image: assetRoot + "ing-noodle.png" },
  { name: "米饭", image: assetRoot + "ing-rice.png" }
];

const cuisines = [
  { name: "川菜", desc: "麻辣鲜香", image: assetRoot + "cuisine-sichuan.jpg", mark: "hot" },
  { name: "粤菜", desc: "鲜香清淡", image: assetRoot + "cuisine-yue.jpg", mark: "heart" },
  { name: "湘菜", desc: "香辣下饭", image: assetRoot + "cuisine-xiang.jpg", mark: "hot" },
  { name: "鲁菜", desc: "咸鲜醇厚", image: assetRoot + "cuisine-lu.jpg", mark: "fire" },
  { name: "日式", desc: "清新自然", image: assetRoot + "cuisine-japan.jpg", mark: "leaf" },
  { name: "韩式", desc: "酸辣开胃", image: assetRoot + "cuisine-korea.jpg", mark: "hot" },
  { name: "西式", desc: "经典优雅", image: assetRoot + "cuisine-west.jpg", mark: "leaf" }
];

const steps = [
  { no: 1, image: assetRoot + "step-raw.jpg", text: "鸡腿去骨，洗净后用厨房纸吸干水分，两面划几刀，方便入味。" },
  { no: 2, image: assetRoot + "step-marinate.jpg", text: "放入照烧酱、生抽、料酒、蜂蜜、蒜末，抓匀腌制15分钟以上。" },
  { no: 3, image: assetRoot + "step-pan.jpg", text: "热锅倒油，放入鸡腿皮面朝下煎至金黄，翻面煎2分钟。" },
  { no: 4, image: assetRoot + "step-sauce.jpg", text: "倒入剩余酱汁，小火焖煮5分钟，收汁至浓稠即可。" }
];

module.exports = {
  assetRoot,
  recipes,
  categoryIcons,
  hotCategories,
  ingredients,
  cuisines,
  steps
};
