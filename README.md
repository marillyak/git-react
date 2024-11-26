# Relatório: Exercício (Instruções) - Componentes do React - Parte 1

## Componente Menu

Ele é usado pra exibir uma lista de pratos mostrando as informações sobre cada um, como: nome, imagem e a descrição.  Ele é feito com `react` e usa o framework `reactstrap` para estilização.

## 1. Importações 

```js
import React, { useState } from 'react';
import { Media } from 'reactstrap';
```

- `React` e `useState`: Ele é usado para guardar os pratos como um estado dentro do componente.
- `Media`: É um componente pronto doo `reactstrap` que exibe imagens e textos. 
  
## 2. Lista de pratos

```js
const [dishes] = useState([
    {
      id: 0,
      name: 'Uthappizza',
      image: 'assets/images/uthappizza.png',
      category: 'mains',
      label: 'Hot',
      price: '4.99',
      description: 
        'A unique combination of Indian Uthappam (pancake) and Italian pizza, ' + 
        'topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, ' + 
        'Guntur chillies and Buffalo Paneer.'
    },
    {
      id: 1,
      name: 'Zucchipakoda',
      image: 'assets/images/zucchipakoda.png',
      category: 'appetizer',
      label: '',
      price: '1.99',
      description: 
        'Deep fried Zucchini coated with mildly spiced Chickpea flour batter ' + 
        'accompanied with a sweet-tangy tamarind sauce.'
    },
    {
      id: 2,
      name: 'Vadonut',
      image: 'assets/images/vadonut.png',
      category: 'appetizer',
      label: 'New',
      price: '1.99',
      description: 
        'A quintessential Confusion experience, is it a vada or is it a donut?'
    },
    {
      id: 3,
      name: 'Elaicheese Cake',
      image: 'assets/images/elaicheesecake.png',
      category: 'dessert',
      label: '',
      price: '2.99',
      description: 
        'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust ' + 
        'and spiced with Indian cardamoms.'
    }
  ]);
```

- `dishes`: É uma lista de objetos, onde cada objeto é um prato com propiedades especificas:

1. `id`: código do prato.
2. `name`: nome do prato.
3. `image`: imagem referente ao prato.
4. `category`: categoria em que o prato está.
5. `label`: rótulo do prato.
6. `price`: preço do prato.
7. `descricion`: descrição geral do prato.

## 3. Gerando os itens do menu

```js
  const menu = dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-12 mt-5">
        <Media tag="li">
          <Media left middle>
            <Media object src={dish.image} alt={dish.name} />
          </Media>
          <Media body className="ml-5">
            <Media heading>{dish.name}</Media>
            <p>{dish.description}</p>
          </Media>
        </Media>
      </div>
    );
  });
```

- `map()`: Ele vai pecorrer a lista de pratos (`dishes`)e criar um HTML para cada prato.
  
#### Estrutural de cada prato

- Imagem: fica a esquerda. 
- Descrição: fica ao lado do prato.

## 4. Exibição do Menu

```js
return (
    <div className="container">
      <div className="row">
        <Media list>
          {menu}
        </Media>
      </div>
    </div>
  );
};
```

- `container`: organiza todos os pratos e e centraliza eles na pagina.
- Itens do menu: cada prato é exibido na tela ao pecorrer a lista de pratos(`dishes`).

## 5 Exportação

```js
export default Menu;
```

- Ele perrmite que o componente `Menu` seja usado em outros lugares.
