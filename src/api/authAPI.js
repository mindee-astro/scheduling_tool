import axios from 'axios';

export const testApi = () => async(dispatch) => {
	try {
        let { data } = await axios.get("https://jsonplaceholder.typicode.com/posts/42")
        dispatch(console.log(data))
    } catch(error) {
        dispatch(console.log(error));
    }
}