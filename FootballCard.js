$(document).ready(function(){
  $("div").click(function(){
    $("#liverpoolCard").hide();
  });
});

var url = 'http://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=2ab0bce971734ebf99887918fd4c419b';
var req = new Request(url);
fetch(req)
    .then(function(response) {
        console.log(response.json());
    })