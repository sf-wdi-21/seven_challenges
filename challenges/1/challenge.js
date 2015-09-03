var response = {
  data: [
    { message: "Hello World" }
  ]
};

$(document).ready(function(){

  var item = response.data[0];
  $("div#target").append("<p>" + item.message + "</p>");

})
