var btn = document.getElementById("on")
var bulb = document.getElementById("bulb")

btn.addEventListener("click", function onbulb(){
   if(bulb.src.includes("bulb_on")) {
    bulb.src="Assets/bulb_off.png"
    btn.src="./Assets/off.png"
   }
    else {
        bulb.src= "Assets/bulb_on.png"
        btn.src="Assets/on.png"
    }
}) 

