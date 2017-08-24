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
//影院数据
const cinemaApi = '/v4/api/cinema?__t=1503369634722'
//请求city的数据
//
const cityApi = '/v4/api/city?__t=1503454258519'
//商城里的数据请求
const shopApi = '/api/ad/list'
export default {
    homeBannerApi,
    homeListApi,
    homeList2Api,
    moviesHotApi,
    moviesApi,
    detailsApi,
    cinemaApi,
    cityApi,
    shopApi
}