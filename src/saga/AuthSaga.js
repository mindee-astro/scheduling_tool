import {all, call, fork, put, takeEvery, flush} from 'redux-saga/effects';

import { LOG_IN_USER, GET_ALL_USER, UPDATE_USER, CREATE_USER, LOG_OUT_USER } from '../constants/Actions';

import { loginUserSuccess, getAllUserSuccess } from '../actions/index';

import { loginUser, getAllUsers, updateUser, createNewUser, logoutUser } from '../api/apicalls'

const sendLogOutUser = async () => 
	await logoutUser()
		.then(response=>response)
		.catch(error=>error);

const createUser = async (data) => 
	await createNewUser(data)
		.then(response=>response)
		.catch(error=>{});

const sendUpdateUser = async (userid, data) => 
	await updateUser(userid, data)
		.then(response=>response)
		.catch(error=>{});


const fetchAllUsers = async () => 
	await getAllUsers()
		.then(response=>response)
		.catch(error=>{});


const fetchLoginUser = async (username, password) => 
	await loginUser(username, password)
		.then(response=>response)
		.catch(error=>{loginUserSuccess(false)});

function* logOutUserAsync(){
	const response = yield call(sendLogOutUser)
	yield put(loginUserSuccess(false))
}

function* createUserAsync({payload}) {
	const {data} = payload
	const response = yield call(createUser, data)
}

function* updateUserAsync({payload}) {
	const {userid, data} = payload
	const response = yield call(sendUpdateUser, userid, data)
}

function* getAllUsersAsync() {
	const response = yield call(fetchAllUsers)
	yield put(getAllUserSuccess(response.data))
}

function* loginUserAsync({payload}) {
	const {username, password} = payload
	const response = yield call(fetchLoginUser, username, password)
	yield put(loginUserSuccess(true))

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