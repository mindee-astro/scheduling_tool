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

export const addRotation = (data) => {
	return {
		type: ADD_ROTATION,
		payload: data
	}
}

export const addRotationSuccess = () => {
	return {
		type: ADD_ROTATION_SUCCESS
	}
}

export const getAllRotations = () => {
	return {
		type: GET_ALL_ROTATION
	}
}

export const getAllRotationsSuccess = (data) => {
	return {
		type: GET_ALL_ROTATION_SUCCESS,
		payload: data
	}
}

export const updateRotation = (rotationid, data) => {
	return {
		type: UPDATE_ROTATION,
		payload: {rotationid, data}
	}
}

export const updateRotationSuccess = () => {
	return {
		type: UPDATE_ROTATION_SUCCESS
	}
}

export const removeRotation = (rotationid) => {
	return {
		type: REMOVE_ROTATION,
		payload: rotationid
	}
}

export const removeRotationSuccess = () => {
	return {
		type: REMOVE_ROTATION_SUCCESS
	}
}