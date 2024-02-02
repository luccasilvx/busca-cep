// JSON 

function buscarCEP(){
    let input = document.getElementById('cep').value;

    //requisição ao site sem necessida de acessá-lo pelo avegador (acesso de forma remota)
    const ajax = new XMLHttpRequest(); 
    
    //armazena as informações
    ajax.open('get', 'https://viacep.com.br/ws/'+input+'/json/');

    //encaminha solicitação
    ajax.send();
    ajax.onload = function() {
//        document.getElementById('texto').innerHTML = this.responseText;//ao carregar, injeta o texto
        let obj = JSON.parse(this.responseText);

        let endereço = obj.logradouro;
        let cidade = obj.localidade;
        let estado = obj.uf;
        let cep = obj.cep;
        let bairro = obj.bairro;
        let numeracao = obj.complemento

        document.getElementById('texto').innerHTML= "Endereço: "+endereço+"<br> Cidade: "+cidade+"<br> Estado:"+estado+"<br> Bairro: "+bairro+"<br> Numeração: "+numeracao+"<br> CEP: "+cep;
    }
}

function limpaTexto(){
    document.getElementById("cep").value = ""
}

let caixa = document.getElementById('cep').value;
switch (caixa){
    case caixa.value=="":
        alert("Favor incluir o CEP")
        break;
}

function validar(){
    var input = document.getElementById("cep");
    if((input.value == "") || (input.value == " ")){
         alert("Preencha todos os campos em branco.")
    }
}




