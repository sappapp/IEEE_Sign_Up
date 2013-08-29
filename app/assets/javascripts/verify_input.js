$(document).ready(function(){
	$('input.btn').click(function(e){


		//Verify That All Fields Are Filled In
		var i = 0;
		$textfields = $('input.text_field')
		num_textfields = $('input.text_field').length;
		for(i; i < num_textfields; i++)
		{
			console.log($textfields[i])
			if($textfields[i].value == "")
			{
				e.preventDefault();
				$($textfields.siblings('span.label')[i]).show();

			}
			else
			{
				$($textfields.siblings('span.label')[i]).hide();
			}
		}

		$membershipId = $('input#user_membership_id');
		if($membershipId[0].value != $membershipId[1].value)
		{
			e.preventDefault();
			$membershipId.siblings().show();
		}
	})

})