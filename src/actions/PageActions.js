import {
	TOGGLE_SIDEBAR,
	SET_DISPLAY_NAME,
	SET_NAV_TITLE,
} from '../constants/Actions';

export const toggleSideBar = (boolean) => {
	return {
		type: TOGGLE_SIDEBAR,
		payload: boolean
	}
}

export const updatedisplayName = (display_name) => {
	return {
		type: SET_DISPLAY_NAME,
		payload: display_name
	}
}

export const setNavTitle = (navtitle) => {
	return{
		type: SET_NAV_TITLE,
		payload: navtitle
	}
}
