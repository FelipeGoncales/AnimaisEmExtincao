function click() {
    let secInfo = document.getElementById('sec-info');
    let secSearch = document.getElementById('sec-search');
    let searchInput = (document.getElementById('search-input').value).toLowerCase();
    let body = document.querySelector('body');
    let root = document.documentElement;

    let mensagem = ``;

    for (let animal of dados) {
        if (!searchInput) {
            secSearch.style.display = 'none';
            secInfo.style.display = 'flex';
            mensagem = `<p class='text-na'>Digite o nome de algum animal para encontrá-lo!</p>`;
            body.style.backgroundImage = 'url(assets/img/bg-padrao.jpg)';
            secInfo.innerHTML = mensagem;
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
        mensagem = `<p class='text-na'>Nenhum animal encontrado.</p>`;
        body.style.backgroundImage = 'url(assets/img/bg-padrao.jpg)';
    }

    secInfo.innerHTML = mensagem;
}

function listarAnimais() {
    let ul = document.querySelector('ul');
    let li = document.querySelector('li');
    let searchInput = document.getElementById('search-input')
    var lista = ``;
    let contador = 0;
    const limite = 4;

    if (!searchInput) {
        ul.innerHTML = ``;
        return;
    }
    
    for (let animal of dados) {
        if (contador >= limite) {
            break;
        } else {
            if (!searchInput.value) {
                lista = ``;
            } else if (animal.nome.toLowerCase().includes(searchInput.value)) {
                lista += `
                    <li class='item${contador}' onclick=completar(${contador})>${animal.nome}</li>
                `
                contador++;
            }
        }
    
        if (lista != ``) {
            searchInput.style.borderRadius = '1em 1em 0 0';
        } else {
            searchInput.style.borderRadius = '1em 1em 1em 1em';
        }
    
        ul.innerHTML = lista;
        }
}

function completar(numero) {
    let searchInput = document.getElementById('search-input');
    let liItems = document.querySelectorAll('li');
    searchInput.value = document.querySelector(`.item${numero}`).textContent;

    liItems.forEach(li => li.remove())
    searchInput.style.borderRadius = '1em 1em 1em 1em';
    click();
}

function preloadImage(url) {
    const img = new Image();
    img.src = url;
    console.log(img)
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('search-input').addEventListener('input', function () {
        click();
        listarAnimais();
    })
    dados.forEach(animal => preloadImage(animal.img));
});