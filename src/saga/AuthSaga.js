import {all, call, fork, put, takeEvery, flush} from 'redux-saga/effects';

import { LOG_IN_USER, GET_ALL_USER, UPDATE_USER } from '../constants/Actions';

import { loginUserSuccess, getAllUserSuccess } from '../actions/index';

import { loginUser, getAllUsers, updateUser } from '../api/apicalls'

const sendUpdateUser = async (userid, data) => 
	await updateUser(userid, data)
		.then(response=>response)
		.catch(error=>error)


const fetchAllUsers = async () => 
	await getAllUsers()
		.then(response=>response)
		.catch(error=>error)


const fetchLoginUser = async (username, password) => 
	await loginUser(username, password)
		.then(response=>response)
		.catch(error=>error)


function* updateUserAsync({payload}) {
	const {userid, data} = payload
	try {
		const response = yield call(sendUpdateUser, userid, data)
		yield (console.log(response))
	} catch(error) {

	}
}

function* getAllUsersAsync() {
	try {
		const response = yield call(fetchAllUsers)
		yield put(getAllUserSuccess(response.data))
	} catch (error) {

	}
}

function* loginUserAsync({payload}) {
	const {username, password} = payload
	try {
		const response = yield call(fetchLoginUser, username, password)
		yield put(loginUserSuccess(true))
	} catch(error) {
		yield put(loginUserSuccess(false))
	}

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
	yield all([fork(loginUserFork), fork(getAllUsersFork), fork(updateUserFork)])
}