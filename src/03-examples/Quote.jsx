import PropTypes from "prop-types";
import { useState, useRef, useLayoutEffect  } from "react";

export const Quote = ({ quote, author }) => {
    const pRef = useRef();
    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 })
    
    /**
     * useLayoutEffect -> Se dispara de forma síncrona DESPUÉS DE TODAS LAS MUTACIONES de DOM. Se usa para leer el diseño del DOM 
     * y volver a renderizar de forma sincrónica. Ej. Leer el nuevo tamaño de un elemento

        Prefiera el useEffect estándar cuando sea posible para evitar el bloqueo de actualizaciones visuales.
     */
    useLayoutEffect(() => {
        //console.log(pRef.current.getBoundingClientRect())
        const { width, height } = pRef.current.getBoundingClientRect();
        setBoxSize({ width, height });
    }, [quote]);

    return (
        <>
            <blockquote className="blockquote text-end" style={{ display: 'flex' }}>
                <p ref={ pRef } className="mb-1">{quote}</p>
                <footer className="blockquote-footer">{author}</footer>
            </blockquote>

            <h5>{ JSON.stringify(boxSize) }</h5>
        </>
    )
}

Quote.propTypes = {
    quote: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
}