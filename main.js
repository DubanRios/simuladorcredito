document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("comenzarButton").addEventListener("click", pedirEdad);
});

function pedirEdad() {
    let resultadoDiv = document.getElementById("resultado");
    let nombre = prompt("Ingrese su nombre:");
    localStorage.setItem("nombreUsuario", nombre);

    let pedirEdad = parseInt(prompt("Ingrese su edad"));
    
    if (pedirEdad < 18) {
        resultadoDiv.innerText = "Lo siento, eres menor de edad. No puedes seguir el proceso.";
        return { mensaje: "No se puede continuar, menor de edad" }; 
    } else {
        resultadoDiv.innerText = "Puedes seguir el proceso.";
    }

    let credito = parseInt(prompt("Ingrese el monto del préstamo:"));
    let meses = parseInt(prompt("Ingrese el número de meses del préstamo:"));
    let interesAnual = parseInt(prompt("Ingrese la tasa de interés anual (%):"));

    let totalInteres = (credito * interesAnual / 100) * meses;
    let totalPagar = credito + totalInteres;

    resultadoDiv.innerText += `\nEl monto total a pagar es ${totalPagar} (${credito} de crédito + ${totalInteres} de interés).`;

    localStorage.setItem("totalPagar", totalPagar);

    localStorage.setItem("resultadoFinal", JSON.stringify({
        credito: credito,
        meses: meses,
        interesAnual: interesAnual,
        totalPagar: totalPagar
    }));

    return {
        datosPrestamoArray: [credito, meses, interesAnual, totalPagar], 
        datosPrestamoObjeto: {
            credito: credito,
            meses: meses,
            interesAnual: interesAnual,
            totalPagar: totalPagar
        } 
    }; 
}

const resultado = document.getElementById("resultado");
console.log(resultado);