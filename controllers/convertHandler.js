function ConvertHandler() {
  
  this.getNum = function(input) {
    let num;  
  let verify= /^[\d]*\.?[\d]*(\/[\d]*\.?[\d]*)?[\D]+$/g;
  if(verify.test(input)){let regex= /^[\d]*\.?[\d]*(\/[\d]*\.?[\d]*)?/;
    num = input.match(regex);
    if(num){num = eval(num[0]);
           if(num==0){
             num="invalid number";
           } else if(num== undefined){
             num= 1
           }} }
   else{ num="invalid number"}
    
    return num;
  };
  
  this.getUnit = function(input) {
    let a= ["gal", "lbs", "mi", "l", "kg", "km"];
    let regrex= /[\D]+$/g;
    let unit= input.match(regrex);
    if(unit){ unit= unit.join("").toLowerCase();
              if(a.indexOf(unit)<0){
                unit= "invalid unit"
              }}
    else{unit="invalid unit"}
    if(unit==="l"){unit = "L"}
    return unit
  };
  
  this.getReturnUnit = function(initUnit) {
    let a = ["gal", "lbs", "mi"];
    let b = ["L", "kg", "km"];
    let unit;
    if (a.indexOf(initUnit)>=0){
      unit= b[a.indexOf(initUnit)]
    } else if(b.indexOf(initUnit)>=0){
      unit= a[b.indexOf(initUnit)]
    }
      else{unit=null}
    return unit;
  };

  this.spellOutUnit = function(unit) {
    let a= ["gal", "lbs", "mi", "L", "kg", "km"];
    let b= ["gallons", "pounds", "miles", "liters", "kilograms", "kilometers"];
    let c = a.indexOf(unit);
    let spelled = b[c];
    return spelled
  };
  
  this.convert = function(initNum, initUnit) {
    let u=initUnit;
    let n = initNum;

    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    
    let result= u==="gal"?n* galToL:u==="L"?n/galToL:u==="lbs"?n*lbsToKg:u==="kg"?n/lbsToKg:u==="mi"?n*miToKm:n/miToKm;
    return +result.toFixed(5);
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result=`${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
