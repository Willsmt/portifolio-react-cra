import styled, { createGlobalStyle } from 'styled-components';

const EstiloGlobal = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
  list-style: none;
}

body {
  padding-top: 80px;
  padding-bottom: 20px;
  min-height: 100vh; /* Garante que o fundo cubra a tela toda */
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.corDeFundo} 0%,
    ${(props) => props.theme.corDeFundoClaro || props.theme.corDeFundo} 100%
  );
  color: ${(props) => props.theme.corTexto || props.theme.corPrincipal};
  -webkit-font-smoothing: antialiased;
  line-height: 1.6;
  transition: background-color 0.3s ease, color 0.3s ease;
}

@media (max-width: 768px) {
  body {
    padding-top: 16px;
  }
}
`;

export default EstiloGlobal;

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: grid;

  /* ALTERADO: De 128px para 200px fixos para a Sidebar e auto para o resto (conteúdo principal) */
  grid-template-columns: 200px auto;

  column-gap: 56px;
  row-gap: 32px;
  padding: 0 16px;

  @media (max-width: 768px) {
    max-width: 90%;
    display: block; /* Volta a ser bloco único empilhado no mobile */
  }
`;
