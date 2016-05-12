$("#menuContainer").hide();
var menuBool = false;
$("#showMenu").on("click", function() {
    if (menuBool == false) {
        $("#menuContainer").fadeIn(150);
        menuBool = true;
    } else {
        $("#menuContainer").fadeOut(150);
        menuBool = false;
    }
});
  // User can choose which sections he/she wants to see
var equipment = document.getElementById("equipment");
equipment.addEventListener("click", function(){
	var section1 = document.getElementById("section1");
	if (section1.style.display == "block"){
		section1.style.display = "none";
	}else{
		section1.style.display = "block";
	}
});
var roadsigns = document.getElementById("roadsigns");
roadsigns.addEventListener("click", function(){
	var section2 = document.getElementById("section2");
	if (section2.style.display == "block"){
		section2.style.display = "none";
	}else{
		section2.style.display = "block";
	}
});
var haveinmind= document.getElementById("haveinmind");
haveinmind.addEventListener("click", function(){
	var section3 = document.getElementById("section3");
	if (section3.style.display == "block"){
		section3.style.display = "none";
	}else{
		section3.style.display = "block";
	}
});
var otherrules = document.getElementById("otherrules");
otherrules.addEventListener("click", function(){
	var section4 = document.getElementById("section4");
	if (section4.style.display == "block"){
		section4.style.display = "none";
	}else{
		section4.style.display = "block";
	}
});