$(document).ready(function(){
	
	var elemento = $(".elemento");
	//Mover elemento por la pagina
	elemento.draggable();
	//Redimencionar elemento
	elemento.resizable();
	//Seleccionar y ordenar elemento
	//$(".lista-seleccionable").selectable();
	$(".lista-seleccionable").sortable();

	//Drop
	$("#elemento-movido").draggable();
	$("#area").droppable({
		drop:function(){
			console.log("algo esta dentro de la caja");
		}
	});
	//Efectos
	$("#mostrar").click(function(){
		$(".caja-efectos").toggle('shake',7000);
	});

	//Tooltip
	$(document).tooltip();

});