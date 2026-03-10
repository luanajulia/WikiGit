# 🚀 Repos-Finder & Manager

Uma aplicação moderna desenvolvida com **React.js** para buscar repositórios do GitHub, navegar pelos caminhos de pastas e gerenciar uma lista personalizada com funcionalidades de exclusão dinâmica.

---

## 💻 Sobre o Projeto

Este projeto foi criado para facilitar a visualização e o gerenciamento de repositórios. Ele se conecta diretamente à API do GitHub para buscar dados em tempo real, permitindo que o usuário organize uma lista local e remova itens conforme necessário.

### 🛠 Principais Funcionalidades

* 🔍 **Busca de Repositórios:** Pesquisa instantânea por nome de usuário ou repositório.
* 📂 **Navegação Direta:** Link configurado para levar o usuário até o caminho da pasta/repositório no GitHub.
* 🗑️ **Gerenciamento de Lista:** Adição de itens a uma lista de interesse com opção de **deletar item** via interface.
* 📱 **Interface Responsiva:** Adaptada para diferentes tamanhos de tela.

---

## 🚀 Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes ferramentas:

* **React.js** (Hooks: `useState`, `useEffect`)
* **Axios** (Consumo de API)
* **React Router Dom** (Navegação entre páginas)
* **Styled Components** (Estilização opcional)
* **Lucide React / FontAwesome** (Ícones de busca e lixeira)

---

## 🔧 Como Executar o Projeto

Para rodar este projeto localmente, siga os passos abaixo:

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/](https://github.com/)[SEU_USUARIO]/[NOME_DO_REPOSITORIO].git

2. **Acesse a pasta do projeto:**

  ```bash 
  cd wiki
```
3. **Instale as dependências:**

  ```bash 
  npm install
```
4. **Inicie o servidor de desenvolvimento:**

  ```bash 
  npm start
```
Acesse http://localhost:3000 no seu navegador.

📂 Estrutura de Pastas
Plaintext
 ```bash 
src/
 ├── assets/         # Imagens e ícones
 ├── components/     # Componentes (Input, ItemRepo)
 ├── pages/          # Páginas da aplicação (Home, Repositorio)
 ├── services/       # Configuração da API (api.js)
 └── styles/         # Estilos globais e temas
```
