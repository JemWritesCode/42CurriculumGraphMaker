function uploadIntra(){
 alert("This feature is not working yet."); 
}

// Set your information. Should probably have this popup to ask each time it's running.
var UID = "SetYoursHere"
var SECRET = "SetYoursHere"

// This works to get a token in RunKit node environment:
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

  try {
    const result =  oauth2.clientCredentials.getToken(tokenConfig);
    const accessToken = oauth2.accessToken.create(result);
    console.log(accessToken);
  } catch (error) {
    console.log('Access Token error', error.message);
  }
}

run();
