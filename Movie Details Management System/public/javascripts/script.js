// set href of delete confirmation button of modal with id of selected movie
$('.delete-button').on('click', function () {
  const movieId = $(this).data('movieid');
  const deleteLink = $('.confirm-delete-button');
  deleteLink.attr('href', `/delete-row?movieId=${movieId}`);
});

// realease date - set the maximum date to current date
$('#releaseYear').prop('max', new Date().toISOString().split('T')[0]);
