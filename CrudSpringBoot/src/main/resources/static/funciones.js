function eliminar(id){
	Swal.fire({
  		title: '¿Estas seguro de Eliminar?',
  		text: "!Una vez eliminado, no podrá recuperar los datos!",
  		icon: 'Advertencia',
  		showCancelButton: true,
  		confirmButtonColor: '#3085d6',
  		cancelButtonColor: '#d33',
  		confirmButtonText: 'Si, !eliminar!'
		}).then((result) => {
  		if (result.isConfirmed) {
				$.ajax({
					url:"/eliminar/"+id,
					success: function(res){
						console.log(res);
					}
				});
				
				Swal.fire(
      			'!Eliminado!',
      			'Los datos han sido eliminados',
      			'success'
    			).then((result)=>{
					
					if(result){
						location.href="/listar";
					}
				});
  			}
		})
}



$("#selectall").on("click", function() {  
  $(".case").prop("checked", this.checked);  
}); 



// if all checkbox are selected, check the selectall checkbox and viceversa  
$(".case").on("click", function() {  
  if ($(".case").length == $(".case:checked").length) {  
    $("#selectall").prop("checked", true);  
  } else {  
    $("#selectall").prop("checked", false);  
  }  
});

function eliminarSeleccionados(){
	var checkboxes = document.getElementById("checkbox");
	alert(checkboxes.checkbox.length);
	var IDs = document.getElementById("id").text;
	var val = false;
	alert(IDs.length);
	/*for (var x = 0; x < checkboxes.length; x++) {
		alert(checkboxes[x].id);
		if((checkboxes[x].checked) && (val == false)){
			
			Swal.fire({
  				title: '¿Estas seguro de Eliminar?',
  				text: "!Una vez eliminado, no podrá recuperar los datos!",
  				icon: 'Advertencia',
  				showCancelButton: true,
  				confirmButtonColor: '#3085d6',
  				cancelButtonColor: '#d33',
  				confirmButtonText: 'Si, !eliminar!'
			}).then((result) => {
  				if (result.isConfirmed) {
					alert(x);
					$.ajax({
						url:"/eliminarSeleccionados/"+checkboxes[x].id,
						success: function(res){
							console.log(res);
						}
					});
  				}
			});
		}else{
			if((checkboxes[x].checked) && (val == true)){
				$.ajax({
					url:"/eliminarSeleccionados/"+checkboxes[x].id,
					success: function(res){
						console.log(res);
					}
				});
			}
		}
		
		if((x+1) == checkboxes.length)
		{
			$.ajax({
				url:"/actualizar/",
				success: function(res){
					console.log(res);
				}
			});
			
			if(val == true){
				Swal.fire(
      				'!Se realizó la eliminación!',
      				'Los datos han sido eliminados',
      				'success'
    			)
			}
		}
	}*/
}
