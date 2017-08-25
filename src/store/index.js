import {createStore } from 'redux'

let reducer = function(state,action){
	// console.log(state)
	// console.log(action)
	if (state == null) {
		state = {
			//初始值为深圳
			city:'深圳',
			isshow:true,
			isShow:false
		}
	}
	
	if (action.type == 'changeCity') {
		state.city = action.val
	}
	
	if (action.type == 'change') {
		state.isshow = action.isshow
		state.isShow = action.isShow
	}
	
	// console.log(state)
	return state
}

export default createStore(reducer)

