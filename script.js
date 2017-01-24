
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

		    errorMessage("Internet Connection Failed!");

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

		alert("Unable to load or process file");
	}

});



var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var video = document.getElementById('video');

// Trigger photo take
document.getElementById("snap").addEventListener("click", function() {
	context.drawImage(video, 0, 0, 640, 480);
});