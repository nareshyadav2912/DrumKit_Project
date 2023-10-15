
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",handleClick);
}
function handleClick(){
    //this.style.color="white";
    var ele=this.innerHTML;
    sound(ele);
    animation(ele);
    
}
document.addEventListener("keypress", function(event){
    sound(event.key);
    animation(event.key);
});
function sound(clkey){
    switch (clkey) {
        case "w":
            var audio=new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            var audio=new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
            var audio=new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            var audio=new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case "j":
            var audio=new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case "k":
            var audio=new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "l":
            var audio=new Audio('sounds/snare.mp3');
            audio.play();
            break;
        default:
            break;
    }
}
function animation(aniKey){
    var pbtn=document.querySelector("."+aniKey);
    pbtn.classList.add("pressed");
    setTimeout(function(){
        pbtn.classList.remove("pressed");
    },100);
}