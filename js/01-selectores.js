$(document).ready(function() {
	//Selector de id

	var rojo = $("#rojo");
	rojo.css("background","red").css("color","white");

	var amarillo = $("#amarillo");
	amarillo.css("background","yellow").css("color","black");

	var verde = $("#verde");
	verde.css("background","green").css("color","white");


	//Selector de classes
	$(".zebra").css("padding","5px");
	$(".sin_borde").click(function (){
		console.log("Clcik dado!!");
		$(this).addClass('zebra');
	});

	//Seleccionar parrafos
	var parrafo = $("p").css("cursor","pointer");;
	parrafo.click(function (){
		var that = $(this);
		if(!that.hasClass('grande')){
			that.addClass('grande');
		}else{
			that.removeClass('grande');
		}

	});

	//Selectores de Atributos
	$('[title="Google"]').css("background","aqua");
	$('[title = "Facebook"]').css("background","#ccc");

	//otros
	$('p, a').addClass('margen-superior');
});