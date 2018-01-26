var colors = []; 
colors = generate(checksq);
var squares = document.querySelectorAll(".square");
var picked = rand();
var cold = document.querySelector("#coldisp");
cold.textContent = picked;
var msg = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easy = document.querySelector("#easybutton");
var hard = document.querySelector("#hardbutton");
var checksq = 6;

easy.addEventListener("click", function()
{
	easy.classList.add("selected");
	hard.classList.remove("selected");
	checksq = 3;
	colors = generate(checksq);
	picked = rand();
	for (var i = 0; i<squares.length; i++)
	{
		if(colors[i])
			{squares[i].style.backgroundColor = colors[i];}
		else
			squares[i].style.display = "none";
	}
});

hard.addEventListener("click", function()
{
	hard.classList.add("selected");
	easy.classList.remove("selected");
	checksq = 6;
	colors = generate(checksq);
	picked = rand();
	for (var i = 0; i<squares.length; i++)
	{
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
});

for(var i = 0; i < squares.length; i++)
{
	//add initial colors to colors
	squares[i].style.backgroundColor = colors[i];
	// add click listeners
	squares[i].addEventListener("click", function()
		{
			var clickedcolor = this.style.backgroundColor;
			if(clickedcolor === picked)
					{
						msg.textContent = "Correct";
						changecol(clickedcolor);
						h1.style.backgroundColor = clickedcolor;
						reset.textContent = "Play Again!";
					}						
			else
					{
						this.style.backgroundColor = "#232323";
						msg.textContent = "Try Again";
					}
		});
}

function changecol(color)
{
	for (var i = 0; i < squares.length; i++)
	{
		squares[i].style.backgroundColor = color;
	}
}
function rand()
{
	var x = Math.floor(Math.random() * colors.length);
	return colors[x];
}
function generate (num)
{
	//make an array 
	var arr = [];
	// add random cols to array
	for(var i =0; i < num; i++)
	{
		//get random color
		arr.push(getcol());
	}
	//return the array
	return arr;
}

function getcol()
{
	// pick a red from 0 to 255 
	var r = Math.floor(Math.random() *256);
	// pick a green from 0 to 255
	var g = Math.floor(Math.random() *256);
	// pick a blue from 0 to 255
	var b = Math.floor(Math.random() *256);

	return	"rgb("+ r + ", " + g + ", " + b +")";
}

reset.addEventListener("click", function()
{
	colors = generate(checksq);
	picked = rand();
	cold.textContent = picked; 
	this.textContent = "New Colors"
	msg.textContent = "";
	for(var i = 0; i < squares.length; i++)
{
	//add initial colors to colors
	squares[i].style.backgroundColor = colors[i];
	h1.style.backgroundColor = "steelblue";
}
}); 