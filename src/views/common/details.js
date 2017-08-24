import React , {Component} from 'react'

import '../../css/details.css'

import moviesService from '../../services/moviesService.js'

export default class Details extends Component{
	constructor({history}){
		super();
		
		this.state = {
			DetailsList:{},
			history,
			Month:Number,
			Date:Number
		}
	}
	render(){
		return(
			<div class="details">
				<img src={this.state.DetailsList.img} alt=""/>
				<div class="film-word1">影片简介</div>
				<div class="film-word2"><span>导　　演：</span>{this.state.DetailsList.director}</div>
				<div class="film-word2"><span>主　　演：</span>{this.state.DetailsList.actors}</div>
				<div class="film-word2"><span>地区语言：</span>{this.state.DetailsList.nation}</div>
				<div class="film-word2"><span>类　　型：</span>{this.state.DetailsList.category}</div>
				<div class="film-word2"><span>上映时间：</span>{this.state.Month}月{this.state.Date}日上映</div>
				<p class="film-word3">{this.state.DetailsList.synopsis}</p>
				<div class="operation">
					<button>立即购票</button>
				</div>
			</div>
		)
	}
	componentWillMount(){
		moviesService.getdetailsApi(this.state.history.location.state.id)
		.then((res)=>{
			console.log(res)
			this.setState({DetailsList:res})
			//premiereAt数据的时间戳
			//获取月份及日期
			var Month = res.premiereAt.getMonth()+1
			var Date  = res.premiereAt.getDate()
			
			this.setState({Month})
			this.setState({Date})
		})
	}

}
