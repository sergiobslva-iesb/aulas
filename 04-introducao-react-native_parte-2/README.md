# Aula 04 - Introdução a React Native Parte 2
#### semana 04 - aula 04 | aula 01 de react native - 14/03/2025 @ 19:15 äs 22:00
1.⁠ ⁠Entender o que é **Node** e **NPM**.
2.⁠ ⁠Entender o que é **React**.
3.⁠ ⁠Entender o que é **React Native**.
4.⁠ ⁠Conhecer o **Expo** e suas funcionalidades.
5.⁠ ⁠Criar um projeto inicial com Expo.
6.⁠ ⁠Executar o projeto em um dispositivo ou
emulador.

## Node e NPM
* `npm install express`
* `npm init`
* `npm start`
* `npm install`

## React e React Native
* Biblioteca JavaScript para construção de interfaces de usuário.
* Criada pelo Facebook em 2013, hoje é aberta a comunidade.
* Utilizada para criar aplicações web e mobile.
* Baseada em componentes reutilizáveis.
* Utiliza o conceito de Virtual DOM para melhor performance.
* React Native é uma extensão do React para criação de aplicativos mobile.

### JSX
* JavaScript + XML (ou HTML).
* Sintaxe utilizada pelo React para criação de componentes.
* Permite a mistura de HTML e JavaScript.
* Facilita a criação de interfaces de usuário.
* É transpilado para JavaScript puro pelo Babel.

### Props
* Propriedades passadas para um componente.
* Utilizadas para passar dados e funções entre componentes.
* São somente leitura (read-only).
* Não devem ser modificadas dentro do componente. Caso seja necessário, deve-se utilizar o estado (state).

## State
* Representa o estado atual de um componente.
* Utilizado para armazenar e manipular dados.
* Quando o estado é atualizado, o componente é renderizado novamente.
* Utilizado para criar interatividade e atualizar a interface de usuário.

### Hooks
* Funções que permitem utilizar o estado e outras funcionalidades do React em componentes funcionais.
* Introduzidos no React 16.8.
* `useState()` é o hook mais utilizado para gerenciar o estado em componentes funcionais.
* Outros hooks: `useEffect()`, `useContext()`, `useReducer()`, `useCallback()`, `useMemo()`, `useRef()`, `useImperativeHandle()`, `useLayoutEffect()`, `useDebugValue()`.

### Componentes
* São a base do React. Tudo é um componente.
* Podem ser criados como classes ou funções.
* Componentes devem ser reutilizáveis e independentes.
* Devem ser criados com nomes descritivos e em PascalCase. Ex: `MeuComponente`.

### React Native
* Framework para criação de aplicativos mobile.
* Utiliza componentes nativos do sistema operacional.
* Utiliza JavaScript para criar a interface de usuário.
* É possível compartilhar código entre aplicações web e mobile.
* Possui uma grande comunidade e diversas bibliotecas e ferramentas disponíveis.

### Vantagens do React Native
* Código compartilhado entre aplicações web e mobile.
* Utilização de JavaScript, uma linguagem popular e de fácil aprendizado.
* Possibilidade de utilizar componentes nativos.
* Facilidade de manutenção e atualização de código.
* Grande comunidade e suporte ativo.
* Possibilidade de criação de aplicativos para iOS e Android com uma única base de código.
* Possibilidade de utilizar ferramentas como o Expo para facilitar o desenvolvimento.
* Possibilidade de utilizar bibliotecas e frameworks do ecossistema do React. Ex: Redux, React Navigation, Axios.

### Arquitetura do React Native
* Código JavaScript é executado em uma thread separada da thread principal do aplicativo. Essa thread é chamada de **JavaScriptCore**.
* É responsável por interpretar o código JavaScript e atualizar a interface de usuário. É possível utilizar o **inspector** para debugar o código JavaScript.
* O inspector é acessado através do menu de desenvolvedor do aplicativo, ou através do endereço `URL_ADDRESS/debugger-ui`.* É possível utilizar o inspector para debugar o código JavaScript em tempo real, adicionar breakpoints e visualizar o estado e as props dos componentes.
* O inspector também permite a utilização do **Hot Reloading**, que atualiza o aplicativo em tempo real quando o código é modificado.

### Imagem arquitetura React Native
[Arquitetura React Native](https://www.google.com/url?sa=i&url=https%3A%2F%2Fblog.rocketseat.com.br%2Freact-native-nova-arquitetura%2F&psig=AOvVaw22jmMbm9in-nLZPPe8atvZ&ust=1742079408196000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMCQwtXViowDFQAAAAAdAAAAABAE)