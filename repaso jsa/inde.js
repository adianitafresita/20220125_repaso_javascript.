const cantante = [

    {
        id: 1,
        cantantes: "Usain bolt",
        imagen: "https://d.newsweek.com/en/full/1589269/joji-over-party-twitter.jpg?w=1200&f=c032311a1dfaf3c74d0a1e69763c4036"
    },
    {
        id: 2,
        cantantes: "Usain bolt",
        imagen: "https://kioscodelahistoria.com/wp-content/uploads/2023/10/Michael-Jackson-1024x529.jpg"
    },
    {
        id: 3,
        cantantes: "Usain bolt",
        imagen: "https://caracoltv.brightspotcdn.com/dims4/default/b719951/2147483647/strip/true/crop/1280x720+0+0/resize/1000x563!/quality/90/?url=http%3A%2F%2Fcaracol-brightspot.s3.amazonaws.com%2Fbe%2F6a%2F7427ecfd45a9bad88f0cb1262d09%2Fkali-uchis.jpg"
    },
    {
        id: 4,
        cantantes: "Usain bolt",
        imagen: "https://vanguardia.com.mx/binrepository/1152x768/0c0/1152d648/down-right/11604/EGMC/leon-larregui-concierto-10_1-6876098_20230904062120.jpg"
    },
    {
        id: 5,
        cantantes: "Usain bolt",
        imagen: "https://d.newsweek.com/en/full/1589269/joji-over-party-twitter.jpg?w=1200&f=c032311a1dfaf3c74d0a1e69763c4036"
    },
    {
        id: 6,
        cantantes: "Usain bolt",
        imagen: "https://kioscodelahistoria.com/wp-content/uploads/2023/10/Michael-Jackson-1024x529.jpg"
    },
    {
        id: 7,
        cantantes: "Usain bolt",
        imagen: "https://caracoltv.brightspotcdn.com/dims4/default/b719951/2147483647/strip/true/crop/1280x720+0+0/resize/1000x563!/quality/90/?url=http%3A%2F%2Fcaracol-brightspot.s3.amazonaws.com%2Fbe%2F6a%2F7427ecfd45a9bad88f0cb1262d09%2Fkali-uchis.jpg"
    },
    {
        id: 8,
        cantantes: "Usain bolt",
        imagen: "https://vanguardia.com.mx/binrepository/1152x768/0c0/1152d648/down-right/11604/EGMC/leon-larregui-concierto-10_1-6876098_20230904062120.jpg"
    },
    {
        id: 9,
        cantantes: "Usain bolt",
        imagen: "https://d.newsweek.com/en/full/1589269/joji-over-party-twitter.jpg?w=1200&f=c032311a1dfaf3c74d0a1e69763c4036"
    },
    {
        id: 10,
        cantantes: "Usain bolt",
        imagen: "https://kioscodelahistoria.com/wp-content/uploads/2023/10/Michael-Jackson-1024x529.jpg"
    },
]


function activar(cantantes) {
    try {

        cantantes.forEach(cantante => {
            const rowContainer = document.createElement('div');
            rowContainer.id = 'rowContainer_' + cantante.id;
            rowContainer.classList.add('row', 'py-1');

            const nombreCantante = document.createElement('input');
            nombreCantante.id = 'nombreCantante' + cantante.id;
            nombreCantante.type = 'text';
            nombreCantante.name = 'nombreCantante' + cantante.id;
            nombreCantante.classList.add('col-12', 'rounded-3', 'me-2', 'text-center');
            nombreCantante.disabled = true;
            nombreCantante.value = cantante.cantantes;

            const imagenCantanteInput = document.createElement('img');
            imagenCantanteInput.src = cantante.imagen;
            imagenCantanteInput.classList.add('rounded', 'mx-auto', 'd-block');
            rowContainer.appendChild(nombreCantante);
            rowContainer.appendChild(imagenCantanteInput);

            const nombresDeLosCantanteesDiv = document.getElementById('contenido1');

            nombresDeLosCantanteesDiv.appendChild(rowContainer);
        })
    }
    catch (error) {
        console.log(error)
    }
}

activar(cantante)

// window.onload
window.onload = async function () {
    cantante(cantante);
};