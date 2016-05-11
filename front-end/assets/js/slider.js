        var count = 1;
		var total = 5;
	window.addEventListener("load", function() {
      
        window.setInterval(function slideAuto () {
        var Image = document.getElementById('img');


        count = count + 1;
        if(count > total) {
            count = 1;
        } 
        if(count <1) {
            count=total;
        }
        Image.src = "assets/img/" + count + ".jpg";
        

    }, 3500);
        
    });