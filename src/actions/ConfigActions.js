import {
	ADD_ROTATION,
	ADD_ROTATION_SUCCESS,
	GET_ALL_ROTATION,
	GET_ALL_ROTATION_SUCCESS,
	UPDATE_ROTATION,
	UPDATE_ROTATION_SUCCESS,
	REMOVE_ROTATION,
	REMOVE_ROTATION_SUCCESS
} from '../constants/Actions';

export const addRotation = () => {
	return {
		type: ADD_ROTATION,
		payload: {}
	}
}