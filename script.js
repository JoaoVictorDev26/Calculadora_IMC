const form = document.getElementById("form");

form.addEventListener("submit", function(Event) {
    Event.preventDefault();

    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;

    // Calcula  o IMC
    const imc = (peso / (altura * altura)).toFixed(2);

    const valor = document.getElementById("valor");

    document.getElementById("informacoes").classList.remove("hidden");
   

    valor.textContent = imc.replace(".",",");
    let descricao = "";

    //Verifica e classifica IMC

    if ( imc < 18.5) {

        descricao = "Cuidado! Você está abaixo do peso.";
        valor.style.color = "Red"

    }else if (imc >= 18.5 && imc <= 24.9) {

        descricao = "Peso Normal";
        valor.style.color = "Green"

    }else if (imc >= 25 && imc <= 29.9) {

        descricao = "Cuidado! Sobrepeso!";
        valor.style.color = "Orange"

    }else if (imc > 30 && imc <= 34.9) {

        descricao = "Cuidado! Está com obesidade grau I !";
        valor.style.color = "Red";

    }else if (imc >= 35 && imc <= 39.9) {

        descricao = "Cuidado! Está com obesidade grau II !";
        valor.style.color = "Red";

    }else {
        descricao = "Cuidado! Está com obesidade grau III !";
        valor.style.color = "Red";
    }

    document.getElementById("descricao").textContent = descricao;

});
