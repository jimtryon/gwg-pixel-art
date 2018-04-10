// Select color input
var colorPicker = $("#colorPicker");
// Select size input
var sizePicker = $("#sizePicker");

// When size is submitted by the user, call makeGrid()
$("#buttonSubmit").on("click", function(event) {
  event.preventDefault();
  console.log("Listening for submit event");

const height = $("#inputHeight").val();
const width = $("#inputWidth").val();

  console.log(height);
  console.log(width);

  makeGrid(height, width);
});

function makeGrid(height, width) {
  // Build table up to desired height
  for (var cols = 0; cols <= height; cols++) {
    // Create a row
    console.log("row" + cols);

    // Up to desired width
    for (var rows = 0; rows <= width; rows++) {

        console.log("td" + rows);
    }
  }
}
