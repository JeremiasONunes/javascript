//1 callback
function print(callback){
    callback();
}
let mensagem = 'teste'
console.log(callback(mensagem))

//2 settimeout
function funcaotimeout(){
    console.log("aguardou")
}

setTimeout(funcaotimeout, 5000);
//3 n parametro
pessoa = [
    nome = "jeremias",
    idade = 15,
    valor = 24
]
function paramentros(pessoa){
    for (let index = 0; index < pessoa.length; index++) {
        const element = pessoa[index];
        console.log(element)
        
    }
}

paramentros(pessoa)

//4 arrow function


function soma(a , b){
   return a+b
}
const arrowsoma= (a, b) => a+ b;

let a =3
let b =4
console.log(soma(a,b))
console.log(arrowsoma(a,b))
//5 let e const
function mensagem(){
    let mensagem = "teste"
    mensagem = "novotste"
    console.log(mensagem)
}

mensagem()
function mensagem2(){
    const mensagem = "teste"
    mensagem = "novoteste"
    console.log(mensagem)
}
mensagem2()
//6 nome
pessoa2 = [
    nome = "jeremias",
    nacimento = "11/08/1998",
    cpf = "123.123.123/12"
]

aluno = [
    nome = "jeremias",
    nacimento = "11/08/1998",
    cpf = "123.123.123/12",
    matricula = 123456,
    notas= [10,10,15] 

    
]
notas = aluno.notas
function media(notas){
    return notas/notas.length
}