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

const INIT_STATE = {
	rotations: []
}

export default (state=INIT_STATE, action)=>{
	switch(action.type){
		case ADD_ROTATION:
			return {
				...state
			}

		case ADD_ROTATION_SUCCESS: 
			return {
				...state
			}

		case GET_ALL_ROTATION_SUCCESS:
			return {
				...state,
				rotations: action.payload
			}

		case REMOVE_ROTATION_SUCCESS:
			return {
				...state
			}

		default: 
			return state
	}


}