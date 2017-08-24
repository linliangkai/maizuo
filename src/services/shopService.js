import API from '../api/index.js'
import axios from 'axios'

function getshopApi(){
    return new Promise((resolve,reject)=>{
        axios.get(`${API.shopApi}`)
        .then((response)=>{
            console.log(response.data)
            resolve(response.data.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    })
}

export default{
    getshopApi
}