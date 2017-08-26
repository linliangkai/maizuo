import React , {Component} from 'react'

import '../css/cinema.css'

import CinemaService from '../services/cinemaService.js'

var myScroll = null ;

export default class Cinema extends Component{
	constructor(){
		super();
		this.state = {
			List:[],
			isiscroll:true
		}
	}
	render(){
		let top = this.state.isiscroll ? 'cpn-back-to-top-hide' : '';
		return(
			<div class="page" id="cinema" ref="box1">
				<div class="wrap">
					{
						this.state.List.map((item,index)=>{
							let obj = index == 0 ? {display:'block'} : {}
							return(
								<div key={index}>
									<div onClick={this.btnAction.bind(this,index)} class="title">{item.name}</div>
									<ul class="cinema-list" style={obj}>
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
				<div class={ "cpn-back-to-top "+ top}>
					<div onClick={this.toTopAction.bind(this)} class="circle">
						<span class="icon-top iconfont"></span>
					</div>
				</div>	
			</div>
		)
	}
	
	componentWillMount(){
		//请求影片数据
		CinemaService.getcinemaApi()
		.then((res)=>{
			// console.log(res)
			this.setState({List:res})
			myScroll.refresh();
		})
		
	}
	btnAction(index){
		if(document.getElementsByClassName('cinema-list')[index].style.display == "block"){
			document.getElementsByClassName('cinema-list')[index].style.display="none"
			myScroll.refresh();
		}else{
			document.getElementsByClassName('cinema-list')[index].style.display="block"
			myScroll.refresh();
		}
	}
	
	componentDidMount(){
		myScroll = new IScroll(this.refs.box1, {
				bounce: false, //开启弹簧效果
				click: true, //在iscroll中，为了性能优化，没有将点击事件传递下去
				tap: true, //tap事件相当于移动端的click
				scrollY: true,//Y轴是否可以滚动
				scrollX: false,//x轴是否可以滚动
				scrollbars: true, //是否显示滚动条
				fadeScrollbars: true, //滚动时才显示滚动条
				probeType: 3
			});

			myScroll.on('scroll', ()=>{
			// console.log(123)
			myScroll.refresh()
			// console.log(myScroll.y)
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
