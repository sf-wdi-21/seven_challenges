function render(items) {
  var $target_div = $("div#target");
  items.forEach(function(item){
    $target_div.append("<p>" + item.message + "</p>");
  })
}

$(document).ready(function(){

  /*
   * Can you request tweets from `/api/tweets`
   * and render the response data to the page
   * using the `render` function, above?
  */

  // AJAX request to `/api/tweets`
    // render(response.data);
  //

})
