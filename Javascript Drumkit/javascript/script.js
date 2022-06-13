
var totalBtn = document.querySelectorAll(".button").length;
  
for (var j = 0; j < totalBtn; j++) {
  document.querySelectorAll(".button")[j].addEventListener("click", function() {
    var text = this.innerHTML;
    animate(text);
    sound(text);
  });
}

document.addEventListener("keypress", function(event) {
    sound(event.key);
    animate(event.key);
  });

function sound(key){
    switch(key){
        case 'A':{
            var mysound = new Audio("./sound/sound1.wav");
            mysound.play();
            break;
        }
        case 'a':{
            var mysound = new Audio("./sound/sound1.wav");
            mysound.play();
            break;
        }
        case 'S':{
            var mysound = new Audio("./sound/sound2.wav");
            mysound.play();
            break;
        }
        case 's':{
            var mysound = new Audio("./sound/sound2.wav");
            mysound.play();
            break;
        }
        case 'D':{
            var mysound = new Audio("./sound/sound3.wav");
            mysound.play();
            break;
        }
        case 'd':{
            var mysound = new Audio("./sound/sound3.wav");
            mysound.play();
            break;
        }
        case 'F':{
            var mysound = new Audio("./sound/sound4.wav");
            mysound.play();
            break;
        }
        case 'f':{
            var mysound = new Audio("./sound/sound4.wav");
            mysound.play();
            break;
        }
        case 'G':{
            var mysound = new Audio("./sound/sound5.wav");
            mysound.play();
            break;
        }
        case 'g':{
            var mysound = new Audio("./sound/sound5.wav");
            mysound.play();
            break;
        }
        default:{
            alert("Wrong Input");
        }
    }
}

function animate(text){
    var current = document.querySelector("."+text);
    current.classList.add("animation");

    setTimeout(() => {
        current.classList.remove("animation");
      }, 200);
}