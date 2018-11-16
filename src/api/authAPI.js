import axios from 'axios';

import { baseUrl } from '../environment';

export const createNewUser = async (data) => {
	return (axios({
		method: 'POST',
		url: baseUrl+"user",
		data: data
	}))
}

export const getAllUsers = async () => {
	return (axios({
		method: 'GET',
		url: baseUrl+"user"
	}))
}

export const updateUser = async (userid, data) => {
	return (axios({
		method: 'PUT',
		url: baseUrl+"user/"+userid,
		headers: { "Access-Control-Allow-Origin": "*", },
		data: data
	}))
}

export const loginUser = async (usernm, pwd) => {
	return (axios({
		method: 'GET',
		url: baseUrl+"user/login",
		params: {
			username: usernm,
			password: pwd
		}
	}))
}