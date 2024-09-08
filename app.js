// Função chamada quando o usuário interage com o input de busca
function click() {
    // Obtém os elementos HTML necessários
    let secInfo = document.getElementById('sec-info');
    let secSearch = document.getElementById('sec-search');
    let searchInput = (document.getElementById('search-input').value).toLowerCase();
    let body = document.querySelector('body');
    let root = document.documentElement;

    let mensagem = ``; // Inicializa uma variável para armazenar a mensagem a ser exibida

    // Itera sobre os dados dos animais
    for (let animal of dados) {
        // Se o campo de busca estiver vazio
        if (!searchInput) {
            secSearch.style.display = 'none'; // Esconde a seção de sugestões
            secInfo.style.display = 'flex'; // Mostra a seção de informações
            mensagem = `<p class='text-na'>Digite o nome de algum animal para encontrá-lo!</p>`; // Define a mensagem padrão
            body.style.backgroundImage = 'url(assets/img/bg-padrao.jpg)'; // Define a imagem de fundo padrão
            document.getElementById('search-input').style.borderRadius = '1em 1em 1em 1em'; // Arredonda as bordas do input caso esteja vazio
            secInfo.innerHTML = mensagem; // Atualiza o conteúdo da seção de informações
            return; // Sai da função
        } else if (animal.tags.join(' ').toLowerCase().includes(searchInput)) {
            // Se o texto de busca corresponde a um animal
            secSearch.style.display = 'none'; // Esconde a seção de sugestões
            secInfo.style.display = 'flex'; // Mostra a seção de informações
            mensagem += `
            <div class='border'>
                <h2>${animal.nome}</h2>
                <p><span>Nome Científico:</span><br><i>${animal.nomeCientifico}</i></p>
                <p><span>Habitat:</span><br>${animal.habitat}</p>
                <p><span>Origem:</span><br>${animal.origem}</p>
                <p><span>Descrição:</span><br>${animal.descricao}</p>
            </div>
            `; // Adiciona a informação do animal à mensagem
            body.style.backgroundImage = `url(${animal.img})`; // Define a imagem de fundo com a imagem do animal
            root.style.setProperty('--letras',`${animal.color}`); // Define a cor do texto usando CSS variável
            break; // Sai do loop após encontrar o animal
        }
    }
    // Se nenhuma mensagem foi definida (nenhum animal encontrado)
    if (!mensagem) {
        secSearch.style.display = 'none'; // Esconde a seção de sugestões
        secInfo.style.display = 'flex'; // Mostra a seção de informações
        mensagem = `<p class='text-na'>Nenhum animal encontrado.</p>`; // Define a mensagem de erro
        body.style.backgroundImage = 'url(assets/img/bg-padrao.jpg)'; // Define a imagem de fundo padrão
    }

    secInfo.innerHTML = mensagem; // Atualiza o conteúdo da seção de informações
}

// Função chamada para listar os animais com base na pesquisa
function listarAnimais() {
    // Obtém os elementos HTML necessários
    let ul = document.querySelector('ul');
    let li = document.querySelector('li');
    let searchInput = document.getElementById('search-input');
    var lista = ``; // Inicializa uma variável para armazenar a lista de sugestões
    let contador = 0; // Contador para limitar o número de sugestões
    const limite = 4; // Define o número máximo de sugestões a serem exibidas

    // Se o campo de busca estiver vazio
    if (!searchInput.value) {
        ul.innerHTML = ``; // Limpa a lista de sugestões
        return; // Sai da função
    }
    
    // Itera sobre os dados dos animais
    for (let animal of dados) {
        if (contador >= limite) {
            break; // Sai do loop se o número máximo de sugestões for alcançado
        } else {
            // Se o nome do animal corresponde ao texto de busca
            if (animal.nome.toLowerCase().includes(searchInput.value.toLowerCase())) {
                lista += `
                    <li class='item${contador}' onclick=completar(${contador})>${animal.nome}</li>
                `; // Adiciona o animal à lista de sugestões
                contador++; // Incrementa o contador
            }
        }
    }

    // Atualiza o estilo do campo de busca baseado na lista de sugestões
    if (lista != ``) {
        searchInput.style.borderRadius = '1em 1em 0 0'; // Define o raio da borda para o campo de busca
    } else {
        searchInput.style.borderRadius = '1em 1em 1em 1em'; // Restaura o raio da borda se não houver sugestões
    }

    ul.innerHTML = lista; // Atualiza o conteúdo da lista de sugestões
}

// Função chamada quando um item da lista de sugestões é clicado
function completar(numero) {
    // Obtém o campo de busca e todos os itens da lista
    let searchInput = document.getElementById('search-input');
    let liItems = document.querySelectorAll('li');
    // Define o valor do campo de busca com o texto do item clicado
    searchInput.value = document.querySelector(`.item${numero}`).textContent;

    // Remove todos os itens da lista
    liItems.forEach(li => li.remove());
    searchInput.style.borderRadius = '1em 1em 1em 1em'; // Restaura o raio da borda do campo de busca
    click(); // Chama a função click para atualizar a exibição
}

// Função para pré-carregar imagens
function preloadImage(url) {
    const img = new Image();
    img.src = url; // Define a URL da imagem
    console.log(img); // Log da imagem (opcional para depuração)
}

// Adiciona um evento para quando o conteúdo da página for carregado
document.addEventListener('DOMContentLoaded', function() {
    // Adiciona um ouvinte de evento ao campo de busca para chamadas das funções click e listarAnimais quando o valor muda
    document.getElementById('search-input').addEventListener('input', function () {
        click();
        listarAnimais();
    });
    // Pré-carrega todas as imagens dos animais
    dados.forEach(animal => preloadImage(animal.img));
});
