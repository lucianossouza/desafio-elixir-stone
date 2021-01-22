# Programa de Formação em Elixir - Stone

## Descrição

Este projeto foi desenvolvido como teste técnico do processo seletivo para o **Programa de Formação em Elixir** promovido pela Stone.

O teste foi resolvido utilizando **JavaScript**. O objetivo é desenvolver uma função (ou método) que dada uma lista de compras (contendo itens, a quantidade de cada item e o preço por unidade) e uma lista de e-mails (cada um representando uma pessoa) calcule o valor total da lista e retorne um mapa/dicionário, onde a chave deve ser o e-mail e o valor o quanto essa pessoa deve pagar do valor total.

## Passos para executar o projeto

1. Abra um terminal na pasta do projeto
2. Execute o comando

```
node desafio-stone.js
```

3. Deve aparecer no console uma tabela contendo uma lista de e-mails e o valor que cada pessoa da lista deve pagar

## Passos para testar o projeto

Na descrição do desafio são sugeridos testes com listas vazias. No código foram desenvolvidas duas funções responsáveis por gerar listas de itens e de e-mails aleatórias. É possível utilizá-las para simular os dois casos de listas vazias. Os testes estão comentados nas linhas 85 e 87.

A função responsável por gerar os itens é `generateItems`, e ela recebe como parâmetro a variável `empty`. Se `empty = true`, então será gerada uma lista de itens vazia.

```
// Para gerar uma lista de itens não vazia

const items = generateItems(false);
```

```
// Para gerar uma lista de itens vazia

const items = generateItems(true);
```

A função responsável por gerar os e-mails é `generateEmails`, e ela também recebe como parâmetro a variável `empty`. Se `empty = true`, então será gerada uma lista de e-mails vazia.

```
// Para gerar uma lista de e-mails não vazia

const emails = generateEmails(false);
```

```
// Para gerar uma lista de e-mails vazia

const emails = generateEmails(true);
```

Para realizar os testes, basta descomentar uma das linhas 85 ou 87 e comentar as correspondentes que são responsáveis por gerar as listas não vazias (84 e 86, respectivamente).

## Documentação das funções implementadas

### - `generateItems`

É responsável por gerar uma lista (`array`) de itens aleatória. Cada item é um objeto contendo um `id`, uma quantidade `quantity` e um preço unitário `price`. Os objetos possuem o seguinte formato:

```
{
    id: number,
    quantity: number,
    price: number,
}
```

Os valores são gerados aleatóriamente e estão limitados entre 1 e 50, exceto pelo `id`.

Ela recebe o parâmetro `empty`. Este deve ser um valor `booleano` e determina se deve ser gerada uma lista vazia ou não. Se `empty = true`, será gerada uma lista vazia. Caso `empty = false`, será gera uma lista não vazia.

### - `generateEmails`

É responsável por gerar uma lista (`array`) de e-mails aleatória. Cada e-mail é uma `string`.

Ela recebe o parâmetro `empty`. Este deve ser um valor `booleano` e determina se deve ser gerada uma lista vazia ou não. Se `empty = true`, será gerada uma lista vazia. Caso `empty = false`, será gera uma lista não vazia.

### - `sumItems`

É responsável por percorrer toda a lista de itens, somando o valor (`price`) de cada um multiplicado pela respectiva quantidade (`quantity`).

Ela recebe como parâmetro uma lista de itens (`array`) e retorna um valor inteiro, resultado da soma.

### - `resolveTithe`

Quando a divisão do valor total da lista de itens pela quantidade de pessoas pagantes resulta em uma dízim, a função `resolveTithe` é responsável por distribuir igualmente essa diferença de valor entre uma quantidade `x` de pessoas (ou seja, entre a quantidade de pessoas necessárias até que o valor total da lista seja atingido).

Ela recebe como parâmetro o valor da diferença (`difference`), caso essa diferença exista, e o `array` que contém as pessoas e o valor que cada uma deverá pagar.

### - `stoneChallenge`

É a função principal do projeto. Ela é responsável por receber as listas de itens e e-mails e chamar as funções auxiliares responsáveis por realizar os cálculos e construir o mapa/dicionário solicitado.

Ela recebe como parâmetros uma lista de itens e uma lista de e-mails (ambas são `arrays`) e pode retornar uma `string` com uma mensagem de erro ou um mapa/dicionário.

### Autor

 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/66649277?s=400&u=be84d2f8335df4ba3a1cb42b231f27ae584453c2&v=4" width="150px;" alt=""/>

[![Whatsapp Badge](https://img.shields.io/badge/-Whatsapp-4CA143?style=flat-square&labelColor=4CA143&logo=whatsapp&logoColor=white&link=https://api.whatsapp.com/send?phone=5511948120286&text=Olá!)](https://api.whatsapp.com/send?phone=5511948120286&text=Olá!)
[![Linkedin Badge](https://img.shields.io/badge/-Luciano-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/lucianossouza/)](https://www.linkedin.com/in/lucianossouza/) 
[![Hotmail Badge](https://img.shields.io/badge/-Hotmail-0078D4?style=flat-square&logo=microsoft-outlook&logoColor=white&link=mailto:luciano.illustrador@hotmail.com)](mailto:luciano.illustrador@hotmail.com)