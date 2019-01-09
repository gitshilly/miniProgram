// pages/lives/live.js
var requests = require('../../requests/request.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageIndex: 1, //页码
    pageData: [],
    totalRecord: 0,
    loadingMore: false,
    isInit: true, //是否第一次进入应用
    currentItem: 1,
    hasNext: false //是否有下一页
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    requestData.call(this);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    if (this.data.hasNext) {
      requestData.call(this);
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  /**
   * 点击到详细
   */
  toDetailPage: function (e) {
    var bid = e.currentTarget.dataset.bid;
    wx.navigateTo({
      url: '../module/module?id=' + bid,
      success: function (res) {
        console.log('成功跳转');
      }, fail: function (e) {
        console.log('失败' + e);
      }, complete: function () {
        console.log('完成');
      }
    });
  },
  switchnav: function (e) {
    
  },
  openPopRules:function(e){
    console.log("$('#PopRules').show()弹窗显示")
  },
  listenSwiper: function (e) {

  }
});
