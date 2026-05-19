
---

# 🚀 Portfólio - Willians Martins

Este é meu projeto de estudos e portfólio pessoal, desenvolvido com foco em **Atomic Design** e boas práticas de desenvolvimento front-end. O projeto consome a API do GitHub para listar meus repositórios em tempo real e conta com um setup completo de padronização de código.

## 📚 Tecnologias Utilizadas

* **React** (com TypeScript)
* **Styled-components** (para estilização e gerenciamento de temas)
* **ESLint + Prettier** (para padronização de código e formatação automática)
* **Husky** (para hooks de commit automatizados)
* **EditorConfig** (para consistência de configuração entre diferentes editores)
* **GitHub API** (integração para listagem dinâmica de projetos)

## 🧩 Arquitetura

O projeto segue a metodologia **Atomic Design** para garantir componentes reutilizáveis e escaláveis:

* **Atoms:** Componentes básicos e indivisíveis (`Avatar`, `Title`, `Paragraph`, `Botao`).
* **Molecules:** Combinações simples de átomos (`Sidebar`, `CardItem`).
* **Organisms:** Blocos mais complexos formados por moléculas (`ProjectsList`).
* **Templates/Pages:** Estrutura e layout completo da página principal.

## ⚙️ Configuração do Ambiente

Este projeto já vem 100% configurado para manter o código limpo, consistente e livre de erros antes mesmo de subir para o repositório:

* **ESLint + Prettier:** Regras rígidas de linting e formatação automatizada ao salvar.
* **Husky:** Automatiza a checagem do código. Se houver algum erro de sintaxe ou formatação, o Husky impede o `git commit` até que seja corrigido.
* **EditorConfig:** Garante que qualquer desenvolvedor que abrir o projeto use a mesma configuração de espaçamento e quebras de linha.

```ini
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true

[*.md]
trim_trailing_whitespace = false

```

## ⚙️ Funcionalidades

* [x] Alternância dinâmica de temas (Claro / Escuro) via `styled-components`.
* [x] Sidebar responsiva com informações pessoais, botões de ação e redes sociais.
* [x] Integração com a API do GitHub com tratamento de erros (404, limite de requisições, loading).
* [x] Ordenação automática dos projetos por data de atualização recente.
* [x] Layout totalmente responsivo (Grid no Desktop e adaptado para Mobile).

## 🚀 Como Rodar o Projeto

```bash
# 1. Clone o repositório
git clone https://github.com/Willsmt/seu-repositorio.git

# 2. Acesse a pasta do projeto
cd seu-repositorio

# 3. Instalar as dependências
npm install

# 4. Rodar em ambiente de desenvolvimento
npm start

# 5. Build para produção
npm run build

```

## 🤝 Como Contribuir

Contribuições ajudam a evoluir o ecossistema e são super bem-vindas! Para contribuir, siga os passos abaixo:

1. Faça um **Fork** do projeto.
2. Crie uma nova **Branch** para sua funcionalidade ou correção:
```bash
git checkout -b feature/minha-nova-funcionalidade

```


3. Faça suas alterações. O **Husky** rodará o linter automaticamente ao buildar ou commitar. Certifique-se de que não há erros:
```bash
npm run lint  # Execute para garantir que está tudo certo

```


4. Faça o **Commit** das suas alterações de forma clara:
```bash
git commit -m "feat: adiciona novo componente de card"

```


5. Envie para o repositório remoto (**Push**):
```bash
git push origin feature/minha-nova-funcionalidade

```


6. Abra um **Pull Request** detalhando as melhorias que você fez!

## 🔗 Links

* **LinkedIn:** [Click Aqui](https://www.linkedin.com/in/willians-martins-329350329/recent-activity/all/)

---
