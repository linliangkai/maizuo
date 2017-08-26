import axios from 'axios'
import API from '../api/index.js'

//影片下的热映电影请求
function getmoviesHotApi(i){
    return new Promise((resolve,reject)=>{
        axios.get(`${API.moviesHotApi}?page=${i}&count=7`)
        .then((reponse)=>{
            // console.log(reponse)
            resolve(reponse.data.data.films)
        })
        .catch((error)=>{
            console.log(error)
        })
    })
}
//影片下的即将上映电影
function getmoviesApi(j){
    return new Promise((resolve,reject)=>{
        axios.get(`${API.moviesApi}?page=${j}&count=5`)
        .then((reponse)=>{
            // console.log(reponse)
            resolve(reponse.data.data.films)
        })
        .catch((error)=>{
            console.log(error)
        })
    })
}
//影片下的详情页面 及 首页详情
function getdetailsApi(id){
    return new Promise((resolve,reject)=>{
        axios.get(`${API.detailsApi}${id}?__t${new Date().getTime()}`)
        .then((reponse)=>{
            // console.log(reponse)
            var obj = {}
            obj.img = reponse.data.data.film.cover.origin
            obj.director = reponse.data.data.film.director
            obj.actors =  reponse.data.data.film.actors.map((item)=>{
                return item.name
            })
            obj.nation = reponse.data.data.film.nation
            obj.category = reponse.data.data.film.category
            obj.premiereAt =  new Date(reponse.data.data.film.premiereAt)
            obj.synopsis = reponse.data.data.film.synopsis
            resolve(obj)
        })
        .catch((error)=>{
            console.log(error)
        })
    })
}

export default{
    getmoviesHotApi,
    getmoviesApi,
    getdetailsApi
}