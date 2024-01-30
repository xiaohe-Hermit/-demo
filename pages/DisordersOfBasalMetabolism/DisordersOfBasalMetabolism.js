// pages/DisordersOfBasalMetabolism/DisordersOfBasalMetabolism.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        show:'请选择',
        selectBtn1:false,
        selectBtn2:false,
        selectBtn3:false,
        selectBtn4:false,
        selectBtn5:false,
        selectBtn6:false,
        selectBtn7:false,
        selectBtn8:false,
        selectBtn9:false,
        selectBtn10:true,
    },

    /**
     *  点击按钮功能
     */
    clickBtn(event){
        const id = event.currentTarget.dataset.id
        if(id == 1){
            if(this.data.selectBtn1 === true){
                this.setData({
                    selectBtn1:false
                })
            }else{
                this.setData({
                    selectBtn1:true,
                    selectBtn10:false
                })
            }
        }else if(id == 2){
            if(this.data.selectBtn2 === true){
                this.setData({
                    selectBtn2:false
                })
            }else{
                this.setData({
                    selectBtn2:true,
                    selectBtn10:false
                })
            }
        }else if(id == 3){
            if(this.data.selectBtn3 === true){
                this.setData({
                    selectBtn3:false
                })
            }else{
                this.setData({
                    selectBtn3:true,
                    selectBtn10:false
                })
            }
        }else if(id == 4){
            if(this.data.selectBtn4 === true){
                this.setData({
                    selectBtn4:false
                })
            }else{
                this.setData({
                    selectBtn4:true,
                    selectBtn10:false
                })
            }
        }else if(id == 5){
            if(this.data.selectBtn5 === true){
                this.setData({
                    selectBtn5:false
                })
            }else{
                this.setData({
                    selectBtn5:true,
                    selectBtn10:false
                })
            }
        }else if(id == 6){
            if(this.data.selectBtn6 === true){
                this.setData({
                    selectBtn6:false
                })
            }else{
                this.setData({
                    selectBtn6:true,
                    selectBtn10:false
                })
            }
        }else if(id == 7){
            if(this.data.selectBtn7 === true){
                this.setData({
                    selectBtn7:false
                })
            }else{
                this.setData({
                    selectBtn7:true,
                    selectBtn10:false
                })
            }
        }else if(id == 8){
            if(this.data.selectBtn8 === true){
                this.setData({
                    selectBtn8:false
                })
            }else{
                this.setData({
                    selectBtn8:true,
                    selectBtn10:false
                })
            }
        }else if(id == 9){
            if(this.data.selectBtn9 === true){
                this.setData({
                    selectBtn9:false
                })
            }else{
                this.setData({
                    selectBtn9:true,
                    selectBtn10:false
                })
            }
        }else if(id == 10){
            if(this.data.selectBtn10 === true){
                this.setData({
                    selectBtn10:false
                })
            }else{
                this.setData({
                    selectBtn10:true,
                    selectBtn1:false,
                    selectBtn2:false,
                    selectBtn3:false,
                    selectBtn4:false,
                    selectBtn5:false,
                    selectBtn6:false,
                    selectBtn7:false,
                    selectBtn8:false,
                    selectBtn9:false
                })
            }
        } 
    },
    /**
     *  提交按钮功能
     */
    submitData(){
        if(this.data.selectBtn1===true||this.data.selectBtn2===true||this.data.selectBtn3===true||this.data.selectBtn4===true||this.data.selectBtn5===true||this.data.selectBtn6===true||this.data.selectBtn7===true||this.data.selectBtn8===true||this.data.selectBtn9===true||this.data.selectBtn10===true){
            console.log("提交成功")
        }
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