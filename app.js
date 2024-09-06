function click() {
    let secInfo = document.getElementById('sec-info');
    let secSearch = document.getElementById('sec-search');
    let searchInput = (document.getElementById('search-input').value).toLowerCase();
    let body = document.querySelector('body');

    let mensagem = ``;

    for (let animal of dados) {
        if (!searchInput) {
            secSearch.style.display = 'none';
            secInfo.style.display = 'flex';
            mensagem = `<p class='text-na'>Nenhum animal encontrado</p>`;
        } else if (animal.nome.toLowerCase().includes(searchInput)) {
            secSearch.style.display = 'none';
            secInfo.style.display = 'flex';
            mensagem += `
            <div class='border'>
                <h2>${animal.nome}</h2>
                <p><span>Nome Científico:</span> <i>${animal.nomeCientifico}</i></p>
                <p><span>Habitat:</span> ${animal.habitat}</p>
                <p><span>Origem:</span> ${animal.origem}</p>
                <p><span>Descrição:</span> ${animal.descricao}</p>
            </div>
            `;
            body.style.backgroundImage = animal.img;
        }
    }

    if (!mensagem) {
        secSearch.style.display = 'none';
        secInfo.style.display = 'flex';
        mensagem = `<p class='text-na'>Nenhum animal encontrado</p>`;
        body.style.backgroundImage = 'url(../img/bg-coala.png)';
    }

    secInfo.innerHTML = mensagem;
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('search-icon').addEventListener('click', click);
});
