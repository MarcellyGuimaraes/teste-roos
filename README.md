# Quasar App (fullstack)

A Quasar Project

## Install the dependencies

```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
npm run dev
```

### Lint the files

```bash
yarn lint
# or
npm run lint
```

### Format the files

```bash
yarn format
# or
npm run format
```

### Build the app for production

```bash
quasar build
```

### Customize the configuration

See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).

# API de Artigos e Categorias

Esta é uma API para gerenciar artigos e categorias. A API permite criar, ler, atualizar e deletar artigos e categorias.

## Endpoints

### Artigos

#### 1. Retornar todos os artigos
- **Método:** `GET`
- **Endpoint:** `/articles`
- **Resposta:**
  - 200: Lista de artigos

#### 2. Retornar artigo por ID
- **Método:** `GET`
- **Endpoint:** `/articles/{id}`
- **Parâmetros:**
  - `id`: ID do artigo
- **Resposta:**
  - 200: Artigo encontrado
  - 404: Artigo não encontrado

#### 3. Criar um novo artigo
- **Método:** `POST`
- **Endpoint:** `/articles`
- **Corpo da Requisição:**
  ```json
  {
    "title": "Título do Artigo",
    "category": "Código da Categoria",
    "summary": "Resumo do Artigo",
    "fullText": "Texto completo do artigo",
    "author": "Autor do Artigo",
    "imageUrl": "URL da imagem"
  }
  ```
- **Resposta:**
  - 201: Artigo criado com sucesso
  - 500: Erro ao criar artigo

#### 4. Atualizar um artigo
- **Método:** `PUT`
- **Endpoint:** `/articles/{id}`
- **Parâmetros:**
  - `id`: ID do artigo
- **Corpo da Requisição:** (mesmo formato que a criação)
- **Resposta:**
  - 200: Artigo atualizado com sucesso
  - 404: Artigo não encontrado

#### 5. Deletar um artigo
- **Método:** `DELETE`
- **Endpoint:** `/articles/{id}`
- **Parâmetros:**
  - `id`: ID do artigo
- **Resposta:**
  - 200: Artigo deletado com sucesso
  - 404: Artigo não encontrado

### Categorias

#### 1. Retornar todas as categorias
- **Método:** `GET`
- **Endpoint:** `/categories`
- **Resposta:**
  - 200: Lista de categorias

#### 2. Retornar categoria por ID
- **Método:** `GET`
- **Endpoint:** `/categories/{id}`
- **Parâmetros:**
  - `id`: ID da categoria
- **Resposta:**
  - 200: Categoria encontrada
  - 404: Categoria não encontrada

#### 3. Criar uma nova categoria
- **Método:** `POST`
- **Endpoint:** `/categories`
- **Corpo da Requisição:**
  ```json
  {
    "name": "Nome da Categoria",
    "code": "Código da Categoria"
  }
  ```
- **Resposta:**
  - 201: Categoria criada com sucesso
  - 500: Erro ao criar categoria

#### 4. Atualizar uma categoria
- **Método:** `PUT`
- **Endpoint:** `/categories/{id}`
- **Parâmetros:**
  - `id`: ID da categoria
- **Corpo da Requisição:** (mesmo formato que a criação)
- **Resposta:**
  - 200: Categoria atualizada com sucesso
  - 404: Categoria não encontrada

#### 5. Deletar uma categoria
- **Método:** `DELETE`
- **Endpoint:** `/categories/{id}`
- **Parâmetros:**
  - `id`: ID da categoria
- **Resposta:**
  - 200: Categoria deletada com sucesso
  - 404: Categoria não encontrada
