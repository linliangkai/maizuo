//轮播图
//?__t=1503572727449
const homeBannerApi = "/v4/api/billboard/home"
//列表数据
//?__t=1503106749121&page=1&count=5
const homeListApi = "/v4/api/film/now-playing"
//列表数据 既然上映
//?__t=1503106749126
const homeList2Api = "/v4/api/film/coming-soon"

//影片页下的正在热映请求
//?page=1&count=7
const moviesHotApi = '/v4/api/film/now-playing'
//影片页下的即将上映请求
const moviesApi = '/v4/api/film/coming-soon?page=1&count=7'

//请求详情页面的数据
//3828?__t=1503307712768
const detailsApi = '/v4/api/film/'

//影院数据?__t=1503369634722
const cinemaApi = '/v4/api/cinema'

//请求city的数据
//?__t=1503454258519
const cityApi = '/v4/api/city'

//商城里的数据请求
const shopApi = '/api/ad/list'

//商城里的数据请求2
const shoppingApi = '/api/recommend/home?page=1&num=20'

export default {
    homeBannerApi,
    homeListApi,
    homeList2Api,
    moviesHotApi,
    moviesApi,
    detailsApi,
    cinemaApi,
    cityApi,
    shopApi,
    shoppingApi
}