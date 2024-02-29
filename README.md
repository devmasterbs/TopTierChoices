# Airtable Site Generator with 11ty

Este repositório contém uma solução para a geração em massa de sites usando a ferramenta 11ty (Eleventy) e automação para criar arquivos Markdown a partir do airtable. O objetivo principal deste projeto é possibilitar a criação rápida e eficiente de vários sites, usando inteligência artificial para automatizar partes do processo.

## Como funciona

O projeto é baseado na ferramenta 11ty, um gerador de site estático extremamente flexível e poderoso. Ele utiliza Node.js e permite a construção de sites a partir de diferentes fontes de dados e modelos.

A automação para criar arquivos Markdown a partir do airtable simplifica o processo de criação de conteúdo, permitindo a geração rápida e fácil de páginas com base em um modelo predefinido.

## Tecnologias Utilizadas

- **Eleventy (11ty)**: Um gerador de site estático moderno e simples.
- **Airtable**: Uma plataforma de colaboração em nuvem que permite criar, compartilhar e gerenciar bases de dados.
- **Node.js**: Um ambiente de execução JavaScript construído no motor JavaScript V8 do Chrome.

## Dependências

- **`@11ty/eleventy`**: O gerador de site estático Eleventy.
- **`@11ty/eleventy-cache-assets`**: Plugin para cache de ativos no Eleventy.
- **`@11ty/eleventy-fetch`**: Plugin para buscar conteúdo externo no Eleventy.
- **`airtable`**: Um cliente Node.js para Airtable, permitindo interagir com as bases de dados do Airtable.
- **`dotenv`**: Uma dependência para carregar variáveis de ambiente do arquivo `.env`.

## Requisitos

- Node.js instalado em sua máquina.

## Configuração

1. Clone este repositório para o seu ambiente local:

```bash
git clone https://github.com/devmasterbs/TopTierChoices.git
```

2. No terminal, navegue até o diretório raiz do projeto.

```
cd TopTierChoice
```

3. Execute o comando `npm init -y && npm install` para instalar todas as dependências listadas no `package.json`.
4. Crie um arquivo `.env` na raiz do projeto e defina suas variáveis de ambiente, incluindo sua chave de API do Airtable e o ID da base.
5. Execute `npm start` para iniciar o processo de geração do seu site.