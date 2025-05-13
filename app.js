document.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.getElementById('galeriadeproyectos');

    proyectosData.forEach((cardData, index) => {
        createCard(cardData, index);
    });

    function createCard(data, index) {

        let estilo = index;
        if (estilo > 7) {
            estilo = 1;
        } else {
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