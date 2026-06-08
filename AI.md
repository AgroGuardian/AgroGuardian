# Relatório de Uso de Inteligência Artificial 

## Interação 1: Refinamento de UX (Rolagem de Página e Retorno ao Topo)

### 1. O que foi solicitado para a IA (Prompt)
> *"Estamos estruturando a navegação da landing page da AgroGuardian. Como podemos aplicar uma transição suave quando o usuário clicar nos links do cabeçalho para descer até as seções? Além disso, qual a melhor lógica em JavaScript para criar um gatilho que exiba um botão flutuante de 'Voltar ao Topo' apenas após o usuário rolar uma quantidade 'X' de pixels da tela?"*

### 2. O que a IA retornou
* **Sugestão de Atributo:** Recomendou o uso da propriedade nativa do CSS `scroll-behavior: smooth` diretamente no elemento global `html`, evitando o peso de bibliotecas externas de scroll.
* **Lógica do Gatilho:** Demonstrou como capturar o evento `window.scrollY` dentro de um escutador de redimensionamento/rolagem para adicionar dinamicamente uma classe de visibilidade (`.visivel`) ao botão quando a rolagem ultrapassasse os 300px.

### 3. O que foi alterado ou rejeitado e o motivo
* **Aprovado:** A propriedade de scroll suave do CSS foi adotada de imediato por ser uma solução performática.
* **Alterado:** A função do botão de voltar ao topo foi reescrita pela nossa equipe para embutir uma transição de opacidade via CSS (fade-in), deixando a aparição do botão menos abrupta do que o exemplo estrutural sugerido.

---

## Interação 2: Arquitetura Dinâmica do AgroQuiz

### 1. O que foi solicitado para a IA (Prompt)
> *"Estamos desenvolvendo um quiz em JavaScript estruturado com 10 perguntas sobre a nossa plataforma. Já criamos a estilização visual simulando folhas de papel empilhadas via CSS. Qual a abordagem mais performática no JavaScript puro para atualizar o texto da pergunta e dos botões a cada clique do usuário, sem dar refresh na página, e acumulando a pontuação para o sumário final?"*

### 2. O que a IA retornou
* **Conceito Técnico:** Sugeriu a centralização das perguntas em uma estrutura de array de objetos (JSON local). Indicou o uso de manipulação de DOM através de métodos como `innerHTML = ""` para limpar o container e `document.createElement` para reinjetar a pergunta ativa e seus respectivos botões de forma dinâmica.
* **Lógica de Fluxo:** Demonstrou a estrutura de um contador de índice (`perguntaAtual++`) para avançar no array e validar o término das perguntas.

### 3. O que foi alterado ou rejeitado e o motivo
* **Aprovado:** O modelo de matriz de objetos para salvar as perguntas facilitou a manutenção e foi adotado na nossa arquitetura de scripts.
* **Alterado/Otimizado:** A IA sugeriu inicialmente renderizar todo o esqueleto do quiz substituindo o bloco HTML completo via strings puras a cada clique. Nós refinamos essa abordagem e preferimos criar um elemento container isolado dinamicamente via JavaScript (document.createElement("div")) e usar Template Literals (strings com crases) de forma cirúrgica apenas para injetar as variáveis de pontuação (${pontuacaoFinal}) no encerramento do quiz. Isso uniu a performance de renderização do DOM com a praticidade na exibição dos resultados.

---

## Interação 3: Persistência de Preferências (Sistema de Temas)

### 1. O que foi solicitado para a IA (Prompt)
> *"Implementamos no cabeçalho um botão de dropdown para o usuário selecionar paletas de cores customizadas (como um modo cyber e um modo outono), alterando as variáveis do nosso :root CSS via JavaScript. Porém, ao trocar de página, o navegador reseta para o CSS padrão. Como podemos fazer o site armazenar e lembrar da paleta escolhida pelo usuário de forma nativa?"*

