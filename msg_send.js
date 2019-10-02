import axios from 'axios'

function logError(data) {
	var postData = {
		data: data
	};
	let axiosConfig = {
		baseURL: 'http://172.30.10.72:81', // fcking  nuxt
		headers: {
			'Content-Type': 'application/json;charset=UTF-8',
			"Access-Control-Allow-Origin": "*",
		}
	};
	
	axios.post('/', postData, axiosConfig)
	.then((res) => {
		console.log("RESPONSE RECEIVED: ", res);
	})
	.catch((err) => {
		throw new Error(err);
	})
  }

  module.exports = { logError };