var framifyLength = $('#framify-toggle').length;

if (!framifyLength) {
	$.framify();
} else{
	$('#framify-toggle').trigger('click');
}
