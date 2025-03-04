
//function mainPage1(){
	$("#main-div-conf").html('');	
     $("#canvas-div").html('');	
     //$("#canvas-div1").html('');
      $("#centerText1").html('DIAGRAM');
      $("#centerText2").html('CONFIGURATION');
 			//var htm = '<center><img src="images/chipImg.png" class="img-fluid" style="width: 80%;" ></center>'
	   // $("#canvas-div1").html(htm);
	
 
var selection = '<div class="row selectConf" >'
	+ '<div class="col-sm-1">'
	+ '</div>'
	+ '<div class="col-sm-5" id="IpinSelection" >'
	+ '<label class="labelstyle">Select Input Pin For Switch :</label>'
	+ '</div>'
	+ '<div class="col-sm-5">'
	+ '<select  class="form-control selectConf" id="inputPinName"  style="height:auto;" >'
	+ '<option value="0">--- Select Input Pin ---</option>'
	+ '<option value="1" name="RD0">RC0</option>'
	+ '<option value="2" name="RD1">RC1</option>'
	+ '<option value="3" name="RD2">RC2</option>'
	+ '<option value="4" name="RD3">RC3</option>'
	+ '<option value="5" name="RD4">RC4</option>'
	+ '<option value="6" name="RD5">RC5</option>'
	+ '<option value="7" name="RD6">RC6</option>'
	+ '<option value="8" name="RD7">RC7</option>'
	+ '</select>'
	+ '</div>'
	+ '<div class="col-sm-1">'
	+ '</div>'
	+ '</div>'
	
	+'<div class="row selectConf" >'
	+ '<div class="col-sm-1">'
	+ '</div>'
	+ '<div class="col-sm-5" id="OpinSelection" >'
	+ '<label class="labelstyle">Select Output Pin For LED :</label>'
	+ '</div>'
	+ '<div class="col-sm-5">'
	+ '<select  class="form-control selectConf" id="outputPinName"  style="height:auto;" disabled>'
	+ '<option value="0">--- Select Output Pin ---</option>'
	+ '<option value="1" name="RD0">RD0</option>'
	+ '<option value="2" name="RD1">RD1</option>'
	+ '<option value="3" name="RD2">RD2</option>'
	+ '<option value="4" name="RD3">RD3</option>'
	+ '<option value="5" name="RD4">RD4</option>'
	+ '<option value="6" name="RD5">RD5</option>'
	+ '<option value="7" name="RD6">RD6</option>'
	+ '<option value="8" name="RD7">RD7</option>'
	+ '</select>'
	+ '</div>'
	+ '<div class="col-sm-1">'
	+ '</div>'
	+ '</div>'
	
	+'<div class="row selectConf" >'
	+ '<div class="col-sm-1">'
	+ '</div>'
	+ '<div class="col-sm-5" id="sVal" >'
	+ '<label class="labelstyle">Select Switch Configuration : </label>'
	+ '</div>'
	+ '<div class="col-sm-5">'
	+ '<select  class="form-control selectConf" id="switchConfig"  style="height:auto;" disabled >'
	+ '<option value="0">--- Select Switch Configuration ---</option>'
	+ '<option value="1" >Press-to-High</option>'
	//+ '<option value="2" >Press-to-Low</option>'
	+ '</select>'
	+ '</div>'
	+ '<div class="col-sm-1">'
	+ '</div>'
	+ '</div>'
	
	+ '<div class="row selectConf" >'
	+ '<div class="col-sm-1">'
	+ '</div>'
	+ '<div class="col-sm-5" id="ledSelect" >'
	+ '<label class="labelstyle">Select LED Configuration :</label>'
	+ '</div>'
	+ '<div class="col-sm-5">'
	+ '<select  class="form-control selectConf" id="ledtype"  style="height:auto;" disabled>'
	+ '<option value="0">--- Select LED Configuration ---</option>'
	+ '<option value="1" >Current Sourcing</option>'
