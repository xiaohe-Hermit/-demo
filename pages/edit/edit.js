// pages/edit/edit.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        avatarUrl:'',
        username:'',
        identity:'',
        birth:'',
        phone:'',
        address:'',
        email:'',
        taici:'1',
        chanci:'1',
        nowDate:'',
        taiciRange:[],
        chanciRange:[]
    },
    /**
     * 初始化信息
     */
    updateInfo:function(){
        var userinfo = wx.getStorageSync('userinfo')
        if(userinfo.identity){
            this.setData({
                identity:userinfo.identity
            })
        }
        if(userinfo.birth){
            this.setData({
                birth:userinfo.birth
            })
        }
        if(userinfo.phone){
            this.setData({
                phone:userinfo.phone
            })
        }
        if(userinfo.address){
            this.setData({
                address:userinfo.address
            })
        }
        if(userinfo.email){
            this.setData({
                email:userinfo.email
            })
        }
        if(userinfo.taici){
            this.setData({
                taici:userinfo.taici
            })
        }
        if(userinfo.chanci){
            this.setData({
                chanci:userinfo.chanci
            })
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        //初始化信息
        var userinfo = wx.getStorageSync('userinfo')
        this.setData({
            avatarUrl:userinfo.avatarUrl,
            username:userinfo.nickName,
        })
        this.updateInfo()
        //获取当日时间
        this.getNowDate()
        //生成胎次、产次列表
        var range = new Array(100);
        for(var i=0;i<range.length;i++){
            range[i] = i;
        }
        this.setData({
            chanciRange:range,
            taiciRange:range
        })
    },
    /**
     * 回到上一页
     */
    goBackOnePage:function(){
        //回到主页
        wx.navigateBack(1)
    },

    /**
     * 提交
     */
    submitInfo:function(){
        // console.log(this.data)
        var userinfo = wx.getStorageSync('userinfo')
        console.log(userinfo)
        userinfo.nickName = this.data.username
        userinfo.identity = this.data.identity
        userinfo.birth = this.data.birth
        userinfo.phone = this.data.phone
        userinfo.address = this.data.address
        userinfo.email = this.data.email
        userinfo.taici = this.data.taici
        userinfo.chanci = this.data.chanci
        // wx.setStorageSync('userinfo', userinfo)
        wx.setStorage({
            key:'userinfo',
            data:userinfo,
            success:(res)=>{
                wx.showToast({
                    title: '修改成功',
                    icon: 'success',
                    duration: 2000,
                    complete:this.goBackOnePage()
                })
            },
            fail:(res)=>{
                wx.showToast({
                    title: '修改失败',
                    icon: 'error',
                    duration: 2000,
                    complete:this.goBackOnePage()
                })
            }
        })
        //消息弹窗
        
        
    },

    /**
     * 修改昵称
     */
    bindNicknameChange:function(e){
        this.setData({
            username:e.detail.value
        })
    },
    /**
     * 修改证件号
     */
    bindIdentityChange:function(e){
        this.setData({
            identity:e.detail.value
        })
    },
    /**
     * 修改手机号
     */
    bindPhoneChange:function(e){
        this.setData({
            phone:e.detail.value
        })
    },
    /**
     * 修改地址
     */
    bindAddressChange:function(e){
        this.setData({
            address:e.detail.value
        })
    },
    /**
     * 修改邮箱
     */
    bindEmailChange:function(e){
        this.setData({
            email:e.detail.value
        })
    },
    //获取当前时间
    getNowDate: function () {
        var date = new Date();
        var year = date.getFullYear() //年
        var month = date.getMonth() + 1//月
        var day = date.getDate()//日
        this.setData({
            nowDate: year + '-' + month + '-' + day
        })
    },
    /**
     * 出生日期修改
     */
    bindBirthChange:function(e){
        // console.log('picker发送选择改变，携带值为', e)
        this.setData({
            birth:e.detail.value
        })
    },
    /**
     * 修改胎次
     */
    bindTaiciChange:function(e){
        this.setData({
            taici:e.detail.value
        })
    },
    /**
     * 修改产次
     */
    bindChanciChange:function(e){
        this.setData({
            chanci:e.detail.value
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