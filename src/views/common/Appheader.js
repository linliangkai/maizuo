import React , {Component} from 'react'

import {Link} from 'react-router-dom'

export default class AppHeader extends Component{
	render(){
		return(
			<header class="app-header">
				<div class="icon-menu iconfont" onClick={this.menuAction.bind(this)}></div>
				<h1 class="toolbar-title">{this.props.title}</h1>
				<Link to="/city-list" class="city icon-arrow-down iconfont">深圳</Link>
				<Link to="/me" class="icon-person iconfont"></Link>
			</header>
		)
	}
	
	menuAction(){
		this.props.menuHandle()
	}
}
