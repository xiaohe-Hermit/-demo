Page({
    /**
     * 页面的初始数据
     */
    data: {
        usermail: "",
        avatarUrl:'',
        username:''
    },

    /**
     *  显示用户头像
     */
    showUserImage(){
        //未实现
        console.log(this.data.avatarUrl)
    },

    /**
     *  跳转接口
     */
    toEdit(){
        wx.navigateTo({
          url: '/pages/edit/edit',
        })
    },
    toCtgHistory(){
        wx.navigateTo({
          url: '/pages/ctgHistory/ctgHistory',
        })
    },
    toBasicCondition(){
        wx.navigateTo({
          url: '/pages/basicCondition/basicCondition',
        })
    },
    toVipCard(){
        wx.navigateTo({
          url: '/pages/vipCard/vipCard',
        })
    },
    toUs(){
        wx.navigateTo({
          url: '/pages/us/us',
        })
    },
    toSetting(){
        wx.navigateTo({
          url: '/pages/setting/setting',
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
        if(userinfo.email){
            this.setData({
                usermail:userinfo.email
            })
        }
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
        if(userinfo.email){
            this.setData({
                usermail:userinfo.email
            })
        }
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