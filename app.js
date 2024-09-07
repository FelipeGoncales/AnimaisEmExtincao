function click() {
    let secInfo = document.getElementById('sec-info');
    let secSearch = document.getElementById('sec-search');
    let searchInput = (document.getElementById('search-input').value).toLowerCase();
    let body = document.querySelector('body');
    let root = document.documentElement;

    let mensagem = ``;

    for (let animal of dados) {
        if (!searchInput) {
            return;
        } else if (animal.tags.join(' ').toLowerCase().includes(searchInput)) {
            secSearch.style.display = 'none';
            secInfo.style.display = 'flex';
            mensagem += `
            <div class='border'>
                <h2>${animal.nome}</h2>
                <p><span>Nome Científico:</span><br><i>${animal.nomeCientifico}</i></p>
                <p><span>Habitat:</span><br>${animal.habitat}</p>
                <p><span>Origem:</span><br>${animal.origem}</p>
                <p><span>Descrição:</span><br>${animal.descricao}</p>
            </div>
            `;
            body.style.backgroundImage = `url(${animal.img})`;
            root.style.setProperty('--letras',`${animal.color}`)
            break;
        }
    }

    if (!mensagem) {
        secSearch.style.display = 'none';
        secInfo.style.display = 'flex';
        mensagem = `<p class='text-na'>Nenhum animal encontrado</p>`;
        body.style.backgroundImage = 'url(assets/img/bg-padrao.jpg)';
    }

    secInfo.innerHTML = mensagem;
}

function preloadImage(url) {
    const img = new Image();
    img.src = url;
    console.log(img)
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('search-input').addEventListener('keydown', click)
    dados.forEach(animal => preloadImage(animal.img));
});