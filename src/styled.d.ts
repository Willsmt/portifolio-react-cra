import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    corPrincipal: string;
    corSecundaria: string;
    corDeFundo: string;
    corDeFundoClaro: string; // fundo alternativo (ex: gradiente)
    corDeFundoBotao: string;
    corDeFundoHover: string; // cor do botão no hover
    corDaBorda: string;
    corTexto: string; // cor padrão do texto
  }
}
