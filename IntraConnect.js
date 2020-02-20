function uploadIntra(){
 alert("This feature is not working yet."); 
}

// Set your information. Should probably have this popup to ask each time it's running.
var UID = "SetYoursHere"
var SECRET = "SetYoursHere"
var projectSessionID = "4299"; //4299 is the TestNode on H2STestCursus

//currently returning Object {detail: "Access token invalid or expired", status: 401, title: "Unauthorized", …}

function run() {
  const credentials = {
  client: {
    id: UID,
    secret: SECRET
  },
  auth: {
    tokenHost: 'https://api.intra.42.fr/v2/oauth/token'
  }
};

  const oauth2 = require('simple-oauth2').create(credentials);

  const tokenConfig = {
    scope: 'projects',
  };


    const result =  oauth2.clientCredentials.getToken(tokenConfig);
    const accessToken = oauth2.accessToken.create(result);
    console.log("Got the token!");
    console.log(accessToken);
    fetch('https://api.petfinder.com/v2/project_data/project_session_id=' + projectSessionID, 
    {
		headers: {
			'Authorization': "Bearer" + accessToken,
			'Content-Type': 'application/json'
		}
	}).then(function (resp) {

	// Return the API response as JSON
	return resp.json();

}).then(function (data) {
    console.log("Here's the data!", data);
    })
  }

run();
