import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Worker = () => {
    const [worker, setWorker] = useState(null); // Estado para el Worker
    const [primes, setPrimes] = useState([]);   // Estado para almacenar los primos
    const [isCalculating, setIsCalculating] = useState(false); // Estado para la animación

    // Cargar el Worker cuando el componente se monte

    useEffect(() => {
        // Cargar el Worker con new URL() para que Vite lo maneje correctamente
        const workerInstance = new Worker(new URL('../primeWorker.js', import.meta.url));

        // Manejar los mensajes que vienen del Worker
        workerInstance.onmessage = (event) => {
            setPrimes(event.data); // Guardar los números primos en el estado
            setIsCalculating(false); // Detener la animación de carga
        };

        // Guardar la instancia del Worker en el estado
        setWorker(workerInstance);

        // Limpiar el Worker cuando el componente se desmonte
        return () => workerInstance.terminate();
    }, []);

    // Función para enviar el mensaje al Worker y comenzar el cálculo
    const calculatePrimes = () => {
        setIsCalculating(true);
        setPrimes([]); // Limpiar el estado antes de un nuevo cálculo
        if (worker) {
            worker.postMessage(100000); // Enviar el límite para calcular los primos
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Calculadora de Números Primos con Web Workers</h1>

            {/* Botón para iniciar el cálculo */}
            <button onClick={calculatePrimes} disabled={isCalculating}>
                {isCalculating ? 'Calculando...' : 'Calcular Primos'}
            </button>

            {/* Mostramos los resultados */}
            <div style={{ marginTop: '20px' }}>
                {isCalculating ? (
                    <p>Por favor, espera...</p>
                ) : primes.length > 0 ? (
                    <p>Primos encontrados: {primes.join(', ')}</p>
                ) : (
                    <p>No se han calculado primos aún.</p>
                )}
            </div>
            <Link to="/">Volver a la página de inicio</Link>
        </div>
    );
}