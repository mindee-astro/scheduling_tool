import {
	GET_ALL_SCHEDULE,
	GET_ALL_SCHEDULE_SUCCESS,
	GET_USER_SCHEDULE,
	GET_USER_SCHEDULE_SUCCESS,
} from '../constants/Actions';

export const getAllSchedule = () => {
	return {
		type: GET_ALL_SCHEDULE
	}
}

export const getAllScheduleSuccess = (data) => {
	return {
		type: GET_ALL_SCHEDULE_SUCCESS,
		payload: {
			schedule: data
		}
	}
}

export const getUserSchedule = (userid) => {
	return {
		type: GET_USER_SCHEDULE,
		payload: {userid}
	}
}

export const getUserScheduleSuccess = (data) => {
	return {
		type: GET_USER_SCHEDULE_SUCCESS,
		payload: data
	}
}