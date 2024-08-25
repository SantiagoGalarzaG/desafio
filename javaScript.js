let copyButton = document.getElementById("copyButton");
copyButton.style.display = 'none';
let outputText = document.getElementById("outputText");
outputText.style.display='none';

function encriptarTexto() {
    let texto = document.getElementById("texto1").value;

    let outputImage = document.getElementById("outputImage");
    let outputText = document.getElementById("outputText");
    let outputMessage = document.getElementById("outputMessage");
    let outputMessage1 = document.getElementById("outputMessage1");
    let copyButton = document.getElementById("copyButton");
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
        outputText.value = textoEncriptado;
        outputText.style.display = 'block';
        copyButton.style.display = 'block';
        outputMessage.style.display = 'none';
        outputMessage1.style.display = 'none';
        outputImage.style.display = 'none';

    

}

function desencriptarTexto() {
    let texto = document.getElementById("texto1").value;
    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    mostrarResultado(textoDesencriptado);
}

function mostrarResultado(resultado) {
    let outputImage = document.getElementById("outputImage");
    let outputText = document.getElementById("outputText");
    let outputMessage = document.getElementById("outputMessage");
    let copyButton = document.getElementById("copyButton");

    if (resultado) {
        outputText.value = resultado;
        outputText.style.display = 'block';
        copyButton.style.display = 'block';
        outputMessage.style.display = 'none';
        outputImage.style.display = 'none';
    } else {
        outputText.style.display = 'none';
        copyButton.style.display = 'none';
        outputMessage.style.display = 'block';
        outputImage.style.display = 'block';
    }
}

function copiarTexto() {
    let texto = document.getElementById("outputText");
    texto.select();
    texto.setSelectionRange(0, 99999); 
    document.execCommand("copy");
    alert("Texto copiado: " + texto.value);
}
