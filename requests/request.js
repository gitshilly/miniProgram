var api = require('./api.js');
var utils = require('../utils/util.js');

/**
 * 网路请求
 */
function request(url, data, successCb, errorCb, completeCb) {
  wx.request({
    url: url,
    method: 'GET',
    data: data,
    dataType:'json',
    success: function (res) {
      if (res.statusCode == 200)
        utils.isFunction(successCb) && successCb(res.data);
      else
        console.log('请求异常', res);
    },
    error: function () {
      utils.isFunction(errorCb) && errorCb();
    },
    complete: function () {
      utils.isFunction(completeCb) && completeCb();
    }
  });
}

/**
 * 直播列表
 */
function requestSearchLive(data, successCb, errorCb, completeCb) {
  request(api.API_LIVE_LIST, data, successCb, errorCb, completeCb);
}

/**
 * 直播详情
 */
function requestLiveDetail(id, data, successCb, errorCb, completeCb) {
  request(api.API_LIVE_DETAIL.replace(':id', id), data, successCb, errorCb, completeCb);
}

/**
 * 关键字是否是tag
 */
function requestHasTag(tag, successCb, errorCb, completeCb) {
  request(api.API_LIVE_LIST, { tag: tag, count: 1 }, successCb, errorCb, completeCb);
}

module.exports = {
  requestSearchLive: requestSearchLive,
  requestLiveDetail: requestLiveDetail
}
