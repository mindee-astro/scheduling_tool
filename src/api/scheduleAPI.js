import axios from 'axios';

import { baseUrl } from '../environment';

export const getSchedule = async () => {
	return (axios({
		method: 'GET',
		url: baseUrl+"schedule",
	}))
}

export const getUserSchedule = async (userid) => {
	return (axios({
		method: 'GET',
		url: baseUrl+"schedule/"+userid,
	}))
}