var string = "";
var state = 0
var saved= "";
var operatorUsed = 0;
var decimalUsed = false;
var acUsed = false;

function button0() {
  if (state == 1) {
    string = "0"
  } else {
    if (operatorUsed == 1) {
      operatorUsed = 0;
      string = saved;
    }
    if (decimalUsed == 1) {
      decimalUsed = 0;
      string = saved;
    }
    string += "0"
  }
  var div = document.getElementById("output");
  div.innerHTML = string;
}

function button1() {
  if (state == 1) {
    string = "1"
  } else {
    if (operatorUsed == 1) {
      operatorUsed = 0;
      string = saved;
    }
    if (decimalUsed == 1) {
      decimalUsed = 0;
      string = saved;
    }
    string += "1"
  }
  var div = document.getElementById("output");
  div.innerHTML = string;
}

function button2() {
  if (state == 1) {
    string = "2"
  } else {
    if (operatorUsed == 1) {
      operatorUsed = 0;
      string = saved;
    }
    if (decimalUsed == 1) {
      decimalUsed = 0;
      string = saved;
    }
    string += "2"
  }
  var div = document.getElementById("output");
  div.innerHTML = string;
}

function button3() {
  if (state == 1) {
    string = "3"
  } else {
    if (operatorUsed == 1) {
      operatorUsed = 0;
      string = saved;
    }
    if (decimalUsed == 1) {
      decimalUsed = 0;
      string = saved;
    }
  string += "3"
  }
  var div = document.getElementById("output");
  div.innerHTML = string;
}

function button4() {
  if (state == 1) {
    string = "4"
  } else {
    if (operatorUsed == 1) {
      operatorUsed = 0;
      string = saved;
    }
    if (decimalUsed == 1) {
      decimalUsed = 0;
      string = saved;
    }
  string += "4"
  }
  var div = document.getElementById("output");
  div.innerHTML = string;
}

function button5() {
  if (state == 1) {
    string = "5"
  } else {
    if (operatorUsed == 1) {
      operatorUsed = 0;
      string = saved;
    }
     if (decimalUsed == 1) {
      decimalUsed = 0;
      string = saved;
    }
  string += "5"
  }
  var div = document.getElementById("output");
  div.innerHTML = string;
}

function button6() {
  if (state == 1) {
    string = "6"
  } else {
    if (operatorUsed == 1) {
    operatorUsed = 0;
    string = saved;
    }
    if (decimalUsed == 1) {
      decimalUsed = 0;
      string = saved;
    }
  string += "6"
  }
  var div = document.getElementById("output");
  div.innerHTML = string;
}

function button7() {
  if (state == 1) {
    string = "7"
  } else {
    if (operatorUsed == 1) {
      operatorUsed = 0;
      string = saved;
    }
    if (decimalUsed == 1) {
      decimalUsed = 0;
      string = saved;
    }
  string += "7"
  }
  var div = document.getElementById("output");
  div.innerHTML = string;
}

function button8() {
  if (state == 1) {
    string = "8"
  } else {
    if (operatorUsed == 1) {
      string = saved;
      operatorUsed = 0;
    }
    if (decimalUsed == 1) {
      decimalUsed = 0;
      string = saved;
    }
  string += "8"
  }
  var div = document.getElementById("output");
  div.innerHTML = string;
}

function button9() {
  if (state == 1) {
    string = "9"
  } else {
    if (operatorUsed == 1) {
      string = saved;
      operatorUsed = 0;
    }
    if (decimalUsed == 1) {
      decimalUsed = 0;
      string = saved;
    }
    string += "9"
  }
  var div = document.getElementById("output");
  div.innerHTML = string;
}

function clearButton() {
  var div = document.getElementById("output");
  div.innerHTML = 0;
  string = " "
  saved = ""
  operatorUsed = 0;
  acUsed = true;
  state = 0;
  if (acUsed == true) {
    decimalUsed = false;
    document.getElementById("decimalButton").disabled = false;
  }
}

function multiplicationButton() {
  var div = document.getElementById("output");
  saved = string;
  saved += "*"
  div.innerHTML = saved;
  state = 0;
  operatorUsed = 1;
  if (operatorUsed == 1) {
    document.getElementById("decimalButton").disabled = false;
  }
}

function additionButton() {
  var div = document.getElementById("output");
  saved = string;
  saved += "+"
  div.innerHTML = saved;
  state = 0;
  operatorUsed = 1;
  if (operatorUsed == 1) {
    document.getElementById("decimalButton").disabled = false;
  }
}

function divisionButton() {
  var div = document.getElementById("output");
  saved = string;
  saved += "/"
  div.innerHTML = saved;
  state = 0;
  operatorUsed = 1;
  if (operatorUsed == 1) {
    document.getElementById("decimalButton").disabled = false;
  }
}

function subtractionButton() {
  var div = document.getElementById("output");
  saved = string;
  saved += "-"
  div.innerHTML = saved;
  state = 0;
  operatorUsed = 1;
  if (operatorUsed == 1) {
    document.getElementById("decimalButton").disabled = false;
  }
}

function equalButton() {
  var div= document.getElementById("output");
  string = eval(string);
  div.innerHTML = Number(string).toLocaleString();
  if (Number(string) > 0 && Number(string) < 1 && string.length >= 9) {
    div.innerHTML = Number(string).toExponential()
  }
  state = 1;
}

function negationButton() {
  var div= document.getElementById("output");
  string = Number(string) * (-1);
  div.innerHTML = string;
  state = 0;
}

function decimalButton() {
  if (decimalUsed == false){
    var div = document.getElementById("output");
    saved = string;
    saved += ".";
    div.innerHTML = saved;
    decimalUsed = true;
  }
  if (decimalUsed == true) {
    document.getElementById("decimalButton").disabled = true;
  }
}

function percentButton() {
  var div = document.getElementById("output");
  string = Number(string) * (0.01)
  div.innerHTML = string;
  state = 0;
}
function piButton(){
    saved='3.1415926';
    string='3.1415926';
    document.getElementById("display").innerHTML=string.toLocaleString('en', {maximumFractionDigits: 12});
}

function squareButton(){
    string=Math.pow((Number(string)),2);
    saved+='**2'
    document.getElementById("display").innerHTML=string.toLocaleString('en', {maximumFractionDigits: 12});
}

function cubeButton(){
    string=Math.pow((Number(string)),3);
    saved+='**3';
    document.getElementById("display").innerHTML=string.toLocaleString('en', {maximumFractionDigits: 12});
}
