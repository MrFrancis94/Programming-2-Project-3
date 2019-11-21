$(() => {

    // Submit a form aka search request
    $('#search-form').submit((e) => {
        e.preventDefault();
        const artist = $('#artist').val();
        const title = $('#title').val();
        getRequest(artist, title);

    });

    function getRequest(artist, title) {
        const url = `https://api.lyrics.ovh/v1/${artist}/${title}`;
      
        

        $.getJSON(url, (response) => {
            showResults(response);
        });
    }

    function showResults(lyrics) {
        $('#results').append(lyrics.lyrics);
    }
});