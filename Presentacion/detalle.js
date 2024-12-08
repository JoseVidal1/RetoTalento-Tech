document.addEventListener('DOMContentLoaded', () => {
    // Recupera el producto desde localStorage
    const producto = JSON.parse(localStorage.getItem('productoSeleccionado'));

    if (producto) {
        // Llama a la función para mostrar los detalles del producto
        mostrarDetalle(producto);
    } else {
        console.error('No se encontró el producto en el almacenamiento local.');
    }
});

// Definición de la función mostrarDetalle
function mostrarDetalle(producto) {
    const DOMitems = document.getElementById('producto-detalle');
    const miNodo = document.createElement('div');
    miNodo.classList.add('container', 'col-sm-4');

    const miNodoImg = document.createElement('img');
    miNodoImg.setAttribute('src', producto.imagen);

    const miNodoSection = document.createElement('section');
    const miNodoTitulo = document.createElement('h3');
    miNodoTitulo.textContent = producto.nombre;

    const miNodoCategoria = document.createElement('p');
    miNodoCategoria.textContent = producto.categoria;

    const miNodoDescripcion = document.createElement('p');
    miNodoDescripcion.textContent = producto.descripcion;

    const miNodoButton = document.createElement('button');
    miNodoButton.textContent = "Comprar Ahora";

    const miNodoPrecio = document.createElement('p');
    miNodoPrecio.textContent = `${producto.precio} ${producto.divisa}`;

    miNodoSection.appendChild(miNodoTitulo);
    miNodoSection.appendChild(miNodoCategoria);
    miNodoSection.appendChild(miNodoPrecio);
    miNodoSection.appendChild(miNodoDescripcion);
    miNodoSection.appendChild(miNodoButton);
    miNodo.appendChild(miNodoImg);
    miNodo.appendChild(miNodoSection);
    DOMitems.appendChild(miNodo);
    mostrarImgs(producto);
}

function mostrarImgs(producto){
    const DOMitems = document.getElementById('imagenes');
    const miNodoImagenes = document.createElement('div');
    miNodoImagenes.classList.add('container-img');
    const img1 = document.createElement('img');
    img1.setAttribute('src',producto.img2);
    const img2 = document.createElement('img');
    img2.setAttribute('src',producto.img3);
    const img3 = document.createElement('img');
    img3.setAttribute('src',producto.img4);
    miNodoImagenes.appendChild(img1);
    miNodoImagenes.appendChild(img2);
    miNodoImagenes.appendChild(img3);
    DOMitems.appendChild(miNodoImagenes);
}


