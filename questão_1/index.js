/*
Algoritmo criado como resposta a questão 1 do desafio de programação da
Academia Capgemini 2022.
Tem como função mostrar na tela uma escada de altura "n", utilizando para 
isso o caractere "*" e espaços em branco.
*/

//Esta função quando chamada, pula para a próxima linha.
function proximaLinha() {
    document.write("<br>");
}

//Esta função mostra/insere na tela, o caractere definido no parametro.
function mostra(caractere) {
    document.write(caractere);
}

/*Esta função constrói a escada utilizando laços e condições, 
recebendo "n" como parametro para as variáveis de 
altura e construtor.*/
function construirEscada(n) {

    let altura = n;
    let construtor = n;

    for (let posicaoY = 1; posicaoY <= altura; posicaoY++) { 
        for (let posicaoX = 1; posicaoX <= altura; posicaoX++) {            
            if (posicaoX >= construtor) {
                mostra("*");
            }
                else {
                    mostra("&nbsp&nbsp"); //caractere referente a "espaço em branco" 
                }                         //utilizado 2 vezes para igualar    
        }                                 //ao espaço em tela tomado pelo caracetere "*".
   
        construtor--; 
        proximaLinha();  
    }   
}

//Teste de chamada com o parametro "n".
console.log(construirEscada(6));   
