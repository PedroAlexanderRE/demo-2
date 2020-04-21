'use strict'
$(document).ready(function(){
	var caja = $("#caja");
	
	var btn_mostrar = $("#mostrar");
	var btn_ocultar = $("#ocultar");
	var btn_TeU = $("#todoenuno");
	var btn_animar = $("#animar");

	btn_mostrar.hide();

	btn_mostrar.click(function(){
		btn_mostrar.hide();
		caja.show();
		btn_ocultar.show();
	});

	btn_ocultar.click(function(){
		btn_ocultar.hide();
		
		btn_mostrar.show(); 

		//añadir funcion callback a una animación 
		caja.slideUp('slow', ()=>{
			console.log("Cartel oculatado");
		});
	});

	btn_TeU.click(function(){
		caja.slideToggle('fast');
		$(this).innerHTML='jaja';
	});

	btn_animar.click(function(){
		caja.animate({
			marginLeft : '500px',
			fontSize: '40px',
			height: '110px',
			},'slow')//atributos un json y velocidad
		.animate({
			borderRadius:'900px',
			marginTop:'80px',
		},'slow')
		.animate({
			borderRadius: '0px',
			marginLeft:'0px',
		},'slow')
		.animate({
			borderRadius: '100px',
			marginTop: '0px',
		},'slow');
	});

});