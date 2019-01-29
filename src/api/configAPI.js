import axios from 'axios';

import { baseUrl, devUrl, apiKey } from '../environment';

const instance = axios.create({
	headers: {
		'x-api-key': apiKey
	},
});

export const addRotation = async (data) => {
	return (instance({
		method: 'POST',
		url: devUrl+"/config",
		data: data
	}))
}

export const getAllRotations = async () => {
	return (instance({
		method: 'GET',
		url: devUrl+"/config"
	}))
}

export const updateRotation = async (rotationID, data) => {
	return (instance({
		method: 'PUT',
		url: devUrl+"/config",
		data: data
	}))
}

export const removeRotation = async (rotationID) => {
	return (instance({
		method: 'DELETE',
		url: devUrl+"/config/"+rotationID
	}))
}