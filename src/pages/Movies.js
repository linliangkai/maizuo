import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import '../css/movies.css'

import moviesService from '../services/moviesService.js'
import store from '../store'

var myScroll = null;

export default class Movies extends Component {
	constructor() {
		super();
		this.state = {
			isshow: store.getState().isshow,
			isShow: store.getState().isShow,
			moviesHotList:[],
			moviesList:[],
			isiscroll:true
		}
	}
	render() {
		let style1 = { display: this.state.isshow ? 'block' : 'none' }
		let style2 = { display: this.state.isShow ? 'block' : 'none' }
		let topstyle = this.state.isiscroll ? 'cpn-back-to-top-hide' : '';

		return (
				<div class="page" ref="box" id="movies">
					<div class="wrap">
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
					<div class={ "cpn-back-to-top "+ topstyle}>
						<div onClick={this.toTopAction.bind(this)} class="circle">
							<span class="icon-top iconfont"></span>
						</div>
					</div>
				</div>
		)
	}
	//tab栏切换
	btnAction() {
		document.getElementsByClassName('tab_1')[0].className = "tab_1 active" 
		document.getElementsByClassName('tab_2')[0].className = "tab_2"
		

		this.setState({ isShow: false },function(){
			myScroll.refresh()
		})
		this.setState({ isshow: true },function(){
			myScroll.refresh()
		}) 
	}
	btn1Action() {
		document.getElementsByClassName('tab_2')[0].className = "tab_2 active"
		document.getElementsByClassName('tab_1')[0].className = "tab_1"

		this.setState({ isShow: true }, function() {
			myScroll.refresh()
		})
		this.setState({ isshow: false }, function() {
			myScroll.refresh()
		})
	}
	componentWillMount(){
		//请求影片页面热映电影
		moviesService.getmoviesHotApi(1)
		.then((res)=>{
			// console.log(res)
			this.setState({moviesHotList:res})
			myScroll.refresh()
		})
		//请求影片页面即将上映电影
		moviesService.getmoviesApi(1)
		.then((res)=>{
			// console.log(res)
			// console.log('123')
			this.setState({moviesList:res})
		})

	}

	componentDidMount(){
		
		if(this.state.isShow){
			document.getElementsByClassName('tab_2')[0].className = "tab_2 active"
			document.getElementsByClassName('tab_1')[0].className = "tab_1"
		}

		myScroll = new IScroll(this.refs.box, {
			bounce: false,
			scrollbars: true,
			fadeScrollbars: true,
			probeType: 3
		});
		//监听滚动，刷新滚动视图
		let i = 1; 
		let j = 1;

		myScroll.on('scrollEnd', ()=>{
			// console.log(myScroll.scrollerHeight)
			// console.log(myScroll.y)
			// console.log(myScroll.maxScrollY)
			// console.log(myScroll)
			myScroll.refresh()
			
			if(this.state.isshow){
				if(myScroll.y - 150 < myScroll.maxScrollY  && i <= 8){
					i++
					moviesService.getmoviesHotApi(i)
					.then((res)=>{
						// console.log(res)
						// console.log(i)
						this.setState({moviesHotList:this.state.moviesHotList.concat(res)}, function() {
							myScroll.refresh()
						})
						
					})
				}
			}
			
			if (this.state.isShow) {
				if (myScroll.y - 150 < myScroll.maxScrollY  && j < 20) {
					j++
					moviesService.getmoviesApi(j)
					.then((res)=>{
						this.setState({moviesList:this.state.moviesList.concat(res)}, function() {
							myScroll.refresh()
						})
						
					})
				}
			}

		})

		myScroll.on('scroll',()=>{
			myScroll.refresh()
			if(myScroll.y < -140){
				this.setState({isiscroll:false})
			}else if(myScroll.y > -140){
				this.setState({isiscroll:true})
			}
		})
	}

	toTopAction(){
		myScroll.scrollTo(0,0,1000)
	}
}
