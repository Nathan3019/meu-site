
var string = "Oii vida, vida, estou fazendo esse site para vc pq eu quero te passar uma mensagem. Vida, só quero que vc saiba que eu te amo muito, e sempre estarei aqui ao seu lado em tudo no que vc for precisar, e vc sabe disso, quando sentir a minha falta, abraça bem o ursinho  ta bom amor kk, e quando eu sentir a sua falta, eu sempre vou olhar para a pulseira amor, espero que tudo esteja bem por ai meu amor, vc pode me ligar a hora e o dia que quiser vida, estarei sempre disponível pra vc. Amor, e eu acho que vc n tem ideia do quanto eu te amo kk, amo a sua voz, sua boca, tudo em vc, me apaixonei por vc sem te tocar, eu quero demonstrar o amor e o carinho que eu tenho por vc, eu quero te dar tudo de bom, quero te mimar, quero te fazer a mulher mais faliz do mundo, quero que seja uma mulher de verdade, sincera, honesta, leal... Em exatamente TUDO que vc estiver em dúvida, seja coisas da vida, seja no estudo, em qualquer coisa, irei te ajuda, e se eu n souber, irei procurar a saber para te ajudar, vida, vc pode contar cmg pra tudo, pra tudo msm, menoos pra coisas erradas kk. Eu quero viver com vc até uns 100 anos se Deus quiser kk, amor, vc é uma pessoa incrivel cara, inteligente, linda, uma totosa kk, amor, eu peço a Deus que tudo der certo entre o nosso relacionamento, eu n quero perder vc, tenho medo de perder vc, estou tentando dominar esse medo, só que é meio difícil, ai vem as minhas inseguranças, as vezes penso que vc ta com outro garoto, ou entao as  vezes penso que vc n me ama e etc... Enfim, toma muito cuidado por ai ta bom amor. Eu te amo vida.   ";
var array = string.split("");

var timer;

function frameLooper () {

  if (array.length > 0) {
    document.getElementById("text").innerHTML += array.shift();
  } else {
    clearTimeout(timer); 
    
      }
  loopTimer = setTimeout('frameLooper()',20); 

}

frameLooper();

const Dialog = document.querySelector("#modalDialog")
const abrirBtn = document.querySelector("#abrirModal")
const closeBtn = document.querySelector("#closeBtn");

abrirBtn.addEventListener("click" , (e) =>{

Dialog.showModal();




})
