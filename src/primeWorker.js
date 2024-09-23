// Función para comprobar si un número es primo
function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Escuchar los mensajes del hilo principal
self.addEventListener('message', (event) => {
    const maxNumber = event.data;
    const primes = [];

    for (let i = 2; i <= maxNumber; i++) {
        if (isPrime(i)) primes.push(i);
    }

    // Enviar el resultado de vuelta al hilo principal
    self.postMessage(primes);
});