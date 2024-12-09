document.addEventListener('DOMContentLoaded', () => {
    const baseDeDatos = [
        {
            id: 1,
            nombre: 'Exakta Varex',
            descripcion: 'Un ícono de la fotografía clásica que marcó un hito en la industria. Esta cámara de 35mm no solo destaca por su diseño innovador y elegante, sino también por su capacidad de adaptarse a las exigencias de fotógrafos profesionales y aficionados. Su construcción robusta y su precisión técnica ofrecen una experiencia única, ideal para quienes buscan capturar imágenes con un estilo retro auténtico y una calidad inigualable. Con la Exakta Varex, estás no solo adquiriendo una cámara, sino una pieza de historia que inspira creatividad y nostalgia.',
            imagen: '/Camaras/Exakta Varex/Principal.webp',
            categoria: 'Camaras',
            precio: 200.99,
            img2 : '/Camaras/Exakta Varex/2.webp',
            img3 : '/Camaras/Exakta Varex/3.webp',
            img4 : '/Camaras/Exakta Varex/4.webp',
        },
        {
            id: 2,
            nombre: 'Instant Polaroid',
            descripcion: 'La pionera indiscutible de la fotografía instantánea, esta cámara revolucionó la forma en que capturamos recuerdos. Con su capacidad de imprimir fotografías al instante, se convirtió en un ícono cultural amado por generaciones. Su rapidez, facilidad de uso y estética única transforman cada toma en una obra de arte nostálgica. Ya sea para capturar momentos espontáneos o para experimentar con su singular paleta de colores vintage, la Polaroid sigue siendo una elección perfecta para quienes buscan mezclar tecnología y tradición en un formato tan tangible como inolvidable.',
            imagen: '/Camaras/Instant Polaroid/PrincipalPol.webp',
            categoria: 'Camaras',
            precio: 199.99,
            img2 : '/Camaras/Instant Polaroid/2.webp',
            img3 : '/Camaras/Instant Polaroid/3.webp',
            img4 : '/Camaras/Instant Polaroid/4.webp',
        }
    ];
    localStorage.setItem('baseDeDatos', JSON.stringify(baseDeDatos));

    let carrito = [];
    const divisa = '$';
    const DOMitems = document.querySelector('#items');
    const DOMcarrito = document.querySelector('#carritou');
    const DOMtotal = document.querySelector('#total');
    const DOMbotonVaciar = document.querySelector('#boton-vaciar');
    const miLocalStorage = window.localStorage;
    const filtroSelect = document.getElementById("filtro");
    const botonCarrito = document.getElementById('btn-carrito');
    const carritoContainer = document.getElementById('carrito-container');
    window.anadirProductoAlCarrito = anadirProductoAlCarrito;
    window.cargarCarritoDeLocalStorage = cargarCarritoDeLocalStorage;
    window.renderizarCarrito = renderizarCarrito;
    window.handleCarritoValue = handleCarritoValue;
    botonCarrito.addEventListener('click', () => {
        // Alterna el estado de visibilidad del contenedor del carrito
        if (carritoContainer.style.display === 'none') {
            carritoContainer.style.display = 'block';
        } else {
            carritoContainer.style.display = 'none';
        }
    });
    

    function renderizarProductos() {
        DOMitems.innerHTML = "";
        const filtro = filtroSelect.value;
        const productosFiltrados = baseDeDatos.filter(producto =>
            filtro === "todas" || producto.categoria === filtro
        );

        productosFiltrados.forEach((info) => {
            if(info.id%2!=0){
                const miNodo = document.createElement('div');
                miNodo.classList.add('card', 'col-sm-4');
    
                const miNodoCardBody = document.createElement('div');
                miNodoCardBody.classList.add('card-body');
    
                const miNodoTitle = document.createElement('button');
                miNodoTitle.classList.add('card-title');
                miNodoTitle.textContent = info.nombre;
                miNodoTitle.addEventListener('click', () => {
                    // Guarda el producto seleccionado en localStorage
                    localStorage.setItem('productoSeleccionado', JSON.stringify(info));
                    // Redirige a la página de detalles
                    window.location.href = 'detalles.html';
                });
    
                const miNodoImagen = document.createElement('img');
                miNodoImagen.classList.add('img-fluid');
                miNodoImagen.setAttribute('src', info.imagen);
    
                const miNodoDescripcion = document.createElement('p');
                miNodoDescripcion.classList.add('card-text');
                miNodoDescripcion.textContent = info.descripcion;
                const miNodoPrecio = document.createElement('p');
                miNodoPrecio.textContent = `${info.precio}${divisa}`;
                const miNodoBoton = document.createElement('button');
                miNodoBoton.classList.add('btn', 'btn-primary');
                miNodoBoton.textContent = 'Añadir al Carro';
                miNodoBoton.setAttribute('marcador', info.id);
                miNodoBoton.addEventListener('click', anadirProductoAlCarrito);
                miNodoCardBody.appendChild(miNodoImagen);
                miNodoCardBody.appendChild(miNodoTitle);
                miNodoCardBody.appendChild(miNodoDescripcion);
                miNodoCardBody.appendChild(miNodoPrecio);
                miNodoCardBody.appendChild(miNodoBoton);
                miNodo.appendChild(miNodoCardBody);
                DOMitems.appendChild(miNodo);
            }else{
                const miNodo = document.createElement('div');
            miNodo.classList.add('card2', 'col-sm-4');

            const miNodoCardBody = document.createElement('div');
            miNodoCardBody.classList.add('card-body2');

            const miNodoTitle = document.createElement('button');
            miNodoTitle.classList.add('card-title2');
            miNodoTitle.textContent = info.nombre;
            miNodoTitle.addEventListener('click', () => {
                // Guarda el producto seleccionado en localStorage
                localStorage.setItem('productoSeleccionado', JSON.stringify(info));
                // Redirige a la página de detalles
                window.location.href = 'detalles.html';
            });

            const miNodoImagen = document.createElement('img');
            miNodoImagen.classList.add('img-fluid2');
            miNodoImagen.setAttribute('src', info.imagen);

            const miNodoDescripcion = document.createElement('p');
            miNodoDescripcion.classList.add('card-text2');
            miNodoDescripcion.textContent = info.descripcion;
            const miNodoPrecio = document.createElement('p');
            miNodoPrecio.textContent = `${info.precio}${divisa}`;
            const miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('btn', 'btn-primary');
            miNodoBoton.textContent = 'Añadir al Carro';
            miNodoBoton.setAttribute('marcador', info.id);
            miNodoBoton.addEventListener('click', anadirProductoAlCarrito);


            //contenedor para boton
            const contenedorBoton = document.createElement('div');
            contenedorBoton.classList.add('btn-container');
            // Inserta el botón dentro del contenedor
            contenedorBoton.appendChild(miNodoBoton);
            // Agrega el contenedor al DOM donde corresponda
            document.body.appendChild(contenedorBoton);


            miNodoCardBody.appendChild(miNodoImagen);
            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(miNodoDescripcion);
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodoCardBody.appendChild(miNodoBoton);
            miNodo.appendChild(miNodoCardBody);
            DOMitems.appendChild(miNodo);
            }
            
        });
    }

   function anadirProductoAlCarrito(evento) {
        carrito.push(evento.target.getAttribute('marcador'));
        renderizarCarrito();
        guardarCarritoEnLocalStorage();
        handleCarritoValue(carrito.length);
    }

    function handleCarritoValue(value) {
    const carritoContainer = document.getElementById("carrito");
    if(value!=0){
        carritoContainer.textContent = `${value}`;
    }else{
        carritoContainer.textContent = `${""}`;
    }
    }
    function renderizarCarrito() {
        DOMcarrito.textContent="";
        const carritoSinDuplicados = [...new Set(carrito)];
        carritoSinDuplicados.forEach((item) => {
            const miItem = baseDeDatos.filter((itemBaseDatos) => {
                return itemBaseDatos.id === parseInt(item);
            });
            const numeroUnidadesItem = carrito.reduce((total, itemId) => {
                return itemId === item ? total += 1 : total;
            }, 0);
            const miNodo = document.createElement('li');
            miNodo.classList.add('list-group-item');
            miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;
            const miBoton = document.createElement('button');
            miBoton.classList.add('btn', 'btn-danger', 'mx-5');
            miBoton.textContent = 'X';
            miBoton.style.marginLeft = '1rem';
            miBoton.dataset.item = item;
            miBoton.addEventListener('click', borrarItemCarrito);
            miNodo.appendChild(miBoton);
            DOMcarrito.appendChild(miNodo);
        });
        DOMtotal.textContent = calcularTotal();
        if (carrito.length > 0) {
            carritoContainer.style.display = 'block'; // Mostrar el carrito
        } else {
            carritoContainer.style.display = 'none'; // Ocultar si está vacío
        }
    }
    //borra carrito
    function borrarItemCarrito(evento) {
        const id = evento.target.dataset.item;
        carrito = carrito.filter((carritoId) => {
            return carritoId !== id;
        });
        renderizarCarrito();
        guardarCarritoEnLocalStorage();
        handleCarritoValue(carrito.length);
    }
    //calcular el total
    function calcularTotal() {
        return carrito.reduce((total, item) => {
            const miItem = baseDeDatos.filter((itemBaseDatos) => {
                return itemBaseDatos.id === parseInt(item);
            });
            return total + miItem[0].precio;
        }, 0).toFixed(2);
    }
    //vaciar todos los elementos del carrito
    function vaciarCarrito() {
        carrito = [];
        renderizarCarrito();
        handleCarritoValue(carrito.length);
    }
    //guardar en local el carrito
    function guardarCarritoEnLocalStorage() {
        miLocalStorage.setItem('carrito', JSON.stringify(carrito));
    }
    //cargar del local el carriro
    function cargarCarritoDeLocalStorage() {
        if (miLocalStorage.getItem('carrito') !== null) {
            carrito = JSON.parse(miLocalStorage.getItem('carrito'));
            return carrito.length;
        }
        return 0;
    }
    // Eventos
    DOMbotonVaciar.addEventListener('click', vaciarCarrito);
    filtroSelect.addEventListener('change', renderizarProductos);
    // Inicio
    cargarCarritoDeLocalStorage();
    renderizarProductos();
    renderizarCarrito();
    handleCarritoValue(carrito.length);
    
});

