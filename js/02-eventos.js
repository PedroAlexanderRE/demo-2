'use strict'
$(document).ready(function (){
	//MouseOver MouseOut

	var caja = $('#caja');
	/*caja.mouseover(function(){
		$(this).css("background","red");
	});

	caja.mouseout(function(){
		$(this).css("background","green");
	});
	*/
	// Hover

	function cambiaRojo(){
		$(this).css("background","red");
	}

	function cambiaVerde(){
		$(this).css("background","green");
	}
	caja.hover(cambiaRojo,cambiaVerde);

	//Click, Double click
	caja.click(function(){
		$(this).css("background","blue").css("color","white");
	});

	caja.dblclick(function(){
		$(this).css("background","pink").css("color","yellow");
	});

	//Focus y Blur

	var input = $("#nombre");
	input.focus(function(){
		$(this).css("border","2px solid green");
	});
	
	var datos = $("#datos");

	input.blur(function(){
		$(this).css("border","1px solid #ccc");
		
		if($(this).val() != ""){
			datos.text($(this).val()).show();
		}
		
	});

	//Mousedown y Mouseup

	datos.mousedown(function(){
		$(this).css("border-color","gray");
	});

	datos.mouseup(function(){
		$(this).css("border-color","black");
	});

	//mousemove
	$(document).mousemove(function(){
		$('html').css("cursor","none");
		var sigueme = $("#sigueme"); 
		sigueme.css("left", event.clientX);
		sigueme.css("top", event.clientY);
		
		
	});



});