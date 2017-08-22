import React , {Component} from 'react'

import '../css/me.css'

export default class Me extends Component{
	constructor(){
		super();
		
	}
	render(){
		return(
			<div class="me">
				<from>
					<input type="text" placeholder="输入手机号/邮箱"/>
					<div class="input-bg"></div>
					<input type="text" placeholder="输入密码/验证码"/>
					<div class="input-bg"></div>
					<button class="submit">登录</button>				
				</from>
			</div>
		)
	}
	
}
