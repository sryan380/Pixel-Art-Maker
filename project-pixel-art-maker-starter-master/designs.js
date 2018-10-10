
// When user clicks submit call makeGrid()
document.getElementById("sizePicker").addEventListener("submit", function(event) {
  event.preventDefault();
  const r = document.querySelector('#inputWidth').value;
  const c = document.querySelector('#inputHeight').value;
  console.log(r, c)
  const table = document.querySelector('table')
  if (document.contains(document.querySelector('tr'))) {
    while (table.firstChild){
      table.removeChild(table.firstChild);
    }
    makeGrid(r, c);
  } else {
    makeGrid(r, c);
  }
});

//makes grid
function makeGrid(r, c){
  document.querySelector("#pixelCanvas").innerHTML = '';
  console.log("made Grid")
  for (var i = 0; i < r; i++) {
    var row = document.createElement('tr');
    for (var j = 0; j < c; j++) {
      const cell = document.createElement('td')
      document.getElementById("pixelCanvas").appendChild(cell);
      row.appendChild(cell);
    }

    row.addEventListener('click', respondToTheClick);
    document.getElementById("pixelCanvas").appendChild(row);
  };
};


//changes color of clicked cell
function respondToTheClick(event) {
  const color = document.querySelector('#colorPicker').value;
  event.target.style.backgroundColor = color;
  console.log("colored grid");
  };
