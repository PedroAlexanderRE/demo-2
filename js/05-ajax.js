$(document).ready(function(){
	
	var datos = $("#datos");
	//load
	//datos.load("https://reqres.in/");

	//Get y Post
	$.get("https://reqres.in/api/users",{page: 2},function(response){
		response.data.forEach((element, index) =>{
			datos.append("<p>"+element.first_name+" "+element.last_name+"</p>");
		});
	});


	$("#frm_user").submit(function(e){
		e.preventDefault();

		var usuario ={
			nombre: $('input[name="name"]').val(),
			web: $('input[name="web"]').val()
		};

		$.post($(this).attr('action'),usuario,function(response){
			console.log(response);
		}).done(function(){
			alert("usuario Añadido Correctamente");
		});
	});

});