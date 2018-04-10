// Select color input
var colorPicker = $("#colorPicker");
// Select size input
var sizePicker = $("#sizePicker");
// Select canvas object
var pixelCanvas = $("#pixelCanvas");

// When size is submitted by the user, call makeGrid()
$("#buttonSubmit").on("click", function(event) {
  event.preventDefault();
  //console.log("Listening for submit event");

const height = $("#inputHeight").val();
const width = $("#inputWidth").val();

  console.log(height);
  console.log(width);

  $(pixelCanvas).empty();
  makeGrid(height, width);
});

function makeGrid(height, width) {
  // Build table up to desired height
  for (var i = 0; i < height; i++) {
    console.log("row" + i);

    // Create a row
    $(pixelCanvas).append("<tr></tr>");

    // Up to desired width
    for (var j = 0; j < width; j++) {
        console.log("td" + j);

        // Add td to row
        $("tr").last().append("<td></td>");
    }
  }
}
