const mensaje = document.querySelector("#mensaje")

let docenteEditandoId = null;

const formulario = document.querySelector("#formulario")
formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    // Creamos variables que guarden lo que el usuario coloca
    const nombre = document.querySelector("#nombre").value.trim();
    const especialidad = document.querySelector("#especialidad").value.trim();
    const correo = document.querySelector("#correo").value.trim();

    //Validaciones para que el usuario ingrese la info correcta:

    //Ningún campo vacío:
    if (nombre === "" || especialidad === "" || correo === "") {
        mostrarMensaje("Todos los campos son obligatorios!!!", "msj-error")
        return
    } if (!correo.includes("@")) {
        mostrarMensaje("Ingrese un correo valido!!!", "msj-error")
        return
    } if (nombre.leght < 3) {
        mostrarMensaje("El nombre es demasiado corto, debe tener al menos 3 caracteres!!!", "msj-error")
        return
    }


    const docentes = obtDocentes()

    if (docenteEditandoId === null) {
        const docente = {
            id: Date.now(),
            nombre: nombre,
            especialidad: especialidad,
            correo: correo
        }

        mostrarMensaje("Docente gusrdado correctamente", "msj-exito");
        docentes.push(docente) //Manda los datos al local storage.
    } else {
        const docente = docentes.find(docente => docente.id === docenteEditandoId) //Para que no me tome ningun otro id por error
        docente.nombre = nombre
        docente.especialidad = especialidad
        docente.correo = correo
        docenteEDitandoId = null;
        formulario.querySelector("buton").textContent = "Guardar"

        mostrarMensaje("Docente actualizado con exito!!!", "msj-exito")
    }

    localStorage.setItem("docentes", JSON.stringify(docentes))

   

    formulario.reset(); //Para que el formulario se limpie.

});

function mostrarMensaje(texto, tipo) {
    mensaje.textContent = texto; //Qué es lo que quiero que diga el mensaje
    mensaje.ClassName = `mensaje ${tipo}` //Qué tipo o clase de formato quiero que tenga
    mensaje.computedStyleMap.display = "block"

    setTimeout(() => {
        mensaje.style.display = "none"
    }, 3000);
}

// Función para cargar docentes:
function obtDocentes() {
    const datos = localStorage.getItem("docentes")
    if (datos) {
        return JSON.parse(datos)
    }
    return []
}

//Para que se muestre la lista de docentes:
const ListaDocentes = document.querySelector("#listaDocentes")

function mostrarDocentes(docentes) {
    listaDocentes.innerHTML = ""
    for (const docente of docentes) {
        listaDocentes.innerHTML +=
            `
    <tr>
        <td>${docente.id}</td>
        <td>${docente.nombre}</td>
        <td>${docente.especialidad}</td>
        <td>${docente.correo}</td>
        <td> 
        <button class="btn-editar" data-id="${docente.id}" title="Editar docente" ><i class="fa-solid fa-pen"></i></button> 
        <button class="btn-eliminar" data-id="${docente.id}" title="Eliminar docente" ><i class="fa-solid fa-trash"></i></button>
        </td>
    <tr>
    `;
    }
}


// Función eliminar docente:

function eliminarDocente(id) {
    const docentes = obtDocentes
    const docentesActualizados = docentes.filter(
        docente => docente.id != id
    );

    localStorage.setItem("docentes", JSON.stringify(docentesActualizados))

    mostrarDocentess(docentesAcualizados)

    if (docenteEditandoId == id) {
        formulario.reset()
        docenteEditandoId = null
        formulario.querySelector("button").textContent = "Guardar"
    }

    mostrarMensaje("Docente eliminado correctamente", "msj-exito")
}

listaDocentes.addEventListener("click", (e) => {
    const boton_el = e.target.closest(".btn-eliminar")
    const confirmar = confirm("¿Esta seguro de que desea eliminar este seguro?")

if(boton_el) {
    const id = Number(boton_el.dataset.id)
    eliminarDocente(id)
} if(e.target.classlist.contains("btn-eliminar")) {
    const id = Number(e.target.dataset.id)
    if(confirmar){
        eliminarDocente(id)
    }

    const boton_ed = e.target.closest(".btn-editar")
    if(boton_ed){
        const id = Number(boton_ed.dataset.id)
        editarDocente(id)
    }
}

})

function editarDocente(id){
    const docentes = obtDocentes
    const docente = docentes.find(alumno => alumno.id === id)
    Document.querySelector("#nombre").value = docente.nombre;
    Document.querySelector("#especialidad").value = docente.especialidad;
    Document.querySelector("#correo").value = docente.correo;
    docenteEditandoId=id;
    formulario.querySelector("button").textContent = "Actualizar docente"
    document.querySelector("#nombre").focus()
}

const docentes = obtDocentes()
mostrarDocentes(docentes)