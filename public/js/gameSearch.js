// button to search again.
$('form').on('submit', (event) => {
    event.preventDefault();
    console.log('hello world');
    const userSearch = $('#searchedGame').val();
    window.location.replace('/api/games/' + userSearch);
});

//  a bttn on submit function to add to the server.

// $("#addGame").on("click", (event) => {
//     event.preventDefault();

//   });
