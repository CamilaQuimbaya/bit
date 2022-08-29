const contenedor = document.querySelector('.contenedor')
const encabezado1 = document.querySelector('#encabezado1')
const encabezado2 = document.querySelector('#encabezado2')
const encabezado3 = document.querySelector('#encabezado3')

encabezado1.classList.add('tamaño')
encabezado2.classList.add('color')
encabezado3.classList.add('decoracion')

encabezado1.classList.remove('tamaño')
encabezado2.classList.remove('color')
encabezado3.classList.remove('decoracion')

contenedor.innerHTML += '<h2>Hola soy el nuevo contenido</h2>'