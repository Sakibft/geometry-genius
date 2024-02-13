 function calculateRectangleArea(){
  const lengthInput = document.getElementById('rectangle-length');
  const lengthText = lengthInput.value;
  const length = parseFloat(lengthText)
  console.log(length);

  // get width of the rectangle
  const widthInput = document.getElementById('rectangle-width');
  const widthText = widthInput.value;
  const width = parseFloat(widthText);
  console.log(width);

  // calculate rectangle area 
  const area = length * width;
  console.log('ara of the rectangle',area);

  // display rectangle area 

  const areaSpan = document.getElementById('rectangle-area');
  areaSpan.innerText= area;


 }