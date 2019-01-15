import axios from 'axios';

import { baseUrl } from '../environment';

import ResponseSnackbar from '../components/ResponseSnackbar';

const instance = axios.create({

    validateStatus: function (status) {
        return status == 200;
    }
});

export const createNewUser = async (data) => {
	return (instance({
		method: 'POST',
		url: baseUrl+"user",
		data: data,
	}))
}

export const getAllUsers = async () => {
	return (instance({
		method: 'GET',
		url: baseUrl+"user"
	}))
}

export const updateUser = async (userid, data) => {
	return (instance({
		method: 'PUT',
		url: baseUrl+"user/"+userid,
		data: data
	}))
}

export const loginUser = async (usernm, pwd) => {
	return (axios({
		method: 'GET',
		url: baseUrl+"user/login",
		data: {
			"username": usernm,
			"password": pwd
		}
	}))
}

export const logoutUser = async () => {
	return (axios({
		method: 'POST',
		url: baseUrl+"user/logout"
	}))
}