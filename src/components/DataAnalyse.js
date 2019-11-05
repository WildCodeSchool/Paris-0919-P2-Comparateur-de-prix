import React from 'react'

const DataAnalyse = ({ data }) => {
  console.log('DATA analyse')
  const SO2 = data.SO2.value_upm;
  const NO2 = (data.NO2.value_upm);
  const O3 = data.O3.value_upm;
  const PM10 = data.PM10.value_upm;

  const resultTab =[];

  //SO2
  let SO2Index = 0
  switch (true) {
    case SO2 < 39:
      SO2Index = 1;
      break;
    case SO2 < 79:
      SO2Index = 2;
      break;
    case SO2 < 119:
      SO2Index = 3;
      break;
    case SO2 < 159:
      SO2Index = 4;
      break;     
    case SO2 < 199:
      SO2Index = 5;
      break;
    case SO2 < 249:
      SO2Index = 6;
      break;
    case SO2 < 299:
      SO2Index = 7;
      break;
    case SO2 < 399:
      SO2Index = 8;
      break;
    case SO2 < 499:
      SO2Index = 9;
      break;    
    case SO2 >= 500:
      SO2Index = 10;
      break;
    default:
      console.log('Sorry');
  }
  
  //NO2
    let NO2Index = 0
    switch (true) {
      case NO2 < 29:
        NO2Index = 1;
        break;
      case NO2 < 54:
        NO2Index = 2;
        break;
      case NO2 < 84:
        NO2Index = 3;
        break;
      case NO2 < 109:
        NO2Index = 4;
        break;     
      case NO2 < 134:
        NO2Index = 5;
        break;
      case NO2 < 164:
        NO2Index = 6;
        break;
      case NO2 < 199:
        NO2Index = 7;
        break;
      case NO2 < 270:
        NO2Index = 8;
        break;
      case NO2 < 399:
        NO2Index = 9;
        break;    
      case NO2 >= 400:
        NO2Index = 10;
        break;
      default:
        console.log('Sorry');
    }

    //O3
    let O3Index;
    switch (true) {
      case O3 < 29:
        O3Index = 1;
        break;
      case O3 < 54:
        O3Index = 2;
        break;
      case O3 < 84:
        O3Index = 3;
        break;
      case O3 < 109:
        O3Index = 4;
        break;     
      case O3 < 134:
        O3Index = 5;
        break;
      case O3 < 164:
        O3Index = 6;
        break;
      case O3 < 199:
        O3Index = 7;
        break;
      case O3 < 270:
        O3Index = 8;
        break;
      case O3 < 399:
        O3Index = 9;
        break;    
      case 240 <= O3:
        O3Index = 10;
        break;
      default:
        console.log('Sorry');
    }
    
    //PM10
    let PM10Index = 0
    switch (true) {
      case PM10 < 6:
        PM10Index = 1;
        break;
      case PM10 < 13:
        PM10Index = 2;
        break;
      case 14 < PM10 < 20:
        PM10Index = 3;
        break;
      case 21 < PM10 < 27:
        PM10Index = 4;
        break;     
      case 28 < PM10 < 34:
        PM10Index = 5;
        break;
      case PM10 < 41:
        PM10Index = 6;
        break;
      case PM10 < 49:
        PM10Index = 7;
        break;
      case PM10 < 64:
        PM10Index = 8;
        break;
      case PM10 < 79:
        PM10Index = 9;
        break;    
      case PM10 >= 80:
        PM10Index = 10;
        break;
      default:
        console.log('Sorry');
    }

    resultTab.push(SO2Index, NO2Index, O3Index, PM10Index);
    console.log('tab: ', resultTab);
    const resultIndex = Math.max(...resultTab);
    //result 
    console.log('index: ', resultIndex);
    
  return (
    <div>
      
    </div>
  )
}
export default DataAnalyse
