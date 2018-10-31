import {
	SET_DISPLAY_NAME,
	GET_DISPLAY_NAME,
	LOG_IN_USER,
	CREATE_USER,
	SET_USER_AUTH,
	GET_PROFILE_DATA,
	GET_PROFILE_DATA_SUCCESS
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

export const getProfileData = (data) => {
	return {
		type: GET_PROFILE_DATA,
		payload: data
	}
}

export const getProfileDataSuccess = (data) => {
	return {
		type: GET_PROFILE_DATA_SUCCESS,
		payload: data
	}
}