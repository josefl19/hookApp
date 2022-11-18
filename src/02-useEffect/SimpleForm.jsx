import { useState, useEffect } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {
    
    const [formState, setFormState] = useState({
        username: 'José',
        email: 'jose@mail.com'
    })

    const {username, email} = formState;

    /**
     * Target -> Propiedad del Event
     */
    const onInputChange = ({ target }) => {
        const { name, value } = target;     // Equivale a event.target.name. 
        setFormState({
            ...formState,                   // Obtenemos las propiedades y luego las modificamos
            [ name ]: value                 // Name (input que se modifica), value (valor que se escribe)
        })
    }

    /**
     * useEffect( funcion, dependencia) -> Se dispara cuando ocurre un cambio de estado como en los elementos del formState.
     *                                     Sin dependecias, se dispara con cualquier cambio.
     *                                     Con dependencias solo cuando se cumple con la condicion indicada.
     *                                     [] solo una vez y es cuando se renderiza y monta el componente por primera vez.
     * 
     * Se recomienda hacer un useEffect por cada accion especifica que se quiera realizar.
     */
    useEffect( () => {
        //console.log('useEffect called!')
    }, []);

    // useEffect se dispara cada que el form cambia
    useEffect( () => {
        //console.log('formState changed')
    }, [formState])

    // useEffect se dispara cada que el email cambia
    useEffect( () => {
        // console.log('email changed')
    }, [email])
    
    return (
        <>
            <h1>SimpleForm</h1>
            <hr />
            <input type="text" name="username" className="form-control mt-2" placeholder="Username" value={ username } onChange={ onInputChange }/>
            <input type="email" name="email" className="form-control mt-2" placeholder="correo@mail.com" value={ email } onChange={ onInputChange }/>

            { 
                (username === 'Jose') && <Message />
            }
        </>
    )
}
