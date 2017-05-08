$(function(){
	$.ajax({
		url: "emails.xml",
		type: "GET",
		dataType: "text",
		success: function(d){
			$('body').append('<dl />');
		
			$(d).find('email').each(function(){
				var $email = $(this);
				var emailId = $email.find("email_id").text();
				var emailTo = $email.find("email_to").text();
				var emailFrom = $email.find("email_from").text();
				var emailBody = $email.find("email_body").text();
			
				var html = '<dt>' + emailID + '</dt>';
				html += '<dd><p>' + emailTo + '</p>';
				html += '<p>' + emailFrom + '</p>' ;
				html += '<p> ' + emailBody + '</p>' ;
				html += '</dd>';
			
				$('dl').append($(html));
			})
		}
	});
})