let actualTemp = 76;

let desiredTemp = 72;

if(actualTemp > desiredTemp){
    console.log('Run A/C')
}

else if(actualTemp < desiredTemp){
    console.log('Run Heat')
}
else {
    console.log('Standby');
}
let tempCelcius = 32;

let targetUnit = 'F';

switch (targetUnit){
    case 'C': 
    tempCelcius = tempCelcius;
    break;
    case 'F': 
    tempCelcius = (tempCelcius*9/5)+32;
    break;
    case 'K': 
    tempCelcius = ( tempCelcius+273.15);
    break;
}
console.log(tempCelcius)