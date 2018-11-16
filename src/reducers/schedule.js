import {
	GET_ALL_SCHEDULE_SUCCESS,
	GET_USER_SCHEDULE_SUCCESS,
} from '../constants/Actions'


const INIT_STATE = {
	allSchedule: {},
	userSchedule: {}
}

export default (state=INIT_STATE, action) => {
	switch(action.type){
		case GET_ALL_SCHEDULE_SUCCESS:
			return {
				...state,
				allSchedule: action.payload.schedule
			}

		case GET_USER_SCHEDULE_SUCCESS:
			return {
				...state,
				userSchedule: action.payload,
			}

		default:
			return state
	}
}