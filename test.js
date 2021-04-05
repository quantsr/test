var step = 1;
var promptList = ["Entre esses, de que você tem mais medo?", "O que você busca em um relacionamento?", "Você está namorando, porém, sua melhor amiga conta que viu seu namorado te traindo. O que você faz?", "Entre esses, qual é seu maior defeito?", "Você se considera uma pessoa mais:", "Qual cor sua preferida?", "Com qual animal você se identifica?", "O que você mais gosta de fazer no tempo livre?", "Como é sua playlist?", "Qual dos 3 elementos menos gosta?", "Por fim, qual dos 3 elementos mais gosta?"]
var answerList = 
    [ ["Morrer", "Altura", "Lugares fechados"],
      ["Romance", "Liberdade", "Estabilidade"],
      ["Se vinga", "Vida que segue e vai curtir", "Vai falar com ele"],
      ["Frieza", "Perfeccionismo", "Insegurança"],
      ["Leal", "Amorosa", "Calma"],
      ["Azul", "Verde", "Laranga"],
      ["Leão", "Cachorro", "Esquilo"],
      ["Ler", "Cantar", "Assistir séries ou filmes"],
      ["Aleatória", "Pop", "Só antigas"],
      ["Ar", "Fogo", "Agua"],
      ["Fogo", "Água", "Terra"],
    ]


function button(){
  var marker = document.getElementById(step.toString())
  marker.className = "step-marked";
  if(step == 12){ 
    var question = document.getElementById("prompt").innerHTML = "Resposta: Não importa!<br> Julgar alguem baseado puramente em constelações a milhões de anos-luz de distancia as quais não permanecerão no mesmo lugar para sempre nunca é uma boa idéia.";
    var b1 = document.getElementById("b1");
    var b2 = document.getElementById("b2");
    var b3 = document.getElementById("b3");
    b1.value = "vá";
    b2.value = "ler um livro";
    b3.value = "criatura";
    b1.disabled = true;
    b2.disabled = true;
    b3.disabled = true;
  }else{
    step++;
    var question = document.getElementById("prompt").innerHTML = promptList[step-2];
    var b1 = document.getElementById("b1").value = answerList[step-2][0];
    var b2 = document.getElementById("b2").value = answerList[step-2][1];
    var b3 = document.getElementById("b3").value = answerList[step-2][2];
  
    var nextMarker = document.getElementById(step.toString())
    nextMarker.className = "current-step";
  }
}
