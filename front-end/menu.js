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