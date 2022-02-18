/*
Algorítimo criado como resposta a questao 3 do desafio de programação da 
Academia Capgemini 2022.
Possui a função de buscar em uma string, o númerp de combinações possíveis
de pares de substrings que são anagramas.

O primeiro laço divide a string em substrings, classifica as substrings em 
ordem alfabética para facilitar a comparação que será realizada e as insere 
na "lista/array".

O segundo laço verifica e retorna o número de combinações possíveis entre os 
pares de substrings que são anagramas.         
*/

function buscaAnagramas(string) {
    let listaDeSubstrings = [];
    let numeroDePares = 0;
//Primeiro laço.    
    for (let i = 0; i < string.length; i++) {
        for (let j = i + 1; j < string.length + 1; j++) {
            listaDeSubstrings.push(string.substring(i, j).split("").sort().join(""));
        }    
    }
//Segundo laço.    
    for(let i = 0; i < listaDeSubstrings.length - 1; i++) {
        for(let j = i + 1; j < listaDeSubstrings.length; j++) {
            if(listaDeSubstrings[i] == listaDeSubstrings[j]) {
                numeroDePares++;                  
            } 
        }
    }
    return numeroDePares;
}

//Testes e suas respectivas saídas:
console.log(buscaAnagramas("ovo")); // 2 
console.log(buscaAnagramas("ifailuhkqq")); // 3 
console.log(buscaAnagramas("abab")); // 5
console.log(buscaAnagramas("aaaa")); // 10