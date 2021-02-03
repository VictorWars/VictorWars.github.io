
function eliminarSeleccionados(){
	var checkboxes = document.getElementsByName("checkbox");
	var IDs = document.getElementsByName("Identificacion");
	var val = false;
	var val2 = false;
	
	for (var x = 0; x < checkboxes.length; x++) {
		
		if(checkboxes[x].checked == true){
			val = true;
			if(val2 == false){
				var resultado = confirm("¿Estas seguro de Eliminar las casillas seleccionadas?");
    			if (resultado == true) {
					val2 = true;
        			$.ajax({
						url:"/eliminar/"+IDs[x].textContent,
						success: function(res){
							console.log(res);
						}
					}).then(()=>{
						location.href="/listar";
					});
				} else {
					x = checkboxes.length;
				}
			}else{
				$.ajax({
					url:"/eliminar/"+IDs[x].textContent,
					success: function(res){
						console.log(res);
					}
				}).then(()=>{
					location.href="/listar";
				});
			}
			
			/*if(val2 == false){
				alertify.confirm("<p>¿Estas seguro de Eliminar?<br><br><b>ENTER</b> y <b>ESC</b> corresponden a <b>Aceptar</b> o <b>Cancelar</b></p>", function (e) {
            		if (e) {
						val2 = true;
            		} else { 
                		alertify.error("Has pulsado '" + alertify.labels.cancel + "'");
            		}
      			});
				
				if(val2 == true){
					alertify.success("Has pulsado '" + alertify.labels.ok + "'");
						$.ajax({
							url:"/eliminar/"+IDs[x].textContent,
							success: function(res){
								console.log(res);
							}
						}).then(()=>{
							location.href="/listar";
						});
				}else{
					x = checkboxes.length;
				}
			}else{
				$.ajax({
					url:"/eliminar/"+IDs[x].textContent,
					success: function(res){
						console.log(res);
					}
				}).then(()=>{
					location.href="/listar";
				});
			}*/
			
		}
	}
	
	if(val == false){
		alertify.error("¡Seleccione al menos una casilla!");
	}
	
}
