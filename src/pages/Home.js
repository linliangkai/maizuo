import React , {Component} from 'react'
import {Link} from 'react-router-dom'

import homeService from '../services/homeService.js'

import '../css/home.css'

let bannerSwiper = null;

export default class Home extends Component{
	constructor(){
		super();
		this.state = {
			bannerData : [],
			listData:[],
			list2Data:[]
		}
		
	}
	render(){
		return(
			<div class="Home">
				<div id="home" class="page">
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
						<div class="more-button">
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
						<div class="more-button">
							更多即将上映电影
						</div>
					</div>
				</div>
			</div>
		)
	}
	
	componentWillMount(){
		//请求轮播图数据
		homeService.gethomeBannerApi()
		.then((res)=>{
//			res.splice(0,0,res[res.length-1])
//			res.push(res[1])
			this.setState({bannerData:res});
			bannerSwiper.update()
		})
		//请求热映电影数据
		homeService.gethomeListApi()
		.then((res)=>{
			console.log(res)
			this.setState({listData:res})
		})
		//请求既然上映电影数据
		homeService.gethomeList2Api()
		.then((res)=>{
			console.log(res)
			this.setState({list2Data:res})
		})
	}

	componentDidMount(){
		bannerSwiper = new Swiper(this.refs.banner,{})
	}
}
