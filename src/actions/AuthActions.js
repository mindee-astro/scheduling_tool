import {
	SET_DISPLAY_NAME,
	GET_DISPLAY_NAME,
	LOG_IN_USER,
	CREATE_USER,
	SET_USER_AUTH,
} from '../constants/Actions';

export const setDisplayName = (name) => {
	return {
		type: SET_DISPLAY_NAME,
		payload: name
	}
}

export const setUserAuth = (authlevel) => {
	return {
		type: SET_USER_AUTH,
		payload: authlevel
	}
}
