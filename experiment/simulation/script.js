var interval = 1000;
var state = 0;

function generateCode() {
  var switch1 = document.getElementById("switch1").value;
  var LED = document.getElementById("LED").value;

  var code_1 = "#include <pic18fregs.h>\n#include <delay.h>\n\n";
  code_1 += "#pragma config XINST=OFF\n#pragma config FOSC = INTOSCIO_EC\n#pragma config WDT = OFF\n#pragma config LVP = OFF\n\n";
  code_1 += "#define LED_TRIS_Input TRISCbits.TRIS" + switch1 + "\n";
  code_1 += "#define LED_READ_Input PORTCbits.R" + switch1 + "\n\n";
  code_1 += "#define LED_TRIS_Output TRISDbits.TRIS" + LED + "\n";
  code_1 += "#define LED_LAT_Output LATDbits.LAT" + LED + "\n\n";
  code_1 += "void main(void)\n{\n";
  code_1 += "  LED_TRIS_Input=1;\n  LED_READ_Input=0;\n\n";
  code_1 += "  LED_TRIS_Output=0;\n  LED_LAT_Output=0;\n\n";
  code_1 += "  while(1)\n  {\n";
  code_1 += "    if(LED_READ_Input == 0X01)   //If the switch is pressed\n    {\n";
  code_1 += "         LED_LAT_Output = !LED_LAT_Output; //LED ON\n";
  var code = "         delay1ktcy(";
  code += interval + "); \n";
  var code_2 = "   }\n  }\n}";

  document.getElementById("code_1").value = code_1;
  document.getElementById("code").value = code;
  document.getElementById("code_2").value = code_2;
  alert("Code generated successfully!");
}

document.getElementById("download-code-btn").addEventListener("click", async () => {
  var req = new XMLHttpRequest();
  req.open("GET", "http://192.168.1.45:8081/download", true);
  req.responseType = "blob";
  req.onload = function (event) {
    if (req.status != 200) return;
    var blob = req.response;
    var fileName = "exp_2_code.c" //if you have the fileName header available
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
  };
  req.send();
});

document.getElementById("download-op-btn").addEventListener("click", async () => {
  var req = new XMLHttpRequest();
  req.open("GET", "http://192.168.1.45:8081/HEX", true);
  req.responseType = "blob";
  req.onload = function (event) {
    if (req.status != 200) return;
    var blob = req.response;
    var fileName = "exp_2_code.hex" //if you have the fileName header available
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
  };
  req.send();
});

document.getElementById("execute-btn").addEventListener("click", async () => {
  var req = new XMLHttpRequest();
  req.open("GET", "http://192.168.1.45:8081/execute", true);
  req.responseType = "";
  req.onload = function (event) {
    if (req.status != 200) return;
    var blob = JSON.parse(req.responseText);
    interval = blob;
  }
  req.send();
  // document.write(delayy);
});



document.getElementById("compile-btn").addEventListener("click", async () => {
  let filename = (document.getElementById("code_1").value + document.getElementById("code").value + document.getElementById("code_2").value) || "experiment_2";
  const response = await fetch("http://192.168.1.45:8081/compile", {
    method: "POST",
    headers: {
      'Access-Control-Allow-Headers': '*',
      'Content-Type': 'application/text'
    },
    body: filename,
  });
  if (!response.ok) {
    const errorMessage = await response.text();
    console.error(errorMessage);
    alert("code has errors");
    return;
  }
  var hexFilePath = await response.text();
  document.getElementById("code_log").value = hexFilePath;
  console.log(hexFilePath);
  alert("Check Terminal Window below Simulation for errors")
  state = 1;
  // display hex file path on the webpage
});

var images = [
  "exp_2_off.png",
  "exp_2_on.png"
];

var currentImage = 0;
var intervalId;
function updateImage() {
  var img = document.getElementById("myImage");
  img.src = images[currentImage];
  currentImage++;
  if (currentImage >= images.length) {
    currentImage = 0;
  }
}

function startImage() {
  updateImage();
  intervalId = setInterval(updateImage, interval);
}

function stopImage() {
  var img = document.getElementById("myImage");
  img.src = "exp_2_default.png";
  currentImage = 0;
  clearInterval(intervalId);
}

function showSavedMessage() {
  if (state == 1)
  {
    alert("Delay has been set as required");
    state = 0;
  }
  else
  {
    alert("Please compile the code first");
  }
}
