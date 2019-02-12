import axios from 'axios';

import { baseUrl, devUrl, apiKey } from '../environment';

export const getSchedule = async () => {
	return (axios({
		method: 'GET',
		url: devUrl+"/schedule?scheduleId=workingSchedule",
		headers: {'x-api-key': apiKey}
	}))
}

export const getUserSchedule = async (userid) => {
	return (axios({
		method: 'GET',
		url: baseUrl+"schedule/"+userid,
	}))
}