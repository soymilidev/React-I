// import React
// Vemos la importacion previamente en el archivo para cuando se renderize el proyecto se conozca 
// que es un componente react y que va a ser un archivo .js, orientado a react.

// Component: es una clase que estamos extendiendo
// propTypes: contenido que le puedo pasar a un componente padre a uno hijo.

import React, { Component } from 'react';
import PropTypes from 'prop-types';
// especifican el tipo de dato que estamos pasando (string, int, etc)

class Greeting extends Component {
    constructor(props){
        // queremos trabajar con las props que vengan de nuestro componente. Informacion que queremos pasar por atributos. Info q le pasamos a nuestro compo.
        // state: valor privado del compo., valor que puede modificarse y cuando suceda actualizaria la vista. Un componente puro no tiene necesariamente que tener un state.
        // informacion priv. que sirve para gestionar internamente o mostrar el contenido que tiene que mostrar (info. estatica e inmutable, no modificable). Serian como las propiedades de la clase.
        super(props)
        this.state = {
            age : 29
        }
    }
// generar un nuevo estado y actualizar la vista
    birthday = () => {
        this.setState((prevState) => (
            {
                age: prevState.age +1
            }
        ))
    }


    render() {
        return (
            <div>
                <h2>
                    ¡Hola! {this.props.name}
                </h2>
                <h3>
                    Tu edad es de {this.state.age} años
                </h3>
                <div>
                    <button onClick={this.birthday}>
                        Cumplir años
                    </button>
                </div>
            </div>
        );
    }
}

Greeting.propTypes = {
    // las comas al final de los objetos son recomendables
    name: PropTypes.string,
};

export default Greeting;
