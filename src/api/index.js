//轮播图
const homeBannerApi = "/v4/api/billboard/home"
//?__t=1503106749121&page=1&count=5
//列表数据
const homeListApi = "/v4/api/film/now-playing"
//列表数据 既然上映
const homeList2Api = "/v4/api/film/coming-soon?__t=1503106749126"
//影片页下的正在热映请求
const moviesHotApi = '/v4/api/film/now-playing?page=1&count=7'
//影片页下的即将上映请求
const moviesApi = '/v4/api/film/coming-soon?page=1&count=7'
//请求详情页面的数据
//3828?__t=1503307712768
const detailsApi = '/v4/api/film/'
export default {
    homeBannerApi,
    homeListApi,
    homeList2Api,
    moviesHotApi,
    moviesApi,
    detailsApi
}