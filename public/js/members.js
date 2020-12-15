// console.log("hello world");

$(document).ready(() => {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    $.get('/api/user_data').then((data) => {
        $('.member-name').text(data.email);
    });
});
// / listening for submit to search for a game
$('form').on('submit', (event) => {
    event.preventDefault();

    const userSearch = $('#searchedGame').val();
    //   console.log(event);
    window.location.replace('/api/games/' + userSearch);
});


// listening for delete button

// $("#removeGame").on("click", (event) => {
//     event.preventDefault();

//   });
