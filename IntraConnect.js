//trying a few methods to connect to the Intra.
var UID = "SetYoursHere"
var SECRET = "SetYoursHere"

// //https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// fetch('https://api.intra.42.fr/v2/project_data')
//   .then((response) => {
//     return response.json();
//   })
//   .then((myJson) => {
//     console.log(myJson);
//   });


// From the JSO Documentation =============================
// Initialization
// api.intra.42.fr refused to connect

// let config = {
//     response_type: 'code',
//     client_id: UID,
// 	client_secret: SECRET,
// 	token: "https://api.intra.42.fr/oauth/token",
//     authorization: "https://api.intra.42.fr/oauth/authorize",
//     scopes: { require: ["projects"]}
// }
// let client = new jso.JSO(config)
// client.callback()

const getToken = () => call('https://api.intra.42.fr/oauth/token', 'POST', {
  grant_type: 'client_credentials',
  client_id: UID,
  client_secret: SECRET,
}, true);

if (getToken !== null) {
	console.log("I got the token: ", getToken)
}

// // When your application wants to access the protected data
// let f = new jso.Fetcher(client)
// let url = 'https://api.intra.42.fr/v2/project_data'
// f.fetch(url, {})
// 	.then((data) => {
// 		return data.json()
// 	})
// 	.then((data) => {
// 		console.log("I got protected json data from the API", data)
// 	})
// 	.catch((err) => {
// 		console.error("Error from fetcher", err)
// 	})





// // ===============
// // https://gomakethings.com/using-oauth-with-fetch-in-vanilla-js/
// // Currently this throws an error and says TypeError{} but the Fetch documentation says something about this as well.

// fetch('https://api.intra.42.fr/oauth/token', {
// 	method: 'POST',
//     credentials: 'include',
// 	body: 'grant_type=client_credentials&client_id=' + UID + '&client_secret=' + SECRET
// }).then(function (resp) {
// 	// Return the response as JSON
// 	return resp.json();

// }).then(function (data) {

// 	// Log the API data
// 	console.log('token', data);

// }).catch(function (err) {

// 	// Log any errors
// 	console.error('something went wrong', err);

// });
