import {all, call, fork, put, takeEvery, flush} from 'redux-saga/effects';

import { ADD_ROTATION, GET_ALL_ROTATION, UPDATE_ROTATION, REMOVE_ROTATION } from '../constants/Actions';

import { addRotationSuccess, getAllRotationsSuccess } from '../actions/index';

import { getAllRotations, addRotation, updateRotation, removeRotation } from '../api/apicalls';

const sendRemoveRotation = async (rotationid) =>
	await removeRotation(rotationid)
		.then(response=>response)
		.catch(error=>{})

const sendUpdateRotation = async (rotationid, data) => 
	await updateRotation(rotationid, data)
		.then(response=>response)
		.catch(error=>{})

const sendAddRotation = async (data) => 
	await addRotation(data)
		.then(response=>response)
		.catch(error=>{})

const fetchAllRotations = async () =>
	await getAllRotations()
		.then(response=>response)
		.catch(error=>{})

function* removeRotationAsync({payload}) {
	const rotationid = payload
	const response = yield call( sendRemoveRotation, rotationid )
}

function* updateRotationAsync({payload}) {
	const {rotationid, data} = payload
	const response = yield call( sendUpdateRotation, rotationid, data )
}

function* addRotationAsync({payload}) {
	const data = payload
	const response = yield call( sendAddRotation, data )
}

function* getAllRotationsAsync() {
	const response = yield call( fetchAllRotations )
	yield put(getAllRotationsSuccess(response.data))
}

export function* removeRotationFork() {
	yield takeEvery( REMOVE_ROTATION, removeRotationAsync )
}

export function* updateRotationFork() {
	yield takeEvery( UPDATE_ROTATION, updateRotationAsync )
}

export function* addRotationFork() {
	yield takeEvery( ADD_ROTATION, addRotationAsync )
}

export function* getAllRotationsFork() {
	yield takeEvery( GET_ALL_ROTATION, getAllRotationsAsync )
}

export default function* rootSaga() {
	yield all([fork(getAllRotationsFork), fork(addRotationFork), fork(updateRotationFork), fork(removeRotationFork)])
}