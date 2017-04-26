//Run jquery
$(document).ready(function(){
	$("#search").click(function(){
		//The value of the input
		var searchT = $("#searchT").val();
		//Api
		var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchT+"&format=json&callback=?";

		$.ajax({
			type: "GET",
			url: url,
			async: false,
			dataType: "json",
			success: function(data){
				//console.log(data);
				$("#result").html("");
				for(var i = 0; i<data[1].length; i++){
						$("#result").prepend('<li><a href="'+data[3][i]+'" target="_blank"><h2>'+data[1][i]+'</h2></a><p>'+data[2][i]+'</p></li><hr>');
				}

			},
			error: function(error){
				alert("Error");
			}
		});

	});
});
