import React , {Component} from 'react'
import { BrowserRouter , Route} from 'react-router-dom'

import SliderBar from './views/common/SliderBar.js'
import Appheader from './views/common/Appheader.js'

import Home from './pages/Home.js'
import Movies from './pages/Movies.js'
import Cinema from './pages/cinema.js'
import Shop from './pages/shop.js'
import Me from './pages/me.js'
import Card from './pages/card.js'
import City from './pages/city.js'

import './css/app.css'

export default class App extends Component{
	constructor(){
		super();
		
		this.state = {
			showBar : false,
			headerTitle:'卖座电影'
		}
	}
	render(){
		return(
			<BrowserRouter>
				<div>
					<Appheader title={this.state.headerTitle} menuHandle={this.menuHandle.bind(this)}></Appheader>
					
					
					<Route path="/" render={({history,location})=>{
						return <SliderBar 
								history={history} 
								show={this.state.showBar}
								pathname={location.pathname}
								hideHandle={this.menuHandle.bind(this)}
								></SliderBar>
					}}/>
					<Route path="/" exact component={Home}/>
					<Route path="/movies" component={Movies}/>
					<Route path="/cinema" component={Cinema}/>
					<Route path="/shop" component={Shop}/>
					<Route path="/me" component={Me}/>
					<Route path="/card" component={Card}/>
					<Route path="/city-list" component={City}/>
				</div>
			</BrowserRouter>
		)
	}
	
	menuHandle(headerTitle){
		console.log(headerTitle)
		this.setState({showBar: !this.state.showBar})
		if (headerTitle) {
			this.setState({headerTitle})
		}
	}
	changePage(){
		this.setState({showBar: false})
	}
}
