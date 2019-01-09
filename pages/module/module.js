// pages/module/module.js
var requests = require('../../requests/request.js');
var utils = require('../../utils/util.js');

Page({
  /**
   * 页面的初始数据
   */
  data: {
    loadingHidden:false,
    liveData: null,
    id: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id: options.id
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var id = this.data.id;
    var _this = this;
    requests.requestLiveDetail(
      id,
      { fields: 'LiveName,FirstLetter,PassportId,PassportId,PassportId,CreateTime,LastModifyTime,TagNameStr,TagIdStr,FansNum,AdviserNo' },
      (data) => {
        console.log(data)
        _this.setData({
          liveData: data.Data
        });
      }, () => {
        wx.navigateBack();
      }, () => {
        _this.setData({
          loadingHidden: true
        });
      });
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
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})