//	+ '<option value="2" >Current Sinking</option>'
	+ '</select>'
	+ '</div>'
	+ '<div class="col-sm-1">'
	+ '</div>'
	+ '</div>'


	+ '<div class="row" selectConf>'
	+ '<div class="col-sm-3" id="buttonDiv">'
	+ '<button type="button" class="btn btn-danger btnStyle button5" id="generateCode" data-toggle="modal" data-target="#myModal" disabled><b>GENERATE<br>CODE</b></button>'
	+ '</div>'
	+ '<div class="col-sm-3" id="buttonDiv">'
	+ '<button type="button" class="btn btn-success btnStyle button4" id="compileCode" data-toggle="modal" data-target="#myModal" disabled><b>COMPILE<br>CODE</b></button>'
	+ '</div>'
	+ '<div class="col-sm-3" id="buttonDiv">'
	+ '<button type="button" class="btn btn-success btnStyle button4" id="executeCode" data-toggle="modal" data-target="#myModal" disabled ><b>EXECUTE<br>CODE</b></button>'
	+ '</div>'
	+ '<div class="col-sm-3" id="buttonDiv">'
	+ '<button type="button" class="btn btn-primary btnStyle button2" id="downloadCode" data-toggle="modal"  disabled><i class="fa fa-download"></i> <b>DOWNLOAD<br>PROGRAM</b></button>'
	+ '</div>'
	+ '</div>'
	
	

    + '<div class="row  selectConf" id="codeview"   hidden>'
    + '<div class="col-sm-12" >'
    + '<p id="demo" style="margin-top:10px ;border-style: double;"></p>'
    + '</div>'
    + '</div>'
    
    + '<div class="row  selectConf" id="errorview"   hidden>'
    + '<div class="col-sm-12" >'
    + '<p id="errordemo" style="margin-top:10px ; border-style: double;"></p>'
    + '</div>'
    + '</div>'


	+ ' <!-- Modal -->'
	+ '<div class="modal fade" id="myModal" role="dialog">'
	+ ' <div class="modal-dialog modal-md">'
	+ '    <div class="modal-content">'
	+ '     <div class="modal-header">'

	+ '       <h4 class="modal-title">Message box</h4>'
	+ '       <button type="button" class="close" data-dismiss="modal" style="color:#fff;">&times;</button>'
	+ '     </div>'
	+ '     <div class="modal-body">'
	+ '       <p id="modelMsg"></p>'
	+ '     </div>'
	+ '     <div class="modal-footer">'
	+ '       <button type="button" class="btn btn-danger" id = "nextPage" data-dismiss="modal" >Okay</button>'
	+ '     </div>'
	+ '   </div>'
	+ ' </div>'
	+ '</div>'
	+ '</div>'
	+ '</div>'
	+ ' </div>'
$("#main-div-conf").html(selection);

var iPinSelect;
var oPinSelect;
var switchConfigSelect;
var LedConSelect;

var id=0;
var inputPinVal;
var outputPinVal;
var ledTypeVAl;
$("#inputPinName").change(function(){
		$("body").css("padding","0px 0px 0px 0px");	
		inputPinVal =parseInt( $("#inputPinName").val());
		if(inputPinVal<=0){
			toastr.warning("Select Input Pin.");
		}else{		  
		  $("#outputPinName").prop("disabled",false);			  
 		  $("#inputPinName").prop("disabled",true);	 
		}
		
		
	});

$("#outputPinName").change(function(){
		$("body").css("padding","0px 0px 0px 0px");	
		outputPinVal = $("#outputPinName").val();
		if(outputPinVal<=0){
			toastr.warning("Select Output Pin.");
		}else{		  
		  $("#switchConfig").prop("disabled",false);			  
 		  $("#outputPinName").prop("disabled",true);
		}
		
		
	});

$("#switchConfig").change(function(){
		$("body").css("padding","0px 0px 0px 0px");	
		dCycleVal = $("#switchConfig").val();
		if(dCycleVal<=0){
			toastr.warning("Select Output Pin.");
		}else{
		   $("#ledtype").prop("disabled",false);		  		  			  
 		  $("#switchConfig").prop("disabled",true);
		}	
	});

$("#ledtype").change(function(){
	$("body").css("padding","0px 0px 0px 0px");	
		ledTypeVAl = $("#ledtype").val(); 
		if(ledTypeVAl<=0){
			toastr.warning("Select LED Connection Type.");
		}else{	
		  $("#generateCode").prop("disabled",false);
		  $("#compileCode").prop("disabled",false);
		  $("#executeCode").prop("disabled",false);
		  $("#downloadCode").prop("disabled",false);	  
		  $("#ledtype").prop("disabled",true);			  	 
		}
		
})

	var flag = false;

