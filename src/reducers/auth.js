import {
	SET_DISPLAY_NAME,
	GET_DISPLAY_NAME,
	LOG_IN_USER,
	CREATE_USER,
	SET_USER_AUTH,
	GET_PROFILE_DATA_SUCCESS
} from '../constants/Actions';

const INIT_STATE = {
	username: "Dummy DATA",
	displayname: "Dummy DATA",
	joindate: "DD/MM/YYYY",
	mentor: "Dummy DATA",
	accesslevel: "",
	email: "DummyDATA@astro.com.my",
	mentoremail: "DummyDATA@astro.com.my",
	data: ""
}

export default (state=INIT_STATE, action)=>{
	switch(action.type){
		case SET_DISPLAY_NAME:
			return {
				...state,
				displayname: action.payload
			}
		case LOG_IN_USER:
			return {
				...state,
				displayname: action.payload.displayname,
				username: action.payload.username,
				joindate: action.payload.joindate,
				accesslevel: action.payload.accesslevel,
				mentor: action.payload.mentor,
				mentoremail: action.payload.mentoremail,
				email: action.payload.email
			}
		case SET_USER_AUTH:
			return {
				...state,
				accesslevel: action.payload
			}

		case GET_PROFILE_DATA_SUCCESS:
			return {
				...state,
				data: action.payload
			}
			

		default:
			return state
	}
}