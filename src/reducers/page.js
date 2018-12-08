import {
	TOGGLE_SIDEBAR,
	SET_NAV_TITLE,
	SET_NOTIFICATION_SNACKBAR,
} from '../constants/Actions';

const INIT_STATE = {
	navbar: true,
	loggedIn: false,
	sidebar: false,
	theme: "default",
	navTitle: "Home",
	notificationSnackbar: {
		isOpen: false,
		message: {}
	}
}

export default (state=INIT_STATE, action)=>{
	switch(action.type){
		case TOGGLE_SIDEBAR : {
			return{
				...state,
				sidebar: action.payload,
			}
		}

		case SET_NAV_TITLE: {
			return{
				...state,
				navTitle: action.payload
			}
		}

		case SET_NOTIFICATION_SNACKBAR: {
			return{
				...state,
				notificationSnackbar: action.payload
			}
		}

		default:
			return state
	}
}