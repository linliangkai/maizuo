import React , {Component} from 'react'

import '../css/shop.css'

import shopService from '../services/shopService.js'

export default class Shop extends Component{
	constructor(){
		super();
		this.state={
			List:[],
			List1:[],
			List2:[]
		}
	}
	render(){
		return(
			<div class="page">
				<div class="swiper-container">
					<div class="swiper-wrapper">
						<div class="swiper-slide">
							<img src="http://mall.s.maizuo.com/c32a841cc845c4d482d9d2fbd1c8404f.jpg" alt=""/>
						</div>
						<div class="swiper-slide">
							<img src="http://mall.s.maizuo.com/041182a65a83235af256ef47c0eca869.jpg" alt=""/>							
						</div>
					</div>
				</div>
				<ul class="shop-list">
					{
						this.state.List.map((item,index)=>{
							return(
								<li key={index}>
									<img src={item.imageSrc} alt=""/>
									<div class="shop-title">{item.name}</div>
								</li>
							)
						})
					}
				</ul>
				<div class="active-contain">
					{
						this.state.List1.map((item,index)=>{
							return(
								<div key={index} class="active-left">
									<img src={item.imageSrc} alt=""/>
								</div>
							)
						})
					}
				</div>
				<div class="subject">
					{
						this.state.List2.map((item,index)=>{
							return(
								<div key={index} class="subject-center">
									<div>
										<img src={item.imageSrc} alt=""/>
									</div>
									<div class="pic-list">
										<ul>
									{
										item.products.map((productsItem,productsIndex)=>{
											return(
												<li key={productsIndex} class="control-list">
													<div class="pic-area">
														<img src={productsItem.image} alt=""/>
													</div>
													<p class="control-name">{productsItem.name.substring(0,6)}</p>
													<p class="control-price">¥{productsItem.price/100}.00</p>
												</li>
											)
										})
									}
											<div>
												<span>全部</span>
											</div>
										</ul>
									</div>
								</div>
							)
						})
					}
				</div>
				<div>
					<h2>— 好货精选 —</h2>
				</div>
			</div>
		)
	}

	componentDidMount(){
		var mySwiper = new Swiper ('.swiper-container', {
			loop:true
		})        
	}

	componentWillMount(){
		shopService.getshopApi()
		.then((res)=>{
			console.log(res)
			this.setState({List:res.slice(0,8)})
			this.setState({List1:res.slice(10,12)})
			this.setState({List2:res.slice(12)})
		})
	}
}
