$(document).ready(function()
{
// Getting screen resolutions and positioning the start button
var width = screen.width - 200;
var height = screen.height - 200;
var code = 0;
var lives = 5;
$('#start').css(
{ 
"top" : (height/2)+'px', 
"left" : (width/2)+'px' 
});

$('#start').click( function()
{
$(this).fadeOut('slow');
$('#score').show();
$('#lives').show();
genLetter();
});
function min(ar){
	flag = 0;
	for(i=1;i<ar.length;i++){
		if(ar[i]<ar[i-1]){
			flag=i;
		}
	}
	return flag;
}
$(document).keydown(function(event){
	var keycode = event.keyCode;
	var ar =[]
	// console.log(keycode);
	var classname = 'bubb' + keycode;
	$('[class*='+classname+']').each(function(id,data){
		ar.push(parseInt($(this).css('top')))
	})
	var index = min(ar)
	$('[class*='+classname+']')[index].remove();
	code+=10;
	lives--;
	$('#score').html(code);           

});

function genLetter()
{
    var color = randomcolor();
	var k = Math.floor(Math.random()*(90 - 65 +1))+65;
	var rand = Math.floor(Math.random()*(1000));
	var ch = String.fromCharCode(k);
	var top = Math.floor(Math.random()*height);
	var left = Math.floor(Math.random()*width);
	var l = 0;
	$('body').append('<span class="bubb bubb'+k+rand+'">'+ch+'</span>')
	$('.bubb'+k+rand)
	.css({top:500,left:left,position:'absolute',background:color})
	.animate({top:0}, 5000, function() {
		$(this).remove()
	});
    

    setTimeout(genLetter,1300);
}

function randomcolor()
{
	var color = '#';
	var values = ['a','b','c','d','e','f','1','2','3','4','5','6','7','8','9'];
	for(c=0; c<6 ; c++)
	{
		no = Math.floor(Math.random()*14);
		color += values[no];
	}
	return color;
}


});
