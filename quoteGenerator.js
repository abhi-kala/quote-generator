

function getQuote(){
  $.ajax({
    url: "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies", // The URL to the API. You can get this in the API page of the API you intend to consume
    type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
    data: {}, // Additional parameters here
    dataType: 'json',
    success: function(data) {
      console.log(data);
      console.log(data.quote);
      quote=data.quote;
      author=data.author;

    },
    error: function(err) { alert(err); },
    beforeSend: function(xhr) {
    xhr.setRequestHeader("X-Mashape-Authorization", "fyf6IJOsVCmshR7zva26O2dkh1vqp1M0h2cjsnRE3WwLbGNgGE"); // Enter here your Mashape key
    }
  });
};

$(document).ready(function() {
  // getQuote();
  $(".button").on("click", function() {
    getQuote();
    $(".quote").html(quote);
    $(".author").html(author);
  })
});