import {
	TOGGLE_SIDEBAR,
	SET_NAV_TITLE,
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
