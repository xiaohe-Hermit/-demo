// pages/fhr/fhr.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        //信号图片路径
        fhrImageUrl:"https://img.js.design/assets/img/645cbf8b3424d3dc049dcbec.png#fb9cf70f77e3973becbc132a06c49f57",
        //子路由跳转
        isTap1Selected: true,
        isTap2Selected: false,
        //介绍
        intro:'妊娠期间使用Cardiotocography（CTG）监测胎儿心率和子宫收缩。它最常用于妊娠晚期，其目的是监测胎儿健康状况，并早期发现胎儿窘迫。异常的CTG可能表明需要进一步的调查和潜在的干预。',
        //指标解读
        explain1:'· 胎心率为110~160次/分\n· 宫缩＜28mmHg\n均属于正常范围',
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