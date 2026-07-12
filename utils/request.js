const { API_BASE_URL } = require("./config")

const STORAGE_TOKEN_KEY = "xmsp_token"
const STORAGE_USER_KEY = "xmsp_user"
const STORAGE_OPENID_KEY = "xmsp_openid"

function buildUrl(url) {
  if (/^https?:\/\//.test(url)) {
    return url
  }

  return `${API_BASE_URL}${url.startsWith("/") ? url : `/${url}`}`
}

function getToken() {
  return wx.getStorageSync(STORAGE_TOKEN_KEY) || ""
}

function setToken(token) {
  wx.setStorageSync(STORAGE_TOKEN_KEY, token)
}

function clearToken() {
  wx.removeStorageSync(STORAGE_TOKEN_KEY)
}

function request(options = {}) {
  const token = options.skipAuth ? "" : getToken()
  const url = buildUrl(options.url)
  const method = options.method || "GET"
  const header = Object.assign(
    {
      "content-type": "application/json"
    },
    token ? { Authorization: `Bearer ${token}` } : {},
    options.header || {}
  )

  return new Promise((resolve, reject) => {
    wx.request({
      url,
      method,
      data: options.data || {},
      header,
      success(response) {
        const statusCode = response.statusCode || 0
        if (statusCode < 200 || statusCode >= 300) {
          console.warn("[request:error]", {
            url,
            method,
            statusCode,
            header: response.header || {},
            data: response.data
          })

          reject({
            message: `request failed with status ${statusCode}`,
            url,
            method,
            statusCode,
            header: response.header || {},
            data: response.data
          })
          return
        }

        resolve(response.data)
      },
      fail(error) {
        console.warn("[request:fail]", {
          url,
          method,
          error
        })

        reject(Object.assign({}, error, { url, method }))
      }
    })
  })
}

module.exports = {
  request,
  getToken,
  setToken,
  clearToken,
  STORAGE_TOKEN_KEY,
  STORAGE_USER_KEY,
  STORAGE_OPENID_KEY
}
