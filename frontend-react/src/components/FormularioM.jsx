import { useState } from "react";
const API_MATERIAS = "http://localhost:3000/materias";

export function FormularioM({ onMateriaCreada, materiaEditar, onCancelar }) {
  const [formulario, setFormulario] = useState({
    codigo: String(materiaEditar?.codigo ?? ""),
    nombre: materiaEditar?.nombre ?? "",
    descripcion: materiaEditar?.descripcion ?? "",
    cargaHoraria: materiaEditar?.cargaHoraria ?? "",
    estado: materiaEditar?.estado ?? "",
  });


  const [error, setError] = useState("");
  const [msjExito, setMsjExito] = useState("");
  const [guardando, setGuardando] = useState(false);

  const cod = (formulario.codigo.trim())
  const cantLetras =(cod.match(/[a-zA-Z]/g) || []).length
  const cantNumeros = (cod.match(/\d/g) || []).length

  const materia = {
    ...formulario,
    cargaHoraria: Number(formulario.cargaHoraria),
  };

  const editando = Boolean(materiaEditar);
  const url = editando
    ? `${API_MATERIAS}/${materiaEditar.codigo}`
    : API_MATERIAS;

  function manejarCambio(e) {
    const { name, value } = e.target;

    setFormulario({
      ...formulario,
      [name]: value,
    });
  }

  async function guardar(e) {
    e.preventDefault();
    setError("");
    setMsjExito("");
    
    const nombre = formulario.nombre.trim();

    if (
      !formulario.codigo.trim() ||
      !formulario.nombre.trim() ||
      !formulario.cargaHoraria ||
      !formulario.estado.trim()
    ) {
      setError("Todos los campos son obligatorios!!!");
      return;
    }
    if( cod.length > 4 || cod.length < 3 || cantLetras < 2 || cantNumeros < 1 || cantLetras + cantNumeros !== cod.length){
      setError("El codigo debe contener máximo 4 caracteres, mínimo 3. Por lo menos, 2 letras y 1 numero")
      return;
    }
  
    if (formulario.descripcion.length > 200) {
      setError("La descripción no puede superar los 200 caracteres");
      return;
    }
    if (
      !Number.isInteger(materia.cargaHoraria) ||
      Number(materia.cargaHoraria) <= 0 ||
      Number(materia.cargaHoraria) > 160
    ) {
      setError(
        "La carga horaria debe ser un número entero positivo entre 1 y 160",
      );
      return;
    }
    if (formulario.estado !== "ACTIVA" && formulario.estado !== "INACTIVA") {
      setError("En estado solo se aceptan ACTIVA o INACTIVA, sin espacios");
      return;
    }
    if (/^\d+$/.test(nombre)) {
      setError("El nombre no puede ser numérico, debe ser un texto válido");
      return;
    }

    setGuardando(true);

    try {
      const respuesta = await fetch(url, {
        method: editando ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(materia),
      });
      if (respuesta.status === 400) {
        throw new Error("El código ya existe o los datos son inválidos");
      }
      if (!respuesta.ok) {
        throw new Error(
          `No se pudo guardar la materia. Estado HTTP: ${respuesta.status}`,
        );
      }
      setFormulario({
        codigo: "",
        nombre: "",
        descripcion: "",
        cargaHoraria: "",
        estado: "",
      });
      onMateriaCreada();
      setMsjExito("Materia creada exitosamente");
      
    } catch (err) {
      console.error("Error al gaurdar:", err);
      setError(err.message || "No se pudo conectar con el servidor");
    } finally {
      setGuardando(false);
    }
  }

  function cancelar() {
    onCancelar();
  }

  return (
    <section className="sga-card sga-form">
      <h2>{materiaEditar ? "Editar materia" : "Nueva materia"}</h2>
      <form onSubmit={guardar}>
        <label htmlFor="codigo">Código</label>
        <input
          id="codigo"
          name="codigo"
          value={formulario.codigo}
          onChange={manejarCambio}
          disabled={editando}
          required
        />

        <label htmlFor="nombre">Nombre</label>
        <input
          id="nombre"
          name="nombre"
          value={formulario.nombre}
          onChange={manejarCambio}
          required
        />

        <label htmlFor="descripcion">Descripción</label>
        <input
          id="descripcion"
          name="descripcion"
          value={formulario.descripcion}
          onChange={manejarCambio}
        />

        <label htmlFor="cargaHoraria">Carga Horaria (Cuatrimestral)</label>
        <input
          id="cargaHoraria"
          name="cargaHoraria"
          value={formulario.cargaHoraria}
          onChange={manejarCambio}
          required
        />

        <label htmlFor="estado">Estado</label>
        <input
          id="estado"
          name="estado"
          value={formulario.estado}
          onChange={manejarCambio}
          required
        />

        <div className="sga-form__actions">
          <button type="submit" disabled={guardando}>
            {guardando
              ? "Guardando..."
              : materiaEditar
                ? "Guardar cambios"
                : "Guardar"}
          </button>

          {materiaEditar && (
            <button type="button" onClick={cancelar} disabled={guardando}>
              Cancelar
            </button>
          )}
        </div>
        {error && (
          <p className="sga-form__error" role="alert">
            {error}
          </p>
        )}
        {
          msjExito && (
            <p className="sga-form__success" role="alert">
              {msjExito}
            </p>
          )
        }
      </form>
    </section>
  )
}

