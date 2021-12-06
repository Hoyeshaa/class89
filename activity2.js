function back(){
    window.location = "activity_1.html";
}
function getScore(){
    save = localStorage.getItem("score");
    document.getElementById("saveScore").innerHTML = "Score:"+save;
}