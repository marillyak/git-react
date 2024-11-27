# Exercício (Instruções): Componentes do React - Parte 2

## Alterações feitas

-  Atualizei o  conteúdo do arquivo `MenuComponet.js` com o código atual que foi passado.
- Criei uma pasta chamada `shared` na pasta `src` e na pasta `shared` adicionei o conteúdo atual que foi pedido.
- Atualizei o arquivo `App.js` para as especificações pedidas.
- Atualizei o README.md e enviei todo o relatorio para o GitHub.

## Arquivo `MenuComponet.js`

Ele exibe a lista de pratos no app e mostra detalhes do prato selecionado quando o usuário clica nele. Ele recebe os pratos como dados e organiza o menu.

1. **Quais os imports utilizados?**
- `react`: É uma biblioteca que ajuda a criar páginas da web mais interativas, com ela dá para organizar o código em pedaços menores chamados "componentes".
- ``Card``: É tipo um "caixinha" usada para organizar informações, como uma foto, título e texto, tudo junto e organizado.
- ``CardImg``: Ele serve para mostrar uma imagem dentro do card. Por exemplo, a foto de um prato.
- ``CardImgOverlay``: É como uma camada em cima da imagem, onde da para colocar texto ou outras coisas sobre a foto, como por exemplo uma descrição.
- ``CardText``: É para adicionar textos dentro do card, como uma descrição ou algum detalhe.
- ``CardBody``: É o espaço dentro do cartão onde se organiza as coisas, como o texto e o título.
- ``CardTitle``:
É usado para mostrar o título do cartão, tipo o nome de um prato.

1.  **Há componentes? O que fazem?**
   
- Componente ``Menu``: É um pedaço de código que organiza e exibe uma lista de pratos. Ele mostra cards com o nome e a imagem de cada prato e permite que quando clicar em um prato mais detalhes sejam apresentados.

- Componentes do Reactstrap:

``Card``: Serve para criar um cartão que exibe informações de cada prato.
``CardImg``: Mostra a imagem do prato.
``CardImgOverlay``: Adiciona uma camada de texto ou título sobre a imagem do cartão.
``CardText``: Exibe um texto de descrição do prato.
``CardBody``: Organiza o conteúdo dentro do cartão, como texto e título.
``CardTitle``: Mostra o nome do prato.

3. **Para que serve o ``OnDishSelect`` no projeto?**

- Ele serve para guardar o prato que o usuário clicou. Quando um prato é selecionado ele salva esse prato no estado `selectedDish` para que as informações dele possam ser mostradas depois.

4. **Para que serve o ``renderDish``?**

- Ele serve para exibir os detalhes de um prato quando ele é selecionado. Quando um prato for escolhido ele mostra a imagem, o nome e a descrição do prato. Se nenhum prato for selecionado, ele não exibe nada. É como uma função que mostra as informações de um prato quando você clica nele.

5. **Para que serve o ``props.dishes.map``?**

- Ele é usado para pegar todos os pratos que sao passados para um componente e faz algo para cada prato, ele cria um card para cadaprato, onde exibe a imagem e o nome. Vai repetindo para cada prato exibindo na tela.

## Arquivo `dishes.js`

Ele contém os dados dos pratos, como nome, descrição, preço, imagem e comentários e é usado para fornecer as informações que o MenuComponent.js precisa para exibir os pratos.

1. **Quais as propriedades?**

São os detalhes de cada prato:

- ``id``: um número único para identificar o prato.
- ``name``: o nome do prato.
- ``image``: o caminho da imagem do prato.
- ``category``: a categoria do prato.
- ``label``: uma etiqueta para o prato.
- ``price``: o preço do prato.
- ``description``: uma descrição do prato.
- ``comments``: uma lista com comentários feitos sobre o prato.

1. **Que tipo de date é utilizado?**

O tipo de dado utilizado no arquivo

- Número: usado para valores como o id de cada prato e a rating de cada comentário.
- Texto: usado para armazenar o name, image, category, label, description e os textos dos comentários.
- Lista: para armazenar os comentários.

## Arquivo `App.js`

Ele é a entradado app, ele configura a estrutura basica da página, e passa os dados dos pratos para o `MenuComponent.js` para os pratos serem exibidos.

1. **Para que serve oconst [dishes]?**

Ele cria uma variável chamada dishes e a inicia com um valor, usando o ``useState`` onde o valor dessa variável é a lista de pratos que vem do arquivo  chamado dishes.js. Onde isso ajuda a armazenar e organizar as informações sobre os pratos, como nome, preço e descrição, dentro do componente ``App.js``.

2. **Explique como funciona o <Menu dishes={dishes} />**

le server para passar a lista de pratos para o componente Menu, ou seja que dentro do Menu, ele vai receber a lista de pratos e vai usar ela para exibir as informações sobre cada prato. A ``dishes`` é chamada de props e é usada para passar dados do  ``App.js`` para um o ``Menu``.