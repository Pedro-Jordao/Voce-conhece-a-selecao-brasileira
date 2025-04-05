# Buzzfeed Quiz Clone - Angular

![Angular](https://img.shields.io/badge/Angular-14-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-16.20.2-339933?style=for-the-badge&logo=node.js&logoColor=white)

Este projeto é um clone simples de quiz no estilo Buzzfeed, desenvolvido durante o **Bootcamp Decola Tech 2025 - Avanade**.

## 📋 Sobre o projeto

O objetivo é criar um quiz interativo de múltipla escolha utilizando **Angular 14**, com base em perguntas e respostas dinâmicas carregadas de um arquivo JSON. Ao final do quiz, uma resposta personalizada é exibida de acordo com a performance do usuário.

## 🚀 Tecnologias e ferramentas

- [Angular 14](https://angular.io/)
- [Node.js v16.20.2](https://nodejs.org/)
- TypeScript
- Just Color Picker (ferramenta auxiliar de design)
- HTML e CSS

## 📁 Estrutura do projeto

src/ ├── app/ │ ├── components/ │ │ ├── quizz/ │ │ │ ├── quizz.component.ts │ │ │ ├── quizz.component.html │ │ │ ├── quizz.component.css │ ├── pages/ │ │ ├── home/ │ │ │ ├── home.component.ts │ │ │ ├── home.component.html │ │ │ ├── home.component.css │ ├── app-routing.module.ts │ ├── app.module.ts │ ├── app.component.ts │ ├── app.component.html │ ├── app.component.css ├── assets/ │ ├── data/ │ │ ├── quizz_questions.json │ ├── imgs/ │ │ ├── logo.png


## 🧠 Funcionalidades

- Carregamento dinâmico de perguntas e respostas.
- Registro das respostas do usuário.
- Avaliação automática do desempenho.
- Três resultados possíveis:
  - `A` – Você não sabe nada sobre a seleção.
  - `B` – Tá sabendo, mas dá para melhorar.
  - `C` – Você sabe tudo sobre a seleção.

## 🛠️ Instalação e execução

1. Clone o repositório:
   git clone https://github.com/Pedro-Jordao/Voce-conhece-a-selecao-brasileira.git
   cd seu-repositorio
Instale as dependências:
npm install
Rode o projeto:

ng serve
Acesse no navegador:
http://localhost:4200

 Autor
Desenvolvido por Pedro Jordão
Para o Bootcamp Decola Tech 2025 - Avanade

📧 Contato: phjordao2522@gmail.com
