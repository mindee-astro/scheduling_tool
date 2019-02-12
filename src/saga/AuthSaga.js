import {all, call, fork, put, takeEvery, flush} from 'redux-saga/effects';

import { LOG_IN_USER, GET_ALL_USER, UPDATE_USER, CREATE_USER, LOG_OUT_USER } from '../constants/Actions';

import { loginUserSuccess, getAllUserSuccess, setResponseSnackbar, setPopup } from '../actions/index';

import { loginUser, getAllUsers, updateUser, createNewUser, logoutUser } from '../api/apicalls'

const sendLogOutUser = async () => 
	await logoutUser()
		.then(response=>response)
		.catch(error=>{
			return Promise.reject(error)
		});

const createUser = async (data) => 
	await createNewUser(data)
		.then(response=>response)
		.catch(error=>{
			return Promise.reject(error)
		});

const sendUpdateUser = async (userid, data) => 
	await updateUser(userid, data)
		.then(response=>response)
		.catch(error=>{
			return Promise.reject(error)
		});


const fetchAllUsers = async () => 
	await getAllUsers()
		.then(response=>response)
		.catch(error=>{
			return Promise.reject(error)
		});


const fetchLoginUser = async (username, password) => 
	await loginUser(username, password)
		.then(response=>response)
		.catch(error=>{
			return Promise.reject(error)
		});

function* logOutUserAsync(){
	try { 
		//const response = yield call(sendLogOutUser)
		yield put(loginUserSuccess(false))
		yield put(setPopup({
			isOpen: true,
			title: "Logged Out",
			closeButtonText: "Dismiss",
			messageText: "You are currently logged out, please log in again to access the page"
		}))
		yield put(setResponseSnackbar({
			isOpen: true,
			message: "Logged Out",
			type: "warning"
		}))
	} catch (error) {
		yield put(setResponseSnackbar({
			isOpen: true,
			message: error.response.status+" "+error.response.statusText,
			type: "error"
		}))
	}
}

function* createUserAsync({payload}) {
	const {data} = payload
	try{
		const response = yield call(createUser, data)
		yield put(setResponseSnackbar({
			isOpen: true,
			message: "Created User",
			type: "success"
		}))
	} catch (error) {
		yield put(setResponseSnackbar({
			isOpen: true,
			message: error.response.status+" "+error.response.statusText,
			type: "error"
		}))
	}
}

function* updateUserAsync({payload}) {
	const {userid, data} = payload
	try{
		const response = yield call(sendUpdateUser, userid, data)
		yield put(setResponseSnackbar({
			isOpen: true,
			message: "Updated User",
			type: "success"
		}))
	} catch (error) {
		yield put(setResponseSnackbar({
			isOpen: true,
			message: error.response.status+" "+error.response.statusText,
			type: "error"
		}))
	}
}

function* getAllUsersAsync() {
	try {
		const response = yield call(fetchAllUsers)
		yield put(getAllUserSuccess(response.data))
		yield put(setResponseSnackbar({
			isOpen: true,
			message: "Fetched Users",
			type: "success"
		}))
	} catch (error) {
		yield put(setResponseSnackbar({
			isOpen: true,
			message: error.response.status+" "+error.response.statusText,
			type: "error"
		}))
	}
}

function* loginUserAsync({payload}) {
	const {username, password} = payload
	try { 
		//const response = yield call(fetchLoginUser, username, password)
		yield put(loginUserSuccess(true))
		yield put(setResponseSnackbar({
			isOpen: true,
			message: "Logged In",
			type: "success"
		}))
	} catch (error) {
		yield put(setResponseSnackbar({
			isOpen: true,
			message: error.response.status+" "+error.response.statusText,
			type: "error"
		}))
	}

} 

export function* logOutUserFork() {
	yield takeEvery( LOG_OUT_USER, logOutUserAsync )
}

export function* createUserFork() {
	yield takeEvery( CREATE_USER, createUserAsync )
}

export function* updateUserFork() {
	yield takeEvery( UPDATE_USER, updateUserAsync )
}

export function* getAllUsersFork() {
	yield takeEvery( GET_ALL_USER, getAllUsersAsync )
}

export function* loginUserFork() {
	yield takeEvery( LOG_IN_USER, loginUserAsync)
}

export default function* rootSaga() {
	yield all([fork(loginUserFork), fork(getAllUsersFork), fork(updateUserFork), fork(createUserFork), fork(logOutUserFork)])
}