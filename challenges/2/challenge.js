var response = {
  data: [
    { message: "Hello World" },
    { message: "One man's constant is another man's variable." },
    { message: "Syntactic sugar causes cancer of the semicolon." }
  ]
};

$(document).ready(function(){

  function render(items) {
    items.map(function(item){
      $("div#target").append("<p>" + item.message + "</p>")
    })
  }

  render(response.data);

})
