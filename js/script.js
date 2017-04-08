$(function(){

	var $quote = $("#quote");
	var $button = $("#select");

	var getQuote = function(){

		$.ajax({

			url: "http://api.forismatic.com/api/1.0/",

			jsonp: 'jsonp',
			dataType: 'jsonp',

			data: {
				method: 'getQuote',
				lang: 'en',
				format: 'jsonp'
			},

			success: function(data){
				
				$quote.hide().html("<p>"+data.quoteText+"</p><p class='text-right'>-"+data.quoteAuthor+"</p>").delay(300).fadeIn("slow");
				$('#tweetBtn').attr('href', 'https://twitter.com/intent/tweet?text="'+encodeURIComponent(data.quoteText)+'"');

			}
		});

	}

	getQuote();
	
	
	$button.on("click",function(){

		getQuote();
		
	});

})