// / a bttn on submit function to add to the server.
$(".btn").on("click", function(){
    console.log(this)
})
// "name": "Dark Souls III",
// "summary"
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
