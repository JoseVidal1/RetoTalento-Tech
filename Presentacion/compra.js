document.addEventListener('DOMContentLoaded', () => {
    // Variables
    var nuevaVisita = true;

    const baseDeDatos = [
        {
            id: 1,
            nombre: 'Exakta Varex',
            descripcion: 'Un ícono de la fotografía clásica, esta cámara de 35mm combina diseño innovador con versatilidad, ideal para quienes buscan precisión y estilo retro',
            imagen: '/Camaras/Exakta Varex/Principal.webp',
            categoria: 'Camaras',
            detalle:"detalleExakta.html"
        },
        {
            id:2,
            nombre:'Instant Polaroid',
            descripcion:'La pionera de la fotografía instantánea, famosa por su rapidez y estética única. Captura momentos y obtén tus fotos al instante con un toque nostálgico.',
            imagen:'/Camaras/Instant Polaroid/PrincipalPol.webp',
            categoria:'Camaras',
            detalle:"detalleInstant.html"
        }
    ];

    let carrito = [];
    const divisa = '$';
    const DOMitems = document.querySelector('#items');
    //const DOMcarrito = document.querySelector('#carrito');
    //const DOMtotal = document.querySelector('#total');
    const DOMbotonVaciar = document.querySelector('#boton-vaciar');
    const miLocalStorage = window.localStorage;
    const filtroSelect = document.getElementById("filtro");

    // Funciones

    function renderizarProductos() {
        DOMitems.innerHTML = "";
        const filtro = filtroSelect.value;
        const productosFiltrados = baseDeDatos.filter(producto =>
            filtro === "todas" || producto.categoria === filtro
        );
        productosFiltrados.forEach((info) => {
            const miNodo = document.createElement('div');
            if(info.id % 2 != 0){
                miNodo.classList.add('card', 'col-sm-4');
                const miNodoCardBody = document.createElement('div');
                miNodoCardBody.classList.add('card-body');
                const miNodoTitle = document.createElement('a');
                miNodoTitle.classList.add('card-title');
                miNodoTitle.href=info.detalle;
                miNodoTitle.textContent = info.nombre;
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
                miNodo.classList.add('card2', 'col-sm-4');
                const miNodoCardBody = document.createElement('div');
                miNodoCardBody.classList.add('card-body2');
                const miNodoTitle = document.createElement('a');
                miNodoTitle.classList.add('card-title2');
                miNodoTitle.href=info.detalle;
                miNodoTitle.textContent = info.nombre;
                const miNodoImagen = document.createElement('img');
                miNodoImagen.classList.add('img-fluid2');
                miNodoImagen.setAttribute('src', info.imagen);
                const miNodoDescripcion = document.createElement('p');
                miNodoDescripcion.classList.add('card-text2');
                miNodoDescripcion.textContent = info.descripcion;
                const miNodoBoton = document.createElement('button');
                miNodoBoton.classList.add('btn2', 'btn-primary');
                miNodoBoton.textContent = 'Añadir';
                miNodoBoton.setAttribute('marcador', info.id);
                miNodoCardBody.appendChild(miNodoImagen);
                miNodoCardBody.appendChild(miNodoTitle);
                miNodoCardBody.appendChild(miNodoDescripcion);
                miNodoCardBody.appendChild(miNodoBoton);
                miNodo.appendChild(miNodoCardBody);
                DOMitems.appendChild(miNodo);
            }
            
            //miNodoBoton.addEventListener('click', anadirProductoAlCarrito);
           
        });
    }
    filtroSelect.addEventListener('change', renderizarProductos);
    renderizarProductos();




});