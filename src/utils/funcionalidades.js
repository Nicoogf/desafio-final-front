export function formatCurrency(amount) {
    // Convierte el número en un string con formato de moneda
    return amount?.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
  

  export function lastFourNumbers(number) {
    if (typeof number !== 'number' || isNaN(number)) {
      return NaN; // O cualquier otro valor que indique un error
  }}