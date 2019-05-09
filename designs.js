function makeGrid() { // a grid should appear when the user inputs numbers and clicks submit
    var gridHeight = $('#userHeight').val(); // User input sets grid height
    var gridWidth = $('#userWidth').val(); // User input sets grid width
    var canvas = $('#canvas');
    var newRow;
    var clickedCell;
    var chooseColor;
	
    canvas.children().remove(); // Draw an empty grid on page load and reset when Submit is clicked

	// Refer to numerical input from the user for Height
	if ($('#userHeight').val() > 25) gridHeight = 25; // hard stop at 25 x 25
	document.getElementById("userHeight").value = gridHeight; // checks the number value and changes it to the current grid height if value is higher than 25
    for (var rowCount = 0; rowCount < gridHeight; rowCount++) { // adds to row count to meet user request up to 25
		canvas.append('<tr></tr>'); // Creates more cells for height
    }

	// Refer to numerical input from the user for Width
	newRow = $('tr');
	if ($('#userWidth').val() > 25) gridWidth = 25; // hard stop at 25 x 25
	document.getElementById("userWidth").value = gridWidth; // checks the number value and changes it to the current grid width if value is higher than 25
    for (var numCell = 0; numCell < gridWidth; numCell++) { // adds to cell count to meet user request up to 25
		newRow.append('<td></td>'); // Creates more cells for width
    }
	
    clickedCell = canvas.find('td'); // Shows which cell is clicked
    
	// Selects color input - cell changes color when clicked
	clickedCell.click(function() {
		chooseColor = $('#colorPicker').val();
        if ($(this).attr('bgcolor')) {
            $(this).removeAttr('bgcolor')
        } else {
            $(this).attr('bgcolor', chooseColor);
        }  
	});
}

// When size is submitted by the user, call makeGrid()
$(document).ready(function() {
    var drawGrid = $('input[type="submit"]');
    drawGrid.click(function(event) {
        event.preventDefault();
        makeGrid();
    });
});