Component({
  properties: {
    subtitle: {
      type: String,
      value: ""
    },
    back: {
      type: Boolean,
      value: false
    }
  },
  data: {
    backClass: ""
  },

  observers: {
    back(value) {
      this.setData({
        backClass: value ? "brand-header-back" : ""
      });
    }
  },

  methods: {
    goBack() {
      const pages = getCurrentPages();
      if (pages.length > 1) {
        wx.navigateBack();
        return;
      }
      wx.redirectTo({
        url: "/pages/index/index"
      });
    }
  }
});
