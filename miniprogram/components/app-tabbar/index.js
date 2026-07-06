const images = {
  home: "/images/recipe/tab-home.png",
  category: "/images/recipe/tab-category.png",
  favorite: "/images/recipe/tab-favorite.png",
  profile: "/images/recipe/tab-profile.png",
  publish: "/images/recipe/tab-publish.png",
  random: "/images/recipe/tab-random.png"
};

const urls = {
  home: "/pages/index/index",
  category: "/pages/category/index",
  favorite: "/pages/favorite/index",
  profile: "/pages/profile/index",
  publish: "/pages/publish/index",
  random: "/pages/random/index"
};

Component({
  properties: {
    active: {
      type: String,
      value: "home"
    },
    center: {
      type: String,
      value: "publish"
    }
  },

  data: {
    tabSrc: images.home
  },

  lifetimes: {
    attached() {
      this.syncImage();
    }
  },

  observers: {
    "active, center": function () {
      this.syncImage();
    }
  },

  methods: {
    syncImage() {
      const active = this.data.active || "home";
      this.setData({
        tabSrc: images[active] || images.home
      });
    },

    switchPage(event) {
      const key = event.currentTarget.dataset.key;
      const target = key === "center" ? this.data.center : key;
      const url = urls[target] || urls.home;
      const pages = getCurrentPages();
      const current = pages[pages.length - 1];
      if (current && "/" + current.route === url) {
        return;
      }
      wx.redirectTo({ url });
    }
  }
});
