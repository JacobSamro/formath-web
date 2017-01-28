
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

			var length = 0;

			msg = JSON.parse(msg);

			var HTML = "";

			for(var i = 0 ; i < msg.Expression.length ; i++){
					HTML += "<span>" + msg.Expression[i] + "</span>";
					length++;
			}

			HTML += "<span> = </span>";
			length++;

			HTML += "<span>" + msg.Result + "</span>";
			length++;			

			result.innerHTML = HTML;

			$("#result span").each(function(index) {
				if(index == length-1){
					$(this).delay(150*index).fadeIn(100);
				}else{
					$(this).delay(100*index).fadeIn(50);
				}
			    
			});

		});


    }

    reader.readAsDataURL(file);

	}catch(e){

		log.innerHTML = e + log.innerHTML;

		alert("Unable to load or process file");
	}

});

