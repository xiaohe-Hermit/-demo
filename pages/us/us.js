// 引入 echarts 文件
import * as echarts from '../../ec-canvas/echarts';

// 定义 initChart 方法
// initChart 需要传递四个参数 canvas, width, height, dpr
function initChart(canvas, width, height, dpr) {
  // 使用引入的 echarts的init方法对 chart 变量赋值进行初始化
  const chart = echarts.init(canvas, null, {
    width,
    height,
    devicePixelRatio: dpr // 像素
  });

  canvas.setChart(chart);
	
  // 此为配置项。配置图表展现样式与数据
  var option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line'
        }
      ],
      
  };

  chart.setOption(option);

  return chart;
}

Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 此处的ec名称与wxml结构中命名保持一致
        ec: {
            // 使用 onInit 方法定义
            onInit: initChart
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