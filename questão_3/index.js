/*
Algorítimo criado como resposta a questão 2 do desafio de programação da 
Academia Capgemini 2022. Ele possui a função de verificar de acordo com 
os critérios informados, se uma senha é forte. E que também retorne como 
saída, a quantidade miníma de caracteres faltantes para ser considerada segura.
A senha é considerada segura quando possui uma quantidade mínima de 6 caracteres.
*/

/*Iniciamente são definidas as variáveis contendo os critérios para 
formulação da senha considerada forte.*/
const caracteresEspeciais = ["!","@","#","$","%","^","&","*","(",")","-","+"];
const letrasMinusculas = /[a-z]/g;
const letrasMaiusculas = /[A-Z]/g;
const numeros = /[0-9]/g;

//Esta função verifica se a senha possui algum dos caracteres especiais definidos.
function buscaCaractereEspecial(senha) {

    for (let i = 0; i < senha.length; i++) {
        if (caracteresEspeciais.includes(senha[i])) {
            return true;
        }
    }        
    return false;
}

/*Esta função verifica se a senha satisfaz todos os critérios, 
utilizando para isso as condições especificadas na sequencia*/
function verificaSenha(senha) {
//Condicão que verifica se a senha satisfaz todos os critérios para ser considerada forte.
    if ((senha.length >= 6) 
    && (senha.search(letrasMinusculas) > -1)  
    && (senha.search(letrasMaiusculas) > -1) 
    && (senha.search(numeros) > -1)
    && (buscaCaractereEspecial(senha) == true)) {
        console.log("Sua senha é forte");
    }

/*Condição que retorna a saída solicitada na questão.
Caso a senha possuir menos de 6 caracteres, é solicitado que insira a quantidade faltante.*/
    if (senha.length < 6) {
        console.log(
            "A senha deve possuir no mínimo 6 caracteres. Insira mais " 
            + (6 - senha.length) + " caractere(s)"
            );
    }

//Condição caso não possua letra minúscula.
    if (letrasMinusculas.test(senha) == false) {
        console.log("Insira pelo menos 1 letra minúscula");
    }

//Condição caso não possua letra maiúscula.
    if (letrasMaiusculas.test(senha) == false) {
        console.log("Insira pelo menos 1 letra maiúscula");
    }    

//Condição caso não possua número.
    if (numeros.test(senha) == false) {
        console.log("Insira pelo menos 1 numero");
    }    

//Condição caso não possua caractere especial. 
    if(buscaCaractereEspecial(senha) == false) {       
        console.log("Insira pelo menos 1 destes caracteres especiais: ! @ # $ % ^ & * ( ) - +");
    }  

}

//Chamada da função para verificar a senha. 
verificaSenha("Ya3");