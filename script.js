// Pobieramy element, w którym wyświetlany będzie licznik
const counterElement = document.getElementById('counter');

// Inicjalizujemy licznik od 1 grosza
let counter = 0.01;

// Funkcja, która zwiększa licznik
function increaseCounter() {
  counter += 0.01; // Dodajemy 1 grosz
  counterElement.textContent = counter.toLocaleString('pl-PL', { style: 'currency', currency: 'PLN' }); // Formatowanie w złotówkach
}

// Wywołujemy funkcję co 10 milisekund (bardzo szybkie liczenie)
setInterval(increaseCounter, 10);
