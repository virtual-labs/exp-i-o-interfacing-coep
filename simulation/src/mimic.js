

$('#canvas-div').removeAttr('width');
	$('#canvas-div').removeAttr('height');
	var w =660;
	var h = 550;

	var width = $(window).width();

	if ($(window).width() < 500) {
		width = $(this).width();
		paper = new Raphael(document.getElementById('canvas-div'), '100%', '100%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('100%', '100%');
	} else {
		paper = new Raphael(document.getElementById('canvas-div'), '100%', '100%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('100%', '100%');
	}

var x=100;
var y=160;	

//var Ledcircle = paper.circle(0, 0, 0); ;
//var resetimg=paper.image("images/reset.png",x+120,y-150,100, 50);

function mimic(iPinSelect,oPinSelect,switchConfigSelect,LedConSelect){
//	$("#main-div-conf").html('');	
//    $("#canvas-div").html('');
//    $("#canvas-div").html('<button id="checkBtn" class="btn btn-primary" style="margin-left:50px; margin-top:50px; "><b>Check Connection</b></button>');
    			
//    $("#checkBtn").prop('hidden',false);	
    $("#centerText1").html('MIMIC');
    $("#centerText2").html('CONFIGURATION');
    $('#canvas-div').removeAttr('width');
	$('#canvas-div').removeAttr('height');
	var w =650;
	var h = 550;
	
	var width = $(window).width();

	if ($(window).width() < 500) {
		width = $(this).width();
		paper = new Raphael(document.getElementById('canvas-div'), '100%', '100%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('100%', '100%');
	} else {
		paper = new Raphael(document.getElementById('canvas-div'), '100%', '100%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('100%', '100%');
	}

var x=100;
var y=160;	


var IpinVal=parseInt(iPinSelect);
var pinVal=parseInt(oPinSelect);					
var diodSelection2=parseInt(LedConSelect);
var switchConfigSelection=parseInt(switchConfigSelect);
//console.log("switchConfigSelection="+switchConfigSelection+"      ,  pinVal="+pinVal);
//console.log("IpinVal="+IpinVal);

//var interval_plot1=timeVal/1000;
//var offTime1=ON_dlyVal/1000;
//var onTime1=OFF_dlyVal/1000;
//var onTime11=onTime1+offTime1;
var interval_plot1=1000/1000;
var offTime1=500/1000;
var onTime1=500/1000;
var onTime11=onTime1+offTime1;

var checkStatus=paper.image("images/checkBtn1.png",x-90,y-150,200, 50);
var resetimg=paper.image("images/resetconnectioPreview.png",x+240,y-150,180, 50);
//var runimg=paper.image("images/runPreview.png",x+120,y-150,100, 50);
var microcontroller=paper.image("images/chipImg.png",x-40,y+40,400, 300).rotate(1);

var Ledcircle=paper.circle(x+228, y-21, 35);


var diodSelection=1;
//Math.floor(Math.random() * 2);
//console.log("diodSelection = "+diodSelection);
var diode;
var anode;
var cathode;
if (diodSelection==0){
	diode=paper.image("images/diodeSymbolMirrorImg_preview.png",x+150,y-95,150, 110);
	anode=paper.circle(x+283, y-19, 5).attr({'fill':'#FF0800'});
	cathode=paper.circle(x+168, y-19, 5).attr({'fill':'#FF0800'});
}else{	
	diode=paper.image("images/diodeSymbol2.png",x+150,y-95,150, 110);
	anode=paper.circle(x+168, y-19, 5).attr({'fill':'#FF0800'});
	cathode=paper.circle(x+283, y-19, 5).attr({'fill':'#FF0800'});
}



var r=paper.image("images/resistorSymbol.png",x+350,y-45,120, 55); 
var connection_RtoG=paper.path("M"+(x+436)+" "+(y-17.5)+"l 30 0 l 0 30   ").attr({'stroke-width':2});
var ground= paper.image("images/ground.png",x+440,y+10,50, 21);

var Rcircle=paper.circle(x+363, y-17.5, 5).attr({'fill':'#FF0800'});
//var Ledcircle2=paper.circle(x+228, y-21, 35);

var terminalRD0=paper.circle(x+158, y+61, 5).attr({'fill':'#FF0800'});
var terminalRD1=paper.circle(x+142, y+61, 5).attr({'fill':'#FF0800'});
var terminalRD2=paper.circle(x+127, y+61, 5).attr({'fill':'#FF0800'});
var terminalRD3=paper.circle(x+111, y+61, 5).attr({'fill':'#FF0800'});
var terminalRD4=paper.circle(x+28, y+116, 5).attr({'fill':'#FF0800'});
var terminalRD5=paper.circle(x+28, y+130, 5).attr({'fill':'#FF0800'});
var terminalRD6=paper.circle(x+28, y+144, 5).attr({'fill':'#FF0800'});
var terminalRD7=paper.circle(x+28, y+156.5, 5).attr({'fill':'#FF0800'});

var terminalRC0=paper.circle(x+258, y+118, 5).attr({'fill':'#1a0dab'});
var terminalRC1=paper.circle(x+206, y+61, 5).attr({'fill':'#1a0dab'});
var terminalRC2=paper.circle(x+190, y+61, 5).attr({'fill':'#1a0dab'});
var terminalRC3=paper.circle(x+174, y+61, 5).attr({'fill':'#1a0dab'});
var terminalRC4=paper.circle(x+95, y+61, 5).attr({'fill':'#1a0dab'});
var terminalRC5=paper.circle(x+80, y+61, 5).attr({'fill':'#1a0dab'});
var terminalRC6=paper.circle(x+64, y+61, 5).attr({'fill':'#1a0dab'});
var terminalRC7=paper.circle(x+28, y+102, 5).attr({'fill':'#1a0dab'});


//var ground_circle=paper.circle(x+325,y+263,5).attr({'fill':' #FF0000'});
var vddCircle=paper.circle(x+28, y+184, 5).attr({'fill':'#000'});
var vdd= paper.image("images/VDD5V.png",x-76.4,y+115,55, 51);
var vddConnection=paper.path("M"+(x+24)+" "+(y+184)+"l -81 0 l 0 -22").attr({'stroke-width':3});

var switchCircleNAme=paper.text(x+320, y+85,"Switch").attr({"font-weight":"bold",'font-size': 14});
var switchCircleNAme=paper.text(x+320, y+102,"Terminal").attr({"font-weight":"bold",'font-size': 14});
var switchCircle=paper.circle(x+308, y+118, 5).attr({'fill':'#1a0dab'});
var switchbaseImg=paper.image("images/switchPIC2.png",x+358,y+72,101, 50);
var switchTopImg=paper.image("images/PICswitchTopPreview.png",x+370,y+50,78, 41);


if(switchConfigSelection==1){
	var vssCircle=paper.circle(x+258, y+158, 5).attr({'fill':'#000'});
	var resister2=paper.image("images/resistorSymbol.png",x+282,y+180,120, 55).rotate(90); 
//	var resister2reading=paper.text(x+368,y+210,"1K").attr({'font-size':14,'stroke':'#800000'});
	var groundConnection=paper.path("M"+(x+262)+" "+(y+158)+"l 80 0 l 0 10 l 0 -50 l -30 0 l 50 -1"
						+"M"+(x+456)+" "+(y+118)+" l 56 0 l 0 -50").attr({'stroke-width':3});
	var ground1= paper.image("images/ground.png",x+317,y+250,50, 21);
	var vdd2= paper.image("images/VDD5V.png",x+492.5,y+25,55, 51);
}else{
	var resister2=paper.image("images/resistorSymbol.png",x+410,y+137,120, 55).rotate(90); 
//	var resister2reading=paper.text(x+490,y+165,"1K").attr({'font-size':14,'stroke':'#800000'});
	var sConnection=paper.path("M"+(x+310)+" "+(y+118)+"l 50 -0.7 ").attr({'stroke-width':3});
	var groundConnection=paper.path("M"+(x+455)+" "+(y+118)+"l 16 0 ").attr({'stroke-width':3});
	var ground1= paper.image("images/ground.png",x+445,y+208,50, 21);
//	var vdd2= paper.image("images/VDD5V.png",x+492.5,y+25,55, 51);
}




resetimg.click(function(){
	$("#canvas-div").html('');
//	$("#plot").html("");
		paper.clear();
		mimic(iPinSelect,oPinSelect,switchConfigSelect,LedConSelect);	
		$("#plot").prop("hidden",false);
		setRedflag=false;		
		statusFlag=false;
		reset();
	
})


var crossCheckConnect=false;
var cathodFlag=0;
cathode.click(function(){
	cathodFlag=1;
//	console.log("cathodFlag"+cathodFlag);
	var cathode_connection_arr=[];	
	if(verifyRcircleConnect==true){
		toastr.success("Already Connected.");
	}else{
		if (diodSelection==0){
		if(RcircleFlag==1){	
//			crossCheckConnect=true;	
			cathode_connection_arr[0]=paper.path("M "+(x+360)+" "+(y-18.5)+ "l 0 0").attr({'stroke-width':3});			
			cathode_connection_arr[0].animate({path :"M"+(x+360)+" "+(y-18.5)+"l -30 -1   "},1000, function(){
			
			cathode_connection_arr[0]=paper.path("M "+(x+330)+" "+(y-18.5)+ "l 0 0").attr({'stroke-width':3});
			cathode_connection_arr[0].animate({path :"M"+(x+330)+" "+(y-18.5)+" l 0 -50 "},1000, function(){
			
			cathode_connection_arr[0]=paper.path("M "+(x+331)+" "+(y-68.5)+ "l 0 0").attr({'stroke-width':3});
			cathode_connection_arr[0].animate({path :"M"+(x+331)+" "+(y-68.5)+"l -164 0"},1000, function(){
			
			cathode_connection_arr[0]=paper.path("M "+(x+168)+" "+(y-68.5)+ "l 0 0").attr({'stroke-width':3});
			cathode_connection_arr[0].animate({path :"M"+(x+168)+" "+(y-68.5)+"l 0 46"},1000, function(){
				crossCheckConnect=true;	
			});
			});
			});	
			});	
		}
	}else{
		if(RcircleFlag==1){	
			
			cathode_connection_arr[0]=paper.path("M "+(x+360)+" "+(y-18.5)+ "l 0 0").attr({'stroke-width':3});			
			cathode_connection_arr[0].animate({path :"M"+(x+360)+" "+(y-18.5)+"l -73 -1 "},1000, function(){
//			console.log("cathode.click...... cathodFlag="+cathodFlag+", RcircleFlag ="+RcircleFlag);
			crossCheckConnect=true;	
			});	
		}
	}
	}
})

var verifyRcircleConnect=false;
var RcircleFlag=0;
Rcircle.click(function(){
	RcircleFlag=1;
//	console.log("RcircleFlag"+RcircleFlag);
	var cathode_connection_arr=[];	

	if( crossCheckConnect==true){
		toastr.success("Already Connected.");
	}else{
		if (diodSelection==0){
			if(cathodFlag==1){	
				
				cathode_connection_arr[0]=paper.path("M "+(x+168)+" "+(y-23.5)+ "l 0 0").attr({'stroke-width':3});
				cathode_connection_arr[0].animate({path :"M"+(x+168)+" "+(y-23.5)+"l 0 -46"},1000, function(){
						
				cathode_connection_arr[0]=paper.path("M "+(x+168)+" "+(y-68.5)+ "l 0 0").attr({'stroke-width':3});
				cathode_connection_arr[0].animate({path :"M"+(x+168)+" "+(y-68.5)+"l 164 0"},1000, function(){
				
				cathode_connection_arr[0]=paper.path("M "+(x+331)+" "+(y-68.5)+ "l 0 0").attr({'stroke-width':3});
				cathode_connection_arr[0].animate({path :"M"+(x+331)+" "+(y-68.5)+" l 0 50 "},1000, function(){
					
				cathode_connection_arr[0]=paper.path("M "+(x+330)+" "+(y-18.5)+ "l 0 0").attr({'stroke-width':3});			
				cathode_connection_arr[0].animate({path :"M"+(x+330)+" "+(y-18.5)+"l 30 1   "},1000, function(){
				verifyRcircleConnect=true;
				});
				});
				});	
				});	
			}
		}else{
			if(cathodFlag==1){
	//			console.log("Rcircle Click ....RcircleFlag="+RcircleFlag+" , cathodFlag="+cathodFlag);
				cathode_connection_arr[0]=paper.path("M "+(x+287)+" "+(y-18.5)+ "l 0 0").attr({'stroke-width':3});			
				cathode_connection_arr[0].animate({path :"M"+(x+287)+" "+(y-18.5)+"l 73 1 "},1000, function(){
					verifyRcircleConnect=true;
				});
			}
		}
	}

})



	var D0click=false;
	var D1click=false;
	var D2click=false;
	var D3click=false;
	var D4click=false;
	var D5click=false;
	var D6click=false;
	var D7click=false;


	var pinName=0;	
	if(pinVal==1){
//		pinName=1;
		D0click=true;
	}else if(pinVal==2){
//		pinName=2;
		D1click=true;
	}else if(pinVal==3){
//		pinName=3;
		D2click=true;
	}else if(pinVal==4){
//		pinName=4;			
		D3click=true;
	}else if(pinVal==5){
//		pinName=5;
		D4click=true;
	}else if(pinVal==6){
//		pinName=6;
		D5click=true;
	}else if(pinVal==7){
//		pinName=7;
		D6click=true;
	}else if(pinVal==8){
//		pinName=8;
		D7click=true;
	}else{
//		alert("Wrong Connection.Please Try Again");
	}

var anodeClick=false;
var d0Flag=0;
var d1Flag=0;
var d2Flag=0;
var d3Flag=0;
var d4Flag=0;
var d5Flag=0;
var d6Flag=0;
var d7Flag=0;

var anode_connection_arr2=[];
var anodeflg=0;

var checkflag1=0;
var checkflag2=0;
var checkflag3=0;
var checkflag4=0;
var checkflag5=0;
var checkflag6=0;
var checkflag7=0;
var checkflag8=0;

var vfyRD0Connect=false;
var vfyRD1Connect=false;
var vfyRD2Connect=false;
var vfyRD3Connect=false;
var vfyRD4Connect=false;
var vfyRD5Connect=false;
var vfyRD6Connect=false; 
var vfyRD7Connect=false;

terminalRD0.click(function(){
d0Flag=1;
checkflag1=1;
//	d0Flag=1;
	if(verifyAconnect==true){
		success("Already Connected.");
	}else{
		if (diodSelection==0){
			if(checkflag2==1 || checkflag3==1 || checkflag4==1 || checkflag5==1 || checkflag6==1 || checkflag7==1 || checkflag8==1){
					toastr.info("Click on 'Check Connection' Button.");
				}else if(anodeflg==1){
					anode_connection_arr2[0]=paper.path("M "+(x+283)+" "+(y-15)+ "l 0 0").attr({'stroke-width':3});			
					anode_connection_arr2[0].animate({path :"M"+(x+283)+" "+(y-15)+"l 0 40 "},500, function(){
					
					anode_connection_arr2[0]=paper.path("M "+(x+284)+" "+(y+25)+ "l 0 0").attr({'stroke-width':3});			
					anode_connection_arr2[0].animate({path :"M"+(x+284)+" "+(y+25)+"l -127 0 "},500, function(){
							
					anode_connection_arr2[0]=paper.path("M "+(x+158)+" "+(y+25)+ "l 0 0").attr({'stroke-width':3});
					anode_connection_arr2[0].animate({path :"M"+(x+158)+" "+(y+25)+" l 0 33"},500, function(){
						vfyRD0Connect=true;	
						pinName=1;
						checkflag1=1;
					});	
					});
					});
			}
		
		}else{
					if(checkflag2==1 || checkflag3==1 || checkflag4==1 || checkflag5==1 || checkflag6==1 || checkflag7==1 || checkflag8==1){
						toastr.info("Click on 'Check Connection' Button.");
					}else if(anodeflg==1){
						anode_connection_arr2[0]=paper.path("M "+(x+164)+" "+(y-19)+ "l 0 0").attr({'stroke-width':3});			
						anode_connection_arr2[0].animate({path :"M"+(x+164)+" "+(y-19)+"l -7.2 0 "},500, function(){
								
						anode_connection_arr2[0]=paper.path("M "+(x+158)+" "+(y-19)+ "l 0 0").attr({'stroke-width':3});
						anode_connection_arr2[0].animate({path :"M"+(x+158)+" "+(y-19)+" l 0 76"},500, function(){
							vfyRD0Connect=true;	
							pinName=1;
							checkflag1=1;
						});	
						});
					}
		}
	}
})

terminalRD1.click(function(){
d1Flag=1;
checkflag2=1;
	if(verifyAconnect==true){
			toastr.success("Already Connected.");
	}else{
		if (diodSelection==0){
			if(checkflag1==1 || checkflag3==1 || checkflag4==1 || checkflag5==1 || checkflag6==1 || checkflag7==1 || checkflag8==1){
					toastr.info("Click on 'Check Connection' Button.");
			}else if(anodeflg==1){
					anode_connection_arr2[0]=paper.path("M "+(x+283)+" "+(y-15)+ "l 0 0").attr({'stroke-width':3});			
					anode_connection_arr2[0].animate({path :"M"+(x+283)+" "+(y-15)+"l 0 40 "},500, function(){
					
					anode_connection_arr2[0]=paper.path("M "+(x+284)+" "+(y+25)+ "l 0 0").attr({'stroke-width':3});			
					anode_connection_arr2[0].animate({path :"M"+(x+284)+" "+(y+25)+"l -143 0 "},500, function(){
							
					anode_connection_arr2[0]=paper.path("M "+(x+142)+" "+(y+25)+ "l 0 0").attr({'stroke-width':3});
					anode_connection_arr2[0].animate({path :"M"+(x+142)+" "+(y+25)+" l 0 33"},500, function(){
						vfyRD1Connect=true;	
						pinName=2;
						checkflag2=1;
					});	
					});
					});
			}
		}else{
			if(checkflag1==1 || checkflag3==1 || checkflag4==1 || checkflag5==1 || checkflag6==1 || checkflag7==1 || checkflag8==1){
				toastr.info("Click on 'Check Connection' Button.");		
			}else if(anodeflg==1){			
				anode_connection_arr2[0]=paper.path("M "+(x+164)+" "+(y-19)+ "l 0 0").attr({'stroke-width':3});			
				anode_connection_arr2[0].animate({path :"M"+(x+164)+" "+(y-19)+"l -23 0 "},500, function(){
				
				anode_connection_arr2[0]=paper.path("M "+(x+142)+" "+(y-19)+ "l 0 0").attr({'stroke-width':3});
				anode_connection_arr2[0].animate({path :"M"+(x+142)+" "+(y-19)+" l 0 76"},500, function(){
					vfyRD1Connect=true;
					pinName=2;
	//				checkflag2=1;
		//			d1Flag=1;
				});	
				});
			}
		}
	}
})

terminalRD2.click(function(){
d2Flag=1;
checkflag3=1;
if(verifyAconnect==true){
		toastr.success("Already Connected.");
}else{
	if (diodSelection==0){ 
		if(checkflag1==1 || checkflag2==1 || checkflag4==1 || checkflag5==1 || checkflag6==1 || checkflag7==1 || checkflag8==1){
				toastr.info("Click on 'Check Connection' Button.");
		}else if(anodeflg==1){
				anode_connection_arr2[0]=paper.path("M "+(x+283)+" "+(y-15)+ "l 0 0").attr({'stroke-width':3});			
				anode_connection_arr2[0].animate({path :"M"+(x+283)+" "+(y-15)+"l 0 40 "},500, function(){
				
				anode_connection_arr2[0]=paper.path("M "+(x+284)+" "+(y+25)+ "l 0 0").attr({'stroke-width':3});			
				anode_connection_arr2[0].animate({path :"M"+(x+284)+" "+(y+25)+"l -158 0 "},500, function(){
						
				anode_connection_arr2[0]=paper.path("M "+(x+127)+" "+(y+25)+ "l 0 0").attr({'stroke-width':3});
				anode_connection_arr2[0].animate({path :"M"+(x+127)+" "+(y+25)+" l 0 33"},500, function(){
					vfyRD2Connect=true;	
					pinName=3;
//					checkflag3=1;
				});	
				});
				});
		}
				
	}else{
			if(checkflag1==1 || checkflag2==1 || checkflag4==1 || checkflag5==1 || checkflag6==1 || checkflag7==1 || checkflag8==1){
				toastr.info("Click on 'Check Connection' Button.");		
			}else if(anodeflg==1){
				anode_connection_arr2[0]=paper.path("M "+(x+164)+" "+(y-19)+ "l 0 0").attr({'stroke-width':3});			
				anode_connection_arr2[0].animate({path :"M"+(x+164)+" "+(y-19)+"l -38 0 "},500, function(){
				
				anode_connection_arr2[0]=paper.path("M "+(x+127)+" "+(y-19)+ "l 0 0").attr({'stroke-width':3});
				anode_connection_arr2[0].animate({path :"M"+(x+127)+" "+(y-19)+" l 0 76"},500, function(){
					vfyRD2Connect=true;
					pinName=3;
//					checkflag3=1;
		//	d2Flag=1;
				});	
				});
			}
	}
}
})

terminalRD3.click(function(){
//	pinName=4;
	checkflag4=1;
	d3Flag=1;
if(verifyAconnect==true){
		toastr.success("Already Connected.");
}else{
	if (diodSelection==0){
			if(checkflag1==1 ||  checkflag2==1  || checkflag3==1 || checkflag5==1 || checkflag6==1 || checkflag7==1 || checkflag8==1){
				toastr.info("Click on 'Check Connection' Button.");		
			}else if(anodeflg==1){
				anode_connection_arr2[0]=paper.path("M "+(x+283)+" "+(y-15)+ "l 0 0").attr({'stroke-width':3});			
				anode_connection_arr2[0].animate({path :"M"+(x+283)+" "+(y-15)+"l 0 40 "},500, function(){
				
				anode_connection_arr2[0]=paper.path("M "+(x+284)+" "+(y+25)+ "l 0 0").attr({'stroke-width':3});			
				anode_connection_arr2[0].animate({path :"M"+(x+284)+" "+(y+25)+"l -174 0 "},500, function(){
						
				anode_connection_arr2[0]=paper.path("M "+(x+111)+" "+(y+25)+ "l 0 0").attr({'stroke-width':3});
				anode_connection_arr2[0].animate({path :"M"+(x+111)+" "+(y+25)+" l 0 33"},500, function(){
				vfyRD3Connect=true;
					pinName=4;
//					checkflag4=1;
				});	
				});
				});
			}
			
	}else{
	
			if(checkflag1==1 ||  checkflag2==1  || checkflag3==1 || checkflag5==1 || checkflag6==1 || checkflag7==1 || checkflag8==1){
				toastr.info("Click on 'Check Connection' Button.");		
			}else if(anodeflg==1){
				anode_connection_arr2[0]=paper.path("M "+(x+164)+" "+(y-19)+ "l 0 0").attr({'stroke-width':3});			
				anode_connection_arr2[0].animate({path :"M"+(x+164)+" "+(y-19)+"l -54.5 0 "},500, function(){
				
				anode_connection_arr2[0]=paper.path("M "+(x+111)+" "+(y-19)+ "l 0 0").attr({'stroke-width':3});
				anode_connection_arr2[0].animate({path :"M"+(x+111)+" "+(y-19)+" l 0 76"},500, function(){
					vfyRD3Connect=true;	
					pinName=4;
//					checkflag4=1;
					//	d3Flag=1;
				});	
				});
			}	
	}
}
})

terminalRD4.click(function(){
//	pinName=5;
	checkflag5=1;
	d4Flag=1;
if(verifyAconnect==true){
		toastr.success("Already Connected.");
}else{	
	if (diodSelection==0){
			if(checkflag1==1 ||  checkflag2==1  || checkflag3==1 || checkflag4==1 || checkflag6==1 || checkflag7==1 || checkflag8==1){
				toastr.info("Click on 'Check Connection' Button.");		
			}else if(anodeflg==1){
				anode_connection_arr2[0]=paper.path("M "+(x+283)+" "+(y-15)+ "l 0 0").attr({'stroke-width':3});			
				anode_connection_arr2[0].animate({path :"M"+(x+283)+" "+(y-15)+"l 0 40 "},500, function(){
				
				anode_connection_arr2[0]=paper.path("M "+(x+284)+" "+(y+25)+ "l 0 0").attr({'stroke-width':3});			
				anode_connection_arr2[0].animate({path :"M"+(x+284)+" "+(y+25)+"l -275.2 0 "},500, function(){
						
				anode_connection_arr2[0]=paper.path("M "+(x+10)+" "+(y+25)+ "l 0 0").attr({'stroke-width':3});
				anode_connection_arr2[0].animate({path :"M"+(x+10)+" "+(y+25)+" l 0 92"},500, function(){
				
				anode_connection_arr2[0]=paper.path("M "+(x+10)+" "+(y+116)+ "l 0 0").attr({'stroke-width':3});
				anode_connection_arr2[0].animate({path :"M"+(x+10)+" "+(y+116)+" l 15 0"},500, function(){
					vfyRD4Connect=true;	
					pinName=5;
//					checkflag5=1;
				});
				});	
				});
				});
			}	
	}else{
			if(checkflag1==1 ||  checkflag2==1  || checkflag3==1 || checkflag4==1 || checkflag6==1 || checkflag7==1 || checkflag8==1){
				toastr.info("Click on 'Check Connection' Button.");		
			}else if(anodeflg==1){
				anode_connection_arr2[0]=paper.path("M "+(x+164)+" "+(y-19)+ "l 0 0").attr({'stroke-width':3});			
				anode_connection_arr2[0].animate({path :"M"+(x+164)+" "+(y-19)+"l -171.3 0 "},500, function(){
				
				anode_connection_arr2[0]=paper.path("M "+(x-6)+" "+(y-19)+ "l 0 0").attr({'stroke-width':3});
				anode_connection_arr2[0].animate({path :"M"+(x-6)+" "+(y-19)+" l 0 136.2"},500, function(){
				
				anode_connection_arr2[0]=paper.path("M "+(x-6)+" "+(y+116)+ "l 0 0").attr({'stroke-width':3});
				anode_connection_arr2[0].animate({path :"M"+(x-6)+" "+(y+116)+" l 30 0"},500, function(){
					vfyRD4Connect=true;
					pinName=5;
//					checkflag5=1;
					//	d4Flag=1;
				});	
				});	
				});		
			}
	}
}
});

terminalRD5.click(function(){
//	pinName=6;
	checkflag6=1;
	d5Flag=1;
if(verifyAconnect==true){
		toastr.success("Already Connected.");
}else{
	if (diodSelection==0){
		if(checkflag1==1 ||  checkflag2==1  || checkflag3==1 || checkflag4==1 || checkflag5==1 || checkflag7==1 || checkflag8==1){
				toastr.info("Click on 'Check Connection' Button.");		
		}else if(anodeflg==1){
				anode_connection_arr2[0]=paper.path("M "+(x+283)+" "+(y-15)+ "l 0 0").attr({'stroke-width':3});			
				anode_connection_arr2[0].animate({path :"M"+(x+283)+" "+(y-15)+"l 0 40 "},500, function(){
				
				anode_connection_arr2[0]=paper.path("M "+(x+284)+" "+(y+25)+ "l 0 0").attr({'stroke-width':3});			
				anode_connection_arr2[0].animate({path :"M"+(x+284)+" "+(y+25)+"l -275.2 0 "},500, function(){
						
				anode_connection_arr2[0]=paper.path("M "+(x+10)+" "+(y+25)+ "l 0 0").attr({'stroke-width':3});
				anode_connection_arr2[0].animate({path :"M"+(x+10)+" "+(y+25)+" l 0 106"},1000, function(){
				
				anode_connection_arr2[0]=paper.path("M "+(x+10)+" "+(y+130)+ "l 0 0").attr({'stroke-width':3});
				anode_connection_arr2[0].animate({path :"M"+(x+10)+" "+(y+130)+" l 15 0"},1000, function(){					
					vfyRD5Connect=true;	
					pinName=6;
//					checkflag6=1;
				});
				});	
				});
				});
		}
	}else{
		if(checkflag1==1 ||  checkflag2==1  || checkflag3==1 || checkflag4==1 || checkflag5==1 || checkflag7==1 || checkflag8==1){
				toastr.info("Click on 'Check Connection' Button.");		
		}else if(anodeflg==1){
				anode_connection_arr2[0]=paper.path("M "+(x+164)+" "+(y-19)+ "l 0 0").attr({'stroke-width':3});			
				anode_connection_arr2[0].animate({path :"M"+(x+164)+" "+(y-19)+"l -171.3 0 "},500, function(){
				
				anode_connection_arr2[0]=paper.path("M "+(x-6)+" "+(y-19)+ "l 0 0").attr({'stroke-width':3});
				anode_connection_arr2[0].animate({path :"M"+(x-6)+" "+(y-19)+" l 0 150.2"},1000, function(){
				
				anode_connection_arr2[0]=paper.path("M "+(x-6)+" "+(y+130)+ "l 0 0").attr({'stroke-width':3});
				anode_connection_arr2[0].animate({path :"M"+(x-6)+" "+(y+130)+" l 30 0"},1000, function(){					
					vfyRD5Connect=true;
					pinName=6;
//					checkflag6=1;
				//	d5Flag=1;
				});	
				});	
				});
		}
	}
}	
	
})

terminalRD6.click(function(){
//	pinName=7;
	checkflag7=1;
	d6Flag=1;
if(verifyAconnect==true){
		toastr.success("Already Connected.");
}else{	
	if (diodSelection==0){
		if(checkflag1==1 ||  checkflag2==1  || checkflag3==1 || checkflag4==1 || checkflag5==1 || checkflag6==1 || checkflag8==1){
			toastr.info("Click on 'Check Connection' Button.");		
		}else if(anodeflg==1){
				anode_connection_arr2[0]=paper.path("M "+(x+283)+" "+(y-15)+ "l 0 0").attr({'stroke-width':3});			
				anode_connection_arr2[0].animate({path :"M"+(x+283)+" "+(y-15)+"l 0 40 "},500, function(){
				
				anode_connection_arr2[0]=paper.path("M "+(x+284)+" "+(y+25)+ "l 0 0").attr({'stroke-width':3});			
				anode_connection_arr2[0].animate({path :"M"+(x+284)+" "+(y+25)+"l -275.2 0 "},500, function(){
						
				anode_connection_arr2[0]=paper.path("M "+(x+10)+" "+(y+25)+ "l 0 0").attr({'stroke-width':3});
				anode_connection_arr2[0].animate({path :"M"+(x+10)+" "+(y+25)+" l 0 120"},1000, function(){
				
				anode_connection_arr2[0]=paper.path("M "+(x+10)+" "+(y+144)+ "l 0 0").attr({'stroke-width':3});
				anode_connection_arr2[0].animate({path :"M"+(x+10)+" "+(y+144)+" l 15 0"},1000, function(){
					vfyRD6Connect=true; 
					pinName=7;
//					checkflag7=1;
				});
				});	
				});
				});
		}
	}else{
		if(checkflag1==1 ||  checkflag2==1  || checkflag3==1 || checkflag4==1 || checkflag5==1 || checkflag6==1 || checkflag8==1){
			toastr.info("Click on 'Check Connection' Button.");		
		}else if(anodeflg==1){
				anode_connection_arr2[0]=paper.path("M "+(x+164)+" "+(y-19)+ "l 0 0").attr({'stroke-width':3});			
				anode_connection_arr2[0].animate({path :"M"+(x+164)+" "+(y-19)+"l -171.3 0 "},500, function(){
				
				anode_connection_arr2[0]=paper.path("M "+(x-6)+" "+(y-19)+ "l 0 0").attr({'stroke-width':3});
				anode_connection_arr2[0].animate({path :"M"+(x-6)+" "+(y-19)+" l 0 164.4"},1000, function(){
				
				anode_connection_arr2[0]=paper.path("M "+(x-6)+" "+(y+144)+ "l 0 0").attr({'stroke-width':3});
				anode_connection_arr2[0].animate({path :"M"+(x-6)+" "+(y+144)+" l 30 0"},1000, function(){
					vfyRD6Connect=true; 
					pinName=7;
//					checkflag7=1;
					//	d6Flag=1;
				});	
				});	
				});	
			}
	}
}	
})

terminalRD7.click(function(){
//	pinName=8;
	checkflag8=1;
d7Flag=1;
if(verifyAconnect==true){
		toastr.success("Already Connected.");
}else{
	if (diodSelection==0){
		if(checkflag1==1 ||  checkflag2==1  || checkflag3==1 || checkflag4==1 || checkflag5==1 || checkflag6==1 || checkflag7==1){
				toastr.info("Click on 'Check Connection' Button.");		
		}else if(anodeflg==1){
				anode_connection_arr2[0]=paper.path("M "+(x+283)+" "+(y-15)+ "l 0 0").attr({'stroke-width':3});			
				anode_connection_arr2[0].animate({path :"M"+(x+283)+" "+(y-15)+"l 0 40 "},500, function(){
				
				anode_connection_arr2[0]=paper.path("M "+(x+284)+" "+(y+25)+ "l 0 0").attr({'stroke-width':3});			
				anode_connection_arr2[0].animate({path :"M"+(x+284)+" "+(y+25)+"l -275.2 0 "},500, function(){
						
				anode_connection_arr2[0]=paper.path("M "+(x+10)+" "+(y+25)+ "l 0 0").attr({'stroke-width':3});
				anode_connection_arr2[0].animate({path :"M"+(x+10)+" "+(y+25)+" l 0 132"},1000, function(){
				
				anode_connection_arr2[0]=paper.path("M "+(x+10)+" "+(y+156)+ "l 0 0").attr({'stroke-width':3});
				anode_connection_arr2[0].animate({path :"M"+(x+10)+" "+(y+156)+" l 15 0"},1000, function(){
					vfyRD7Connect=true;		
					pinName=8;
//					checkflag8=1;
				});
				});	
				});
				});
		}
	}else{
		if(checkflag1==1 ||  checkflag2==1  || checkflag3==1 || checkflag4==1 || checkflag5==1 || checkflag6==1 || checkflag7==1){
				toastr.info("Click on 'Check Connection' Button.");		
		}else if(anodeflg==1){
				anode_connection_arr2[0]=paper.path("M "+(x+164)+" "+(y-19)+ "l 0 0").attr({'stroke-width':3});			
				anode_connection_arr2[0].animate({path :"M"+(x+164)+" "+(y-19)+"l -171.3 0 "},500, function(){
				
				anode_connection_arr2[0]=paper.path("M "+(x-6)+" "+(y-19)+ "l 0 0").attr({'stroke-width':3});
				anode_connection_arr2[0].animate({path :"M"+(x-6)+" "+(y-19)+" l 0 176"},1000, function(){
				
				anode_connection_arr2[0]=paper.path("M "+(x-6)+" "+(y+156)+ "l 0 0").attr({'stroke-width':3});
				anode_connection_arr2[0].animate({path :"M"+(x-6)+" "+(y+156)+" l 30 0"},1000, function(){
					vfyRD7Connect=true;	
					pinName=8;
//					checkflag8=1;
					//	d7Flag=1;
				});	
				});	
				});	
		}
	}
	
}	
});

var verifyAconnect=false;
anode.click(function(){
	anodeflg=1;
	anodeClick=true;
	
	var anode_connection_arr=[];
	if (diodSelection==0){
		TtoAconnectionforRDiod2();
	}else{
		TtoAconnection();
	}
	
});


//VDD Ground and Resister Connections for RC0 to RC7

var switchCircleFlag=0;
var switchCircleClick=false;
var vfySwitchConnect=false;
switchCircle.click(function(){
//	console.log("switcheCircle");
	switchCircleFlag=1;
	switchCircleClick=true;
	TtoVDDGRconnectionforDiod1();
	
});

var c0Flag=0;
var c1Flag=0;
var c2Flag=0;
var c3Flag=0;
var c4Flag=0;
var c5Flag=0;
var c6Flag=0;
var c7Flag=0;

var inputpinName=0;

var inputCheckFlag1=0;
var inputCheckFlag2=0;
var inputCheckFlag3=0;
var inputCheckFlag4=0;
var inputCheckFlag5=0;
var inputCheckFlag6=0;
var inputCheckFlag7=0;
var inputCheckFlag8=0;

var vfyRc0Connect=false;
var vfyRc1Connect=false;
var vfyRc2Connect=false;
var vfyRc3Connect=false;
var vfyRc4Connect=false;
var vfyRc5Connect=false;
var vfyRc6Connect=false; 
var vfyRc7Connect=false;


var StoT_connection_arr2=[];
terminalRC0.click(function(){
c0Flag=1;
inputCheckFlag1=1;
if(vfySwitchConnect==true){
	toastr.success("Already Connected.");
}else{
		if(inputCheckFlag2==1 || inputCheckFlag3==1 || inputCheckFlag4==1 || inputCheckFlag5==1 || inputCheckFlag6==1 || inputCheckFlag7==1 || inputCheckFlag8==1){
				toastr.info("Click on 'Check Connection' Button.");
			}else if(switchCircleFlag==1){
				StoT_connection_arr2[0]=paper.path("M "+(x+304)+" "+(y+118)+ "l 0 0").attr({'stroke-width':3 ,'stroke':'#1a0dab'});			
				StoT_connection_arr2[0].animate({path :"M"+(x+304)+" "+(y+118)+"l -42 0"},500, function(){
					vfyRc0Connect=true;
					inputpinName=1;
//					inputCheckFlag1=1;
				});	

		}
}	
});

terminalRC1.click(function(){
c1Flag=1;
inputCheckFlag2=1;
if(vfySwitchConnect==true){
	toastr.success("Already Connected.");
}else{
		if(inputCheckFlag1==1 || inputCheckFlag3==1 || inputCheckFlag4==1 || inputCheckFlag5==1 || inputCheckFlag6==1 || inputCheckFlag7==1 || inputCheckFlag8==1){
				toastr.info("Click on 'Check Connection' Button.");
			}else if(switchCircleFlag==1){
				StoT_connection_arr2[0]=paper.path("M "+(x+304)+" "+(y+118)+ "l 0 0").attr({'stroke-width':3 ,'stroke':'#1a0dab'});			
				StoT_connection_arr2[0].animate({path :"M"+(x+304)+" "+(y+118)+"l -20 0"},500, function(){
				
				StoT_connection_arr2[0]=paper.path("M "+(x+285)+" "+(y+118)+ "l 0 0").attr({'stroke-width':3,'stroke':'#1a0dab'});			
				StoT_connection_arr2[0].animate({path :"M"+(x+285)+" "+(y+118)+"l 0 -81"},500, function(){
				
				StoT_connection_arr2[0]=paper.path("M "+(x+285)+" "+(y+38)+ "l 0 0").attr({'stroke-width':3,'stroke':'#1a0dab'});			
				StoT_connection_arr2[0].animate({path :"M"+(x+285)+" "+(y+38)+"l -80 0"},500, function(){
				
				StoT_connection_arr2[0]=paper.path("M "+(x+206)+" "+(y+37)+ "l 0 0").attr({'stroke-width':3,'stroke':'#1a0dab'});			
				StoT_connection_arr2[0].animate({path :"M"+(x+206)+" "+(y+37)+"l 0 19"},500, function(){
					vfyRc1Connect=true;
					inputpinName=2;
//					inputCheckFlag1=1;
				});	
				});	
				});
				});
		}
}	
});

terminalRC2.click(function(){
c2Flag=1;
inputCheckFlag3=1;
if(vfySwitchConnect==true){
	toastr.success("Already Connected.");
}else{
		if(inputCheckFlag1==1 || inputCheckFlag2==1 || inputCheckFlag4==1 || inputCheckFlag5==1 || inputCheckFlag6==1 || inputCheckFlag7==1 || inputCheckFlag8==1){
				toastr.info("Click on 'Check Connection' Button.");
			}else if(switchCircleFlag==1){
				StoT_connection_arr2[0]=paper.path("M "+(x+304)+" "+(y+118)+ "l 0 0").attr({'stroke-width':3,'stroke':'#1a0dab'});			
				StoT_connection_arr2[0].animate({path :"M"+(x+304)+" "+(y+118)+"l -20 0"},500, function(){
				
				StoT_connection_arr2[0]=paper.path("M "+(x+285)+" "+(y+118)+ "l 0 0").attr({'stroke-width':3,'stroke':'#1a0dab'});			
				StoT_connection_arr2[0].animate({path :"M"+(x+285)+" "+(y+118)+"l 0 -81"},500, function(){
				
				StoT_connection_arr2[0]=paper.path("M "+(x+285)+" "+(y+38)+ "l 0 0").attr({'stroke-width':3,'stroke':'#1a0dab'});			
				StoT_connection_arr2[0].animate({path :"M"+(x+285)+" "+(y+38)+"l -96 0"},500, function(){
				
				StoT_connection_arr2[0]=paper.path("M "+(x+190)+" "+(y+37)+ "l 0 0").attr({'stroke-width':3,'stroke':'#1a0dab'});			
				StoT_connection_arr2[0].animate({path :"M"+(x+190)+" "+(y+37)+"l 0 19"},500, function(){
					vfyRc2Connect=true;
					inputpinName=3;
//					inputCheckFlag1=3;
				});	
				});	
				});
				});
		}
}	
});

terminalRC3.click(function(){
	c3Flag=1;
	inputCheckFlag4=1;
if(vfySwitchConnect==true){
	toastr.success("Already Connected.");
}else{
		if(inputCheckFlag1==1 || inputCheckFlag2==1 || inputCheckFlag3==1 || inputCheckFlag5==1 || inputCheckFlag6==1 || inputCheckFlag7==1 || inputCheckFlag8==1){
				toastr.info("Click on 'Check Connection' Button.");
			}else if(switchCircleFlag==1){
				StoT_connection_arr2[0]=paper.path("M "+(x+304)+" "+(y+118)+ "l 0 0").attr({'stroke-width':3,'stroke':'#1a0dab'});			
				StoT_connection_arr2[0].animate({path :"M"+(x+304)+" "+(y+118)+"l -20 0"},500, function(){
				
				StoT_connection_arr2[0]=paper.path("M "+(x+285)+" "+(y+118)+ "l 0 0").attr({'stroke-width':3,'stroke':'#1a0dab'});			
				StoT_connection_arr2[0].animate({path :"M"+(x+285)+" "+(y+118)+"l 0 -81"},500, function(){
				
				StoT_connection_arr2[0]=paper.path("M "+(x+285)+" "+(y+38)+ "l 0 0").attr({'stroke-width':3,'stroke':'#1a0dab'});			
				StoT_connection_arr2[0].animate({path :"M"+(x+285)+" "+(y+38)+"l -111 0"},500, function(){
				
				StoT_connection_arr2[0]=paper.path("M "+(x+174)+" "+(y+37)+ "l 0 0").attr({'stroke-width':3,'stroke':'#1a0dab'});			
				StoT_connection_arr2[0].animate({path :"M"+(x+174)+" "+(y+37)+"l 0 19"},500, function(){
					vfyRc3Connect=true;
					inputpinName=4;
//					inputCheckFlag1=4;
				});	
				});	
				});
				});
		}
}	
});

terminalRC4.click(function(){
	c4Flag=1;
inputCheckFlag5=1;
if(vfySwitchConnect==true){
	toastr.success("Already Connected.");
}else{
		if(inputCheckFlag1==1 || inputCheckFlag2==1 || inputCheckFlag3==1 || inputCheckFlag4==1 || inputCheckFlag6==1 || inputCheckFlag7==1 || inputCheckFlag8==1){
				toastr.info("Click on 'Check Connection' Button.");
			}else if(switchCircleFlag==1){
				StoT_connection_arr2[0]=paper.path("M "+(x+304)+" "+(y+118)+ "l 0 0").attr({'stroke-width':3,'stroke':'#1a0dab'});			
				StoT_connection_arr2[0].animate({path :"M"+(x+304)+" "+(y+118)+"l -20 0"},500, function(){
				
				StoT_connection_arr2[0]=paper.path("M "+(x+285)+" "+(y+118)+ "l 0 0").attr({'stroke-width':3,'stroke':'#1a0dab'});			
				StoT_connection_arr2[0].animate({path :"M"+(x+285)+" "+(y+118)+"l 0 -81"},500, function(){
				
				StoT_connection_arr2[0]=paper.path("M "+(x+285)+" "+(y+38)+ "l 0 0").attr({'stroke-width':3,'stroke':'#1a0dab'});			
				StoT_connection_arr2[0].animate({path :"M"+(x+285)+" "+(y+38)+"l -135 0"},500, function(){
				
//				var connectionAngleImg=paper.image("images/connectionAnglePreview.png",(x+144),(y+27),27,17);
				
				StoT_connection_arr2[0]=paper.path("M "+(x+152)+" "+(y+38)+ "l 0 0").attr({'stroke-width':3,'stroke':'#1a0dab'});			
				StoT_connection_arr2[0].animate({path :"M"+(x+152)+" "+(y+38)+"l -57 0 "},500, function(){
				
				StoT_connection_arr2[0]=paper.path("M "+(x+95)+" "+(y+37)+ "l 0 0").attr({'stroke-width':3,'stroke':'#1a0dab'});			
				StoT_connection_arr2[0].animate({path :"M"+(x+95)+" "+(y+37)+"l 0 19"},500, function(){
					vfyRc4Connect=true;
					inputpinName=5;
//					inputCheckFlag1=5;
				});	
				});
				});	
				});
				});
		}
}	
});

terminalRC5.click(function(){
	c5Flag=1;
	inputCheckFlag6=1;
if(vfySwitchConnect==true){
	toastr.success("Already Connected.");
}else{
		if(inputCheckFlag1==1 || inputCheckFlag2==1 || inputCheckFlag3==1 || inputCheckFlag4==1 || inputCheckFlag5==1 || inputCheckFlag7==1 || inputCheckFlag8==1){
				toastr.info("Click on 'Check Connection' Button.");
			}else if(switchCircleFlag==1){
				StoT_connection_arr2[0]=paper.path("M "+(x+304)+" "+(y+118)+ "l 0 0").attr({'stroke-width':3,'stroke':'#1a0dab'});			
				StoT_connection_arr2[0].animate({path :"M"+(x+304)+" "+(y+118)+"l -20 0"},500, function(){
				
				StoT_connection_arr2[0]=paper.path("M "+(x+285)+" "+(y+118)+ "l 0 0").attr({'stroke-width':3,'stroke':'#1a0dab'});			
				StoT_connection_arr2[0].animate({path :"M"+(x+285)+" "+(y+118)+"l 0 -81"},500, function(){
				
				StoT_connection_arr2[0]=paper.path("M "+(x+285)+" "+(y+38)+ "l 0 0").attr({'stroke-width':3,'stroke':'#1a0dab'});			
				StoT_connection_arr2[0].animate({path :"M"+(x+285)+" "+(y+38)+"l -205 0"},500, function(){
				
//				var connectionAngleImg=paper.image("images/connectionAnglePreview.png",(x+144),(y+27),27,17);
				
//				StoT_connection_arr2[0]=paper.path("M "+(x+152)+" "+(y+38)+ "l 0 0").attr({'stroke-width':3});			
//				StoT_connection_arr2[0].animate({path :"M"+(x+152)+" "+(y+38)+"l -57 0"},500, function(){
				
				StoT_connection_arr2[0]=paper.path("M "+(x+80)+" "+(y+37)+ "l 0 0").attr({'stroke-width':3,'stroke':'#1a0dab'});			
				StoT_connection_arr2[0].animate({path :"M"+(x+80)+" "+(y+37)+"l 0 19"},500, function(){
					vfyRc5Connect=true;
					inputpinName=6;
//					inputCheckFlag1=3;
				});	
				});
				});	
				});
//				});
		}
}	
});

terminalRC6.click(function(){
	c6Flag=1;
	inputCheckFlag7=1;
if(vfySwitchConnect==true){
	toastr.success("Already Connected.");
}else{
		if(inputCheckFlag1==1 || inputCheckFlag2==1 || inputCheckFlag3==1 || inputCheckFlag4==1 || inputCheckFlag5==1 || inputCheckFlag6==1 || inputCheckFlag8==1){
				toastr.info("Click on 'Check Connection' Button.");
			}else if(switchCircleFlag==1){
				StoT_connection_arr2[0]=paper.path("M "+(x+304)+" "+(y+118)+ "l 0 0").attr({'stroke-width':3,'stroke':'#1a0dab'});			
				StoT_connection_arr2[0].animate({path :"M"+(x+304)+" "+(y+118)+"l -20 0"},500, function(){
				
				StoT_connection_arr2[0]=paper.path("M "+(x+285)+" "+(y+118)+ "l 0 0").attr({'stroke-width':3,'stroke':'#1a0dab'});			
				StoT_connection_arr2[0].animate({path :"M"+(x+285)+" "+(y+118)+"l 0 -81"},500, function(){
				
				StoT_connection_arr2[0]=paper.path("M "+(x+285)+" "+(y+38)+ "l 0 0").attr({'stroke-width':3,'stroke':'#1a0dab'});			
				StoT_connection_arr2[0].animate({path :"M"+(x+285)+" "+(y+38)+"l -221 0"},500, function(){
				
//				var connectionAngleImg=paper.image("images/connectionAnglePreview.png",(x+144),(y+27),27,17);
				
//				StoT_connection_arr2[0]=paper.path("M "+(x+152)+" "+(y+38)+ "l 0 0").attr({'stroke-width':3});			
//				StoT_connection_arr2[0].animate({path :"M"+(x+152)+" "+(y+38)+"l -57 0"},500, function(){
				
				StoT_connection_arr2[0]=paper.path("M "+(x+64)+" "+(y+37)+ "l 0 0").attr({'stroke-width':3,'stroke':'#1a0dab'});			
				StoT_connection_arr2[0].animate({path :"M"+(x+64)+" "+(y+37)+"l 0 19"},500, function(){
					vfyRc6Connect=true; 
					inputpinName=7;
//					inputCheckFlag1=3;
				});	
				});
				});	
				});
//				});
		}
}	
});

terminalRC7.click(function(){
	c7Flag=1;
	inputCheckFlag8=1;
if(vfySwitchConnect==true){
	toastr.success("Already Connected.");
}else{
		if(inputCheckFlag1==1 || inputCheckFlag2==1 || inputCheckFlag3==1 || inputCheckFlag4==1 || inputCheckFlag5==1 || inputCheckFlag6==1 || inputCheckFlag7==1){
				toastr.info("Click on 'Check Connection' Button.");
			}else if(switchCircleFlag==1){
				StoT_connection_arr2[0]=paper.path("M "+(x+304)+" "+(y+118)+ "l 0 0").attr({'stroke-width':3,'stroke':'#1a0dab'});			
				StoT_connection_arr2[0].animate({path :"M"+(x+304)+" "+(y+118)+"l -20 0"},500, function(){
				
				StoT_connection_arr2[0]=paper.path("M "+(x+285)+" "+(y+118)+ "l 0 0").attr({'stroke-width':3,'stroke':'#1a0dab'});			
				StoT_connection_arr2[0].animate({path :"M"+(x+285)+" "+(y+118)+"l 0 -81"},500, function(){
				
				StoT_connection_arr2[0]=paper.path("M "+(x+285)+" "+(y+38)+ "l 0 0").attr({'stroke-width':3,'stroke':'#1a0dab'});			
				StoT_connection_arr2[0].animate({path :"M"+(x+285)+" "+(y+38)+"l -275 0"},500, function(){
								
				StoT_connection_arr2[0]=paper.path("M "+(x+10)+" "+(y+37)+ "l 0 0").attr({'stroke-width':3,'stroke':'#1a0dab'});			
				StoT_connection_arr2[0].animate({path :"M"+(x+10)+" "+(y+37)+"l 0 66"},500, function(){
					
				StoT_connection_arr2[0]=paper.path("M "+(x+10)+" "+(y+102)+ "l 0 0").attr({'stroke-width':3,'stroke':'#1a0dab'});			
				StoT_connection_arr2[0].animate({path :"M"+(x+10)+" "+(y+102)+"l 14 0"},500, function(){
					vfyRc7Connect=true;
					inputpinName=8;
//					inputCheckFlag1=3;
				});	
				});
				});	
				});
				});
		}
}	
});

var connectionRed;
function redInputconnection(){
	if(IpinVal==1){
		connectionRed=paper.path("M "+(x+304)+" "+(y+118)+ "l -42 0").attr({'stroke-width':3 ,'stroke':'#FF0000'});	
	}else if(IpinVal==2){
		connectionRed=paper.path("M "+(x+304)+" "+(y+118)+ "l -20 0 l 0 -81 l -78 0 l 0 19").attr({'stroke-width':3 ,'stroke':'#FF0000'});		
	}else if(IpinVal==3){
		connectionRed=paper.path("M "+(x+304)+" "+(y+118)+ "l -20 0 l 0 -81 l -94 0 l 0 19").attr({'stroke-width':3 ,'stroke':'#FF0000'});		
	}else if(IpinVal==4){
		connectionRed=paper.path("M "+(x+304)+" "+(y+118)+ "l -20 0 l 0 -81 l -110 0 l 0 19").attr({'stroke-width':3 ,'stroke':'#FF0000'});		
	}else if(IpinVal==5){
		connectionRed=paper.path("M "+(x+304)+" "+(y+118)+ "l -20 0 l 0 -81 l -135 0 l -54 0 l 0 19").attr({'stroke-width':3 ,'stroke':'#FF0000'});		
	}else if(IpinVal==6){
		connectionRed=paper.path("M "+(x+304)+" "+(y+118)+ "l -20 0 l 0 -81 l -204 0 l 0 19").attr({'stroke-width':3 ,'stroke':'#FF0000'});				
	}else if(IpinVal==7){
		connectionRed=paper.path("M "+(x+304)+" "+(y+118)+ "l -20 0 l 0 -81 l -220 0 l 0 19").attr({'stroke-width':3 ,'stroke':'#FF0000'});				
	}else if(IpinVal==8){
		connectionRed=paper.path("M "+(x+304)+" "+(y+118)+ "l -20 0 l 0 -81 l -275 0 l 0 66 l 14 0").attr({'stroke-width':3 ,'stroke':'#FF0000'});				
	}else{
		
	}			
}

function blueInputconnection(){

	if(IpinVal==1){
		connectionRed=paper.path("M "+(x+304)+" "+(y+118)+ "l -42 0").attr({'stroke-width':3 ,'stroke':'#1a0dab'});	
	}else if(IpinVal==2){
		connectionRed=paper.path("M "+(x+304)+" "+(y+118)+ "l -20 0 l 0 -81 l -78 0 l 0 19").attr({'stroke-width':3 ,'stroke':'#1a0dab'});		
	}else if(IpinVal==3){
		connectionRed=paper.path("M "+(x+304)+" "+(y+118)+ "l -20 0 l 0 -81 l -94 0 l 0 19").attr({'stroke-width':3 ,'stroke':'#1a0dab'});		
	}else if(IpinVal==4){
		connectionRed=paper.path("M "+(x+304)+" "+(y+118)+ "l -20 0 l 0 -81 l -110 0 l 0 19").attr({'stroke-width':3 ,'stroke':'#1a0dab'});		
	}else if(IpinVal==5){
		connectionRed=paper.path("M "+(x+304)+" "+(y+118)+ "l -20 0 l 0 -81 l -135 0 l -54 0 l 0 19").attr({'stroke-width':3 ,'stroke':'#1a0dab'});		
	}else if(IpinVal==6){
		connectionRed=paper.path("M "+(x+304)+" "+(y+118)+ "l -20 0 l 0 -81 l -204 0 l 0 19").attr({'stroke-width':3 ,'stroke':'#1a0dab'});				
	}else if(IpinVal==7){
		connectionRed=paper.path("M "+(x+304)+" "+(y+118)+ "l -20 0 l 0 -81 l -220 0 l 0 19").attr({'stroke-width':3 ,'stroke':'#1a0dab'});				
	}else if(IpinVal==8){
		connectionRed=paper.path("M "+(x+304)+" "+(y+118)+ "l -20 0 l 0 -81 l -275 0 l 0 66 l 14 0").attr({'stroke-width':3 ,'stroke':'#1a0dab'});				
	}else{
		
	}			
}

var cntVal=1;
function blink() {	
                if (cntVal%2==0) {
                    redInputconnection();
//                    console.log("IF cntVal = "+cntVal);
                } else {
                    blueInputconnection();
//                    console.log("ELSE cntVal = "+cntVal);
                }
                cntVal++;
                
//                console.log("cntVal = "+cntVal);
}

var switchpress='';
var arrowImg;
var arrowImg1;
checkStatus.click(function(){
	
//console.log("anodeflg"+anodeflg+", pinval="+pinVal+ ",pinname =" + pinName+", RcircleFlag="+RcircleFlag+", cathodFlag="+cathodFlag +", IpinVal="+IpinVal+", inputpinName="+inputpinName);

	if(anodeflg==1 && pinVal==pinName && RcircleFlag==1 && cathodFlag==1 && switchCircleFlag==1 && IpinVal==inputpinName){
		statusFlag=true;				
//		$("#plot").html("");
//		$("#plot").prop("hidden",false);
//		start();
		start(1,0,1);
		
		toastr.success("Connection Established Successfully.Now Click on Switch.");	
		switchpress=paper.text(x+365,y+3,"Click and Hold the Switch").attr({'font-size':14});
		arrowImg=paper.image("images/downArrowIMG.gif",x+385,y+13,50, 40);	
		
	}else if(RcircleFlag==0 && cathodFlag==0){
		toastr.warning("First Establish Cathode Connection.")
	}else if(anodeflg!=1 && pinVal!=pinName || IpinVal!=inputpinName){
		toastr.warning("Connect the pin properly.")
	}else{
		toastr.warning("Wrong Connection. Please Try Again.");
	}
});




var myInterval;
switchTopImg.mousedown( function() { 
	setRedflag=true;
	if(statusFlag==true){
		onTime1 = 1000/1000;
		offTime1 = 0/1000;
		switchpress.hide();
		arrowImg.hide();
		switchTopImg.animate({transform: ['t',0, 10]}, 100);
		$("#plot").prop("hidden",false);
		start(interval_plot1,onTime1,offTime1);
		//myInterval = setInterval(blink, 100); 
		
	}else{
		toastr.warning("Please Check Connection Status.");
	}
 })

switchTopImg.mouseup( function() {
	cntVal=1;
	
	setRedflag=false;
	if(statusFlag==true){
		onTime1 = 0/1000;
		offTime1 = 1000/1000;
		switchpress.show();
		arrowImg.show();		

	//var LedImg1=paper.image("images/offDiode.png", 285, 95, 85, 85);
//		var arrowImg11=paper.rect(x+389,y+7,40, 45).attr({'stroke':'#fff','fill':'#fff'});
		switchTopImg.animate({transform: ['t',0, 0]}, 100);
	$("#plot").prop("hidden",false);
	start(interval_plot1,onTime1,offTime1);
		//reset();		
	}else{
		toastr.warning("Please Check Connection Status.");
	}
	
 })
 


function TtoVDDGRconnectionforDiod1(){
	var anode_connection_arr11=[];
	if(vfyRc0Connect==true || vfyRc1Connect==true || vfyRc2Connect==true || vfyRc3Connect==true || vfyRc4Connect==true || vfyRc5Connect==true || vfyRc6Connect==true || vfyRc7Connect==true){
		toastr.success("Already Connected.");
	}else{
			if(switchCircleFlag==1 && c0Flag==1){
				//pin1
				anode_connection_arr11[0]=paper.path("M "+(x+262)+" "+(y+118)+ "l 0 0").attr({'stroke-width':3,'stroke':'#1a0dab'});
				anode_connection_arr11[0].animate({path :"M"+(x+262)+" "+(y+118)+" l 42 0"},1000, function(){
				vfySwitchConnect=true;
				inputpinName=1;
				
				});
				
			}else if(switchCircleFlag==1 && c1Flag==1){
				//pin2
				anode_connection_arr11[0]=paper.path("M "+(x+206)+" "+(y+57)+"l 0 0").attr({'stroke-width':3,'stroke':'#1a0dab'});
				anode_connection_arr11[0].animate({path :"M"+(x+206)+" "+(y+57)+" l 0 -28.3"},1000, function(){
				
				anode_connection_arr11[0]=paper.path("M "+(x+206)+" "+(y+30)+"l 0 0").attr({'stroke-width':3,'stroke':'#1a0dab'});			
				anode_connection_arr11[0].animate({path :"M"+(x+206)+" "+(y+30)+"l 103 0 "},500, function(){
					
				anode_connection_arr11[0]=paper.path("M "+(x+308)+" "+(y+30)+ "l 0 0").attr({'stroke-width':3,'stroke':'#1a0dab'});			
				anode_connection_arr11[0].animate({path :"M"+(x+308)+" "+(y+30)+"l 0 84 "},500, function(){
				
				vfySwitchConnect=true;
				inputpinName=2;	
				});
				});	
				});
		}else if(switchCircleFlag==1 && c2Flag==1){
				//pin3
				anode_connection_arr11[0]=paper.path("M "+(x+190)+" "+(y+57)+"l 0 0").attr({'stroke-width':3,'stroke':'#1a0dab'});
				anode_connection_arr11[0].animate({path :"M"+(x+190)+" "+(y+57)+" l 0 -28.3"},1000, function(){
				
				anode_connection_arr11[0]=paper.path("M "+(x+190)+" "+(y+30)+"l 0 0").attr({'stroke-width':3,'stroke':'#1a0dab'});			
				anode_connection_arr11[0].animate({path :"M"+(x+190)+" "+(y+30)+"l 119 0 "},500, function(){
					
				anode_connection_arr11[0]=paper.path("M "+(x+308)+" "+(y+30)+ "l 0 0").attr({'stroke-width':3,'stroke':'#1a0dab'});			
				anode_connection_arr11[0].animate({path :"M"+(x+308)+" "+(y+30)+"l 0 84 "},500, function(){
				vfySwitchConnect=true;
				inputpinName=3;	
				});
				});	
				});
		}else if(switchCircleFlag==1 && c3Flag==1){
				//pin4
				anode_connection_arr11[0]=paper.path("M "+(x+174)+" "+(y+57)+"l 0 0").attr({'stroke-width':3,'stroke':'#1a0dab'});
				anode_connection_arr11[0].animate({path :"M"+(x+174)+" "+(y+57)+" l 0 -28.3"},1000, function(){
				
				anode_connection_arr11[0]=paper.path("M "+(x+174)+" "+(y+30)+"l 0 0").attr({'stroke-width':3,'stroke':'#1a0dab'});			
				anode_connection_arr11[0].animate({path :"M"+(x+174)+" "+(y+30)+"l 135 0 "},500, function(){
					
				anode_connection_arr11[0]=paper.path("M "+(x+308)+" "+(y+30)+ "l 0 0").attr({'stroke-width':3,'stroke':'#1a0dab'});			
				anode_connection_arr11[0].animate({path :"M"+(x+308)+" "+(y+30)+"l 0 84 "},500, function(){
				vfySwitchConnect=true;
				inputpinName=4;
				});	
				});	
				});
		}else if(switchCircleFlag==1 && c4Flag==1){
				anode_connection_arr11[0]=paper.path("M "+(x+95)+" "+(y+57)+"l 0 0").attr({'stroke-width':3,'stroke':'#1a0dab'});
				anode_connection_arr11[0].animate({path :"M"+(x+95)+" "+(y+57)+" l 0 -28.3"},1000, function(){
				
				anode_connection_arr11[0]=paper.path("M "+(x+95)+" "+(y+30)+"l 0 0").attr({'stroke-width':3,'stroke':'#1a0dab'});			
				anode_connection_arr11[0].animate({path :"M"+(x+95)+" "+(y+30)+"l 214.1 0 "},500, function(){
					
				anode_connection_arr11[0]=paper.path("M "+(x+308)+" "+(y+30)+ "l 0 0").attr({'stroke-width':3,'stroke':'#1a0dab'});			
				anode_connection_arr11[0].animate({path :"M"+(x+308)+" "+(y+30)+"l 0 84 "},500, function(){
				vfySwitchConnect=true;
				inputpinName=5;
				});	
				});	
				});	
		}else if(switchCircleFlag==1 && c5Flag==1){
				anode_connection_arr11[0]=paper.path("M "+(x+80)+" "+(y+57)+"l 0 0").attr({'stroke-width':3,'stroke':'#1a0dab'});
				anode_connection_arr11[0].animate({path :"M"+(x+80)+" "+(y+57)+" l 0 -28.3"},1000, function(){
				
				anode_connection_arr11[0]=paper.path("M "+(x+80)+" "+(y+30)+"l 0 0").attr({'stroke-width':3,'stroke':'#1a0dab'});			
				anode_connection_arr11[0].animate({path :"M"+(x+80)+" "+(y+30)+"l 229.1 0 "},500, function(){
					
				anode_connection_arr11[0]=paper.path("M "+(x+308)+" "+(y+30)+ "l 0 0").attr({'stroke-width':3,'stroke':'#1a0dab'});			
				anode_connection_arr11[0].animate({path :"M"+(x+308)+" "+(y+30)+"l 0 84 "},500, function(){
				vfySwitchConnect=true;
				inputpinName=6;	
				});
				});	
				});	
		}else if(switchCircleFlag==1 && c6Flag==1){
				anode_connection_arr11[0]=paper.path("M "+(x+64)+" "+(y+57)+"l 0 0").attr({'stroke-width':3,'stroke':'#1a0dab'});
				anode_connection_arr11[0].animate({path :"M"+(x+64)+" "+(y+57)+" l 0 -28.3"},1000, function(){
				
				anode_connection_arr11[0]=paper.path("M "+(x+64)+" "+(y+30)+"l 0 0").attr({'stroke-width':3,'stroke':'#1a0dab'});			
				anode_connection_arr11[0].animate({path :"M"+(x+64)+" "+(y+30)+"l 245.1 0 "},500, function(){
					
				anode_connection_arr11[0]=paper.path("M "+(x+308)+" "+(y+30)+ "l 0 0").attr({'stroke-width':3,'stroke':'#1a0dab'});			
				anode_connection_arr11[0].animate({path :"M"+(x+308)+" "+(y+30)+"l 0 84 "},500, function(){
				vfySwitchConnect=true;
				inputpinName=7;	
				});
				});	
				});	
		}else if(switchCircleFlag==1 && c7Flag==1){
				anode_connection_arr11[0]=paper.path("M "+(x+25)+" "+(y+102)+"l 0 0").attr({'stroke-width':3,'stroke':'#1a0dab'});
				anode_connection_arr11[0].animate({path :"M"+(x+25)+" "+(y+102)+" l -11 0"},1000, function(){
					
				anode_connection_arr11[0]=paper.path("M "+(x+15)+" "+(y+102)+"l 0 0").attr({'stroke-width':3,'stroke':'#1a0dab'});
				anode_connection_arr11[0].animate({path :"M"+(x+15)+" "+(y+102)+" l 0 -73"},1000, function(){
				
				anode_connection_arr11[0]=paper.path("M "+(x+15)+" "+(y+30)+"l 0 0").attr({'stroke-width':3,'stroke':'#1a0dab'});			
				anode_connection_arr11[0].animate({path :"M"+(x+15)+" "+(y+30)+"l 294 0 "},500, function(){
					
				anode_connection_arr11[0]=paper.path("M "+(x+308)+" "+(y+30)+ "l 0 0").attr({'stroke-width':3,'stroke':'#1a0dab'});			
				anode_connection_arr11[0].animate({path :"M"+(x+308)+" "+(y+30)+"l 0 84 "},500, function(){
				vfySwitchConnect=true;
				inputpinName=8;	
				});
				});	
				});	
				});
		}else{
	//		alert("Wrong Connection.Please Try Again");
		}
		
	}
}


function createPopup(x, y, message) {
    // Draw rectangle
    var rect = paper.rect(x, y, 180, 40, 10).attr({
        fill: "#c4f5e6",
        stroke: "#3d6b5d"
    });

    // Add text
    var text = paper.text(x + 90, y + 20, message).attr({
        "text-anchor": "middle",
        "stroke":"#e02424",
//        "font-weight":"bold"
    });

    // Combine rectangle and text into a set
    var popup = paper.set();
    popup.push(rect, text);

    // Function to hide popup
    popup.hide = function() {
        this.animate({opacity: 0}, 300, function() {
            this.remove();
        });
    };
    return popup;
}

function TtoAconnectionforRDiod2(){
	var anode_connection_arr1=[];
	if(vfyRD0Connect==true || vfyRD1Connect==true || vfyRD2Connect==true || vfyRD3Connect==true || vfyRD4Connect==true || vfyRD5Connect==true || vfyRD6Connect==true || vfyRD7Connect==true){
		toastr.success("Already Connected.");
	}else{
			if(anodeflg==1 && d0Flag==1 ){
				//pin1
				anode_connection_arr1[0]=paper.path("M "+(x+158)+" "+(y+57)+ "l 0 0").attr({'stroke-width':3});
				anode_connection_arr1[0].animate({path :"M"+(x+158)+" "+(y+57)+" l 0 -33"},1000, function(){
				
				anode_connection_arr1[0]=paper.path("M "+(x+158)+" "+(y+25)+ "l 0 0").attr({'stroke-width':3});			
				anode_connection_arr1[0].animate({path :"M"+(x+158)+" "+(y+25)+"l 127 0 "},500, function(){
					
				anode_connection_arr1[0]=paper.path("M "+(x+283)+" "+(y+25)+ "l 0 0").attr({'stroke-width':3});			
				anode_connection_arr1[0].animate({path :"M"+(x+283)+" "+(y+25)+"l 0 -40 "},500, function(){	
				verifyAconnect=true;				
				pinName=1;
				});	
				});
				});
					
			}else if(anodeflg==1 && d1Flag==1){
				//pin2
				anode_connection_arr1[0]=paper.path("M "+(x+142)+" "+(y+57)+ "l 0 0").attr({'stroke-width':3});
				anode_connection_arr1[0].animate({path :"M"+(x+142)+" "+(y+57)+" l 0 -33"},1000, function(){
				
				anode_connection_arr1[0]=paper.path("M "+(x+142)+" "+(y+25)+ "l 0 0").attr({'stroke-width':3});			
				anode_connection_arr1[0].animate({path :"M"+(x+142)+" "+(y+25)+"l 142 0 "},500, function(){
					
				anode_connection_arr1[0]=paper.path("M "+(x+283)+" "+(y+25)+ "l 0 0").attr({'stroke-width':3});			
				anode_connection_arr1[0].animate({path :"M"+(x+283)+" "+(y+25)+"l 0 -40 "},500, function(){
				verifyAconnect=true;
				pinName=2;	
				});
				});	
				});
			}else if(anodeflg==1 && d2Flag==1){
				//pin3
				anode_connection_arr1[0]=paper.path("M "+(x+127)+" "+(y+57)+ "l 0 0").attr({'stroke-width':3});
				anode_connection_arr1[0].animate({path :"M"+(x+127)+" "+(y+57)+" l 0 -33"},1000, function(){
				
				anode_connection_arr1[0]=paper.path("M "+(x+127)+" "+(y+25)+ "l 0 0").attr({'stroke-width':3});			
				anode_connection_arr1[0].animate({path :"M"+(x+127)+" "+(y+25)+"l 157 0 "},500, function(){
					
				anode_connection_arr1[0]=paper.path("M "+(x+283)+" "+(y+25)+ "l 0 0").attr({'stroke-width':3});			
				anode_connection_arr1[0].animate({path :"M"+(x+283)+" "+(y+25)+"l 0 -40 "},500, function(){
				verifyAconnect=true;
				pinName=3;	
				});
				});	
				});
			}else if(anodeflg==1 && d3Flag==1){
				//pin4
				anode_connection_arr1[0]=paper.path("M "+(x+111)+" "+(y+57)+ "l 0 0").attr({'stroke-width':3});
				anode_connection_arr1[0].animate({path :"M"+(x+111)+" "+(y+57)+" l 0 -33"},1000, function(){
				
				anode_connection_arr1[0]=paper.path("M "+(x+111)+" "+(y+25)+ "l 0 0").attr({'stroke-width':3});			
				anode_connection_arr1[0].animate({path :"M"+(x+111)+" "+(y+25)+"l 173 0 "},500, function(){
					
				anode_connection_arr1[0]=paper.path("M "+(x+283)+" "+(y+25)+ "l 0 0").attr({'stroke-width':3});			
				anode_connection_arr1[0].animate({path :"M"+(x+283)+" "+(y+25)+"l 0 -40 "},500, function(){
				verifyAconnect=true;
				pinName=4;
				});	
				});	
				});
			}else if(anodeflg==1 && d4Flag==1){
				anode_connection_arr1[0]=paper.path("M "+(x+25)+" "+(y+116)+ "l 0 0").attr({'stroke-width':3});
				anode_connection_arr1[0].animate({path :"M"+(x+25)+" "+(y+116)+" l -15 0"},1000, function(){
					
				anode_connection_arr1[0]=paper.path("M "+(x+10)+" "+(y+117)+ "l 0 0").attr({'stroke-width':3});
				anode_connection_arr1[0].animate({path :"M"+(x+10)+" "+(y+117)+" l 0 -93"},1000, function(){
				
				anode_connection_arr1[0]=paper.path("M "+(x+10)+" "+(y+25)+ "l 0 0").attr({'stroke-width':3});			
				anode_connection_arr1[0].animate({path :"M"+(x+10)+" "+(y+25)+"l 275 0 "},500, function(){
					
				anode_connection_arr1[0]=paper.path("M "+(x+283)+" "+(y+25)+ "l 0 0").attr({'stroke-width':3});			
				anode_connection_arr1[0].animate({path :"M"+(x+283)+" "+(y+25)+"l 0 -40 "},500, function(){
				verifyAconnect=true;
				pinName=5;
				});	
				});	
				});	
				});
			}else if(anodeflg==1 && d5Flag==1){
				anode_connection_arr1[0]=paper.path("M "+(x+25)+" "+(y+130)+ "l 0 0").attr({'stroke-width':3});
				anode_connection_arr1[0].animate({path :"M"+(x+25)+" "+(y+130)+" l -15 0"},1000, function(){
					
				anode_connection_arr1[0]=paper.path("M "+(x+10)+" "+(y+131)+ "l 0 0").attr({'stroke-width':3});
				anode_connection_arr1[0].animate({path :"M"+(x+10)+" "+(y+131)+" l 0 -107.2"},1000, function(){
				
				anode_connection_arr1[0]=paper.path("M "+(x+10)+" "+(y+25)+ "l 0 0").attr({'stroke-width':3});			
				anode_connection_arr1[0].animate({path :"M"+(x+10)+" "+(y+25)+"l 274 0 "},500, function(){
					
				anode_connection_arr1[0]=paper.path("M "+(x+283)+" "+(y+25)+ "l 0 0").attr({'stroke-width':3});			
				anode_connection_arr1[0].animate({path :"M"+(x+283)+" "+(y+25)+"l 0 -40 "},500, function(){
				verifyAconnect=true;
				pinName=6;	
				});
				});	
				});	
				});
			}else if(anodeflg==1 && d6Flag==1){
				anode_connection_arr1[0]=paper.path("M "+(x+25)+" "+(y+144)+ "l 0 0").attr({'stroke-width':3});
				anode_connection_arr1[0].animate({path :"M"+(x+25)+" "+(y+144)+" l -15 0"},1000, function(){
					
				anode_connection_arr1[0]=paper.path("M "+(x+10)+" "+(y+145)+ "l 0 0").attr({'stroke-width':3});
				anode_connection_arr1[0].animate({path :"M"+(x+10)+" "+(y+145)+" l 0 -122.2"},1000, function(){
				
				anode_connection_arr1[0]=paper.path("M "+(x+10)+" "+(y+25)+ "l 0 0").attr({'stroke-width':3});			
				anode_connection_arr1[0].animate({path :"M"+(x+10)+" "+(y+25)+"l 274 0 "},500, function(){
					
				anode_connection_arr1[0]=paper.path("M "+(x+283)+" "+(y+25)+ "l 0 0").attr({'stroke-width':3});			
				anode_connection_arr1[0].animate({path :"M"+(x+283)+" "+(y+25)+"l 0 -40 "},500, function(){
				verifyAconnect=true;
				pinName=7;	
				});
				});	
				});	
				});
			}else if(anodeflg==1 && d7Flag==1){
				anode_connection_arr1[0]=paper.path("M "+(x+25)+" "+(y+157)+ "l 0 0").attr({'stroke-width':3});
				anode_connection_arr1[0].animate({path :"M"+(x+25)+" "+(y+157)+" l -15 0"},1000, function(){
					
				anode_connection_arr1[0]=paper.path("M "+(x+10)+" "+(y+158)+ "l 0 0").attr({'stroke-width':3});
				anode_connection_arr1[0].animate({path :"M"+(x+10)+" "+(y+158)+" l 0 -135"},1000, function(){
				
				anode_connection_arr1[0]=paper.path("M "+(x+10)+" "+(y+25)+ "l 0 0").attr({'stroke-width':3});			
				anode_connection_arr1[0].animate({path :"M"+(x+10)+" "+(y+25)+"l 274 0 "},500, function(){
					
				anode_connection_arr1[0]=paper.path("M "+(x+283)+" "+(y+25)+ "l 0 0").attr({'stroke-width':3});			
				anode_connection_arr1[0].animate({path :"M"+(x+283)+" "+(y+25)+"l 0 -40 "},500, function(){
				verifyAconnect=true;
				pinName=8;	
				});
				});	
				});	
				});
			}else{
		//		alert("Wrong Connection.Please Try Again");
			}
	}
}


//TtoAconnection();
function TtoAconnection(){
	var anode_connection_arr1=[];
	if(vfyRD0Connect==true || vfyRD1Connect==true || vfyRD2Connect==true || vfyRD3Connect==true || vfyRD4Connect==true || vfyRD5Connect==true || vfyRD6Connect==true || vfyRD7Connect==true){
		toastr.success("Already Connected.");
	}else{
			
			if(anodeflg==1 && d0Flag==1){
				//pin1
				anode_connection_arr1[0]=paper.path("M "+(x+158)+" "+(y+58)+ "l 0 0").attr({'stroke-width':3});
				anode_connection_arr1[0].animate({path :"M"+(x+158)+" "+(y+58)+" l 0 -77"},1000, function(){
					
				anode_connection_arr1[0]=paper.path("M "+(x+158)+" "+(y-18)+ "l 0 0").attr({'stroke-width':3});			
				anode_connection_arr1[0].animate({path :"M"+(x+158)+" "+(y-18)+"l 7.2 0 "},500, function(){
					verifyAconnect=true;
				pinName=1;
				});	
				});
			
			}else if(anodeflg==1 && d1Flag==1){
				//pin2
				anode_connection_arr1[0]=paper.path("M "+(x+142)+" "+(y+57)+ "l 0 0").attr({'stroke-width':3});			
				anode_connection_arr1[0].animate({path :"M"+(x+142)+" "+(y+57)+" l 0 -77.2"},500, function(){
				
				anode_connection_arr1[0]=paper.path("M "+(x+142)+" "+(y-19)+ "l 0 0").attr({'stroke-width':3});
				anode_connection_arr1[0].animate({path :"M"+(x+142)+" "+(y-19)+"l 23 0 "},1000, function(){
				verifyAconnect=true;
				pinName=2;	
				});	
				});
			}else if(anodeflg==1 && d2Flag==1){
				//pin3
				anode_connection_arr1[0]=paper.path("M "+(x+127)+" "+(y+57)+ "l 0 0").attr({'stroke-width':3});			
				anode_connection_arr1[0].animate({path :"M"+(x+127)+" "+(y+57)+"l 0 -77.2  "},500, function(){
				
				anode_connection_arr1[0]=paper.path("M "+(x+127)+" "+(y-19)+ "l 0 0").attr({'stroke-width':3});
				anode_connection_arr1[0].animate({path :"M"+(x+127)+" "+(y-19)+" l 38 0 "},1000, function(){
				verifyAconnect=true;
				pinName=3;	
				});	
				});
			}else if(anodeflg==1 && d3Flag==1){
				//pin4
				anode_connection_arr1[0]=paper.path("M "+(x+111)+" "+(y+57)+ "l 0 0").attr({'stroke-width':3});			
				anode_connection_arr1[0].animate({path :"M"+(x+111)+" "+(y+57)+"l 0 -77.2 "},500, function(){
				
				anode_connection_arr1[0]=paper.path("M "+(x+111)+" "+(y-19)+ "l 0 0").attr({'stroke-width':3});
				anode_connection_arr1[0].animate({path :"M"+(x+111)+" "+(y-19)+" l 54 0 "},1000, function(){
				verifyAconnect=true;
				pinName=4;	
				});	
				});
			}else if(anodeflg==1 && d4Flag==1){
				anode_connection_arr1[0]=paper.path("M "+(x+25)+" "+(y+116)+ "l 0 0").attr({'stroke-width':3});			
				anode_connection_arr1[0].animate({path :"M"+(x+25)+" "+(y+116)+"l -30 0 "},500, function(){
				
				anode_connection_arr1[0]=paper.path("M "+(x-4)+" "+(y+117)+ "l 0 0").attr({'stroke-width':3});
				anode_connection_arr1[0].animate({path :"M"+(x-4)+" "+(y+117)+" l 0 -136.2"},1000, function(){
				
				anode_connection_arr1[0]=paper.path("M "+(x-5)+" "+(y-19)+ "l 0 0").attr({'stroke-width':3});
				anode_connection_arr1[0].animate({path :"M"+(x-5)+" "+(y-19)+"l 170 0  "},1000, function(){
				verifyAconnect=true;
				pinName=5;	
				});	
				});	
				});
			}else if(anodeflg==1 && d5Flag==1){
				anode_connection_arr1[0]=paper.path("M "+(x+25)+" "+(y+130)+ "l 0 0").attr({'stroke-width':3});			
				anode_connection_arr1[0].animate({path :"M"+(x+25)+" "+(y+130)+"l -30 0 "},500, function(){
				
				anode_connection_arr1[0]=paper.path("M "+(x-4)+" "+(y+131)+ "l 0 0").attr({'stroke-width':3});
				anode_connection_arr1[0].animate({path :"M"+(x-4)+" "+(y+131)+" l 0 -150.2"},1000, function(){
				
				anode_connection_arr1[0]=paper.path("M "+(x-5)+" "+(y-19)+ "l 0 0").attr({'stroke-width':3});
				anode_connection_arr1[0].animate({path :"M"+(x-5)+" "+(y-19)+" l 170 0"},1000, function(){
				verifyAconnect=true;
				pinName=6;	
				});	
				});	
				});
			}else if(anodeflg==1 && d6Flag==1){
				anode_connection_arr1[0]=paper.path("M "+(x+25)+" "+(y+144)+ "l 0 0").attr({'stroke-width':3});			
				anode_connection_arr1[0].animate({path :"M"+(x+25)+" "+(y+144)+"l -30 0 "},500, function(){
				
				anode_connection_arr1[0]=paper.path("M "+(x-4)+" "+(y+145)+ "l 0 0").attr({'stroke-width':3});
				anode_connection_arr1[0].animate({path :"M"+(x-4)+" "+(y+145)+" l 0 -164.4"},1000, function(){
				
				anode_connection_arr1[0]=paper.path("M "+(x-5)+" "+(y-19)+ "l 0 0").attr({'stroke-width':3});
				anode_connection_arr1[0].animate({path :"M"+(x-5)+" "+(y-19)+" l 170 0"},1000, function(){
				verifyAconnect=true;
				pinName=7;	
				});	
				});	
				});
			}else if(anodeflg==1 && d7Flag==1){
				anode_connection_arr1[0]=paper.path("M "+(x+25)+" "+(y+156)+ "l 0 0").attr({'stroke-width':3});			
				anode_connection_arr1[0].animate({path :"M"+(x+25)+" "+(y+156)+"l -30 0  "},500, function(){
				
				anode_connection_arr1[0]=paper.path("M "+(x-4)+" "+(y+156)+ "l 0 0").attr({'stroke-width':3});
				anode_connection_arr1[0].animate({path :"M"+(x-4)+" "+(y+156)+" l 0 -176"},1000, function(){
				
				anode_connection_arr1[0]=paper.path("M "+(x-5)+" "+(y-19)+ "l 0 0").attr({'stroke-width':3});
				anode_connection_arr1[0].animate({path :"M"+(x-5)+" "+(y-19)+" l 170 0"},1000, function(){
				verifyAconnect=true;
				pinName=8;	
				});	
				});	
				});
			}else{
		//		alert("Wrong Connection.Please Try Again");
			}
	 }
}


function AtoTconnection(){
	var anode_connection_arr=[];				
	if(d0Flag==1){
		anode_connection_arr[0]=paper.path("M "+(x+164)+" "+(y-19)+ "l 0 0").attr({'stroke-width':3});			
		anode_connection_arr[0].animate({path :"M"+(x+164)+" "+(y-19)+"l -7.2 0 "},500, function(){
		
		anode_connection_arr[0]=paper.path("M "+(x+158)+" "+(y-19)+ "l 0 0").attr({'stroke-width':3});
		anode_connection_arr[0].animate({path :"M"+(x+158)+" "+(y-19)+" l 0 76"},1000, function(){
			
		});	
		});
	
	}else if(d1Flag==1){
		anode_connection_arr[0]=paper.path("M "+(x+164)+" "+(y-19)+ "l 0 0").attr({'stroke-width':3});			
		anode_connection_arr[0].animate({path :"M"+(x+164)+" "+(y-19)+"l -23 0 "},500, function(){
		
		anode_connection_arr[0]=paper.path("M "+(x+142)+" "+(y-19)+ "l 0 0").attr({'stroke-width':3});
		anode_connection_arr[0].animate({path :"M"+(x+142)+" "+(y-19)+" l 0 76"},1000, function(){
			
		});	
		});
	}else if(d2Flag==1){
		anode_connection_arr[0]=paper.path("M "+(x+164)+" "+(y-19)+ "l 0 0").attr({'stroke-width':3});			
		anode_connection_arr[0].animate({path :"M"+(x+164)+" "+(y-19)+"l -38 0 "},500, function(){
		
		anode_connection_arr[0]=paper.path("M "+(x+127)+" "+(y-19)+ "l 0 0").attr({'stroke-width':3});
		anode_connection_arr[0].animate({path :"M"+(x+127)+" "+(y-19)+" l 0 76"},1000, function(){
			
		});	
		});
	}else if(d3Flag==1){
		anode_connection_arr[0]=paper.path("M "+(x+164)+" "+(y-19)+ "l 0 0").attr({'stroke-width':3});			
		anode_connection_arr[0].animate({path :"M"+(x+164)+" "+(y-19)+"l -54.5 0 "},500, function(){
		
		anode_connection_arr[0]=paper.path("M "+(x+111)+" "+(y-19)+ "l 0 0").attr({'stroke-width':3});
		anode_connection_arr[0].animate({path :"M"+(x+111)+" "+(y-19)+" l 0 76"},1000, function(){
			
		});	
		});
	}else if(d4Flag==1){
		anode_connection_arr[0]=paper.path("M "+(x+164)+" "+(y-19)+ "l 0 0").attr({'stroke-width':3});			
		anode_connection_arr[0].animate({path :"M"+(x+164)+" "+(y-19)+"l -171.3 0 "},500, function(){
		
		anode_connection_arr[0]=paper.path("M "+(x-6)+" "+(y-19)+ "l 0 0").attr({'stroke-width':3});
		anode_connection_arr[0].animate({path :"M"+(x-6)+" "+(y-19)+" l 0 136.2"},1000, function(){
		
		anode_connection_arr[0]=paper.path("M "+(x-6)+" "+(y+116)+ "l 0 0").attr({'stroke-width':3});
		anode_connection_arr[0].animate({path :"M"+(x-6)+" "+(y+116)+" l 30 0"},1000, function(){
			
		});	
		});	
		});
	}else if(d5Flag==1){
		anode_connection_arr[0]=paper.path("M "+(x+164)+" "+(y-19)+ "l 0 0").attr({'stroke-width':3});			
		anode_connection_arr[0].animate({path :"M"+(x+164)+" "+(y-19)+"l -171.3 0 "},500, function(){
		
		anode_connection_arr[0]=paper.path("M "+(x-6)+" "+(y-19)+ "l 0 0").attr({'stroke-width':3});
		anode_connection_arr[0].animate({path :"M"+(x-6)+" "+(y-19)+" l 0 150.2"},1000, function(){
		
		anode_connection_arr[0]=paper.path("M "+(x-6)+" "+(y+130)+ "l 0 0").attr({'stroke-width':3});
		anode_connection_arr[0].animate({path :"M"+(x-6)+" "+(y+130)+" l 30 0"},1000, function(){
			
		});	
		});	
		});
	}else if(d6Flag==1){
		anode_connection_arr[0]=paper.path("M "+(x+164)+" "+(y-19)+ "l 0 0").attr({'stroke-width':3});			
		anode_connection_arr[0].animate({path :"M"+(x+164)+" "+(y-19)+"l -171.3 0 "},500, function(){
		
		anode_connection_arr[0]=paper.path("M "+(x-6)+" "+(y-19)+ "l 0 0").attr({'stroke-width':3});
		anode_connection_arr[0].animate({path :"M"+(x-6)+" "+(y-19)+" l 0 164.4"},1000, function(){
		
		anode_connection_arr[0]=paper.path("M "+(x-6)+" "+(y+144)+ "l 0 0").attr({'stroke-width':3});
		anode_connection_arr[0].animate({path :"M"+(x-6)+" "+(y+144)+" l 30 0"},1000, function(){
			
		});	
		});	
		});
	}else if(d7Flag==1){
		anode_connection_arr[0]=paper.path("M "+(x+164)+" "+(y-19)+ "l 0 0").attr({'stroke-width':3});			
		anode_connection_arr[0].animate({path :"M"+(x+164)+" "+(y-19)+"l -171.3 0 "},500, function(){
		
		anode_connection_arr[0]=paper.path("M "+(x-6)+" "+(y-19)+ "l 0 0").attr({'stroke-width':3});
		anode_connection_arr[0].animate({path :"M"+(x-6)+" "+(y-19)+" l 0 176"},1000, function(){
		
		anode_connection_arr[0]=paper.path("M "+(x-6)+" "+(y+156)+ "l 0 0").attr({'stroke-width':3});
		anode_connection_arr[0].animate({path :"M"+(x-6)+" "+(y+156)+" l 30 0"},1000, function(){
			
		});	
		});	
		});
	}else{
//		alert("Wrong Connection.Please Try Again");
	}
}



}
