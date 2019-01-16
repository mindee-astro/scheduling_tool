import {
	TOGGLE_SIDEBAR,
	SET_NAV_TITLE,
	SET_NOTIFICATION_SNACKBAR,
	SET_DIALOG,
	SET_DIALOG_ACTION_BUTTON_FLAG,
	SET_RESPONSE_SNACKBAR,
} from '../constants/Actions';

export const toggleSideBar = (boolean) => {
	return {
		type: TOGGLE_SIDEBAR,
		payload: boolean
	}
}

export const setNavTitle = (navtitle) => {
	return{
		type: SET_NAV_TITLE,
		payload: navtitle
	}
}

export const setNotificationSnackbar = (obj) => {
	return{
		type: SET_NOTIFICATION_SNACKBAR,
		payload: obj
	}
}


export const setPopup = (obj) => {
	return{
		type: SET_DIALOG,
		payload: obj
	}
}

export const setDialogActionButton = (boolean) => {
	return{
		type: SET_DIALOG_ACTION_BUTTON_FLAG,
		payload: boolean
	}
}

export const setResponseSnackbar = (obj) => {
	return{
		type: SET_RESPONSE_SNACKBAR,
		payload: obj
	}
}

