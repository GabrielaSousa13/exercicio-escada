let tamanhoEscada = Number(prompt('Quantos degraus?'));
let i = 0;
let caractere ='#';
let escada = '';
caractere = prompt('Qual o material da sua escada?');

while(i < tamanhoEscada) {
    escada += caractere;
    console.log(escada);
    i++;

}