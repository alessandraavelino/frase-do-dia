//Array de frases
let frases = [
    'Acredite que você pode, assim você já está no meio do caminho.',
    'Acredite em si próprio e chegará um dia em que os outros não terão outra escolha senão acreditar com você.',
    'A esperança é a motivação que vai criar uma atmosfera de ação do poder sobrenatural de Deus.',
    'Crie a melhor, a mais grandiosa visão possível para sua vida, porque você se torna aquilo que você acredita.',
    'Sucesso é mais frequentemente alcançado por aqueles que não sabem que o fracasso é inevitável.',
    'O propósito da vida é vivê-la, experienciá-la ao máximo, agarrar avidamente e sem medo experiências mais ricas e novas.',
    'Arrisque, vá em frente e sem medo! Não há motivação maior do que descobrir quão corajosos conseguimos ser.',
    'Quando o caminho fica cansativo paro e descanso; o objetivo é chegar, se não for hoje será amanhã.'
];


//Saudação
var nome = prompt("Digite seu nome para gerar uma frase: ")
var saudacao = document.querySelector(".saudacao")
saudacao.innerHTML = `Olá, ${nome}! Sua frase do dia é: `



//Gerar frases
function gerarFrases(){
    var fraseGerada = frases[Math.floor(Math.random() * frases.length)];
    document.querySelector('#quote').textContent = fraseGerada;
    
    
}

//Botão de som
let soundBtn = document.querySelector(".sound")
soundBtn.addEventListener("click", () =>{
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerHTML}`);
    speechSynthesis.speak(utterance);

})




//Botão de compartilhar nas redes sociais
const quoteText = document.querySelector(".quote")
let shareBtn = document.querySelector(".share")

shareBtn.addEventListener("click", () =>{
    navigator.share({
        title: "Compartilhar frase",
        text: `${quoteText.innerHTML}`,
        url: "https://frase-do-dia.netlify.app/"
    })
})




/*
shareBtn.addEventListener("click", () =>{
    console.log("lcicando")
    let shareUrl = "https://api.share.com/send?text=" + quoteText.innerHTML
    window.open(shareUrl, "_blank");
})
*/

gerarFrases()

