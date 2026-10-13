export interface ProductContent {
    description: string;
    longDescription: string;
}

/**
 * Product copy is kept separately from image imports so that text can be
 * reviewed and updated without changing the catalog structure.
 * Every entry uses the exact category and model name from categories.ts.
 */
export const PRODUCT_CONTENT: Record<string, Record<string, ProductContent>> = {
    '15 Anos': {
        'Rosa Floral': {
            description: 'Convite delicado em tons de rosa, com flores suaves e composição romântica para celebrar os 15 anos.',
            longDescription: 'O Rosa Floral combina moldura clara, flores rosadas e uma hierarquia elegante para destacar nome, data e local da festa. É uma escolha delicada para aniversariantes que desejam um convite clássico, feminino e fácil de ler no celular.',
        },
        'Rosa Floral 2': {
            description: 'Convite floral vertical com borboletas e tons rosados, pensado para uma celebração de 15 anos leve e encantadora.',
            longDescription: 'O Rosa Floral 2 apresenta flores, borboletas e uma paleta suave em um layout vertical bem organizado. O design valoriza a mensagem principal e deixa os dados do evento visíveis sem perder o aspecto romântico.',
        },
        'Rosa Claro Rose': {
            description: 'Convite sofisticado em rosa-claro e rosé, com flores e brilho suave para uma festa de 15 anos elegante.',
            longDescription: 'O Rosa Claro Rose usa uma paleta rosada com detalhes florais e acabamento visual refinado para transmitir uma atmosfera de celebração. O espaço central foi pensado para destacar o nome da debutante e as informações mais importantes do evento.',
        },
        'Neon Roxo e Preto': {
            description: 'Convite noturno em roxo, preto e neon para uma festa de 15 anos moderna, vibrante e cheia de personalidade.',
            longDescription: 'O Neon Roxo e Preto combina fundo escuro, luzes coloridas e elementos de pista para criar uma identidade marcante. É indicado para festas contemporâneas que querem comunicar energia, música e um clima de celebração noturna.',
        },
    },
    'Aniversários': {
        'Amarelo Minimalista': {
            description: 'Convite de aniversário com contraste amarelo e preto, visual limpo e leitura rápida para compartilhar pelo celular.',
            longDescription: 'O Amarelo Minimalista usa blocos de cor, tipografia de destaque e poucos elementos para apresentar o convite de forma direta. A composição funciona bem para aniversários que buscam um visual moderno, alegre e objetivo.',
        },
        'Botânico': {
            description: 'Convite de aniversário com folhagens verdes e fundo claro, ideal para uma comemoração natural e elegante.',
            longDescription: 'O Botânico combina folhas, tons neutros e uma moldura discreta para criar uma apresentação acolhedora. O estilo é versátil para aniversários adultos e celebrações que valorizam uma estética leve e natural.',
        },
        'Branco Floral Elegante': {
            description: 'Convite claro com folhagens verdes e flores delicadas para um aniversário clássico, clean e sofisticado.',
            longDescription: 'O Branco Floral Elegante distribui as informações sobre um fundo claro com folhagens nas bordas. A proposta favorece a leitura e pode ser adaptada para diferentes idades, mantendo uma aparência refinada.',
        },
        'Convite Azul e Dourado Rochoso': {
            description: 'Convite de aniversário em azul profundo e dourado, com textura escura para uma comemoração marcante.',
            longDescription: 'O Convite Azul e Dourado Rochoso combina fundo azul, detalhes dourados e textura mineral para criar um visual de presença. É adequado para aniversários que procuram uma identidade adulta, elegante e diferente do convite tradicional.',
        },
        'Fundo Preto Girassol': {
            description: 'Convite com girassóis sobre fundo preto, unindo contraste e elementos naturais para um aniversário cheio de personalidade.',
            longDescription: 'O Fundo Preto Girassol coloca flores amarelas em destaque sobre uma base escura, criando contraste e calor visual. O resultado é expressivo para festas ao ar livre, comemorações adultas ou eventos com uma proposta marcante.',
        },
        'Neon Pool Party': {
            description: 'Convite colorido para pool party, com neon, piscina e clima tropical para uma festa de aniversário descontraída.',
            longDescription: 'O Neon Pool Party reúne cores intensas, referências de piscina e uma composição jovem para comunicar diversão desde o primeiro contato. É indicado para aniversários no verão e eventos que pedem uma linguagem descontraída.',
        },
        'Noturno Elegante': {
            description: 'Convite em azul-marinho e dourado com iluminação de festa, ideal para aniversários noturnos e sofisticados.',
            longDescription: 'O Noturno Elegante usa fundo escuro, luzes quentes e detalhes azuis para criar uma atmosfera de celebração à noite. A estrutura mantém nome, idade, data e local em áreas de destaque para facilitar a leitura.',
        },
        'Preto e Dourado': {
            description: 'Convite preto e dourado com balões e tipografia clássica para um aniversário de presença e elegância.',
            longDescription: 'O Preto e Dourado combina balões, moldura escura e elementos metálicos para uma composição festiva. É uma alternativa versátil para aniversários adultos que desejam transmitir sofisticação e impacto visual.',
        },
        'Preto e Dourado 2': {
            description: 'Convite vertical em preto e dourado, com moldura geométrica e destaque central para a idade do aniversariante.',
            longDescription: 'O Preto e Dourado 2 organiza a informação em uma composição vertical com linhas douradas e contraste forte. O desenho valoriza a idade e o nome da pessoa celebrada, mantendo os dados do evento bem separados.',
        },
        'Preto Executivo': {
            description: 'Convite de aniversário em preto e dourado, com composição sóbria para uma comemoração adulta e elegante.',
            longDescription: 'O Preto Executivo apresenta uma estrutura mais discreta, com tipografia dourada e fundo escuro. A proposta combina com aniversários adultos, jantares e celebrações que pedem uma comunicação sofisticada.',
        },
        'Preto Vintage': {
            description: 'Convite escuro com moldura ornamental e detalhes dourados para um aniversário clássico com inspiração vintage.',
            longDescription: 'O Preto Vintage usa ornamentos, linhas douradas e uma paleta profunda para resgatar a aparência de convites clássicos. O visual é indicado para quem procura uma celebração elegante com personalidade tradicional.',
        },
        'Tarde de Praia': {
            description: 'Convite tropical em tons de rosa e laranja para uma festa de aniversário ensolarada, leve e descontraída.',
            longDescription: 'O Tarde de Praia combina folhagens, cores quentes e referências tropicais para comunicar um evento ao ar livre. A composição funciona bem para festas na praia, aniversários de verão e encontros informais.',
        },
        'Vinho Rosé': {
            description: 'Convite em vinho e rosé com tipografia elegante para um aniversário feminino, acolhedor e sofisticado.',
            longDescription: 'O Vinho Rosé trabalha tons profundos, letras fluidas e uma composição vertical de leitura simples. É uma escolha versátil para aniversários que desejam unir romantismo, maturidade e elegância.',
        },
    },
    'Casamentos': {
        'Casamento Azul Floral': {
            description: 'Convite de casamento em azul e branco com flores delicadas, ideal para uma cerimônia clássica e romântica.',
            longDescription: 'O Casamento Azul Floral combina folhagens azuladas, fundo claro e detalhes de cerimônia em uma composição leve. O design foi pensado para apresentar os nomes do casal e as informações do casamento com delicadeza.',
        },
        'Casamento Branco com Verde Claro': {
            description: 'Convite de casamento com flores claras e folhagens verdes para uma celebração natural, elegante e acolhedora.',
            longDescription: 'O Casamento Branco com Verde Claro usa uma paleta suave e elementos botânicos para transmitir frescor. A estrutura organiza cerimônia, recepção e confirmação de presença sem sobrecarregar o visual.',
        },
        'Casamento Flores e Ouro': {
            description: 'Convite de casamento em tons claros, flores e detalhes dourados para uma celebração romântica e refinada.',
            longDescription: 'O Casamento Flores e Ouro combina flores claras, moldura delicada e pontos dourados para criar uma identidade clássica. É indicado para casais que desejam um convite elegante e com sensação de papelaria premium.',
        },
    },
    'Chá de fraldas': {
        'Chá de Fraldas menino': {
            description: 'Convite azul para chá de fraldas, com ursinho, balões e detalhes acolhedores para celebrar a chegada do bebê.',
            longDescription: 'O Chá de Fraldas menino apresenta ursinho, balões e uma paleta azul suave em uma composição afetuosa. O layout deixa espaço para informar data, horário, local e mensagem aos convidados.',
        },
        'Chá de Fraldas menina': {
            description: 'Convite rosa para chá de fraldas, com ursinha, flores e laços para uma celebração delicada da chegada do bebê.',
            longDescription: 'O Chá de Fraldas menina combina ursinha, flores, laços e tons rosados para criar uma atmosfera carinhosa. A composição destaca a mensagem do evento e mantém os dados da reunião fáceis de localizar.',
        },
    },
    'Flyer': {
        'Flyer Sertanejo 1': {
            description: 'Flyer sertanejo com cantor em destaque, textura de madeira e informações de evento para divulgação em redes sociais.',
            longDescription: 'O Flyer Sertanejo 1 usa fotografia do artista, tons terrosos e textura de madeira para criar uma comunicação ligada ao universo sertanejo. O formato destaca atração, data, horário e local para facilitar a divulgação digital.',
        },
        'Flyer Sertanejo 2': {
            description: 'Flyer escuro para evento sertanejo, com artista em evidência e composição pronta para divulgação de show.',
            longDescription: 'O Flyer Sertanejo 2 combina fundo escuro, iluminação de palco e destaque para o cantor principal. A hierarquia visual foi pensada para que o público identifique rapidamente a atração e as informações da apresentação.',
        },
    },
    'Infantil': {
        'Bluey': {
            description: 'Convite infantil inspirado em uma aventura colorida, com balões e personagens para uma festa alegre e divertida.',
            longDescription: 'O modelo Bluey usa cores vivas, balões e personagens em uma composição voltada para o público infantil. É indicado para aniversários que desejam uma comunicação lúdica e espaço claro para os dados da festa.',
        },
        'Dinossauro': {
            description: 'Convite infantil com dinossauro, folhagens e clima de aventura para uma festa criativa e cheia de energia.',
            longDescription: 'O Dinossauro combina vegetação, textura natural e um personagem em destaque para criar uma pequena expedição visual. O design funciona bem para aniversários infantis com tema de exploração e aventura.',
        },
        'Espaço': {
            description: 'Convite infantil com planetas, estrelas e astronauta para uma festa espacial moderna e cheia de imaginação.',
            longDescription: 'O Espaço apresenta planetas, estrelas e elementos de astronomia em um fundo azul intenso. A proposta transforma as informações do aniversário em parte de uma aventura pelo universo.',
        },
        'Espaço 2': {
            description: 'Convite espacial em azul escuro com astronauta e lua, ideal para uma festa infantil de exploração do universo.',
            longDescription: 'O Espaço 2 usa astronauta, lua e constelações para criar uma atmosfera de descoberta. A paleta escura valoriza os dados do evento e combina com aniversários infantis de tema espacial.',
        },
        'Estilo Homem-Aranha': {
            description: 'Convite infantil com visual de aventura e super-herói, pensado para uma festa dinâmica e cheia de ação.',
            longDescription: 'O Estilo Homem-Aranha utiliza teias, contraste e elementos de quadrinhos para comunicar movimento e aventura. É uma opção temática para crianças que gostam de heróis e histórias de ação.',
        },
        'Flor Lilas': {
            description: 'Convite infantil floral em lilás e rosa, com borboletas e uma atmosfera delicada para comemorar com encanto.',
            longDescription: 'O Flor Lilas combina flores, borboletas e tons suaves em uma composição delicada. O modelo se adapta a aniversários infantis que procuram um tema romântico, colorido e fácil de personalizar.',
        },
        'Fundo Do Mar': {
            description: 'Convite infantil com fundo do mar, estrelas-do-mar e cores aquáticas para uma festa fresca e divertida.',
            longDescription: 'O Fundo Do Mar reúne elementos marinhos, bolhas e cores azuis para criar uma experiência visual debaixo d’água. É indicado para aniversários com tema oceânico, praia ou sereias.',
        },
        'Futebol 1': {
            description: 'Convite infantil de futebol com estádio, bola e iluminação azul para uma festa esportiva e vibrante.',
            longDescription: 'O Futebol 1 coloca o campo e a bola em evidência, usando luzes azuis para criar um clima de partida. A composição é adequada para aniversários de crianças apaixonadas por futebol.',
        },
        'Futebol 2': {
            description: 'Convite de futebol com jogador, bola e arquibancada, ideal para uma festa infantil com clima de campeonato.',
            longDescription: 'O Futebol 2 combina jogador, rede e estádio em uma composição que lembra o momento decisivo de uma partida. O tema permite destacar idade, data e local com uma linguagem esportiva.',
        },
        'Futebol 3': {
            description: 'Convite infantil em verde e preto com bola e campo, pensado para uma comemoração esportiva e descontraída.',
            longDescription: 'O Futebol 3 usa campo, bola e uma paleta verde para criar um convite direto e energético. É uma escolha versátil para festas infantis com jogos, brincadeiras e tema de futebol.',
        },
        'Gamer': {
            description: 'Convite infantil gamer com controles, neon e fundo escuro para uma festa tecnológica e divertida.',
            longDescription: 'O Gamer combina controle, luzes neon e contraste escuro para criar uma identidade inspirada nos jogos eletrônicos. A composição destaca as informações do aniversário com uma linguagem jovem e vibrante.',
        },
        'Gamer 2': {
            description: 'Convite gamer em azul e preto com referências de competição para uma festa infantil moderna e cheia de energia.',
            longDescription: 'O Gamer 2 usa azul intenso, símbolos de jogo e composição vertical para transmitir um clima de desafio. O modelo combina com aniversários que valorizam videogames, competição e tecnologia.',
        },
        'Lego': {
            description: 'Convite infantil colorido com blocos de montar para uma festa criativa, alegre e cheia de possibilidades.',
            longDescription: 'O Lego explora blocos coloridos, formas geométricas e uma tipografia divertida para criar um convite imediatamente reconhecível. O visual combina com festas de construção, criatividade e brincadeiras.',
        },
        'Minecraft': {
            description: 'Convite infantil inspirado em construção e exploração, com cenário pixelado para uma festa de aventura.',
            longDescription: 'O Minecraft usa cenário de blocos, vegetação e personagens para levar o tema de exploração ao convite. A composição é indicada para aniversários de crianças que gostam de construir e descobrir novos mundos.',
        },
        'Patrulha Canina 1': {
            description: 'Convite infantil colorido com personagens e tema de missão para uma festa alegre, aventureira e cheia de amizade.',
            longDescription: 'O Patrulha Canina 1 reúne personagens, balões e cores vivas em uma composição festiva. O modelo cria um convite acolhedor para crianças que gostam de aventuras em equipe.',
        },
        'Patrulha Canina 2': {
            description: 'Convite infantil em rosa com personagens e elementos de resgate para uma festa delicada e divertida.',
            longDescription: 'O Patrulha Canina 2 usa tons rosados, personagens e uma composição alegre para destacar a celebração. A proposta combina com aniversários infantis que procuram um tema de amizade e aventura.',
        },
        'Roblox': {
            description: 'Convite infantil gamer com personagem e estética de aventura para uma festa moderna inspirada em mundos virtuais.',
            longDescription: 'O Roblox combina personagem, cenário escuro e elementos de jogo para criar uma identidade digital e dinâmica. O layout ajuda a destacar a idade, o nome e os dados da festa sem perder o tema.',
        },
        'Rosa Amoroso': {
            description: 'Convite infantil rosa com corações e borboletas para uma festa delicada, alegre e cheia de carinho.',
            longDescription: 'O Rosa Amoroso trabalha corações, borboletas e tons rosados em uma composição suave. É indicado para aniversários infantis que desejam um visual romântico, doce e fácil de personalizar.',
        },
        'Safari': {
            description: 'Convite infantil de safari com animais e folhagens para uma festa divertida, natural e cheia de descobertas.',
            longDescription: 'O Safari reúne animais, folhagens e tons naturais para criar uma aventura pela selva. A composição funciona bem para diferentes idades e permite apresentar as informações do evento de forma acolhedora.',
        },
        'Sonic': {
            description: 'Convite infantil com personagem veloz e cores intensas para uma festa de aventura, movimento e diversão.',
            longDescription: 'O Sonic usa cores fortes, personagem em ação e uma composição dinâmica para transmitir velocidade. É uma opção temática para crianças que gostam de jogos, aventura e desafios.',
        },
        'Unicórnio': {
            description: 'Convite infantil com unicórnio, arco-íris e flores para uma festa colorida, mágica e delicada.',
            longDescription: 'O Unicórnio combina arco-íris, flores e personagem central em uma paleta alegre. O design foi pensado para criar uma atmosfera de fantasia e destacar os dados do aniversário com leveza.',
        },
        'Ursinho Azul': {
            description: 'Convite infantil azul com ursinho e balões para uma festa delicada, acolhedora e cheia de ternura.',
            longDescription: 'O Ursinho Azul apresenta um personagem central, balões e cores suaves em uma composição carinhosa. É uma escolha versátil para aniversários de bebê e festas infantis com tema delicado.',
        },
    },
    'Mesversário': {
        'Mesversário Menino': {
            description: 'Convite azul de mesversário com ursinho e balões para registrar com carinho cada mês do bebê.',
            longDescription: 'O Mesversário Menino combina ursinho, balões e tons azuis em uma composição acolhedora para celebrar o crescimento do bebê. O layout deixa o número do mês e os dados do encontro em destaque.',
        },
        'Mesversário Menina': {
            description: 'Convite rosa de mesversário com ursinha, laço e flores para comemorar cada fase da bebê com delicadeza.',
            longDescription: 'O Mesversário Menina usa ursinha, laço e flores em uma paleta rosada para criar um registro afetivo. A composição valoriza o mês celebrado e mantém as informações do encontro fáceis de ler.',
        },
    },
    'Times de Futebol': {
        'Botafogo': {
            description: 'Convite de aniversário com tema do Botafogo, escudo e elementos de futebol para uma comemoração alvinegra.',
            longDescription: 'O Botafogo combina escudo, bolas e uma paleta alvinegra para criar uma identidade esportiva forte. É indicado para torcedores que querem levar a paixão pelo clube para o convite da festa.',
        },
        'Corinthians': {
            description: 'Convite de aniversário com tema do Corinthians, escudo e elementos de torcida para uma festa cheia de paixão.',
            longDescription: 'O Corinthians usa escudo, listras e referências de arquibancada para criar um convite ligado à torcida. A composição destaca o aniversariante e os dados do evento com contraste forte.',
        },
        'Flamengo': {
            description: 'Convite de aniversário com tema do Flamengo, cores rubro-negras e referências de futebol para uma festa vibrante.',
            longDescription: 'O Flamengo combina vermelho, preto, escudo e elementos de estádio em uma composição de alto impacto. É uma escolha para torcedores que desejam uma celebração com identidade rubro-negra.',
        },
        'Fluminense': {
            description: 'Convite de aniversário com tema do Fluminense, escudo e cores tricolores para uma festa esportiva e personalizada.',
            longDescription: 'O Fluminense utiliza escudo, bolas e cores tricolores para construir uma apresentação ligada ao clube. O layout deixa os dados da comemoração em áreas de leitura rápida.',
        },
        'Palmeiras': {
            description: 'Convite de aniversário com tema do Palmeiras, escudo e elementos verdes para uma comemoração de torcedor.',
            longDescription: 'O Palmeiras combina verde, escudo e referências de futebol em uma composição festiva. O modelo é adequado para aniversários que querem destacar a paixão pelo clube desde o convite.',
        },
        'Real Madrid': {
            description: 'Convite de aniversário com tema do Real Madrid, escudo e detalhes esportivos para uma festa de futebol internacional.',
            longDescription: 'O Real Madrid usa escudo, azul, branco e elementos de futebol para criar uma identidade inspirada no clube. A estrutura organiza nome, idade e dados do evento com aparência de convite de campeonato.',
        },
        'São Paulo': {
            description: 'Convite de aniversário com tema do São Paulo, escudo e cores tricolores para uma festa de futebol personalizada.',
            longDescription: 'O São Paulo combina escudo, faixas tricolores e referências esportivas em uma composição marcante. É indicado para torcedores que desejam personalizar a comemoração com a identidade do clube.',
        },
        'Vasco': {
            description: 'Convite de aniversário com tema do Vasco, escudo e elementos de futebol para uma comemoração com identidade cruzmaltina.',
            longDescription: 'O Vasco usa escudo, cruz e contraste preto e branco para comunicar a paixão pelo clube. O design foi estruturado para dar destaque ao aniversariante e às informações principais da festa.',
        },
    },
    'Hamburgueria': {
        'Hamburgueria Modelo 1': {
            description: 'Arte de divulgação vertical para hamburgueria, com hambúrguer em destaque, horários e chamada para pedidos.',
            longDescription: 'A Hamburgueria Modelo 1 apresenta o hambúrguer como protagonista e organiza horário, endereço e contato em uma peça vertical. É adequada para divulgação em redes sociais, status e canais de pedido.',
        },
        'Hamburgueria Modelo 2': {
            description: 'Card promocional para hamburgueria com combos, preços e chamada de oferta para estimular pedidos e delivery.',
            longDescription: 'A Hamburgueria Modelo 2 foi organizada para comunicar uma promoção rapidamente, com produtos, valores e chamada de delivery. A hierarquia favorece a leitura do cardápio em telas pequenas.',
        },
        'Hamburgueria Modelo 3': {
            description: 'Arte de cardápio para hamburgueria com opções de combos, preços e destaque visual para uma campanha de vendas.',
            longDescription: 'A Hamburgueria Modelo 3 usa fotografia do produto, contraste e blocos de informação para apresentar combos de forma objetiva. O formato ajuda o cliente a comparar opções e encontrar o canal de pedido.',
        },
        'Hamburgueria Modelo 4': {
            description: 'Post promocional com hambúrguer artesanal em destaque, linguagem apetitosa e chamada direta para fazer o pedido.',
            longDescription: 'A Hamburgueria Modelo 4 valoriza a fotografia do hambúrguer e usa uma composição horizontal com mensagem curta. A peça funciona para campanhas de produto, divulgação em redes sociais e ações de delivery.',
        },
        'Hamburgueria Modelo 5': {
            description: 'Arte de cardápio com vários hambúrgueres e preços, pensada para apresentar os mais pedidos de uma hamburgueria.',
            longDescription: 'A Hamburgueria Modelo 5 reúne diferentes opções em uma grade de produtos com preços e chamada para pedido. É útil para mostrar variedade ao público sem esconder as informações comerciais principais.',
        },
    },
    'Pizzaria': {
        'Pizzaria Modelo 1': {
            description: 'Arte de divulgação para pizzaria com pizza em destaque, forno e chamada convidativa para pedir uma refeição especial.',
            longDescription: 'A Pizzaria Modelo 1 usa fotografia da pizza, calor do forno e uma mensagem curta para despertar apetite. A peça funciona como anúncio institucional ou publicação de campanha para delivery.',
        },
        'Pizzaria Modelo 2': {
            description: 'Card de combos para pizzaria com tamanhos, sabores e preços organizados para facilitar a escolha do cliente.',
            longDescription: 'A Pizzaria Modelo 2 apresenta combos em blocos de informação, com preços e categorias fáceis de comparar. O layout foi pensado para divulgação digital e leitura rápida em dispositivos móveis.',
        },
        'Pizzaria Modelo 3': {
            description: 'Arte de cardápio para pizzaria com sabores, promoções e chamada de pedido em uma composição comercial e direta.',
            longDescription: 'A Pizzaria Modelo 3 organiza sabores e ofertas em uma peça de alto contraste, mantendo o foco no produto e no canal de pedido. É indicada para divulgar os mais pedidos e campanhas promocionais.',
        },
    },
};

const categoryFallback: ProductContent = {
    description: 'Modelo personalizado pelo Gadioli Studio para uma comunicação clara e adequada ao seu evento ou negócio.',
    longDescription: 'Este modelo pode receber os dados principais do evento ou negócio, conforme a categoria e as opções de personalização disponíveis. Antes de comprar, confira o prazo, o formato e as informações que poderão ser alteradas.',
};

export function getProductContent(category: string, name: string): ProductContent {
    return PRODUCT_CONTENT[category]?.[name] ?? categoryFallback;
}
