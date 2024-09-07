let dados = [
    {
        nome: `Baleia Azul`,
        nomeCientifico: `Balaenoptera musculus`,
        habitat: `Aquático`,
        origem: `Oceano`,
        descricao: `A baleia azul é o maior animal do planeta, com até 30 metros de comprimento e podendo pesar até 180 toneladas. Possui um corpo alongado e azulado, e se alimenta principalmente de krill, sendo conhecida por suas vocalizações profundas. Atualmente, a rainha dos mares enfrenta ameaças devido à caça comercial humana com o intuito de extrair o chamado "Óleo de Baleia", muito utilizado na indústria para iluminação, lubrificação de máquinas e produção de sabão.`,
        img: 'assets/img/baleia-azul.jpg',
        color: '#4fbeff',
        tags: ['baleia azul', 'Balaenoptera musculus', 'maior animal', 'oceano', 'mar', 'krill', 'vocalizações profundas', 'óleo de baleia', 'aquático']
    },
    {
        nome: `Tigre-de-Bengala`,
        nomeCientifico: `Panthera tigris tigris`,
        habitat: `Terrestre`,
        origem: `Ásia`,
        descricao: `O tigre-de-Bengala é uma das maiores subespécies de tigres, podendo atingir até 3 metros de comprimento e pesar até 250 kg. É conhecido por sua pelagem laranja com listras pretas e vive em florestas e áreas de vegetação densa. Enfrenta perigo devido à caça furtiva e perda de habitat, sendo caçado por sua pele e outros produtos.`,
        img: 'assets/img/tigre-bengala.jpg',
        color: '#ffa735',
        tags: ['tigre-de-bengala', 'Panthera tigris tigris', 'tigre', 'Ásia', 'floresta', 'listras pretas', 'caça furtiva']
    },
    {
        nome: `Rinoceronte-de-Java`,
        nomeCientifico: `Rhinoceros sondaicus`,
        habitat: `Terrestre`,
        origem: `Ásia`,
        descricao: `O rinoceronte-de-Java é um dos rinocerontes mais ameaçados, com menos de 75 indivíduos restantes na natureza. Possui uma pele cinza escura e é o menor dos rinocerontes vivos. Habita florestas tropicais e enfrenta ameaças de perda de habitat e caça ilegal por seus chifres, usados em medicina tradicional.`,
        img: 'assets/img/rino-de-java.jpg',
        color: '#62b779',
        tags: ['rinoceronte-de-java', 'Rhinoceros sondaicus', 'rinoceronte', 'Ásia', 'florestas tropicais', 'caça ilegal', 'chifres']
    },
    {
        nome: `Panda Gigante`,
        nomeCientifico: `Ailuropoda melanoleuca`,
        habitat: `Terrestre`,
        origem: `China`,
        descricao: `O panda gigante é conhecido por sua pelagem preta e branca e é um símbolo de conservação. Pode pesar até 160 kg e se alimenta principalmente de bambu. Enfrenta ameaças devido à perda de habitat e baixa taxa de reprodução na natureza. A proteção de suas áreas de floresta é crucial para sua sobrevivência.`,
        img: 'assets/img/panda-gigante.jpg',
        color: '#7fb765',
        tags: ['panda gigante', 'Ailuropoda melanoleuca', 'panda', 'China', 'bambu', 'pelagem preta e branca', 'símbolo de conservação']
    },
    {
        nome: `Coala`,
        nomeCientifico: `Phascolarctos cinereus`,
        habitat: `Terrestre`,
        origem: `Austrália`,
        descricao: `O coala é um marsupial nativo da Austrália, conhecido por seu aspecto adorável e seus hábitos arbóreos. Alimenta-se exclusivamente de folhas de eucalipto e vive em áreas de floresta. Enfrenta ameaças de perda de habitat devido a incêndios florestais e desenvolvimento urbano, além de doenças que afetam suas populações.`,
        img: 'assets/img/coala.jpg',
        color: '#5cd197',
        tags: ['coala', 'Phascolarctos cinereus', 'Austrália', 'marsupial', 'folhas de eucalipto', 'hábitos arbóreos']
    },
    {
        nome: `Corvo-de-cabeça-branca`,
        nomeCientifico: `Corvus albicollis`,
        habitat: `Terrestre`,
        origem: `Oceania`,
        descricao: `O corvo-de-cabeça-branca é uma ave endêmica da Ilha de Norfolk, conhecida por sua plumagem distinta e tamanho robusto. Vive em áreas florestais e enfrenta ameaças devido à perda de habitat e predadores invasivos. Seus números estão em declínio e necessita de proteção para sua sobrevivência.`,
        img: 'assets/img/corvo-cabeca-branca.jpg',
        color: '#9edaff',
        tags: ['corvo-de-cabeça-branca', 'Corvus albicollis', 'corvo', 'Oceania', 'Ilha de Norfolk', 'plumagem distinta']
    },
    {
        nome: `Elefante-de-Sumatra`,
        nomeCientifico: `Elephas maximus sumatranus`,
        habitat: `Terrestre`,
        origem: `Sumatra`,
        descricao: `O elefante-de-Sumatra é uma das subespécies de elefantes asiáticos e é conhecido por seu tamanho menor em comparação com outros elefantes asiáticos. Habita florestas tropicais e enfrenta ameaças de desmatamento e caça. A conservação de seus habitats naturais é essencial para sua sobrevivência.`,
        img: 'assets/img/elefante-sumatra.jpg',
        color: '#edff7b',
        tags: ['elefante-de-sumatra', 'Elephas maximus sumatranus', 'elefante', 'Sumatra', 'florestas tropicais', 'desmatamento']
    },
    {
        nome: `Tartaruga-de-pente`,
        nomeCientifico: `Eretmochelys imbricata`,
        habitat: `Marinho`,
        origem: `Tropicais e subtropicais`,
        descricao: `A tartaruga-de-pente é uma das tartarugas marinhas mais ameaçadas, com uma carapaça distintiva e colorida. Vive em recifes de corais e áreas costeiras tropicais. É caçada por sua concha, usada para ornamentação e joias, além de enfrentar ameaças como a poluição e a destruição dos recifes de corais.`,
        img: 'assets/img/tartaruga-de-pente.jpg',
        color: '#75f4ff',
        tags: ['tartaruga-de-pente', 'Eretmochelys imbricata', 'tartaruga marinha', 'recifes de corais', 'carapaça colorida', 'caça']
    },
    {
        nome: `Macaco-narigudo`,
        nomeCientifico: `Nasalis larvatus`,
        habitat: `Terrestre`,
        origem: `Borneu`,
        descricao: `O macaco-narigudo é conhecido por seu nariz grande e distinto e vive em áreas de mangue e florestas costeiras. Enfrenta ameaças devido à perda de habitat e caça. A proteção das florestas de mangue é crucial para a conservação desta espécie única.`,
        img: 'assets/img/macaco-narigudo.jpg',
        color: '#ffde8a',
        tags: ['macaco-narigudo', 'Nasalis larvatus', 'macaco', 'Borneu', 'florestas costeiras', 'nariz grande']
    },
    {
        nome: `Peixe-lua`,
        nomeCientifico: `Mola mola`,
        habitat: `Marinho`,
        origem: `Oceano Atlântico e Pacífico`,
        descricao: `O peixe-lua é o maior peixe ósseo do mundo, com um corpo achatado e formato distinto. Pode pesar até 2.300 kg e é encontrado em águas oceânicas abertas. Enfrenta ameaças como captura acidental em redes de pesca e poluição dos oceanos. A proteção das áreas oceânicas é importante para sua conservação.`,
        img: 'assets/img/peixe-lua.jpg',
        color: '#76b4d1',
        tags: ['peixe-lua', 'Mola mola', 'peixe', 'oceano', 'Atlântico', 'Pacífico', 'corpo achatado']
    },
    {
        nome: `Jaguar`,
        nomeCientifico: `Panthera onca`,
        habitat: `Terrestre`,
        origem: `América Central e do Sul`,
        descricao: `O jaguar é o maior felino das Américas, com uma pelagem manchada e potente capacidade de caça. Vive em florestas tropicais e áreas de cerrado. Enfrenta ameaças de desmatamento e caça ilegal, com seus números diminuindo rapidamente. A preservação de seu habitat natural é crucial para sua sobrevivência.`,
        img: 'assets/img/jaguar.jpg',
        color: '#ffbf67',
        tags: ['jaguar', 'Panthera onca', 'felino', 'América Central', 'América do Sul', 'florestas tropicais', 'cerrado']
    },
    {
        nome: `Leão`,
        nomeCientifico: `Panthera leo`,
        habitat: `Terrestre`,
        origem: `África`,
        descricao: `O leão é um dos grandes felinos mais icônicos, conhecido por sua juba e comportamento social em grupos chamados de "alcateias". Vive principalmente em savanas e áreas abertas. Enfrenta ameaças de perda de habitat e caça, com seus números diminuindo devido a conflitos com humanos e perda de presas naturais.`,
        img: 'assets/img/leao.jpg',
        color: '#ffa256',
        tags: ['leão', 'leao', 'Panthera leo', 'felino', 'África', 'savana', 'juba', 'alcateia']
    },
    {
        nome: `Elefante-Africano`,
        nomeCientifico: `Loxodonta africana`,
        habitat: `Terrestre`,
        origem: `África`,
        descricao: `O elefante-africano é o maior mamífero terrestre, conhecido por suas grandes orelhas e presas de marfim. Habita savanas e florestas africanas. Enfrenta ameaças de caça furtiva por marfim e perda de habitat devido à expansão agrícola e urbana. A conservação de seus habitats e a luta contra a caça furtiva são essenciais para sua sobrevivência.`,
        img: 'assets/img/elefante-africano.jpg',
        color: '#ffbb5d',
        tags: ['elefante-africano', 'Loxodonta africana', 'elefante', 'África', 'savana', 'presas de marfim']
    },
    {
        nome: `Gorila`,
        nomeCientifico: `Gorilla gorilla`,
        habitat: `Terrestre`,
        origem: `África Central`,
        descricao: `O gorila é o maior dos primatas vivos, conhecido por sua força e comportamento social complexo. Vive em florestas tropicais e enfrenta ameaças como perda de habitat, doenças e caça ilegal. A proteção das florestas e esforços para combater doenças são cruciais para sua conservação.`,
        img: 'assets/img/gorila.jpg',
        color: '#bdbdbd',
        tags: ['gorila', 'Gorilla gorilla', 'primata', 'África Central', 'florestas tropicais', 'força', 'caça ilegal']
    },
    {
        nome: `Pinguim-imperador`,
        nomeCientifico: `Aptenodytes forsteri`,
        habitat: `Marinho`,
        origem: `Antártica`,
        descricao: `O pinguim-imperador é o maior dos pinguins e é conhecido por suas impressionantes habilidades de mergulho e sua adaptação ao frio extremo da Antártica. Enfrenta ameaças devido às mudanças climáticas que afetam o gelo marinho e a disponibilidade de alimentos. A conservação do ambiente antártico é crucial para sua sobrevivência.`,
        img: 'assets/img/pinguin-imperador.jpg',
        color: '#c6ecee',
        tags: ['pinguim-imperador', 'Aptenodytes forsteri', 'pinguim', 'Antártica', 'mergulho', 'mudanças climáticas']
    },
    {
        nome: `Urso Polar`,
        nomeCientifico: `Ursus maritimus`,
        habitat: `Marinho`,
        origem: `Ártico`,
        descricao: `O urso polar é um predador apex do Ártico, adaptado para caçar focas e sobreviver em temperaturas extremamente baixas. Enfrenta ameaças de perda de habitat devido ao derretimento do gelo marinho causado pelas mudanças climáticas. A proteção do habitat ártico é essencial para a conservação desta espécie.`,
        img: 'assets/img/urso-polar.jpg',
        color: '#c6ecee',
        tags: ['urso polar', 'Ursus maritimus', 'urso', 'Ártico', 'caçador de focas', 'mudanças climáticas', 'polo norte']
    },
    {
        nome: `Tigre Siberiano`,
        nomeCientifico: `Panthera tigris altaica`,
        habitat: `Terrestre`,
        origem: `Sibéria`,
        descricao: `O tigre siberiano é a maior subespécie de tigre, com uma pelagem densa e adaptada ao frio extremo. Vive em florestas temperadas e enfrenta ameaças de caça furtiva e perda de habitat. Sua população é crítica, com esforços de conservação em andamento para proteger esse majestoso predador.`,
        img: 'assets/img/tigre-siberiano.jpg',
        color: '#c6ecee',
        tags: ['tigre siberiano', 'Panthera tigris altaica', 'tigre', 'Sibéria', 'florestas temperadas', 'caça furtiva']
    },
    {
        nome: `Lobo-cinzento`,
        nomeCientifico: `Canis lupus`,
        habitat: `Terrestre`,
        origem: `Hemisfério Norte`,
        descricao: `O lobo-cinzento é um predador icônico, conhecido por sua estrutura social em matilhas. Vive em diversas regiões do Hemisfério Norte, mas enfrenta ameaças de caça e destruição de habitat. Os esforços de reintrodução em áreas protegidas são vitais para sua sobrevivência.`,
        img: 'assets/img/lobo-cinzento.jpg',
        color: '#adaeae',
        tags: ['lobo-cinzento', 'Canis lupus', 'lobo', 'Hemisfério Norte', 'matilhas', 'caça']
    },
    {
        nome: `Lêmure-de-cauda-anelada`,
        nomeCientifico: `Lemur catta`,
        habitat: `Terrestre`,
        origem: `Madagascar`,
        descricao: `O lêmure-de-cauda-anelada é uma espécie endêmica de Madagascar, conhecida por sua cauda listrada em preto e branco. Vive em áreas de floresta seca e enfrenta ameaças como desmatamento e caça. A conservação de seu habitat natural é crucial para a sobrevivência desta espécie.`,
        img: 'assets/img/lemure-cauda-anelada.jpg',
        color: '#ffd477',
        tags: ['lêmure-de-cauda-anelada', 'Lemur catta', 'lemure', 'Madagascar', 'floresta seca', 'desmatamento']
    },
    {
        nome: `Orangotango-de-sumatra`,
        nomeCientifico: `Pongo abelii`,
        habitat: `Terrestre`,
        origem: `Sumatra`,
        descricao: `O orangotango-de-sumatra é uma das espécies de primatas mais ameaçadas, conhecida por sua inteligência e habilidades de usar ferramentas. Habita florestas tropicais e enfrenta ameaças de desmatamento e caça. Esforços de conservação são cruciais para proteger essa espécie.`,
        img: 'assets/img/orangotango-sumatra.jpg',
        color: '#f18452',
        tags: ['orangotango-de-sumatra', 'Pongo abelii', 'orangotango', 'Sumatra', 'florestas tropicais', 'desmatamento']
    },
    {
        nome: `Tartaruga-oliva`,
        nomeCientifico: `Lepidochelys olivacea`,
        habitat: `Marinho`,
        origem: `Oceanos Tropicais`,
        descricao: `A tartaruga-oliva é uma das menores espécies de tartarugas marinhas, conhecida por seus hábitos de nidificação em massa. Vive em águas tropicais e enfrenta ameaças como captura acidental e destruição de habitat. Esforços de conservação são vitais para proteger seus locais de desova.`,
        img: 'assets/img/tartaruga-oliva.jpg',
        color: '#e3dba3',
        tags: ['tartaruga-oliva', 'tartaruga oliva', 'Lepidochelys olivacea', 'tartaruga marinha', 'oceanos tropicais', 'nidificação', 'captura acidental']
    },
    {
        nome: `Rinoceronte-negro`,
        nomeCientifico: `Diceros bicornis`,
        habitat: `Terrestre`,
        origem: `África Subsaariana`,
        descricao: `O rinoceronte-negro é criticamente ameaçado devido à caça ilegal por seus chifres. Vive em savanas e áreas florestais, com menos de 5.000 indivíduos restantes. A luta contra a caça furtiva e a proteção de seu habitat são essenciais para sua sobrevivência.`,
        img: 'assets/img/rino-negro.jpg',
        color: '#c4e3a3',
        tags: ['rinoceronte-negro', 'rinoceronte negro', 'Diceros bicornis', 'rinoceronte', 'África Subsaariana', 'caça furtiva', 'savanas']
    },
    {
        nome: `Araponga-da-amazônia`,
        nomeCientifico: `Procnias albus`,
        habitat: `Terrestre`,
        origem: `Amazônia`,
        descricao: `A araponga-da-amazônia é uma ave conhecida por seu canto alto e ressonante. Vive nas florestas tropicais da Amazônia e enfrenta ameaças de desmatamento. A preservação de seu habitat é crucial para a sobrevivência desta espécie icônica da Amazônia.`,
        img: 'assets/img/araponga-amazonia.jpg',
        color: '#9db3c1',
        tags: ['araponga-da-amazônia', 'araponga', 'Procnias albus', 'ave', 'Amazônia', 'Amazonia', 'florestas tropicais', 'desmatamento']
    },
    {
        nome: `Cavalo-de-Przewalski`,
        nomeCientifico: `Equus ferus przewalskii`,
        habitat: `Terrestre`,
        origem: `Ásia Central`,
        descricao: `O cavalo-de-Przewalski é o último cavalo selvagem verdadeiro, nativo das estepes da Ásia Central. Sua população foi drasticamente reduzida devido à caça e perda de habitat, mas esforços de reintrodução em áreas protegidas têm ajudado na recuperação da espécie.`,
        img: 'assets/img/cavalo-przewalski.jpg',
        color: '#eed693',
        tags: ['cavalo-de-Przewalski', 'Equus ferus przewalskii', 'cavalo selvagem', 'Ásia Central', 'estepe', 'reintrodução']
    },
    {
        nome: `Condor-da-califórnia`,
        nomeCientifico: `Gymnogyps californianus`,
        habitat: `Terrestre`,
        origem: `América do Norte`,
        descricao: `O condor-da-califórnia é uma das aves mais raras do mundo, com uma envergadura impressionante. Vive em áreas montanhosas e enfrenta ameaças de envenenamento por chumbo e perda de habitat. Esforços de reprodução em cativeiro têm sido fundamentais para evitar sua extinção.`,
        img: 'assets/img/condor-california.jpg',
        color: '#a9c9e5',
        tags: ['condor-da-califórnia', 'condor da california', 'Gymnogyps californianus', 'ave', 'América do Norte', 'montanhas', 'envenenamento por chumbo']
    },
    {
        nome: `Iaque Selvagem`,
        nomeCientifico: `Bos mutus`,
        habitat: `Terrestre`,
        origem: `Tibete`,
        descricao: `O iaque selvagem é um bovino nativo das altas montanhas do Tibete, conhecido por sua resistência ao frio extremo. Vive em altitudes elevadas e enfrenta ameaças de caça e perda de habitat. A proteção de suas áreas naturais é crucial para a sobrevivência desta espécie.`,
        img: 'assets/img/iaque-selvagem.jpg',
        color: '#c6ecee',
        tags: ['iaque selvagem', 'Bos mutus', 'bovino', 'Tibete', 'montanhas', 'altitude elevada']
    },
    {
        nome: `Cão-selvagem-africano`,
        nomeCientifico: `Lycaon pictus`,
        habitat: `Terrestre`,
        origem: `África`,
        descricao: `O cão-selvagem-africano é um predador altamente social, conhecido por suas caçadas cooperativas. Vive em savanas e enfrenta ameaças como perda de habitat e conflitos com humanos. Esforços de conservação são necessários para proteger essa espécie altamente ameaçada.`,
        img: 'assets/img/cao-selvagem-africano.jpg',
        color: '#e2cb8e',
        tags: ['cão-selvagem-africano', 'cachorro', 'cao', 'Lycaon pictus', 'predador', 'África', 'savana', 'caçadas cooperativas']
    },
    {
        nome: `Iguana-de-Fiji`,
        nomeCientifico: `Brachylophus vitiensis`,
        habitat: `Terrestre`,
        origem: `Ilhas Fiji`,
        descricao: `A iguana-de-Fiji é uma das espécies de répteis mais ameaçadas, conhecida por sua coloração verde brilhante. Vive em florestas tropicais das Ilhas Fiji e enfrenta ameaças como a introdução de espécies invasoras e perda de habitat. A conservação de seu habitat é vital para sua sobrevivência.`,
        img: 'assets/img/iguana-fiji.jpg',
        color: '#8be388',
        tags: ['iguana-de-Fiji', 'Brachylophus vitiensis', 'réptil', 'Ilhas Fiji', 'florestas tropicais', 'espécies invasoras']
    },
    {
        nome: `Jacaré-de-papo-amarelo`,
        nomeCientifico: `Caiman latirostris`,
        habitat: `Aquático`,
        origem: `América do Sul`,
        descricao: `O jacaré-de-papo-amarelo é uma espécie de crocodiliano que habita áreas úmidas da América do Sul. Enfrenta ameaças de caça ilegal e destruição de habitat. Esforços de conservação têm ajudado a estabilizar suas populações, mas a vigilância contínua é necessária para garantir sua proteção.`,
        img: 'assets/img/jacare-papo-amarelo.jpg',
        color: '#d7e879',
        tags: ['jacaré-de-papo-amarelo', 'jacare', 'Caiman latirostris', 'crocodilo', 'América do Sul', 'america', 'áreas úmidas', 'caça ilegal']
    }
];
