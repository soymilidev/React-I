import Contacto from "./Contacto";
import ComponenteB from "./ComponenteB";
import { useState } from "react";

function ComponenteA() {
    const [contacto, setContacto] = useState(new Contacto("Jimmy", "Page", "jimmyPage@gmail.com", true));

    function handleCambiarEstado(nuevoEstado) {
        const nuevoContacto = new Contacto(contacto.nombre, contacto.apellido, contacto.email, nuevoEstado);
        setContacto(nuevoContacto);
    }

    return (
        <div>
        <h2>{contacto.nombre} {contacto.apellido}</h2>
        <p>{contacto.email}</p>
        <ComponenteB contacto={contacto} onCambiarEstado={handleCambiarEstado} />
        </div>
    );
}

export default ComponenteA;
