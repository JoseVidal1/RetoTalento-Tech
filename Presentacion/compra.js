document.addEventListener('DOMContentLoaded', () => {
    const baseDeDatos = [
        {
            id: 1,
            nombre: 'Exakta Varex',
            descripcion: 'Un ícono de la fotografía clásica, esta cámara de 35mm combina diseño innovador con versatilidad, ideal para quienes buscan precisión y estilo retro',
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
            descripcion: 'La pionera de la fotografía instantánea, famosa por su rapidez y estética única. Captura momentos y obtén tus fotos al instante con un toque nostálgico.',
            imagen: '/Camaras/Instant Polaroid/PrincipalPol.webp',
            categoria: 'Camaras',
            precio: 199.99,
            img2 : '/Camaras/Instant Polaroid/2.webp',
            img3 : '/Camaras/Instant Polaroid/3.webp',
            img4 : '/Camaras/Instant Polaroid/4.webp',
        }
    ];
    localStorage.setItem('baseDeDatos', JSON.stringify(baseDeDatos));

    const DOMitems = document.querySelector('#items');
    const filtroSelect = document.getElementById("filtro");

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
    
                const miNodoBoton = document.createElement('button');
                miNodoBoton.classList.add('btn', 'btn-primary');
                miNodoBoton.textContent = 'Añadir';
                miNodoBoton.setAttribute('marcador', info.id);
    
                miNodoCardBody.appendChild(miNodoImagen);
                miNodoCardBody.appendChild(miNodoTitle);
                miNodoCardBody.appendChild(miNodoDescripcion);
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

            const miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('btn', 'btn-primary');
            miNodoBoton.textContent = 'Añadir';
            miNodoBoton.setAttribute('marcador', info.id);

            miNodoCardBody.appendChild(miNodoImagen);
            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(miNodoDescripcion);
            miNodoCardBody.appendChild(miNodoBoton);
            miNodo.appendChild(miNodoCardBody);
            DOMitems.appendChild(miNodo);
            }
            
        });
    }

    filtroSelect.addEventListener('change', renderizarProductos);
    renderizarProductos();
});
