function render(items) {
  var $target_div = $("div#target");
  items.forEach(function(item){
    $target_div.append("<p>" + item.message + "</p>");
  })
}

$(document).ready(function(){

  /*
   * When the user clicks the "tweet" button, can you submit the form
   * using ajax and then render the ajax-response data?
  */

})
