import React , {Component} from 'react'
import {Link} from 'react-router-dom'

import homeService from '../services/homeService.js'

import '../css/home.css'

import store from '../store'

let bannerSwiper = null;
var myScroll = null;
export default class Home extends Component{
	constructor({history}){
		
		super();
		// console.log(history)
		this.state = {
			bannerData : [],
			listData:[],
			list2Data:[],
			history
		}
		
	}
	render(){
		return(
			<div class="Home">
				<div id="home" ref="box" class="page">
					<div class="wrap">
						<div ref="banner" class="swiper-container home-banner">
							<div class="swiper-wrapper">
								{
									this.state.bannerData.map((item,index)=>{
										return(
											<div key={index} class="swiper-slide">
												<img src={item.imageUrl}/>
											</div>
										)
									})
								}
							</div>
						</div>
						<div class="home-list">
							<ul class="list-banner">
								{
									this.state.listData.map((item,index)=>{
										return(
											<li key={index}>
												<Link to={{
													pathname:'/details/' + item.id,
													state:{
														id:item.id
													}
												}}>		
													<img src={item.cover.origin}/>
													<div class="text_left">
														<div>{item.name}</div>
														<div>
															<span>{item.cinemaCount}</span>
															<span>家影院上映 </span>
															<span>{item.watchCount}</span>
															<span>人购票</span>
														</div>
													</div>
													<div class="text_right">
														<span>{item.grade}</span>
													</div>
												</Link>
											</li>
										)
									})
								}
							</ul>
							<div onClick={this.btn1Action.bind(this)} class="more-button">
								更多热映电影
							</div>
							<div class="dividing-line">
								<div class="upcoming">
									即将上映
								</div>
							</div>
							<ul class="list-foot">
								{
									this.state.list2Data.map((item,index)=>{
										return(
											<li key={index}>
												<Link to={{
													pathname:'/details/' + item.id,
													state:{
														id:item.id
													}
												}}>
													<img src={item.cover.origin} alt=""/>
													<div class="text_left">{item.name}</div>
													<div class="text_right">8月25日上映</div>
												</Link>
											</li>
										)
									})
								}
							</ul>
							<div onClick={this.btnAction.bind(this)} class="more-button">
								更多即将上映电影
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
	
	componentWillMount(){
		//请求轮播图数据
		homeService.gethomeBannerApi()
		.then((res1)=>{
//			res.splice(0,0,res[res.length-1])
//			res.push(res[1])
			this.setState({bannerData:res1});
			bannerSwiper.update()
		})
		//请求热映电影数据
		homeService.gethomeListApi()
		.then((res2)=>{
			// console.log(res)
			this.setState({listData:res2})
		})
		//请求既然上映电影数据
		homeService.gethomeList2Api()
		.then((res3)=>{
			// console.log(res)
			this.setState({list2Data:res3})
		})
	}

	componentDidMount(){
		//轮播图
		bannerSwiper = new Swiper(this.refs.banner,{})

		//创建滚动视图
		myScroll = new IScroll(this.refs.box, {
			bounce: false, //开启弹簧效果
			scrollbars: false //是否显示滚动条
		});
		//监听滚动，刷新滚动视图
		myScroll.on('scrollStart', ()=>{
			myScroll.refresh()
		})
		
	}

	btnAction(){
		store.dispatch({
			type:'change',
			isshow:false,
			isShow:true
		})
		this.state.history.push('/Movies')
	}

	btn1Action(){
		store.dispatch({
			type:'change',
			isshow:true,
			isShow:false
		})
		this.state.history.push('/Movies')
	}
}
