
Page({

    /**
     * 页面的初始数据
     */
    data: {
        avatarUrl:'',
        username:''
    },
    /**
     * 跳转接口
     */
    toCtgInfo(){
        wx.navigateTo({
          url: '../ctginfo/ctginfo',
        })
    },
    toHealthMng(){
        wx.navigateTo({
            url: '/pages/healthMng/healthMng',
          })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        var userinfo= wx.getStorageSync('userinfo')
        this.setData({
            avatarUrl:userinfo.avatarUrl,
            username:userinfo.nickName
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
        var userinfo= wx.getStorageSync('userinfo')
        this.setData({
            avatarUrl:userinfo.avatarUrl,
            username:userinfo.nickName
        })
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})