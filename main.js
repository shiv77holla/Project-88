
var canvas= new fabric.Canvas("myCanvas");
ball_x=10;
ball_y=10;
end_x=400;
end_y=800;
block_width = 5;
block_height = 5;
var hole_img="";
var ball_img="";
function load_img(){
	fabric.Image.fromURL("golf-h.png", function(Img){
        hole_img=Img;
        hole_img.scaleToWidth(50);
        hole_img.scaleToHeight(50);
        hole_img.set({
        top:end_y,
        left:end_x,
        });
        canvas.add(hole_img)
        })	

}

function new_image()
{
	fabric.Image.fromURL("ball.png", function(Img){
        ball_img=Img;
        ball_img.scaleToWidth(50);
        ball_img.scaleToHeight(50);
        ball_img.set({
        top:ball_y,
        left:ball_x,
        });
        canvas.add(ball_img)
        })
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_x==end_x) && (ball_y==end_y)){
	canvas.remove(ball_img)
	document.getElementById("hd3").innerHTML="YOU HAVE HIT THE GOAL";
	document.getElementById("myCanvas").style.borderColor="red";
	}
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ball_y>=0){
			ball_y= ball_y-block_height;
			canvas.remove(ball_img);
			new_image();
			}
	}

	function down()
	{
		if(ball_y<=900){
			ball_y= ball_y+block_height;
			canvas.remove(ball_img);
			new_image();
			}
	}

	function left()
	{
		if(ball_x >5)
		{
			ball_x= ball_x+block_width;
			canvas.remove(ball_img);
			new_image();
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			ball_x= ball_x+block_width;
			canvas.remove(ball_img);
			new_image();
		}
	}
	
}

