//click li to mark done
//use click will only listen current element
//use on will 
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
})
//click  on X to deliete the task
$("ul").on("click", "span", function(e){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	})
	e.stopPropagation();
});

$("input[type='text']").keypress(function(e){
	if(e.which ===13 && $(this).val()!== null){
		var inputtext = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i> </span>"+ inputtext + "</li>");
	}
})

$(".fa-plus").click(function(e){
	$("input[type='text']").fadeToggle()
})