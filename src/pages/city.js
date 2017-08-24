import React , {Component} from 'react'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import cityService from '../services/cityService.js'

import '../css/city.css'

import store from '../store'

let myScroll = null
export default class City extends Component{
	constructor({history}){
		super();
		console.log(history)
		this.state = {
			className:'',
			history,
			LetterList:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
			CityList:[]
		}
		
	}
	render(){
		
		return(
		
			<ReactCSSTransitionGroup
				transitionName="example"
				 transitionAppear={true}
				 transitionAppearTimeout={500}
				 transitionEnter={false}
     			 transitionLeave={true}
     			 transitionLeaveTimeout={1000}>

			
				<div id="city" ref="box" class={"page " + this.state.className }>
					<div class="wrap">
						<div class="city-index-title">GPS定位你所在城市</div>
						<div class="city-item-detail">深圳</div>
						<div class="city-index-title">热门城市</div>
						<ul class="city-index-detail">
							<li onClick={this.cityAction.bind(this,'北京')}>北京</li>
							<li onClick={this.cityAction.bind(this,'上海')}>上海</li>
							<li onClick={this.cityAction.bind(this,'广州')}>广州</li>
							<li onClick={this.cityAction.bind(this,'深圳')}>深圳</li>
						</ul>
						<div class="city-index-title">按字母排序</div>

						<ul class="list-unstyled_1">
							{
								this.state.LetterList.map((item,index)=>{
									return(
										<li key={index} class="city-item-detail_1" onClick={this.btnAction.bind(this,index)}>
											{item}
										</li>
									)
								})
							}
						</ul>
						{
							this.state.LetterList.map((item,index)=>{
								
								return(
									<div key={index}>
										<div class="city-index-title" >{item}</div>
										<ul class="list-unstyled_2">
											{
												this.state.CityList.map((Cityitem,Cityindex)=>{
													if(Cityitem.pinyin.startsWith(item,0,1)){
														return(
															<li class="city-item-detail_2" key={Cityindex} onClick={this.cityAction.bind(this,Cityitem.name)}>
																{Cityitem.name}
															</li>
														)	
													}
												})
											}
										</ul>
									</div>
								)
								
							})
						}
					</div>
				</div>
			</ReactCSSTransitionGroup>
			
		)
	}
	
	//将要创建组件
	componentWillMount(){
		//请求数据
		cityService.getcityApi()
		.then((res)=>{
			console.log(res)
			this.setState({CityList:res})
		})
		
	}
	//点击每个所遍历的字母,index为其下标
	btnAction(index){
		var Top = document.getElementsByClassName('city-index-title')[index + 3].offsetTop;//每一个li的高度
		// console.log(Top)
		// console.log(this.refs.box)
		//运动到Top位置
		myScroll.scrollTo(0,-Top,500)
	}
	//创建完成
	componentDidMount(){
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
	//点击城市 首页显示该电机的城市 使用store全局
	cityAction(val){
		//修改全局数据
		store.dispatch({
			type:'changeCity',
			val:val
		})
		//400毫秒后以动画的形式返回首页
		this.setState({className:'leave'})
		setTimeout(() =>{
			// this.state.history.goBack()
			this.props.history.push('/')			
		}, 400);

	}
}
