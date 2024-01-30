// pages/uc/uc.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        //图片路径
        fhrImageUrl:'https://img.js.design/assets/img/619f34fcef4c341fea57c4f9.png',
        //子路由跳转
        isTap1Selected: true,
        isTap2Selected: false,
        //介绍
        intro:'胎心是指胎儿的心率，是未分娩胎儿在母亲子宫内的心跳。胎儿宫内安危情况的监护包括胎动计数，听诊器或多普勒听胎心，超声波检查和胎心电子监护。胎心升高提示心动过速，胎心降低提示心动过缓，两者都可用干诊断胎儿窘迫。',
        intro2:'· 正常水平:胎心正常范围为110~160次/分。\n· 检查目的:监测胎儿心脏活动\n· 高风险值:胎心率高于180次/分或低于100次/分\n· 调整建议:完善其他孕期检查，评估母体、胎儿情况，如有必要进行人为干预',
        //指标解读
        explain1:'胎心为110~160次/分，属于正常范围。',
        explain2:'需要注意的是，由于仪器精度的不同，或者是实验室不同等因素的影响，实际生活中不同医疗机构出具的化验单参考值可能会有一定的差异。具体以各单位给定的范围为准，详细可咨询医生。',
    },
    /**
     *  子路由调整
     */
    switchToTap1(){
      this.setData({
        isTap1Selected:true,
        isTap2Selected:false
      });
    },
    switchToTap2(){
      this.setData({
        isTap1Selected:false,
        isTap2Selected:true
      });
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

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