// Select color input
var colorPicker = $("#colorPicker");
// Select size input
var sizePicker = $("#sizePicker");
// Select canvas object
var pixelCanvas = $("#pixelCanvas");
// Select submit button
var submit = $("#buttonSubmit");

// When size is submitted by the user, call makeGrid()
submit.on("click", function(event) {
  event.preventDefault();

  const height = $("#inputHeight").val();
  const width = $("#inputWidth").val();

  pixelCanvas.empty();
  makeGrid(height, width);
});

function makeGrid(height, width) {
  // Build table up to desired height
  for (var i = 0; i < height; i++) {
    console.log("row" + i);

    // Create a row
    pixelCanvas.append("<tr></tr>");

    // Up to desired width
    for (var j = 0; j < width; j++) {
      console.log("td" + j);

      // Add td to row
      $("tr")
        .last()
        .append("<td></td>");
    }
  }

  // Color grid square when clicked
  pixelCanvas.on("mousedown mouseover", "td", function(event) {
    // Check if mouse buttons pressed
    if (event.buttons === 1) {
      // Change background color of event's target
      $(this).css("background-color", colorPicker.val());
    }
  });
}
