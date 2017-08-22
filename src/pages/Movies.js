import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import '../css/movies.css'

import moviesService from '../services/moviesService.js'

export default class Movies extends Component {
	constructor() {
		super();
		this.state = {
			isshow: true,
			isShow: false,
			moviesHotList:[],
			moviesList:[]
		}
	}
	render() {
		let style1 = { display: this.state.isshow ? 'block' : 'none' }
		let style2 = { display: this.state.isShow ? 'block' : 'none' }
		return (
				<div class="page">
					<div class="film-list-wrap">
						<div class="tab">
							<div class="tab_1 active" onClick={this.btnAction.bind(this)}>正在热映</div>
							<div class="tab_2" onClick={this.btn1Action.bind(this)}>即将上映</div>
						</div>
						<div>
							<div style={style1}>
								<ul class="list_hot">
									{
										this.state.moviesHotList.map((item,index)=>{
											return(
												<li key={index} onClick={this.moviesAction.bind(this)}>
													<Link to={{
														pathname:'/details/' + item.id,
														state:{
															id:item.id
														}
													}}>
														<div class="film-item">
															<div class="film-item-img">
																<img src={item.poster.thumbnail} alt=""/>
															</div>
															<div class="film-desc"> 
																<div>
																	<span class="film-name">{item.name}</span>
																	<span class="film-right">&gt;</span>
																	<span class="film-grade">{item.grade}</span>
																</div>
																<div class="film-intro">{item.intro}</div>
																<div class="film-counts">
																	<span>{item.cinemaCount}</span>
																	<span>家影院上映</span>
																	<span>{item.watchCount}</span>
																	<span>人购票</span>
																</div>
															</div>
														</div>
													</Link>
												</li>
											)
										})
									}
								</ul>
							</div>
							<div style={style2}>
								<ul class="list_hot">
									{
										this.state.moviesList.map((item,index)=>{
											return(
												<li key={index}>
													<Link to={{
														pathname:'/details/' + item.id,
														state:{
															id:item.id
														}
													}}>
													<div class="film-item">
														<div class="film-item-img">
															<img src={item.poster.thumbnail} alt=""/>
														</div>
														<div class="film-desc"> 
															<div>
																<span class="film-name">{item.name}</span>
																<span class="film-right">&gt;</span>
																<span class="film-grade">{item.grade}</span>
															</div>
															<div class="film-intro">{item.intro}</div>
															<div class="film-counts1">
																<span>8月25日上映</span>
																<span>星期五</span>
															</div>
														</div>
													</div>
													</Link>
												</li>
											)
										})
									}
								</ul>
							</div>
						</div>
					</div>
				</div>
		)
	}

	btnAction() {
		document.getElementsByClassName('tab_1')[0].className = "tab_1 active"
		document.getElementsByClassName('tab_2')[0].className = "tab_2"

		this.setState({ isShow: false })
		this.setState({ isshow: true })
	}
	btn1Action() {
		document.getElementsByClassName('tab_2')[0].className = "tab_2 active"
		document.getElementsByClassName('tab_1')[0].className = "tab_1"

		this.setState({ isShow: true })
		this.setState({ isshow: false })
	}
	moviesAction(){
		
	}
	componentWillMount(){
		//请求影片页面热映电影
		moviesService.getmoviesHotApi()
		.then((res)=>{
			console.log(res)
			this.setState({moviesHotList:res})
		})
		//请求影片页面即将上映电影
		moviesService.getmoviesApi()
		.then((res)=>{
			console.log(res)
			console.log('123')
			this.setState({moviesList:res})

		})
	}
}
