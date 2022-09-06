
function predict(){
	//text input boxes
	//[ALEX] Here it reads the values from the form in html
	sl_fn = document.getElementById("sl"),
	sl = sl_fn.value;
	sw_fn = document.getElementById("sw"),
	sw = sw_fn.value;
	pl_fn = document.getElementById("pl"),
	pl = pl_fn.value;
	pw_fn = document.getElementById("pw"),
	pw = pw_fn.value;
	
	//span to display probabilities
	setosa_fn = document.getElementById("setosa");
	versicolor_fn = document.getElementById("versicolor");
	virginica_fn = document.getElementById("virginica");
	
	//[ALEX] Here the client calls to the backend (in this case is a php file, simple without installing axios,
	//	using apache server
	//) 
	$.ajax({
		type: "POST",
		url: "../cgi-bin/php/predict.php",//is in that child folder, same root folder (website)
		async: false,
		datatype: 'json',
		data: {
			sl: sl,
			sw: sw,
			pl: pl,
			pw: pw
		},
		success: function(response){
			console.log(response);
			var obj = JSON.parse(response);
			console.log(obj.setosa);
			console.log(obj.versicolor);
			console.log(obj.virginica);
			setosa_fn.innerHTML = (parseFloat(obj.setosa)*100).toFixed(1) + "%";
			versicolor_fn.innerHTML = (parseFloat(obj.versicolor)*100).toFixed(1) + "%";
			virginica_fn.innerHTML = (parseFloat(obj.virginica)*100).toFixed(1) + "%";
		},
		error: function(response){
			console.log(response);
			setosa_fn.innerHTML = "Error";
			versicolor_fn.innerHTML = "Error";
			virginica_fn.innerHTML = "Error";
		}
	})
	
}