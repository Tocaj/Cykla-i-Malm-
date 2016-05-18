        var count = 1;
		var total = 9;
	window.addEventListener("load", function() {
      
        window.setInterval(function slideAuto () {
        var Image = document.getElementById('imgSlider');


        count = count + 1;
        if(count > total) {
            count = 1;
        } 
        if(count <1) {
            count=total;
        }
        Image.src = "assets/slideshow/" + count + ".jpg";
        

    }, 3500);
        
    });
    
  