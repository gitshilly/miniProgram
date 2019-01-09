// pages/lives/live.js
var requests = require('../../requests/request.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageIndex: 1, //页码
    pageData: [],
    totalRecord:0,
    loadingMore:false,
    isInit: true, //是否第一次进入应用
    ishotList: true,
    hasNext: false //是否有下一页
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    requestData.call(this);

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
    if (this.data.hasNext){
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
  toDetailPage:function(e){
    var bid = e.currentTarget.dataset.bid;
    wx.navigateTo({
      url: '../module/module?id=' + bid,
      success:function(res){
        console.log('成功跳转');
      },fail:function(e){
        console.log('失败'+e);
      },complete:function(){
        console.log('完成');
      }
    });
  },
  switchnav:function(e){
    this.setData({ ishotList: !this.data.ishotList, pageIndex: 1, pageData:[]});
    requestData.call(this);
  },
  listenSwiper:function(e){

  }
});

function requestData() {
  var _this = this;
  var ishotList = this.data.ishotList;
  var pageIndex = this.data.pageIndex;

  this.setData({ loadingMore: true, isInit: false });
  console.log(pageIndex)
  requests.requestSearchLive({ ishotList: ishotList, pageIndex: pageIndex }, (data) => {
    var retdata = data.data;
    if (retdata.dataCount == 0) {
      //没有记录
      _this.setData({ totalRecord: 0 });
    } else {
      _this.setData({
        pageData: _this.data.pageData.concat(retdata.list),
        pageIndex: pageIndex + 1,
        totalRecord: retdata.dataCount
      });
    }
  }, () => {
    _this.setData({ totalRecord: 0 });
  }, () => {
    _this.setData({ loadingMore: false });
  });
}
