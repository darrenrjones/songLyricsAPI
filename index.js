'use strict';

/* This app doesn't follow a11y best practices, and the JS file is incomplete. Complete the getDataFromApi, displaySearchData, and watchSubmit functions. When you're done, this app should allow a user to search for an artist and song title (both should be required), and display the song lyrics. You should make requests to this API: https://lyricsovh.docs.apiary.io/# . Also make any necessary adjustments to make this app accessible. */

function getDataFromApi(artist, title, callback) {
  let URL = `https://api.lyrics.ovh/v1/${artist}/${title}`;
  $.getJSON(URL,callback);
}

function displaySearchData(data) {
  console.log(data);
  $('.js-search-results').html(data.lyrics);
 
}

function watchSubmit() {
  $('.js-search-form').on('submit', event => {    
    event.preventDefault();
    let searchArtist = $('.js-query-artist').val();
    let searchTitle = $('.js-query-title').val();
    console.log(searchArtist);
    $('.js-query-artist').val('');
    $('.js-query-title').val('');
    
    getDataFromApi(searchArtist,searchTitle,displaySearchData);
  });
}

$(watchSubmit);