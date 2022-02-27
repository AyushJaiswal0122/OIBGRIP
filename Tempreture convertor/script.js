const calculateTemp = () => {
    const tempvalue = document.getElementById("valuetemp").value;
    console.log(tempvalue);
    const tempunit = document.getElementById("unit");
    const utu = unit.options[tempunit.selectedIndex].value;
    console.log(utu);
    const tempunitto = document.getElementById("unitto");
    const uto = unitto.options[tempunitto.selectedIndex].value;
    console.log(uto);
    /*const celtofar = (cel) => {
        let farhenheit= ((cel*1.8)+32);
        return farhenheit;
    }
    const fartocel = (far) => {
        let celcius= (((far-32)*5)/9);
        return celcius;
    }*/
    // Fahrenheit Converter
function fTo(inputDegreeValue, conversionDegreeType) {

    let temperature = '';
  
    switch (conversionDegreeType) {
      case 'Ft':
        temperature = inputDegreeValue+' °FARHENHEIT';
        break;
      case 'Ct':
        temperature = eval((inputDegreeValue - 32) * (5 / 9))+' °CELSIUS';
        break;
      case 'Kt':
  
        temperature = eval((inputDegreeValue + 459.67) * (5 / 9))+' Kelvin';
        break;
  
    }
    return temperature;
  }
  // Celcius Converter

function cTo(inputDegreeValue, conversionDegreeType) {

    let temperature = '';
  
    switch (conversionDegreeType) {
  
      case 'Ct':
        temperature = inputDegreeValue+' °CELSIUS';
        break;
      case 'Ft':
        temperature = eval((inputDegreeValue * (9 / 5)) + 32)+' °FARHENHEIT';
        break;
      case 'Kt':
        temperature = eval(inputDegreeValue + 273.15)+' Kelvin';
        break;
  
    }
  
    return temperature;
  }
  // Kelvin Converter

function kTo(inputDegreeValue, conversionDegreeType) {

    let temperature = '';
    
    switch (conversionDegreeType) {
      case 'Kt':
        temperature = inputDegreeValue+' Kelvin';
        break;
      case 'Ft':
        temperature = eval((inputDegreeValue - 273.15) * (9 / 5) + 32)+' °FARHENHEIT';
        break;
      case 'Ct':
        temperature = eval((inputDegreeValue - 273.15))+' °CELSIUS';
        break;
    
    }
    return temperature;
    }
    let result;
    if(utu=='C'){
        result = cTo(tempvalue,uto);
        document.getElementById('ans').innerHTML = result;
    }
    else if(utu=='F'){
        result = fTo(tempvalue,uto);
        document.getElementById('ans').innerHTML = result;
    }
    else if(utu=='K'){
        result = kTo(tempvalue,uto);
        document.getElementById('ans').innerHTML = result;
    }


}
