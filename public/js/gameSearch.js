// / a bttn on submit function to add to the server.
$('.btn').on('click', function() {
    const game = {
        summary: $(this).data('summary'),
        id: $(this).data('id'),
        name: $(this).data('name'),
    };
    $.post('/wishlist', game )
        .then((data) => {
            console.log(data);
            // If there's an error, log the error
        })
        .catch((err) => {
            console.log(err);
        });
});
// "name": "Dark Souls III",
// "summary"
// button to search again.
$('form').on('submit', (event) => {
    event.preventDefault();
    const userSearch = $('#searchedGame').val();
    window.location.replace('/api/games/' + userSearch);
});
//  a bttn on submit function to add to the server.
// $("#addGame").on("click", (event) => {
//     event.preventDefault();
//   });
