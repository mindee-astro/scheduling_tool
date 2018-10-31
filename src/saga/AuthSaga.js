import {all, call, fork, put, takeEvery, flush} from 'redux-saga/effects';

import {test} from '../api/apicalls';

import { GET_PROFILE_DATA } from '../constants/Actions';

import {getProfileDataSuccess} from '../actions/index';

import {testApi} from '../api/apicalls'


function* testAsync({payload}){
	yield call(testApi("Test"))
}

export function* testingfork() {
	yield takeEvery(GET_PROFILE_DATA, testAsync)
}

export default function* rootSaga() {
	yield all([fork(testingfork)])
}