function newpage(){
    name1 = document.getElementById("player_1").value;
    name2 = document.getElementById("player_2").value;
    localStorage.setItem("player1",name1);
    localStorage.setItem("player2",name2);
    window.location = "game_page.html";
}