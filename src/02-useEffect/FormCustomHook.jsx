import { useState, useEffect } from "react"
import { useForm } from "../hooks/useForm";
import { Message } from "./Message";

export const FormCustomHook = () => {
    const { formState, onInputChange, username, email, password, onResetForm } = useForm({
        username: '',
        email: '',
        password: ''
    })

    //const { username, email, password } = formState;
    
    return (
        <>
            <h1>Form with Custom Hooks</h1>
            <hr />
            <input type="text" name="username" className="form-control mt-2" placeholder="Username" value={ username } onChange={ onInputChange }/>
            <input type="email" name="email" className="form-control mt-2" placeholder="correo@mail.com" value={ email } onChange={ onInputChange }/>
            <input type="password" name="password" className="form-control mt-2" placeholder="Contraseña" value={ password } onChange={ onInputChange } />

            <button onClick={ onResetForm } className="btn btn-warning mt-2">Reset</button>
            
            { 
                (username === 'Jose') && <Message />
            }
        </>
    )
}
