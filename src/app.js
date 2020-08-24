var $ = require("jquery");

$(document).ready(function() {
  $( "#target" ).click(function() {
    $( "#text" ).text("New Text")
  });
  $(document).keypress(function(event) {
    if (event.keyCode == 38) {
      // TODO
    }
  })
});
