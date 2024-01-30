// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })

 //
 let that=this
 wx.getStorage({//异步获取缓存
         key:"userinfo",//本地缓存中指定的 keys
         success:(res)=>{ 
             console.log('获取缓存成功',res.data)              
         },
         fail(res){
             console.log(res)
             wx.showModal({
                 title: '感谢您的使用！',
                 content: '请允许小程序可以使用您的微信头像和名字！',
                 success (res) {
                   if (res.confirm) {
                     console.log('用户点击确定')
                     that.getUserProfile()
                   } else if (res.cancel) {
                     console.log('用户点击取消')
                   }
                 }
               })
         }   
 })

  },


  
  getUserProfile(e){
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
    // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗    
    wx.getUserProfile({
      desc: '用于保存用户的昵称', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        wx.setStorage({
            key:'userinfo',//本地缓存中指定的 key(类型：string)
            data:res.userInfo,//需要存储的内容。只支持原生类型、Date、及能够通过JSON.stringify序列化的对象(类型:any)
            success:(s)=>{  
                console.log('缓存成功')
            },
            fail:(f)=>{
               console.log('存储缓存失败====',f);    
            }
        })
      }
    })
  },


  globalData: {
    userInfo: null,
  }
})
