
$("#calculate").click(function(){
	
	var reader = new FileReader();

	try{



	var file = image.files[0];

	reader.onload = function (e) {

		var _dataImage = e.target.result.replace("data:image/png;base64,","");
		

        $.ajax({
		  method: "POST",
		  url: "http://103.211.218.24/imagex",
		  data: {
		  		image : _dataImage
		  }
		})
		.fail(function(msg){

			log.innerHTML = "Internet Connection Failed!<br/>" + log.innerHTML;


		})
		.done(function( msg ) {


			$("#result").fadeIn(500);

			msg = JSON.parse(msg);

			var HTML = "Expression : " + msg.Expression + "<br/>" + "Result : " + msg.Result;

			result.innerHTML = HTML;

		});


    }

    reader.readAsDataURL(file);

	}catch(e){

		log.innerHTML = e + log.innerHTML;

		alert("Unable to load or process file");
	}

});

