// Crear el observador (Intersection Observer API)
// En la función anónima se recibe una lista de entradas,
// no importa que solo se observe un elemento
const observer = new IntersectionObserver(entries => {
	// Recorrer las entradas recibidas
	entries.forEach(entry => {
	  // Está visible en el viewport
	  if (entry.intersectionRatio > 0) {
		// entry.target es el elemento que se está observando
		// Agregar la clase para animar
		entry.target.classList.add('animate');

		// Dejar de observar
		observer.unobserve(entry.target);
	  }
	});
  });

// Observar elementos a animar
observer.observe(document.querySelector('.article1'));
observer.observe(document.querySelector('.article2'));
observer.observe(document.querySelector('.article3'));
observer.observe(document.querySelector('.article4'));