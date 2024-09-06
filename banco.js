let dados = [
    {
        nome: `Baleia Azul`,
        nomeCientifico: `Balaenoptera musculus`,
        habitat: `Aquático`,
        origem: `Oceano`,
        descricao: `A baleia azul é o maior animal do planeta, com até 30 metros de comprimento e podendo pesar até 180 toneladas. Possui um corpo alongado e azulado, e se alimenta principalmente de krill, sendo conhecida por suas vocalizações profundas. Atualmente, a rainha dos mares enfrenta ameaças devido à caça comercial humana com o intuito de extrair o chamado "Óleo de Baleia", muito utilizado na indústria para iluminação, lubrificação de máquinas e produção de sabão.`,
        img: 'assets/img/baleia-azul.jpg',
        tags: ['baleia azul', 'Balaenoptera musculus', 'maior animal', 'oceano', 'mar', 'krill', 'vocalizações profundas', 'óleo de baleia', 'aquático']
    },
    {
        nome: `Tigre-de-Bengala`,
        nomeCientifico: `Panthera tigris tigris`,
        habitat: `Terrestre`,
        origem: `Ásia`,
        descricao: `O tigre-de-Bengala é uma das maiores subespécies de tigres, podendo atingir até 3 metros de comprimento e pesar até 250 kg. É conhecido por sua pelagem laranja com listras pretas e vive em florestas e áreas de vegetação densa. Enfrenta perigo devido à caça furtiva e perda de habitat, sendo caçado por sua pele e outros produtos.`,
        img: 'assets/img/tigre-bengala.jpg',
        tags: ['tigre-de-bengala', 'Panthera tigris tigris', 'tigre', 'Ásia', 'floresta', 'listras pretas', 'caça furtiva']
    },
    {
        nome: `Rinoceronte-de-Java`,
        nomeCientifico: `Rhinoceros sondaicus`,
        habitat: `Terrestre`,
        origem: `Ásia`,
        descricao: `O rinoceronte-de-Java é um dos rinocerontes mais ameaçados, com menos de 75 indivíduos restantes na natureza. Possui uma pele cinza escura e é o menor dos rinocerontes vivos. Habita florestas tropicais e enfrenta ameaças de perda de habitat e caça ilegal por seus chifres, usados em medicina tradicional.`,
        img: 'assets/img/rino-de-java.jpg',
        tags: ['rinoceronte-de-java', 'Rhinoceros sondaicus', 'rinoceronte', 'Ásia', 'florestas tropicais', 'caça ilegal', 'chifres']
    },
    {
        nome: `Panda Gigante`,
        nomeCientifico: `Ailuropoda melanoleuca`,
        habitat: `Terrestre`,
        origem: `China`,
        descricao: `O panda gigante é conhecido por sua pelagem preta e branca e é um símbolo de conservação. Pode pesar até 160 kg e se alimenta principalmente de bambu. Enfrenta ameaças devido à perda de habitat e baixa taxa de reprodução na natureza. A proteção de suas áreas de floresta é crucial para sua sobrevivência.`,
        img: 'assets/img/panda-gigante.jpg',
        tags: ['panda gigante', 'Ailuropoda melanoleuca', 'panda', 'China', 'bambu', 'pelagem preta e branca', 'símbolo de conservação']
    },
    {
        nome: `Coala`,
        nomeCientifico: `Phascolarctos cinereus`,
        habitat: `Terrestre`,
        origem: `Austrália`,
        descricao: `O coala é um marsupial nativo da Austrália, conhecido por seu aspecto adorável e seus hábitos arbóreos. Alimenta-se exclusivamente de folhas de eucalipto e vive em áreas de floresta. Enfrenta ameaças de perda de habitat devido a incêndios florestais e desenvolvimento urbano, além de doenças que afetam suas populações.`,
        img: 'assets/img/coala.jpg',
        tags: ['coala', 'Phascolarctos cinereus', 'Austrália', 'marsupial', 'folhas de eucalipto', 'hábitos arbóreos']
    },
    {
        nome: `Corvo-de-cabeça-branca`,
        nomeCientifico: `Corvus albicollis`,
        habitat: `Terrestre`,
        origem: `Oceania`,
        descricao: `O corvo-de-cabeça-branca é uma ave endêmica da Ilha de Norfolk, conhecida por sua plumagem distinta e tamanho robusto. Vive em áreas florestais e enfrenta ameaças devido à perda de habitat e predadores invasivos. Seus números estão em declínio e necessita de proteção para sua sobrevivência.`,
        img: 'assets/img/corvo-cabeca-branca.jpg',
        tags: ['corvo-de-cabeça-branca', 'Corvus albicollis', 'corvo', 'Oceania', 'Ilha de Norfolk', 'plumagem distinta']
    },
    {
        nome: `Elefante-de-Sumatra`,
        nomeCientifico: `Elephas maximus sumatranus`,
        habitat: `Terrestre`,
        origem: `Sumatra`,
        descricao: `O elefante-de-Sumatra é uma das subespécies de elefantes asiáticos e é conhecido por seu tamanho menor em comparação com outros elefantes asiáticos. Habita florestas tropicais e enfrenta ameaças de desmatamento e caça. A conservação de seus habitats naturais é essencial para sua sobrevivência.`,
        img: 'assets/img/elefante-sumatra.jpg',
        tags: ['elefante-de-sumatra', 'Elephas maximus sumatranus', 'elefante', 'Sumatra', 'florestas tropicais', 'desmatamento']
    },
    {
        nome: `Tartaruga-de-pente`,
        nomeCientifico: `Eretmochelys imbricata`,
        habitat: `Marinho`,
        origem: `Tropicais e subtropicais`,
        descricao: `A tartaruga-de-pente é uma das tartarugas marinhas mais ameaçadas, com uma carapaça distintiva e colorida. Vive em recifes de corais e áreas costeiras tropicais. É caçada por sua concha, usada para ornamentação e joias, além de enfrentar ameaças como a poluição e a destruição dos recifes de corais.`,
        img: 'assets/img/tartaruga-de-pente.jpg',
        tags: ['tartaruga-de-pente', 'Eretmochelys imbricata', 'tartaruga marinha', 'recifes de corais', 'carapaça colorida', 'caça']
    },
    {
        nome: `Macaco-narigudo`,
        nomeCientifico: `Nasalis larvatus`,
        habitat: `Terrestre`,
        origem: `Borneu`,
        descricao: `O macaco-narigudo é conhecido por seu nariz grande e distinto e vive em áreas de mangue e florestas costeiras. Enfrenta ameaças devido à perda de habitat e caça. A proteção das florestas de mangue é crucial para a conservação desta espécie única.`,
        img: 'assets/img/macaco-narigudo.jpg',
        tags: ['macaco-narigudo', 'Nasalis larvatus', 'macaco', 'Borneu', 'florestas costeiras', 'nariz grande']
    },
    {
        nome: `Peixe-lua`,
        nomeCientifico: `Mola mola`,
        habitat: `Marinho`,
        origem: `Oceano Atlântico e Pacífico`,
        descricao: `O peixe-lua é o maior peixe ósseo do mundo, com um corpo achatado e formato distinto. Pode pesar até 2.300 kg e é encontrado em águas oceânicas abertas. Enfrenta ameaças como captura acidental em redes de pesca e poluição dos oceanos. A proteção das áreas oceânicas é importante para sua conservação.`,
        img: 'assets/img/peixe-lua.jpg',
        tags: ['peixe-lua', 'Mola mola', 'peixe', 'oceano', 'Atlântico', 'Pacífico', 'corpo achatado']
    },
    {
        nome: `Jaguar`,
        nomeCientifico: `Panthera onca`,
        habitat: `Terrestre`,
        origem: `América Central e do Sul`,
        descricao: `O jaguar é o maior felino das Américas, com uma pelagem manchada e potente capacidade de caça. Vive em florestas tropicais e áreas de cerrado. Enfrenta ameaças de desmatamento e caça ilegal, com seus números diminuindo rapidamente. A preservação de seu habitat natural é crucial para sua sobrevivência.`,
        img: 'assets/img/jaguar.jpg',
        tags: ['jaguar', 'Panthera onca', 'felino', 'América Central', 'América do Sul', 'florestas tropicais', 'cerrado']
    },
    {
        nome: `Leão`,
        nomeCientifico: `Panthera leo`,
        habitat: `Terrestre`,
        origem: `África`,
        descricao: `O leão é um dos grandes felinos mais icônicos, conhecido por sua juba e comportamento social em grupos chamados de "alcateias". Vive principalmente em savanas e áreas abertas. Enfrenta ameaças de perda de habitat e caça, com seus números diminuindo devido a conflitos com humanos e perda de presas naturais.`,
        img: 'assets/img/leao.jpg',
        tags: ['leão', 'Panthera leo', 'felino', 'África', 'savana', 'juba', 'alcateia']
    },
    {
        nome: `Elefante-Africano`,
        nomeCientifico: `Loxodonta africana`,
        habitat: `Terrestre`,
        origem: `África`,
        descricao: `O elefante-africano é o maior mamífero terrestre, conhecido por suas grandes orelhas e presas de marfim. Habita savanas e florestas africanas. Enfrenta ameaças de caça furtiva por marfim e perda de habitat devido à expansão agrícola e urbana. A conservação de seus habitats e a luta contra a caça furtiva são essenciais para sua sobrevivência.`,
        img: 'assets/img/elefante-africano.jpg',
        tags: ['elefante-africano', 'Loxodonta africana', 'elefante', 'África', 'savana', 'presas de marfim']
    },
    {
        nome: `Gorila`,
        nomeCientifico: `Gorilla gorilla`,
        habitat: `Terrestre`,
        origem: `África Central`,
        descricao: `O gorila é o maior dos primatas vivos, conhecido por sua força e comportamento social complexo. Vive em florestas tropicais e enfrenta ameaças como perda de habitat, doenças e caça ilegal. A proteção das florestas e esforços para combater doenças são cruciais para sua conservação.`,
        img: 'assets/img/gorila.jpg',
        tags: ['gorila', 'Gorilla gorilla', 'primata', 'África Central', 'florestas tropicais', 'força', 'caça ilegal']
    },
    {
        nome: `Pinguim-imperador`,
        nomeCientifico: `Aptenodytes forsteri`,
        habitat: `Marinho`,
        origem: `Antártica`,
        descricao: `O pinguim-imperador é o maior dos pinguins e é conhecido por suas impressionantes habilidades de mergulho e sua adaptação ao frio extremo da Antártica. Enfrenta ameaças devido às mudanças climáticas que afetam o gelo marinho e a disponibilidade de alimentos. A conservação do ambiente antártico é crucial para sua sobrevivência.`,
        img: 'assets/img/pinguin-imperador.jpg',
        tags: ['pinguim-imperador', 'Aptenodytes forsteri', 'pinguim', 'Antártica', 'mergulho', 'mudanças climáticas']
    },
    {
        nome: `Urso Polar`,
        nomeCientifico: `Ursus maritimus`,
        habitat: `Marinho`,
        origem: `Ártico`,
        descricao: `O urso polar é um predador apex do Ártico, adaptado para caçar focas e sobreviver em temperaturas extremamente baixas. Enfrenta ameaças de perda de habitat devido ao derretimento do gelo marinho causado pelas mudanças climáticas. A proteção do habitat ártico é essencial para a conservação desta espécie.`,
        img: 'assets/img/urso-polar.jpg',
        tags: ['urso polar', 'Ursus maritimus', 'urso', 'Ártico', 'caçador de focas', 'mudanças climáticas', 'polo norte']
    }
];
