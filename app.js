const { wxLogin } = require("./services/auth")
const {
  setToken,
  clearToken,
  STORAGE_TOKEN_KEY,
  STORAGE_USER_KEY,
  STORAGE_OPENID_KEY
} = require("./utils/request")

App({
  globalData: {
    token: wx.getStorageSync(STORAGE_TOKEN_KEY) || "",
    userInfo: wx.getStorageSync(STORAGE_USER_KEY) || null,
    openid: wx.getStorageSync(STORAGE_OPENID_KEY) || "",
    loginPromise: null
  },

  onLaunch() {
    this.ensureLogin({ force: true }).catch((error) => {
      console.warn("wx_login failed", error)
    })
  },

  ensureLogin(options = {}) {
    const force = !!options.force
    if (!force && this.globalData.token) {
      return Promise.resolve({
        token: this.globalData.token,
        userInfo: this.globalData.userInfo,
        openid: this.globalData.openid
      })
    }

    if (this.globalData.loginPromise) {
      return this.globalData.loginPromise
    }

    this.globalData.loginPromise = wxLogin()
      .then((session) => {
        if (session.token) {
          setToken(session.token)
        } else {
          clearToken()
        }

        if (session.userInfo) {
          wx.setStorageSync(STORAGE_USER_KEY, session.userInfo)
        } else {
          wx.removeStorageSync(STORAGE_USER_KEY)
        }

        if (session.openid) {
          wx.setStorageSync(STORAGE_OPENID_KEY, session.openid)
        } else {
          wx.removeStorageSync(STORAGE_OPENID_KEY)
        }

        this.globalData.token = session.token || ""
        this.globalData.userInfo = session.userInfo || null
        this.globalData.openid = session.openid || ""
        return session
      })
      .finally(() => {
        this.globalData.loginPromise = null
      })

    return this.globalData.loginPromise
  }
})
