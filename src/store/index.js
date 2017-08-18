import {createStore } from 'redux'

let reducer = function(state,action){
	console.log(state)
	console.log(action)
	
	if (state == undefined) {
		state = {
			username:'张三',
			password:'123456'
		}
	}
	
	if (action.type == 'changename') {
		state.username = action.val
	}
	
	console.log(state)
	return state
}

export default createStore(reducer)

