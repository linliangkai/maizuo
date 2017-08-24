import API from'../api/index.js'
import axios from 'axios'
//影院数据
function getcinemaApi(){
    return new Promise((resolve,reject)=>{
        axios.get(`${API.cinemaApi}`)
        .then((reponse)=>{
            
            var arr = reponse.data.data.cinemas
            var arr1 = []
            //遍历数据里的district.name值，去重
            arr.map((item,index)=>{
                if(arr1.indexOf(item.district.name) == -1){
                    arr1.push(item.district.name)
                }
            })
            // console.log(arr1)
            //数组里创建对象name,list
            var newArr = arr1.map((item,index)=>{
                var obj = {}
                obj.name = arr1[index]
                obj.list = []
                return obj
            })
            //给对面list添加数据
            newArr.map((item,index)=>{
                // console.log(item)
                for(var i=0;i<arr.length;i++){
                    //新数组的name与数据下的district.name匹配则添加数据
                    if (item.name == arr[i].district.name) {
                        item.list.push(arr[i])
                    }
                }
            })
            //返回newArr
            resolve(newArr)
        })
        .catch((error)=>{
            console.log(error)
        })
   })
}

export default{
    getcinemaApi
}