	$(document).ready(function(){
	
	for (var i = 1; i <= 100; i++){
	
	if (i % 5=== 0 && i % 3=== 0){
		//console.log("Fizz Buzz")
		$('.main').append("<p>Fizz Buzz</p>");
	}
	else if (i % 5 === 0){
		//console.log ("buzz");
		$('.main').append("<p>Buzz</p>");

	}
	else if (i % 3 === 0){
		//console.log ("fizz");
		$('.main').append("<p>Fizz</p>")
	}
	else {
		//console.log(i);
		$('.main').append("<p>" + i +"</p>");
	}

}
	});

