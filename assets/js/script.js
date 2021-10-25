let nome = window.document.getElementById('nome')
let email= document.querySelector('#email')
let assunto=document.querySelector('#assunto')
let nomeOk=false
let emailOk=false
let assuntoOk=false
let mapa = document.querySelector('#mapa')

nome.style.width='100%'
email.style.width='100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML='nome inválido'
        txtNome.style.color='red'
    }  else {
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color='green'
        nomeOk=true
   }
}

function validaEmail() {
    let txtEmail = document.querySelector('#email')

    if(email.value.indexOf('@')==-1||email.value.indexOf('.')==-1){
        txtEmail.innerHTML='E-mail inválido'
        txtEmail.style.color='red'
    }else  {
        txtEmail.innerHTML='E-mail valido'
        txtEmail.style.color='green'  
        emailOk=true
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')
    if(assunto.value.length >=100){
        txtAssunto.innerHTML='Texto ultrapassou o máximo de 100 caracteres'
        // txtAssunto.style.backgroundColor='#ff1a1a' - para background  
        txtAssunto.style.color='red'
        txtAssunto.style.display='block'
    }else{
        txtAssunto.style.display='none'
        assuntoOk=true
    }
}

function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true ){
        alert('Formulário enviado com sucersso!')
    } else {
        alert('Prencha o formulário corretamente antes de enviar')
    }
}


function mapaZoom(){
    mapa.style.width='700px'
    mapa.style.height='500px'
}

function mapaNormal(){
    mapa.style.width='400px'
    mapa.style.height='250px' 
}