'use strict'
$(document).ready(function(){
	reloadmenu();

	$("#add_button").click(function(){
		$("#menu").append('<li><a href="'+ $("#add_link").val()+'"></a></li>');
		reloadmenu();
	});

	

	function reloadmenu(){
		$('a').each(function(index){
			var that = $(this);
			var enlace = that.attr("href");
			that.text(enlace);
		});
	}
});