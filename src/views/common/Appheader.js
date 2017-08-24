import React , {Component} from 'react'

import {Link} from 'react-router-dom'
import store from '../../store'

export default class AppHeader extends Component{
	constructor(){
		super();
		this.state ={
			city:store.getState().city
		}
	}
	render(){
		return(
			<header class="app-header">
				<div class="icon-menu iconfont" onClick={this.menuAction.bind(this)}></div>
				<h1 class="toolbar-title">{this.props.title}</h1>
				<Link to="/city-list" class="city icon-arrow-down iconfont">{this.state.city}</Link>
				<Link to="/me" class="icon-person iconfont"></Link>
			</header>
		)
	}
	
	menuAction(){
		this.props.menuHandle()
	}
	componentWillMount(){
		store.subscribe(()=>{
			this.setState({city:store.getState().city})
		})
	}
}
