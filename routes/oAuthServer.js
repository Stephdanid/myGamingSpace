const fetch = require(`node-fetch`);
// gameSearch();
// Example POST method implementation:
async function postData(
    url = '',
    data = {},
    additionalHeaders = {},
    defaultContentType = 'application/json',
) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        headers: {
            ...additionalHeaders,
            'Content-Type': defaultContentType,
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: defaultContentType === 'application/json' ?
            JSON.stringify(data) : data,
        // body data type must match "Content-Type" header
    });
    return response.json();
    // parses JSON response into native JavaScript objects
}

function gameSearch(bodyParamSearch) {
    // console.log('test')
    return postData(process.env.GET_TOKEN, {
        client_id: process.env.CLIENT_ID_TWITCH,
        client_secret: process.env.CLIENT_SECRET_TWITCH,
        grant_type: `client_credentials`,
    }).then((data) => {
<<<<<<< HEAD
        // console.log(data); // JSON data parsed by `data.json()` call
        bodyParamSearch = `""`;
=======
    // console.log(data); // JSON data parsed by `data.json()` call
        bodyParamSearch = `"${bodyParamSearch}"`;
>>>>>>> 50fc50db11250084bfcd305425b40c6be7f58394
        return postData(
            `https://api.igdb.com/v4/games`,
<<<<<<< HEAD
            'fields *; search ' + bodyParamSearch + '; limit 5;', {
=======
            'fields *; search ' + bodyParamSearch + '; limit 10;',
            {
>>>>>>> 5bf57ae9686052df47d41f86b7ae98689bf815cb
                'Client-ID': process.env.CLIENT_ID_TWITCH,
                'Authorization': `Bearer ` + data.access_token,
            },
            'text/plain',
        );
        // The example below searches for “Sonic the Hedgehog” which
        // will find the Character Sonic,
        // the collection Sonic the Hedgehog. And of course
        // also several games with names containing Sonic the Hedgehog.
        // "fields *; search "sonic the hedgehog"; limit 50;"
    });
    // .then(gameData => {
    //     const [gameObject] = gameData
    //     console.log('Rating for this game is ' +
    //      gameObject.aggregated_rating);
    //     console.log('=============');
    //     console.log('Release date ' + gameObject.first_release_date);
    //     console.log('===============');
    //     console.log('It has this many ' + gameObject.game_modes +
    //      ' game modes');
    //     console.log('==================');
    //     console.log(' The name of the game is ' + gameObject.name);
    //     console.log('=================');
    //     console.log('Here is what platforms you can play on ' +
    //      gameObject.platforms);
    //     console.log('===================');
    //     console.log('Here are other release dates for this game ' +
    //      gameObject.release_dates);
    //     console.log('=================');
    //     console.log('Pictures of game ' + gameObject.screenshots);
    //     console.log('=================');
    //     console.log('Summary of the game! ' +
    //      gameObject.summary);
    //     console.log('====================');
    //     console.log('Check out the website for more information! ' +
    //      gameObject.url);
    //     console.log('========END OF OBJECT DATA=======');
    // })
}
module.exports = gameSearch;
// }
// Add .then function for gaming artwork NEEDS Game ID
// Sending user access and app access tokens
// When an API request requires authentication,
// send the access token as a header.The header differs,
// depending on which API you use:
// In the Twitch API:
// curl -H "Authorization: Bearer <access token>" https://api.twitch.tv/helix/
// module . exports = game
// Search;
