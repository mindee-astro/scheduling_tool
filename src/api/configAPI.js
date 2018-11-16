import axios from 'axios';

import { baseUrl } from '../environment';

export const addRotation = async (data) => {
	return (axios({
		method: 'POST',
		url: baseUrl+"config",
		data: data
	}))
}

export const getAllRotations = async () => {
	return (axios({
		method: 'GET',
		url: baseUrl+"config"
	}))
}

export const updateRotation = async (rotationID, data) => {
	return (axios({
		method: 'PUT',
		url: baseUrl+"config/"+rotationID,
		data: data
	}))
}

export const removeRotation = async (rotationID) => {
	return (axios({
		method: 'DELETE',
		url: baseUrl+"config/"+rotationID
	}))
}