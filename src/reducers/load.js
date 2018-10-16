const INIT_STATE = {
	navbar: true,
	loggedIn: false,
	navtext: "test",
	loggedIn: "admin"
}

export default (state=INIT_STATE, action)=>{
	switch(action.type){
		default:
			return state
	}
}