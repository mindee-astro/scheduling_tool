import {
	TOGGLE_SIDEBAR,
	SET_DISPLAY_NAME,
	SET_NAV_TITLE,
} from '../constants/Actions';

const INIT_STATE = {
	navbar: true,
	loggedIn: false,
	sidebar: false,
	theme: "default",
	displayName: "",
	navTitle: ""
}

export default (state=INIT_STATE, action)=>{
	switch(action.type){
		case TOGGLE_SIDEBAR : {
			return{
				...state,
				sidebar: action.payload,
			}
		}

		case SET_DISPLAY_NAME: {
			return{
				...state,
				displayName: action.payload,
			}
		}

		case SET_NAV_TITLE: {
			return{
				...state,
				navTitle: action.payload
			}
		}

		default:
			return state
	}
}