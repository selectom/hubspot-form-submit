import fetch from 'isomorphic-fetch'
import { stringify as queryString } from 'querystring'
import cookies from 'js-cookie'

async function hubspotFormSubmit(hubspotId, formId, data){

	// Get hubspot cookie
	let hutk = cookies.get('hubspotutk')
	if (!hutk) {
		console.log('hubspotutk cookie not found')
		return false
	}

	// Get data as an object
	if(typeof form !== 'object'){
		console.log('Input data must be an Element, FormData, or Object')
		return false
	}
	if(data instanceof Element){
		data = new FormData(data)
	}
	if(data instanceof FormData) {
		let result = {}
		for (let entry of data.entries()) {
			result[entry[0]] = entry[1]
		}
		data = result
	}

	// Create querystring
	let pageName = document.querySelector('title')
	pageName = pageName ? pageName.textContent : ''
	data = {
		...data,
		hs_context: JSON.stringify({
			hutk: hutk,
			pageUrl: window.location.href,
			pageName: pageName,
		}),
	}
	data = queryString(data)

	// Send data
	let url = `https://forms.hubspot.com/uploads/form/v2/${hubspotId}/${formId}`
	let options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			'Content-Length': data.length
		},
		body: data,
	}
	try {
		let res = await fetch(url, options)
	}
	catch (err) {
		console.log(err)
	}

	return true

}

export default hubspotFormSubmit