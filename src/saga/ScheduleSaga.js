import {all, call, fork, put, takeEvery, flush} from 'redux-saga/effects';

import {GET_ALL_SCHEDULE, GET_USER_SCHEDULE} from '../constants/Actions';

import { getSchedule , getUserSchedule } from '../api/apicalls';

import { getAllScheduleSuccess , getUserScheduleSuccess } from '../actions/index';


// Temporary remap response to dummy data
const temp = [
	{
		HHKAHMAD:[
			{
			    "endDate": "endDate",
			    "rotationID": "rotationID",
			    "startDate": "startDate",
			    "status": "pending"
		  	},
		  	{
			    "endDate": "endDate",
			    "rotationID": "rotationID",
			    "startDate": "startDate",
			    "status": "pending"
		  	},
		  	{
			    "endDate": "endDate",
			    "rotationID": "rotationID",
			    "startDate": "startDate",
			    "status": "pending"
		  	},
		  	{
			    "endDate": "endDate",
			    "rotationID": "rotationID",
			    "startDate": "startDate",
			    "status": "pending"
		  	},
		  	{
			    "endDate": "endDate",
			    "rotationID": "rotationID",
			    "startDate": "startDate",
			    "status": "pending"
		  	},
		  	{
			    "endDate": "endDate",
			    "rotationID": "rotationID",
			    "startDate": "startDate",
			    "status": "pending"
		  	},
		  	{
			    "endDate": "endDate",
			    "rotationID": "rotationID",
			    "startDate": "startDate",
			    "status": "pending"
		  	},
		  	{
			    "endDate": "endDate",
			    "rotationID": "rotationID",
			    "startDate": "startDate",
			    "status": "pending"
		  	},
		  	{
			    "endDate": "endDate",
			    "rotationID": "rotationID",
			    "startDate": "startDate",
			    "status": "pending"
		  	},
		  	{
			    "endDate": "endDate",
			    "rotationID": "rotationID",
			    "startDate": "startDate",
			    "status": "pending"
		  	},
		  	{
			    "endDate": "endDate",
			    "rotationID": "rotationID",
			    "startDate": "startDate",
			    "status": "pending"
		  	},
		  ],
	},
	{
		 CPSHEISH:[
		 	{
			    "endDate": "endDate",
			    "rotationID": "rotationID",
			    "startDate": "startDate",
			    "status": "pending"
		  	},
		  	{
			    "endDate": "endDate",
			    "rotationID": "rotationID",
			    "startDate": "startDate",
			    "status": "pending"
		  	},
		  	{
			    "endDate": "endDate",
			    "rotationID": "rotationID",
			    "startDate": "startDate",
			    "status": "pending"
		  	},
		  	{
			    "endDate": "endDate",
			    "rotationID": "rotationID",
			    "startDate": "startDate",
			    "status": "pending"
		  	},
		  	{
			    "endDate": "endDate",
			    "rotationID": "rotationID",
			    "startDate": "startDate",
			    "status": "pending"
		  	},
		  	{
			    "endDate": "endDate",
			    "rotationID": "rotationID",
			    "startDate": "startDate",
			    "status": "pending"
		  	},
		  	{
			    "endDate": "endDate",
			    "rotationID": "rotationID",
			    "startDate": "startDate",
			    "status": "pending"
		  	},
		  	{
			    "endDate": "endDate",
			    "rotationID": "rotationID",
			    "startDate": "startDate",
			    "status": "pending"
		  	},
		  	{
			    "endDate": "endDate",
			    "rotationID": "rotationID",
			    "startDate": "startDate",
			    "status": "pending"
		  	},
		  	{
			    "endDate": "endDate",
			    "rotationID": "rotationID",
			    "startDate": "startDate",
			    "status": "pending"
		  	},
		  	{
			    "endDate": "endDate",
			    "rotationID": "rotationID",
			    "startDate": "startDate",
			    "status": "pending"
		  	},
		  	{
			    "endDate": "endDate",
			    "rotationID": "rotationID",
			    "startDate": "startDate",
			    "status": "pending"
		  	},
		  ],
	}
];

const fetchAllScheduleAsync = async () => 
	await getSchedule()
		.then(response => {response.data=temp; return(response)}) // To be remove upon release
		.catch(error => error)

const fetchUserSchedule = async (userid) => 
	await getUserSchedule(userid)
		.then(response => response)
		.catch(error => error)

function* getAllScheduleAsync() {
	try {
		const response = yield call(fetchAllScheduleAsync)
		yield put(getAllScheduleSuccess(response.data, response)) 
	} catch (error) {

	}
}

function* getUserScheduleAsync({payload}) {
	const {userid} = payload
	try {
		const response = yield call (fetchUserSchedule, userid)
		yield put(getUserScheduleSuccess(response.data))
	} catch (error) {

	}

}

export function* getUserScheduleFork() {
	yield takeEvery(GET_USER_SCHEDULE, getUserScheduleAsync)
}

export function* getAllScheduleFork() {
	yield takeEvery(GET_ALL_SCHEDULE, getAllScheduleAsync)
}

export default function* rootSaga() {
	yield all([fork(getAllScheduleFork), fork(getUserScheduleFork)])
}