### 2. O que a IA retornou
* **Armazenamento Local:** Recomendou a API do **`localStorage`** para salvar o estado da paleta de forma síncrona no navegador do cliente através de chaves de texto simples (`localStorage.setItem`).
* **Ciclo de Vida:** Orientou que a checagem do tema salvo fosse atrelada imediatamente ao evento `DOMContentLoaded` no início do script geral de cores, aplicando as modificações antes da renderização completa da árvore de elementos.

### 3. O que foi alterado ou rejeitado e o motivo
* **Aprovado:** A mecânica do `localStorage` atendeu perfeitamente ao requisito de consistência entre as páginas do ecossistema AgroGuardian.
* **Alterado:** Mudamos os identificadores e nomes das paletas no menu dropdown. A IA havia sugerido nomes fictícios complexos, mas optamos por uma nomenclatura minimalista e direta baseada estritamente nas cores principais das paletas, melhorando a legibilidade da interface.
* **Otimização de Componente:** Identificamos que a nossa faixa horizontal de logotipos baseada em imagem estática quebrava o contraste nos novos temas gerados pelo script. Rejeitamos o uso da imagem inteira e reconstruímos a faixa utilizando uma estrutura adaptável em **Flexbox**, onde o espaçamento (`gap`) e o fundo reagem em tempo real às alterações das variáveis de cores globais.

---

## Interação 4: Estruturação das Perguntas do AgroQuiz

### 1. O que foi solicitado para a IA (Prompt)

> *"Estamos criando um quiz educativo sobre agricultura e tecnologia para a landing page da AgroGuardian. Precisamos de sugestões de perguntas e respostas relacionadas aos problemas enfrentados no campo, ao uso de satélites e aos benefícios da nossa solução. As perguntas devem ser objetivas e adequadas para um público geral."*

### 2. O que a IA retornou

* **Sugestões de Conteúdo:** Gerou exemplos de perguntas de múltipla escolha relacionadas a monitoramento agrícola, mudanças climáticas, irrigação inteligente e uso de imagens de satélite.
* **Estrutura de Respostas:** Propôs alternativas objetivas e indicou quais respostas deveriam ser consideradas corretas para fins de pontuação.

### 3. O que foi alterado ou rejeitado e o motivo

* **Aprovado:** As sugestões serviram como base para a criação do questionário final.
* **Alterado:** As perguntas foram adaptadas pela equipe para refletir com maior precisão as funcionalidades e objetivos específicos da plataforma AgroGuardian.
* **Rejeitado:** Algumas questões possuíam linguagem excessivamente técnica para o público-alvo da landing page e foram simplificadas para melhorar a compreensão e a experiência do usuário.

---

## Interação 5: Desenvolvimento do Carrossel de Navegação em Formato de Pastas

### 1. O que foi solicitado para a IA (Prompt)

> *"Estamos desenvolvendo um menu interativo em formato de pastas de arquivos para apresentar as seções da landing page. Precisamos de sugestões para estruturar um carrossel horizontal em HTML, CSS e JavaScript, incluindo animações de interação ao passar o mouse e navegação entre os itens."*

### 2. O que a IA retornou

* **Sugestão de Estrutura:** Recomendou a utilização de containers organizados com Flexbox para alinhar os elementos horizontalmente e controlar o deslocamento dos itens do carrossel via JavaScript.
* **Interatividade:** Sugeriu a aplicação de efeitos de transição utilizando propriedades CSS como `transform` e `transition` para tornar a navegação mais fluida.
* **Navegação:** Apresentou uma lógica básica para avançar e retroceder entre os itens do carrossel através de botões de controle.

### 3. O que foi alterado ou rejeitado e o motivo

* **Aprovado:** A abordagem de estruturação do carrossel e as sugestões de animação foram utilizadas como referência para o desenvolvimento.
* **Alterado:** A equipe adaptou o layout para representar visualmente pastas de arquivos, adicionando títulos e descrições sobrepostos às imagens para melhor comunicação do conteúdo.
* **Otimizado:** A lógica inicial de navegação foi ajustada para criar um comportamento contínuo mais adequado à experiência planejada para a landing page.

