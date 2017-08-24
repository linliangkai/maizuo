import axios from 'axios'
import API from '../api/index.js'
//请求城市数据
function getcityApi(){
   return new Promise((resolve,reject)=>{
        axios.get(`${API.cityApi}`)
        .then((reponse)=>{
            console.log(reponse)
            resolve(reponse.data.data.cities)
        })
        .catch((error)=>{
            console.log(error)
        })
   })
}

export default{
    getcityApi
}