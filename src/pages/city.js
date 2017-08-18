import React , {Component} from 'react'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class City extends Component{
	constructor({history}){
		super();
		console.log(history)
		this.state = {
			className:'',
			history
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
				<div id="city" class={"page " + this.state.className}>
					
					<button onClick={this.selectAction.bind(this,'北京')}>北京</button>
					<button onClick={this.selectAction.bind(this,'上海')}>上海</button>
					<button onClick={this.selectAction.bind(this,'深圳')}>深圳</button>
					<button onClick={this.selectAction.bind(this,'广州')}>广州</button>

				</div>
			</ReactCSSTransitionGroup>
			
		)
	}
	
	selectAction(){
		this.setState({className:'leave'})
		setTimeout(() =>{
			this.state.history.goBack()
		}, 400);
	}
}
