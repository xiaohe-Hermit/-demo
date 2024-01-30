// pages/healthMng/healthMng.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      //子路由跳转
      isTap1Selected: true,
      isTap2Selected: false,
      //全部结果
      results:[
        {
          result_id:1,
          result_type:'每日健康打卡',
          result_date:'2023-04-24',
          isCollected:true,
        },
        {
          result_id:2,
          result_type:'健康数据',
          result_date:'2023-04-24',
          isCollected:false,
        }
      ],
      //收藏数
      like_num:0
    },

    //以下为方法--------------------------------------------------------------------------------------
    /**
     *  点赞方法
     */
    switchLike(e){
        let id = e.currentTarget.dataset.id
        const newArray = this.data.results.map(item => {
            if (item.result_id === id) {
                // 修改特定对象的值
                const result_id = item.result_id
                const result_type = item.result_type
                const result_date = item.result_date
                if(item.isCollected === true){
                    return {result_id: result_id,result_type: result_type, result_date: result_date,isCollected: false}
                }else{
                    return {result_id: result_id,result_type: result_type, result_date: result_date,isCollected: true}
                }
            }
            return item;
          });
        //更新结果
        this.setData({
            results: newArray
        });
        //更新收藏量
        this.switchLikeNum();
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
     *  统计收藏数量
     */
    countLike(){
        let cnt = 0
        this.data.results.forEach(element => {
            if(element.isCollected === true){
                cnt = cnt + 1
            }
        });
        return cnt
    },
    switchLikeNum(){
        const likenum = this.countLike();
        this.setData({
            like_num:likenum
        });
    },
    
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.switchLikeNum();
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