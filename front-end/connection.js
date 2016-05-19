var i, j, length;

function buttonClick(clicked_id) {
    console.log(clicked_id);
    localStorage.setItem("id", clicked_id);
    window.location.href= "ruttpage.html";
}

$("#btnSearch").on("click", function() {
    familyFilter();
});

function filterByKM(l_km) {
    
    $.ajax({
   type : "GET",
   url : "http://10.3.21.217:8080/Malmotown/getMaps/" + l_km,
   cache : false,
   async : true,
   dataType : 'json',
   success : function(data) {
       console.log(data);
        clearResults();
    
//       Alert("success!");
    for (i = 0; i < data.length; i++) {
        $("#rowResult").append('<div class="panel panel-default"> <div class="panel-head red"><br><input type="button" class="buttonNext" onclick="buttonClick(' + data[i]['id'] + ')" id="' + data[i]['id'] + '" value="' + data[i]['titel'] + '"></input><p>' + data[i]['length'] +' km, ' + data[i]['time'] + ' min</p></div>' +    
    
        '<div class="bodystyle">' + data[i]['mapLink'] + '</div></div>');
}

   },
   error : function(JSONHttpRequest, textStatus, errorThrown) {
      alert("An error has occurred making the request: " + errorThrown);
   }
});
    
}

function clearResults () {
    $("#rowResult").html("");

}

function familyFilter() {
    $.ajax({
   type : "GET",
   url : "http://10.3.21.217:8080/Malmotown/getChildMaps",
   cache : false,
   async : true,
   dataType : 'json',
   success : function(data) {
       console.log(data);
        clearResults();
    
//       Alert("success!");
    for (i = 0; i < data.length; i++) {
        $("#rowResult").append('<div class="panel panel-default"> <div class="panel-head red"><br><input type="button" class="buttonNext" onclick="buttonClick(' + data[i]['id'] + ')" id="' + data[i]['id'] + '" value="' + data[i]['titel'] + '"></input><p>' + data[i]['length'] +' km, ' + data[i]['time'] + ' min</p></div>' +    
    
        '<div class="bodystyle">' + data[i]['mapLink'] + '</div></div>');
}

   },
   error : function(JSONHttpRequest, textStatus, errorThrown) {
      alert("An error has occurred making the request: " + errorThrown);
   }
});
}


$.ajax({
   type : "GET",
   url : "http://10.3.21.217:8080/Malmotown/getMaps",
   cache : false,
   async : true,
   dataType : 'json',
   success : function(data) {
       console.log(data);
    clearResults();
    
//       Alert("success!");
    for (i = 0; i < data.length; i++) {
        $("#rowResult").append('<div class="panel panel-default"> <div class="panel-head red"><br><input type="button" class="buttonNext" onclick="buttonClick(' + data[i]['id'] + ')" id="' + data[i]['id'] + '" value="' + data[i]['titel'] + '"></input><p>' + data[i]['length'] + ' km, ' + data[i]['time'] + ' min</p></div>' +    
    
        '<div class="bodystyle">' + data[i]['mapLink'] + '</div></div>');
   
}

   },
   error : function(JSONHttpRequest, textStatus, errorThrown) {
      alert("An error has occurred making the request: " + errorThrown);
   }
});