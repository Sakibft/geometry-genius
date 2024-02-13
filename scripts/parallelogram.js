 function paralleogram(){
   const baseInput = document.getElementById('bsae-number');
    const baseText = baseInput.value;
    const convertnumber = parseFloat(baseText)
    console.log(convertnumber);
    // height
    const heightInput = document.getElementById('height-input');
   const heightText = heightInput.value;
   const hcn =parseFloat(heightText)
   console.log(hcn);

  //  maltiplay
  const area = convertnumber * hcn;
   
  const lao = document.getElementById('area-output');
   lao.innerText=area;

 }