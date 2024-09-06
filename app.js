// Função click
function click() {
    let secInfo = document.getElementById('sec-info');
    let secSearch = document.getElementById('sec-search');
    let header = document.querySelector('header');

    if (secInfo.style.display === 'block') {
        secInfo.style.display = 'none';
        secSearch.style.display = 'flex';

        header.innerHTML = `
            <img src="assets/img/icon_white.png" class="logo-header" alt="Logo">
            <h1 class="white">WildLine</h1>
        `;
    } else {
        secSearch.style.display = 'none';
        secInfo.style.display = 'block';

        header.innerHTML = `
            <img src="assets/img/icon_white.png" class="logo-header" alt="Logo">
            <div class="div-input">
                <input type="text" id="search-input" placeholder="Busque aqui">
                <i class="fa-solid fa-magnifying-glass fa-3x" id="search-icon"></i>
            </div>
            <h1 class="white">WildLine</h1>
        `;

        let mensagem = ``;
        for (let animal of dados) {
            mensagem += `
                <div class='border'>
                    <h2>${animal.nome}</h2>
                    <p><span>Nome Científico:</span> <i>${animal.nomeCientifico}</i></p>
                    <p><span>Habitat:</span> ${animal.habitat}</p>
                    <p><span>Origem:</span> ${animal.origem}</p>
                    <p><span>Descrição:</span> ${animal.descricao}</p>
                </div>
            `;
        }
        secInfo.innerHTML = mensagem;
    }

    let newSearchIcon = document.getElementById('search-icon');
    if (newSearchIcon) {
        newSearchIcon.addEventListener('click', click);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('search-icon').addEventListener('click', click);
});
