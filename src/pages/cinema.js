import React , {Component} from 'react'

import CinemaService from '../services/cinemaService.js'

import '../css/cinema.css'

export default class Cinema extends Component{
	constructor(){
		super();
		this.state = {
			List:[]
		}
	}
	render(){
		return(
			<div class="page">
				 {
					this.state.List.map((item,index)=>{
						return(
							<div key={index}>
								<div onClick={this.btnAction.bind(this,index)} class="title">{item.name}</div>
								<ul class="cinema-list">
								{
										item.list.map((ListItem,Listindex)=>{
											return(
												<li key={Listindex} class="cinema-li">
													<div class="cinema-title">
														<div class="cinema-title-cinemaname">
															{ListItem.name}
														</div>
														<span class="cinema-title-tip">可乐爆米花</span>
														<span class="cinema-title-address">{ListItem.address}</span>
														<span>距离未知</span>
													</div>
													<span class="iconfont icon-arrow-right"></span>
												</li>
											)
										})
								}
								</ul>
							</div>
						)
					})
				}
				 
			</div>
		)
	}
	
	componentWillMount(){
		//请求影片数据
		CinemaService.getcinemaApi()
		.then((res)=>{
			console.log(res)
			this.setState({List:res})
		})		
	}
	btnAction(index){
		if(document.getElementsByClassName('cinema-list')[index].style.display == "block" || document.getElementsByClassName('cinema-list')[index].style.display == ''){
			document.getElementsByClassName('cinema-list')[index].style.display="none"
		}else{
			document.getElementsByClassName('cinema-list')[index].style.display="block"			
		}
	}
}
