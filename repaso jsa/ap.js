var data = 'https://api-ninjas.com';
var category = 'nature'
const llamadaApi = async () => {
    {
        const idpii = Math.floor(Math.random() * 40)
        const respuesta = await fetch(`https://rickandmortyapi.com/api/character/${idpii}`);
        const resultado = await respuesta.json()

            .then(data => {
                const rowContainer = document.createElement('div');
                rowContainer.classList.add('row');

                const figura = document.createElement('figure');
                figura.classList.add('figure', 'text-center');

                const imagen = document.createElement('img');
                imagen.src = data.image;
                imagen.classList.add('figure-img', 'img-fluid', 'rounded');
                imagen.style.width = '500px';
                
                figura.appendChild(imagen);
                console.log('No hay');
                
                const chiste = document.createElement('input');
                chiste.id = 'nombreCantante_' + data.id;
                chiste.type = 'text';
                chiste.name = 'nombreCantante_' + data.id;
                chiste.classList.add('col-12', 'rounded-3', 'text-center', 'h3');
                chiste.disabled = true;
                chiste.value = data.name;

                rowContainer.appendChild(figura);
                rowContainer.appendChild(chiste);
                const nombresCantantesDiv = document.getElementById('contenido2');

                nombresCantantesDiv.appendChild(rowContainer);
            });
    }
}

window.onload = async function () {
    llamadaApi();
};