import API from '../api/index.js'
import axios from 'axios'

function getshopApi(){
    //商城1
    return new Promise((resolve,reject)=>{
        axios.get(`${API.shopApi}`)
        .then((response)=>{
            // console.log(response.data)
            resolve(response.data.data) 
        })
        .catch((error)=>{
            console.log(error)
        })
    })
}

function getshoppingApi(){
    //请求商城2
    return new Promise((resolve,reject)=>{
        axios.get(`${API.shoppingApi}`)
        .then((reponse)=>{
            // console.log(reponse)
            resolve(reponse.data.data.list)
        })
        .catch((error)=>{
            console.log(error)
        })
    })
}

export default{
    getshopApi,
    getshoppingApi
}