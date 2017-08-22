import React , {Component} from 'react'

import '../css/card.css'

export default class Card extends Component{
	constructor(){
		super();
		this.state = {
			isshow:true,
			isShow:false
		}
		
	}
	render(){
		let style1 = { display : this.state.isshow ? 'block' : 'none' }
		let style2 = { display : this.state.isShow ? 'block' : 'none' }
		return(
			<div class="card">
				<ul class="list">
					<li class="active" onClick={this.btnAction.bind(this)}>卖座卡</li>
					<li onClick={this.btn1Action.bind(this)}>电子卖座卡</li>
				</ul>
				<div class="card_query_form">
					<from style={style1}>
						<span>卡号：</span><input type="text" placeholder="请输入卡号"/>
						<div class="input-bg"></div>
						<span>密码：</span><input type="text" placeholder="请输入密码"/>
						<div class="input-bg"></div>
						<button class="submit">查询</button>				
					</from>
					<from style={style2}>
						<span>卡号：</span>
						<input type="text" placeholder="请输入15位电子卖座卡号"/>
						<div class="input-bg"></div>
						<button class="submit">查询</button>			
					</from>
				</div>
			</div>
		)
	}
	
	btnAction(){
		document.getElementsByTagName('li')[0].className = 'active'
		document.getElementsByTagName('li')[1].className = ''

		this.setState({isshow:true})
		this.setState({isShow:false})
	}

	btn1Action(){
		document.getElementsByTagName('li')[0].className = ''
		document.getElementsByTagName('li')[1].className = 'active'

		this.setState({isshow:false})
		this.setState({isShow:true})
	}
}
