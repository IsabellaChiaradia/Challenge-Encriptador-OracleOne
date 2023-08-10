const areaTexto = document.querySelector(".area-texto");
const mensaje = document.querySelector(".mensaje");
const copia = document.querySelector(".copiar");
copia.style.display = "none";

function validarTexto(){
    let textoIngresado = document.querySelector(".area-texto").value;
    let validador = textoIngresado.match(/^[a-z]*$/);

    if(!validador || validador === 0) {
        alert("Solo se permiten letras minúsculas y sin acentos");
        location.reload();
        return true;
    }
}

const encriptar = (stringEncriptada) => {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
};

function btnEncriptar(){
    if(!validarTexto()) {
        const textoEncriptado = encriptar(areaTexto.value);
        mensaje.value = textoEncriptado;
        mensaje.style.backgroundImage = "none";
        areaTexto.value = "";
        copia.style.display = "block";
    }
}

const desencriptar = (stringDesencriptada) => {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
};

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(areaTexto.value);
    mensaje.value = textoDesencriptado;
    areaTexto.value = "";
}

function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "";
    alert("Texto Copiado");
}