$("#generateCode").click(function () {
//	$("#inputPinName").prop("disabled",true);
// 	$("#outputPinName").prop("disabled",true);
// 	$("#ledtype").prop("disabled",true);	
	$("#modelMsg").html("<b class='boldTextGreen'>Code Generated Successfully.</b>");
	flag=true;
		
	$("#codeview").prop("hidden",false);
	hexValue = calculateHex();
	var currentdate = new Date(); 
    var datetime = "Date: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " Time "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();


	var a ='<p>'+datetime+'</p><br>'	
    +'<p class="codeheaderfile">#include&#60;pic18fregs.h&#62; <br>#include&#60;delay.h&#62; </p>'

        +'<p>#pragma config XINST=OFF</p>'
        +'<p>#pragma config FOSC = INTOSCIO_EC</p>'
        +'<p>#pragma config WDT = OFF</p>'
        +'<p>#pragma config LVP = OFF</p>'
        
        +'<p>#define LED_TRIS_Input TRISCbits.<span class="greenCode">TRISC'+($("#inputPinName").val() - 1)+'</span></p>'
        +'<p>#define LED_LAT_Input PORTCbits.<span class="greenCode">RC'+($("#inputPinName").val() - 1)+'</span></p>'

        +'<p>#define LED_TRIS_Output TRISDbits.<span class="greenCode">TRISD'+($("#outputPinName").val() - 1)+'</span></p>'
        +'<p>#define LED_LAT_Output LATDbits.<span class="greenCode">LATD'+($("#outputPinName").val() - 1)+'</span></p>'
        
        +'<p>void main(void)</p>'
        +'<p>{</p>'
        +'<p>LED_TRIS_Input=1;</p>'
 	    +'<p>LED_READ_Input=0;</p>'
		+'<p>LED_TRIS_Output=0;</p>'
		+'<p>LED_LAT_Output=0;</p>'
		+'<p>&nbsp;	 while(1)</p>'
		+'<p>&nbsp;{</p>'
		+'<p>&nbsp;&nbsp;&nbsp;&nbsp;	if (LED_READ_Input == 0X01)   // If the switch is pressed</p>'
		+'<p>&nbsp;&nbsp;&nbsp;&nbsp;	{</p>'
		+'<p>	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	LED_LAT_Output = 0X01; // LED ON</p>'
//  		+'<p>delay1ktcy(<span class="greenCode">1000</span>); </p>'
		+'<p> &nbsp;&nbsp;&nbsp;&nbsp;	} </p>'
		+'<p>&nbsp;&nbsp;&nbsp;&nbsp;	else</p>'
		+'<p>&nbsp;&nbsp;&nbsp;&nbsp;	{</p>'
		+'<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;		LED_LAT_Output = 0X00; // LED OFF</p>'	
		+'<p>&nbsp;&nbsp;&nbsp;&nbsp;	}</p>'
		+'<p> &nbsp;}</p>'
		+'<p>}</p>'
//		+'<p></p>'

    $("#demo").html(a);

    $("#errorview").prop("hidden",false);
   	var b = '<b class="blink_text">_</b><br><br><br><br><br><br><br>'
	$("#errordemo").html(b);

});

var compileflag=false;
$("#compileCode").click(function(){
	
	compileflag=true;
	if(flag==true){
		$("#modelMsg").html("<b class='boldTextGreen'>Check Terminal Window Below Code for Errors.</b>");
		var b1 = '<p>Program Compiled Successfully.</p><br><br>'
		$("#errordemo").html(b1);
	}else{
		$("#modelMsg").html("<b class='boldTextGreen'>Please Generate The Code First.</b>");
	}
});
 

$("#executeCode").click(function () {
	if(compileflag==true){
		$("#modelMsg").html("<b class='boldTextGreen'>Code Executed Successfully.</b>");
			iPinSelect = $("#inputPinName").val();
			oPinSelect = $("#outputPinName").val();
			LedConSelect = $("#ledtype").val();
			switchConfigSelect= $("#switchConfig").val();
			$("#canvas-div").html('');
			$("#canvas-div1").html('');
			$("#plot").prop("hidden",false);
			mimic(iPinSelect,oPinSelect,switchConfigSelect,LedConSelect);
    
	}else{
//		mimic(iPinSelect,oPinSelect,switchConfigSelect,LedConSelect);
		$("#modelMsg").html("<b class='boldTextGreen'>Please Compile The Code First</b>");
	}
	
	
 
});

  var doc = new jsPDF();
	var specialElementHandlers = {
    '#editor': function (element, renderer) {
        return true;
    }
};
   

$("#downloadCode").click(function () {
	 if(flag==true){
			doc.fromHTML($('#demo').html(), 15, 15, {
        	'width': 170,
            'elementHandlers': specialElementHandlers
    		});
    		doc.save('sourcecode.pdf');
//			$("#modelMsg").html("<b class='boldTextGreen'>Download Code File Successfully.</b>");	
	}else{
//		$("#modelMsg").html("<b class='boldTextGreen'>Please Generate The Code First and Then You Can Download Code File.</b>");
		toastr.warning("Please Generate The Code First and Then You Can Download Code File.")
	}

 
});


//$(document).ready(function () {
    // Function to calculate hex value and update the input field
    function calculateHex() {
        var frequency = $("#fqVal").val();
        var hexValue;

        // Perform conversion based on selected frequency 
        switch (parseInt(frequency)) {
            case 1:
                hexValue = "0x42"; // Example value for 1 MHz
                break;
            case 2:
                hexValue = "0x52"; // Example value for 2 MHz
                break;
            case 3:
                hexValue = "0x62"; // Example value for 4 MHz
                break;

            case 4:
                hexValue = "0x72"; // Example value for 8 MHz
                break;
            case 5:
                hexValue = "0x12"; // Example value for 125 MHz
                break;
            case 6:
                hexValue = "0x22"; // Example value for 250 MHz
                break;
            case 7:
                hexValue = "0x32"; // Example value for 500 MHz
                break;
            // Add more cases for other frequencies as needed
            default:
                hexValue = "Unknown"; // Default value if frequency is not recognized
        }
		return hexValue;
        // Update the input field with the calculated hex value
//        $("#hexValue").val(hexValue);
    }


//}
