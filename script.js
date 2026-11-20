document.addEventListener('DOMContentLoaded', function () {


    const formulario = document.querySelector("#formulario");

    formulario.addEventListener("submit", function (e) {
        const numero = document.querySelector("#numero").value.trim();
        if (numero === "") {
            e.preventDefault();
            console.log(numero)
            alert("Por favor ingresa un valor");
            return;
        } else if (!/^\d+$/.test(numero)) {
            e.preventDefault();
            alert("El campo debe de ser númerico, no acepta letras");
        }

        e.preventDefault();
        crearCampos(numero);
        formulario.reset();

    })


    function crearCampos(numero) {

const contenedor= document.querySelector("#contenedor");

        const campoFarengeit = document.createElement('div');
        const saltolinea = document.createElement('br')
        const campoKelvin = document.createElement('div');
        console.log(campoFarengeit);
        console.log(campoKelvin)
        const valor = conversionFarengeit(numero);
        const valorKelvin = conversionKelvin(numero);

        campoFarengeit.textContent = 
        campoKelvin.textContent = 

     
        contenedor.innerHTML=`<label>Valor farengeid: ${valor}</label> <br> <label>Valor Kelvin :${valorKelvin}</label>`
       
      

    }

    function conversionFarengeit(numero) {
        const num = parseFloat(numero)
        if (isNaN(numero)) {
            return "Valor invalido"
        }

        const conversion = (numero * 9 / 5) + 32;
        return Number(conversion.toFixed(2));
    }

    function conversionKelvin(numero) {
        const num = parseFloat(numero)
        if (isNaN(numero)) {
            return "Valor invalido"
        }

        const conversion2 = num + 273.15;    
        return Number(conversion2);
    }
})