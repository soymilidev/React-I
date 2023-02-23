import React, {useState} from 'react';
import PropTypes from 'prop-types';


const GreetingFunction = (props) => {
    // Breve intro a useState
    // const [variable, metodo para actualizarlo] = useState(valor inicial);
    const [age, setage] = useState(29);
    const birthday = () => {
        // actualizar el state
        setage(age +1)
    }

    return (
        <div>
            <div>
                <h2>
                    ¡Hola {props.name} desde componente funcional!
                </h2>
                <h3>
                    Tu edad es de {age} años
                </h3>
                <div>
                    <button onClick={birthday}>
                        Cumplir años
                    </button>
                </div>
        </div>
        </div>
    );
};

GreetingFunction.propTypes = {
    name: PropTypes.string,
};

export default GreetingFunction;
