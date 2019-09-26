import axios from 'axios'

function logError(data) {
	var postData = {
	  data: data
	};
  
	let axiosConfig = {
	  headers: {
		  'Content-Type': 'application/json;charset=UTF-8',
		  "Access-Control-Allow-Origin": "*",
	  }
	};
  
	axios.post('localhost', postData, axiosConfig)
	.then((res) => {
	  console.log("RESPONSE RECEIVED: ", res);
	})
	.catch((err) => {
	  throw new Error(err);
	})
  }

  module.exports = { logError };