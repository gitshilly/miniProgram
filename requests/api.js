const API_BASE = "http://mt.emoney.cn/act/api/LiveStockMarket/";
const YQQ_API ="http://yqqapi.emoney.cn/api/Live/GetLiveRoom"

module.exports = {
  API_LIVE_LIST: API_BASE + "/RecommendedRooms",
  API_LIVE_DETAIL: YQQ_API + "?lid=:id"
}