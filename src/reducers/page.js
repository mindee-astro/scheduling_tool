import {
	TOGGLE_SIDEBAR,
	SET_NAV_TITLE,
	SET_NOTIFICATION_SNACKBAR,
	SET_DIALOG,
	SET_DIALOG_ACTION_BUTTON_FLAG,
	SET_RESPONSE_SNACKBAR,	
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
	},
	PopupIsOpen: false,
	PopupmessageText: "",
	PopupbuttonText: "",
	PopupTitle: "",
	additionalButtonFlag: false,
	PopupcloseButtonText: "dismiss",
	responseSnackbar: {
		isOpen: false,
		message: {},
		type: {},
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


		case SET_DIALOG: {
			return{
				...state,
				PopupIsOpen: action.payload.isOpen,
				PopupmessageText: action.payload.messageText,
				PopupTitle: action.payload.title,
				PopupcloseButtonText: action.payload.closeButtonText,
				PopupbuttonText: action.payload.additionalButtonText,
			}
		}

		case SET_DIALOG_ACTION_BUTTON_FLAG: {
			return{
				...state,
				additionalButtonFlag: action.payload,
				PopupIsOpen: false,
				PopupmessageText: "Null",
				PopupTitle: "Null",
				PopupcloseButtonText: "Null",
				PopupbuttonText: "Null",
			}
		}

		case SET_RESPONSE_SNACKBAR: {
			return{
				...state,
				responseSnackbar: action.payload
			}
		}

		default:
			return state
	}
}