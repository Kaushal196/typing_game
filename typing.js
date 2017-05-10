$(document).ready(function()
{
// Getting screen resolutions and positioning the start button
var width = screen.width - 200;
var height = screen.height - 200;
var code = 0;
$('#start').css(
{ 
"top" : (height/2)+'px', 
"left" : (width/2)+'px' 
});

$('#start').click( function()
{
$(this).fadeOut('slow');
$('#score').show();
genLetter();
});

$(document).keydown(function(event){
	var keycode = event.keyCode;
    $('.bubb'+keycode).fadeOut('slow').hide('slow',function(){
    	code+=10;
    	$('#score').html(code);
    	$(this).remove();
    });
        

});

function genLetter()
{
    var color = randomcolor();
	var k = Math.floor(Math.random()*(90 - 65 +1))+65;
	var ch = String.fromCharCode(k);
	var top = Math.floor(Math.random()*height);
	var left = Math.floor(Math.random()*width);
	$('body').append('<span class="bubb bubb'+k+'">'+ch+'</span>')
	$('.bubb'+k).css({
		"left" : left+'px',
		"top"  : top+'px',
		"background-color" : color,
    });
    

    setTimeout(genLetter,1500);
}

function randomcolor()
{
	var color = '#';
	var values = ['a','b','c','d','e','f','0','1','2','3','4','5','6','7','8','9'];
	for(c=0; c<6 ; c++)
	{
		no = Math.floor(Math.random()*15);
		color += values[no];
	}
	return color;
}


});
