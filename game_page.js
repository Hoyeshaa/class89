var p1 = localStorage.getItem("player1");
var p2 = localStorage.getItem("player2");
p1score = 0;
p2score = 0;
document.getElementById("p1").innerHTML = p1;
document.getElementById("p2").innerHTML = p2;
document.getElementById("player1Score").innerHTML = p1score;
document.getElementById("player2Score").innerHTML = p2score;
document.getElementById("playerQuestion").innerHTML = "Question Turn: "+p1;
document.getElementById("playerAnswer").innerHTML = "Answer Turn: "+p2;
function gameStart(){
    word = document.getElementById("word").value;
    word = word.toLowerCase();
    first = word.charAt(1);
    middle = Math.floor(word.length/2);
    middlleletter = word.charAt(middle);
    last = word.length-1;
    lastletter = word.charAt(last);
    Replace1 = word.replace(first,"_");
    Replace2 = Replace1.replace(middlleletter,"_");
    Replace3 = Replace2.replace(lastletter,"_");
    var displayWord = "<h3 id = 'text'>"+Replace3+"</h3>";
    var displayinput = "<input id='answer' type='text' placeholder='Type your answer' class='form-control'>";
    var displaybutton = "<button id='send' onclick='check()'>Send</button>";
    var row = displayWord + displayinput + displaybutton;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}
quetion_turn = "player_1";
answer_turn = "player_2";
function check(){
  answer = document.getElementById("answer").value;
  answer = answer.toLowerCase();
  if(answer == word){
      if(answer_turn == "player_1"){
          p1score = p1score + 1;
          document.getElementById("player1Score").innerHTML = p1score;
      }
      else{
        p2score = p2score + 1;
        document.getElementById("player2Score").innerHTML = p2score;
      }
  }
  if(quetion_turn == "player_1"){
      quetion_turn = "player_2";
      document.getElementById("playerQuestion").innerHTML = "Question turn : "+ p2;
  }
  else{
    quetion_turn = "player_1";
    document.getElementById("playerQuestion").innerHTML = "Question turn : "+ p1;
  }
  if(answer_turn == "player_1"){
      answer_turn = "player_2";
      document.getElementById("playerAnswer").innerHTML = "Answer turn : "+ p2;
  }
  else{
    answer_turn = "player_1";
    document.getElementById("playerAnswer").innerHTML = "Answer turn : "+ p1;
  }
  document.getElementById("output").innerHTML = "";
}