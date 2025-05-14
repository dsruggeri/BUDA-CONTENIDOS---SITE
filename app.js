document.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.getElementById('galeriadeproyectos');

    proyectosData.forEach((cardData, index) => {
        createCard(cardData, index);
    });

    function createCard(data, index) {

        let estilo = index;
        if (estilo > 7 && estilo < 15) {
            estilo = estilo - 7;
        }
        if (estilo >= 15 && estilo < 23) {
            estilo = estilo - 14;
        }
        if (estilo >= 23 && estilo < 31) {
            estilo = estilo - 23;
        } 
        else {
            estilo = estilo + 1;
        };

        galleryContainer.innerHTML +=
            `
                <article class="style${estilo}">
                    <span class="image">
                        <img src="${data.imagen}" alt="${data.titulo}"/>
                    </span>
                    <a href="${data.url}">
                        <h2>${data.titulo}</h2>
                        <div class="content">
                            <p>${data.subtitulo} <br> ${data.generos}</p>
                        </div>
                    </a>
                </article>
            `
    }




});