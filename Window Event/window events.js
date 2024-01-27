$(document).ready(function(){

// $(window).scroll(function(){

//     console.log("You are Scroll");
// })

$('#box').scroll(function(){

    console.log("You are Scroll");
})

$(window).resize(function(){

    console.log("You are resize");
})


	/* Jquery Load Events */
	$(window).load(function(){
		console.log("You are Resizing Window");
	});

	/* Jquery Unload Events */
	$(window).unload(function(){
		console.log("You are Resizing Window");
	});
    
});