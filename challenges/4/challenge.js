function render(items) {
  var $target_div = $("div#target");
  items.forEach(function(item){
    $target_div.append("<p>" + item.message + "</p>");
  })
}

$(document).ready(function(){

  /*
   * Can you request tweets from `/api/tweets/1`
   * and render the response data to the page
   * using the `render` function, above
   * (with no modifications)?
  */

  // AJAX request to `/api/tweets/1`
    // render(response.data);
  //

})
