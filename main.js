var cells = document.getElementsByClassName("date")
var input = document.getElementById("cal-input")
var color = document.getElementById("cal-color")
var button = document.getElementById("cal-button")
input.value = ''
color.value = '#b0b0b0'

var a = new Array(cells.length);

for(var j = 0; j < cells.length; j++){
	cells[j].onclick = function(){
		for(var i = 0; i < cells.length; i++){
			cells[i].setAttribute("id","")
			cells[i].style.backgroundColor = ""
		}
		this.setAttribute("id", "chosen")
		var k = document.getElementById("chosen")
		k.style.backgroundColor = "#000"
		}
}



button.onclick = function(){
	var c = document.getElementById("chosen")
	var comment = input.value
	input.value = ''
	var e = document.createElement("p")
	c.appendChild(e)
	e.innerHTML = comment
	c.style.backgroundColor = "#AF3"
	c.setAttribute("id", "")
}

input.addEventListener('keyup', event => {if(event.keyCode === 13 && event.target.value !== ''){
	var c = document.getElementById("chosen")
	var comment = input.value
	input.value = ''
	var e = document.createElement("p")
	c.appendChild(e)
	e.innerHTML = comment
	c.style.backgroundColor = "#AF3"
	c.setAttribute("id", "")
}
})




//Sets the page's theme. No need to modify
var themeButton = document.getElementsByClassName("ChooseTheme")
for(var i=0; i<themeButton.length; ++i) {
    themeButton[i].addEventListener('click', e => {
        document.body.setAttribute('class', e.target.id)
    }, false)
}