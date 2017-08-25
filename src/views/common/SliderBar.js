import React , {Component} from 'react'
import {Link} from 'react-router-dom'

import siderBarInfo from '../../services/siderBarInfo.js'
import store from '../../store/'
export default class SilderBar extends Component{
	constructor(){
		super()
		
	}
	render(){
		
		let SliderBarStyle = {
			transform : this.props.show ? 'none' : 'translateX(-101%)'
		}
		let Coverstyle = {
			background : this.props.show ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0)",
			display:this.props.show ? "block" : "none"
		}
		let data = this.props.pathname === '/shop' ? siderBarInfo.shopSilderBarData : siderBarInfo.homeSilderBarData;
		return(
			<div>
				<div class="cover" style={Coverstyle} onClick={this.hide.bind(this)}></div>
				<nav class="slider-bar"  style={SliderBarStyle}>
					{
						data.map((item,index)=>{
							return <a key={index} onClick={this.goPage.bind(this,item)}>{item.title}</a>
						})
					}
				</nav>
			</div>
		)
	}
	
	goPage(item){
		// console.log(this.props.history)
		// console.log(item.path)
		if(item.path=='/movies'){
			store.dispatch({
				type:'change',
				isshow:true,
				isShow:false
			})
			this.props.history.push(item.path)
		}
		this.props.history.push(item.path)
		this.props.hideHandle(item.header)
	}
	hide(){
		this.props.hideHandle()
	}
}
