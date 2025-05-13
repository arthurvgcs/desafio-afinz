# 🧠 Desafio Afinz App

Aplicação front-end desenvolvida com **React + Vite**, conectada a uma API externa. Este projeto foi desenvolvido com foco em desempenho, escalabilidade e facilidade de manutenção, utilizando as melhores práticas do ecossistema React.

---

## 🚀 Tecnologias Utilizadas

- [React 18+](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Node.js 22.15.0](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Axios](https://axios-http.com/)
- [React Context API](https://reactjs.org/docs/context.html)
- [Jest + React Testing Library](https://testing-library.com/)
- [CSS Modules](https://github.com/css-modules/css-modules)
- Outros pacotes conforme dependências no `package.json`

---

## 🏗️ Arquitetura do Projeto

```bash
src/
├── components/        # Componentes reutilizáveis
├── context/           # Providers e lógica de contexto (Context API)
├── hooks/             # Custom hooks
├── icons/             # Componentes de ícones (mini Design System)
├── service/           # Comunicação com a API (Axios)
├── utils/             # Funções utilitárias
```

## 🔎 Motivação da Arquitetura

A arquitetura escolhida para este projeto reflete diretamente a forma como eu penso e atuo como desenvolvedor: fazer o simples, bem feito.

Desde o início, ficou claro que o aplicativo tinha um escopo direto e não exigia uma estrutura complexa ou altamente formalizada. Por isso, optei por uma arquitetura limpa, intuitiva e de fácil manutenção, focada na clareza e na escalabilidade, sem "firulas" ou abstrações desnecessárias.

Ao invés de seguir fielmente uma única literatura ou padrão arquitetural (como MVC, MVVM ou Clean Architecture), busquei absorver o que há de melhor em cada um deles e aplicar de forma prática e contextualizada ao universo React. Assim, fui criando uma organização em pastas que fizesse sentido para o projeto, valorizando a separação de responsabilidades e a legibilidade do código.

A Context API foi uma das ferramentas que mais contribuiu para essa organização. Ela permitiu centralizar estados globais de forma eficiente, reduzindo acoplamentos e facilitando a comunicação entre os componentes, o que se alinha bem à ideia de uma ViewModel no padrão MVVM, por exemplo.

No fim, a decisão de manter a arquitetura enxuta não foi por falta de conhecimento dos padrões mais robustos, mas sim por entendimento do contexto. Um projeto simples não precisa ser complicado. O objetivo aqui foi entregar uma base sólida, organizada e que possa evoluir naturalmente conforme o projeto cresce.

Perfeito! Aqui está o restante do `README.md` completo com as seções essenciais após a **Motivação da Arquitetura**:

---

## 🚀 Como rodar o projeto

### ✅ Pré-requisitos

* [Node.js](https://nodejs.org/) versão **22.15.0**
* [npm](https://www.npmjs.com/) instalado

### 📦 Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/arthurvgcs/desafio-afinz.git
   cd desafio-afinz
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Crie o arquivo `.env` com a seguinte variável de ambiente:

   ```env
   VITE_API_URL=https://interview.mattlabz.tech
   ```

4. Rode o projeto:

   ```bash
   npm run dev
   ```

5. Acesse no navegador:

   ```
   http://localhost:5173
   ```

---

## 🧪 Testes

Este projeto possui setup inicial para testes. Para rodar os testes:

```bash
npm run test
```
---

## 🛠️ Possíveis melhorias futuras

* Implementação de testes com cobertura completa
* Adição de gerenciamento de rotas com `react-router-dom`
* Criação de layout por feature/module
