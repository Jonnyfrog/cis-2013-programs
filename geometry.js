//this function provides easier access to DOM elements using their html element id
var $ = function (id) 
{
    return document.getElementById(id);
};

//this declares the variables and necessary equations
//lines 9-14 declares and sets variables with respective DOM input. lines 15-21 declare variables needed for calculations


//calculate the rectangle area and perimeter
	

//this function prints the results of all the circle, triangle, and circle calculations at once, I think...
var do_it = function () 
{
    var floatRectWidth = parseFloat($("rect_width").value);
	var floatRectHeight = parseFloat($("rect_height").value);	
	var floatTriSide1 = parseFloat($("tri_side1").value);
	var floatTriSide2 = parseFloat($("tri_side2").value);	
	var floatTriSide3 = parseFloat($("tri_side3").value);
	var floatRadius = parseFloat($("radius").value);

	
	alert ("The Rectangle area is " + rectArea(floatRectWidth,floatRectHeight) + 
	" and the perimeter is " + rectPerim (floatRectWidth,floatRectHeight) + 
	"\n\n" + "The Triangle area is " + 	triArea(floatTriSide1,floatTriSide2,floatTriSide3) + 
	" and the perimeter is " + 
	triPerim(floatTriSide1,floatTriSide2,floatTriSide3) + "\n\n" +
	"The Circle area is " + circleArea(floatRadius) + 
	" and the circumference is " + circleCircum(floatRadius));


};

/*
 * the calcCircleCircum function is activated when the calc_circle_cirum button on the DOM
 * is clicked.  It reads the radius information from the DOM and then reports the circle
 * circumference in an alert box, using the circleCircum function to perform the calculation
 */
var calcCircleCircum = function()
{
	var floatRadius = parseFloat($("radius").value);

	alert ("The Circle circumference is " + circleCircum(floatRadius));	
};

/*
 * the circleCircum function accepts some input for radius and then calculates the circumference
 * using the 2 * pi * radius formula.  The circumference value is returned, but note that it has been
 * converted to a string with 2 decimal points [the toFixed() method in JavaScript takes a number and 
 * lops off everything after the desired decimal points, and then for some unexplicable reason converts
 * the resulting number into a string]
 */
function circleCircum(floatRadius_par)
{
	var floatCircum = parseFloat (2 * Math.PI * floatRadius_par);
	return floatCircum.toFixed(2);
}

var calcCircleArea = function()
{
    var floatRadius = parseFloat($("radius").value);
    
    alert ("The Circle area is " + circleArea(floatRadius));
};


function circleArea(floatRadius_par)
{
    var floatArea = parseFloat (Math.PI * Math.pow(floatRadius_par,2));
    return floatArea.toFixed(2);
}

var calcTriArea = function ()
{
    var floatTriSide1 = parseFloat($("tri_side1").value);
	var floatTriSide2 = parseFloat($("tri_side2").value);	
	var floatTriSide3 = parseFloat($("tri_side3").value);
    
    
    alert ("The Triangle area is " + triArea(floatTriSide1, floatTriSide2, floatTriSide3));
};

function triArea(side1, side2, side3)
{
    var floatS = (side2 + side2 + side3)/2;
	var floatTriArea = Math.sqrt((floatS*(floatS-side1)*(floatS-side2)*(floatS-side3)));
    return floatTriArea.toFixed(2);
}

var calcTriPerim = function ()
{
    var floatTriSide1 = parseFloat($("tri_side1").value);
	var floatTriSide2 = parseFloat($("tri_side2").value);	
	var floatTriSide3 = parseFloat($("tri_side3").value);
    
    alert ("The Triangle perimeter is " + triPerim(floatTriSide1, floatTriSide2, floatTriSide3));
};

function triPerim(s1, s2, s3)
{
    var floatTriPerim = s1 + s2 + s3;
    return floatTriPerim.toFixed(2);
}

var calcRectArea = function ()
{
    var floatRectWidth = parseFloat($("rect_width").value);
	var floatRectHeight = parseFloat($("rect_height").value);
    
    alert ("The Rectangle area is " + rectArea(floatRectWidth, floatRectHeight));
};

function rectArea(height, width)
{
    var floatRectArea = height * width;
    return floatRectArea;
}

var calcRectPerim = function ()
{
    var floatRectWidth = parseFloat($("rect_width").value);
	var floatRectHeight = parseFloat($("rect_height").value);
    
    alert ("The Rectangle perimeter is " + rectPerim(floatRectWidth, floatRectHeight));
};

function rectPerim(h,w)
{
    floatRectPerim = 2 * h + 2 * w;
    return floatRectPerim;
}


window.onload = function () 
{
    //lines 112-117 clear the DOM values..
    $("rect_width").value = "";
    $("rect_height").value = "";
    $("tri_side1").value = "";
   $("tri_side2").value = "";
    $("tri_side3").value = "";
    $("radius").value = "";
    $("rect_width").focus(); // places the cursor in the first input box
    $("calc_all").onclick = do_it; // runs the do_it function when clicked
    $("calc_circle_circum").onclick = calcCircleCircum; // runs the calcCircleCircum function when clicked
    $("calc_circle_area").onclick = calcCircleArea; //runs the calcCircleArea function when clicked
    $("calc_tri_area").onclick = calcTriArea; //runs the calcTriArea function when clicked
    $("calc_tri_perim").onclick = calcTriPerim;
    $("calc_rect_area").onclick = calcRectArea;
    $("calc_rect_perim").onclick = calcRectPerim;
};