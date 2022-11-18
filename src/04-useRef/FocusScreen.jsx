import { useRef } from "react"


export const FocusScreen = () => {
    /**
     * useRef -> Permite mantener uan referencia que al sufrir un cambio evita que rerenderización del componente
     */
    const inputRef = useRef();
    
    const onClick = () => {
        console.log(inputRef);
        inputRef.current.select();      // Equivale a: document.querySelector('input').select()
    }

    return (
        <>
            <h1>Focus Screen</h1>
            <hr />

            <input ref={ inputRef } type="text" placeholder="Ingrese su nombre" className="form-control" />

            <button className="btn btn-primary mt-2" onClick={onClick}>Set focus</button>
        </>
    )
}
