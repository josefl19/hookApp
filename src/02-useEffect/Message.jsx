import { useState } from "react";
import { useEffect } from "react";


export const Message = () => {
    const [coords, setCoords] = useState({ x: 0, y: 0 })
    /**
     * Consideraciones:
     * Para remover un efecto es necesario hacer referencia al efecto a remover
     */
    useEffect(() => {
        // 1. Acción/efecto a realizar cuando haya un cambio y sea llamado. Efecto onMouseMove
        const onMouseMove = ({ x, y }) => {
            setCoords({ x, y });
        }

        window.addEventListener('mousemove', onMouseMove);

        return () => {
            // 2. Cleanup (unmount) al terminar de ejecutar el primer paso. Eliminar haciendo referencia al efecto en paso anterior
            window.removeEventListener('mousemove', onMouseMove)
        }
    }, [])  // Dependencia para ser llamado


    return (
        <>
            <h3>Usuario ya existe!</h3>
            {JSON.stringify(coords)}
        </>
    )
}
