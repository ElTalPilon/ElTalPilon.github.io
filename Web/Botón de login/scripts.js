
//-----------------------------jQuery----------------------------------
$(document).ready(function(){

	/*Esconder la sombra primero*/
	$("#outerShadow").hide();
	$("#SUBox").hide();
	$("#PWBox").hide();
	
	/*Al dar click al botón la sombra aparece*/
	$("#loginButton").click(function(){
		$("#outerShadow").fadeToggle('slow');
	});
	
	/*Al dar click en cualquier parte de la sombra desaparece*/
	$("#outerShadow, #CancelBtn").click(function(){
		if ($(this).is(':animated')){
			 return false;
		}
		else{
			$("#outerShadow").fadeToggle('slow', function(){
				$("#SUBox").hide();
				$("#PWBox").hide();
				$("#LIBox").show();
				$("input").val('');
			});	
		}
	});
	
	$("#LISUBox").click(function(event){
		event.stopPropagation();
	});
	
	$("#forgotPassword").click(function(){
		$("#LIBox").fadeOut('fast', function(){
			$("#PWBox").fadeIn('fast');
			$("input").val('');
		});
	});
	
	$("#newAccount").click(function(){
		$("#LIBox").fadeOut('fast', function(){
			$("#SUBox").fadeIn('fast');
			$("input").val('');
		});
	});
	
	$("#back2LogIn").click(function(){
		$("#PWBox").fadeOut('fast', function(){
			$("#LIBox").fadeIn('fast');
			$("input").val('');
		});
	});
	
	$("#alreadyHave").click(function(){
		$("#SUBox").fadeOut('fast', function(){
			$("#LIBox").fadeIn('fast');
			$("input").val('');
		});
	});
});