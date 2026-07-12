const { request } = require("../utils/request")

function getMiniProgramAppId() {
  try {
    const accountInfo = wx.getAccountInfoSync ? wx.getAccountInfoSync() : null
    return accountInfo && accountInfo.miniProgram ? accountInfo.miniProgram.appId : ""
  } catch (error) {
    return ""
  }
}

function maskCode(code) {
  if (!code) {
    return ""
  }

  if (code.length <= 10) {
    return `${code.slice(0, 2)}***`
  }

  return `${code.slice(0, 6)}...${code.slice(-4)}`
}

function loginByWechatCode() {
  return new Promise((resolve, reject) => {
    wx.login({
      success(result) {
        if (!result.code) {
          reject(new Error("wx.login did not return a code"))
          return
        }

        resolve(result.code)
      },
      fail(error) {
        reject(error)
      }
    })
  })
}

function pickPayload(response) {
  if (!response || typeof response !== "object") {
    return {}
  }

  if (response.data && typeof response.data === "object") {
    return response.data
  }

  if (response.result && typeof response.result === "object") {
    return response.result
  }

  if (response.session && typeof response.session === "object") {
    return response.session
  }

  return response
}

function normalizeLoginResponse(response) {
  const payload = pickPayload(response)
  const userInfo = payload.userInfo || payload.user || payload.profile || null
  const token =
    payload.token ||
    payload.accessToken ||
    payload.access_token ||
    payload.jwt ||
    (userInfo && (userInfo.token || userInfo.accessToken || userInfo.access_token)) ||
    ""
  const openid =
    payload.openid ||
    payload.openId ||
    (userInfo && (userInfo.openid || userInfo.openId)) ||
    ""

  return {
    token,
    userInfo,
    openid,
    raw: response
  }
}

function wxLogin() {
  return loginByWechatCode().then((code) => {
    const appId = getMiniProgramAppId()

    console.info("[auth:wx_login]", {
      appId,
      code: maskCode(code),
      codeLength: code.length
    })

    return request({
      url: "/api/auth/wx_login",
      method: "POST",
      data: {
        code,
        js_code: code,
        appid: appId,
        appId,
        app_id: appId
      },
      skipAuth: true
    }).then(normalizeLoginResponse)
  })
}

module.exports = {
  wxLogin,
  normalizeLoginResponse
}
