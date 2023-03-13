import PropTypes from "prop-types";
import Contacto from "./Contacto";

function ComponenteB(props) {
    const { contacto, onCambiarEstado } = props;

    function handleClick() {
        const nuevoEstado = !contacto.conectado;
        onCambiarEstado(nuevoEstado);
    }

    const mensaje = contacto.conectado ? "Contacto En Línea" : "Contacto No Disponible";

    return (
        <div>
        <button onClick={handleClick}>Cambiar estado</button>
        <p>{mensaje}</p>
        </div>
    );
}

ComponenteB.propTypes = {
    contacto: PropTypes.instanceOf(Contacto).isRequired,
    onCambiarEstado: PropTypes.func.isRequired,
};

export default ComponenteB;
