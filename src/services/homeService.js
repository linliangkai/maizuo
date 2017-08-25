import axios from 'axios'
import API from '../api/index.js'

//请求轮播图数据
function gethomeBannerApi(){
    return new Promise((resolve,reject)=>{
        axios.get(`${API.homeBannerApi}?__t=${new Date().getTime()}`)
        .then((reponse)=>{
            // console.log(reponse.data.data.billboards)
            resolve(reponse.data.data.billboards)
        })
        .catch((error)=>{
            console.log(error)
        })
    })
   
}
//热映电影
function gethomeListApi(){
	return new Promise((resolve,reject)=>{
		axios.get(`${API.homeListApi}?__t=${new Date().getTime()}`)
		.then((reponse)=>{
			// console.log(reponse)
			resolve(reponse.data.data.films)
		})
		.catch((error)=>{
		    console.log(error)
		})
	})
}
//即将上映电影
function gethomeList2Api(){
    return new Promise((resolve,reject)=>{
        axios.get(`${API.homeList2Api}?__t=${new Date().getTime()}&page=1&count=5`)
        .then((reponse)=>{
            // console.log(reponse)
            resolve(reponse.data.data.films)
        })
        .catch((error)=>{
            console.log(error)
        })
    })
}




export default{
    gethomeBannerApi,
    gethomeListApi,
    gethomeList2Api
}