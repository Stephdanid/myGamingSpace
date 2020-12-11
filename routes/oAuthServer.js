const dotenv = require(`dotenv`).config();
const { response } = require("express");
const fetch = require(`node-fetch`);

gameSearch();
// Example POST method implementation:
async function postData(url = '', data = {}, additionalHeaders = {}, defaultContentType = 'application/json') {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin

        headers: {
            ...additionalHeaders,
            'Content-Type': defaultContentType,



            // 'Content-Type': 'application/x-www-form-urlencoded',
        },

        body: defaultContentType === 'application/json' ? JSON.stringify(data) : data // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}


function gameSearch(bodyParamSearch) {
    return postData(process.env.GET_TOKEN, {
            client_id: process.env.CLIENT_ID_TWITCH,
            client_secret: process.env.CLIENT_SECRET_TWITCH,
            grant_type: `client_credentials`
        })
        .then(data => {
            console.log(data); // JSON data parsed by `data.json()` call
            bodyParamSearch = ``
                //          URL                                     BODY                                                    CLIENTID                               Hard coded bearer       TOKEN       defaultcontentType 
            return postData(`https://api.igdb.com/v4/games`, 'fields *; search ' + bodyParamSearch + '; limit 2;', { 'Client-ID': process.env.CLIENT_ID_TWITCH, 'Authorization': `Bearer ` + data.access_token }, 'text/plain');

            // The example below searches for “Sonic the Hedgehog” which will find the Character Sonic, 
            // the collection Sonic the Hedgehog. And of course also several games with names containing Sonic the Hedgehog. 
            // "fields *; search "sonic the hedgehog"; limit 50;"




        })
        //         .then(gameData => {




    //                 const [gameObject] = gameData
    //                 console.log("Rating for this game is " + gameObject.aggregated_rating);
    //                 console.log("==============================================");
    //                 console.log("Release date " + gameObject.first_release_date);
    //                 console.log("==============================================");
    //                 console.log("It has this many " + gameObject.game_modes + " game modes");
    //                 console.log("==============================================");
    //                 console.log(" The name of the game is " + gameObject.name);
    //                 console.log("==============================================");
    //                 console.log("Here is what platforms you can play on " + gameObject.platforms);
    //                 console.log("==============================================");
    //                 console.log("Here are other release dates for this game " + gameObject.release_dates);
    //                 console.log("==============================================");
    //                 console.log("Pictures of game " + gameObject.screenshots);
    //                 console.log("==============================================");
    //                 console.log("Summary of the game! " + gameObject.summary);
    //                 console.log("==============================================");
    //                 console.log("Check out the website for more information! " + gameObject.url);
    //                 console.log("==================END OF OBJECT DATA==========================");
    //             }



    //         )
    // }


    // Add .then function for gaming artwork NEEDS Game ID





    //   When validating each of your requests, submit a request to the validation endpoint 
    // (https://id.twitch.tv/oauth2/validate) with your OAuth token in the header. If you are authenticated, 
    // the response includes the status of your token. A successful response indicates that your access token is valid.
    // Client IDs are public and can be shared (for example, embedded in the source of a Web page).
    // Client secrets are equivalent to a password for your application and must be kept confidential. Never expose it to users, even in an obscured form.



    // User access tokens	
    // Authenticate users and allow your app to make requests on their behalf. If your application uses Twitch for login or makes requests in the context 
    // of an authenticated user, you need to generate a user access token.

    // Shaping queryUrl = https://id.twitch.tv/oauth2/token?client_id=we4akgv121ihmwq0uyxtwhz9r6ifas&client_secret=4zaadrg5lsgg9yn0ie5ex35qnotnd8&grant_type=client_credentials


    // https://id.twitch.tv/oauth2/token?client_id=we4akgv121ihmwq0uyxtwhz9r6ifas&client_secret=4zaadrg5lsgg9yn0ie5ex35qnotnd8&grant_type=client_credentials


    // Sending user access and app access tokens
    // When an API request requires authentication, send the access token as a header. The header differs, depending on which API you use:

    // In the Twitch API:
    // curl -H "Authorization: Bearer <access token>" https://api.twitch.tv/helix/
    module.exports = gameSearch