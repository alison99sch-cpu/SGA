function mostrarMensaje(texto, clase) {
    const mensaje = document.querySelector("#mensaje")
    mensaje.textContent = texto;
    mensaje.className = `mensaje ${clase}`
    mensaje.computedStyleMap.display = "block" //Para que se muestre el msj
    setTimeout(() => {
        mensaje.style.display = "none"
    }, 3000);
}