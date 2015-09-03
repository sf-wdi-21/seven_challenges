function render(items) {
  var $target_div = $("div#target");
  items.forEach(function(item){
    $target_div.append("<p>" + item.message + "</p>");
  })
}

$(document).ready(function(){

  $("form").on("submit", function(event){
    event.preventDefault();
    var $form = $(this);
    var data = $form.serialize();
    $.post("/api/tweets", data, function(response){
      render(response.data);
    });
  })

})
