var id = localStorage.getItem("id");

$.ajax({

   type : "GET",
   url : "http://10.3.21.217:8080/Malmotown/getMap/" + id,
   cache : false,
   async : true,
   dataType : 'json',
   success : function(data) {
       console.log(data);
    
    $("#divShowRoute").append('<div id="container"><div class="panel panel-default"><div class="panel-head" id="title"><br><a href="index.html">Back</a><h2>' + data['titel'] + '</h2><p id="length">' + data['length'] + ' km, ' + data['time'] + ' min</p></div></div>' +
    '<div class="bodystyle">' + data['mapLink'] + '</div><h4 id="description">' + data['description'] + '</h4></div>'
    );


       


   },
   error : function(JSONHttpRequest, textStatus, errorThrown) {
      alert("An error has occurred making the request: " + errorThrown);
   }
});



//<div id="container">
//		<div class="panel panel-default">
//        <div class="panel-head" id="title"><br>
//			<a href="index.html">Back</a>
//			<h2>Västra hamnen</h2>
//            <p id="length">5 KM</p>
//		</div>
//		
//		</div>
//		<div class="bodystyle">
//			<iframe src="https://www.google.com/maps/d/embed?mid=1cOqEmJh3XUrwHWB1yN5wTCZSUXo" width="640" height="480" frameborder="0" border="0"></iframe>
//        </div> 
//		<h4 id="description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam,</h4>
//		 <button id="star" class="glyphicon glyphicon-star btn btn-info btn-lg"><br><p>SAVE</p></button>
//         <button id="start" class="glyphicon glyphicon-play btn btn-info btn-lg"><br><p>START</p></button>
//        
//    </div>