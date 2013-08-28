$(document).ready(function(){
	$('form#new_user').click(function(e){


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
			}
		}

		if($('.btn.dropdown-toggle')[0].value == null)
		{
			e.preventDefault();
		}
	})

	$(".dropdown-menu li a").click(function(){

      $(".btn:first-child.dropdown-toggle").text($(this).text());
      $(".btn:first-child.dropdown-toggle").val($(this).text());

   });

})