const input_texto= document.getElementById("input_texto");
const boton_encriptar= document.getElementById("boton_encriptar");
const boton_desencriptar= document.getElementById("boton_desencriptar"); 
const boton_copiar= document.getElementById("boton_copiar");
const mensaje_final= document.getElementById("mensaje_final");
const muñeco= document.getElementById("muñeco");
const mensaje_der_info= document.getElementById("mensaje_der_info");

 
console.log(mensaje_der_info.value);

let vocales= [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
]

const remplace = (nuevoValor) => {
    mensaje_final.innerHTML=nuevoValor;
    muñeco.style.display="none";
    mensaje_der_info.style.display="none";
    boton_copiar.style.display="block";
    main_der.classList.add("ajustar");
    mensaje_final.classList.add("ajustar");
    input_texto.value="";
    
}

boton_encriptar.addEventListener("click", () => {
    const texto= input_texto.value.toLowerCase();

    function encriptar(nuevoTexto){
        for(let j=0; j< vocales.length;j++){
            if(nuevoTexto.includes(vocales[j][0])){
                nuevoTexto= nuevoTexto.replaceAll(vocales[j][0],vocales[j][1]);
            };
        };
        return nuevoTexto;
    }

    const textoEncriptado= encriptar(texto);
    remplace(textoEncriptado);
})


boton_desencriptar.addEventListener("click", ()=>{
    const texto= input_texto.value.toLowerCase();

    function desencriptar(nuevoTexto){
        for(let j=0; j< vocales.length;j++){
            if(nuevoTexto.includes(vocales[j][1])){
                nuevoTexto= nuevoTexto.replaceAll(vocales[j][1],vocales[j][0]);
            };
        };
        return nuevoTexto;
    }

    const textoDesencriptado= desencriptar(texto);
    remplace(textoDesencriptado);
})


boton_copiar.addEventListener("click", () =>{
    let texto=mensaje_final.value;
    navigator.clipboard.writeText(texto);

    mensaje_final.innerHTML="";
    mensaje_final.placeholder = 'Ningún mensaje fue encontrado';

    muñeco.style.display="block";

    mensaje_der_info.style.display="block";
    boton_copiar.style.display="none";

    main_der.classList.remove("ajustar");
    mensaje_final.classList.remove("ajustar");
    input_texto.focus;
})


