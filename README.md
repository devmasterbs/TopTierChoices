# Gerador de TOPs com IA

Este repositório contém uma solução para a geração em massa de sites usando a ferramenta 11ty (Eleventy) e automação para criar arquivos Markdown a partir de um template JSON. O objetivo principal deste projeto é capacitar a criação rápida e eficiente de vários sites, utilizando inteligência artificial para automatizar partes do processo.

## Como funciona

O projeto é baseado na ferramenta 11ty, um gerador de site estático extremamente flexível e poderoso. Ele utiliza Node.js e permite a construção de sites a partir de diferentes fontes de dados e modelos.

A automação para criar arquivos Markdown a partir de um template JSON simplifica o processo de criação de conteúdo, permitindo a geração rápida e fácil de páginas com base em um modelo predefinido.

## Pré-requisitos

- Node.js instalado
- Conhecimento básico de JavaScript e Markdown

## Instalação

1. Clone este repositório:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

2. Instale as dependências:

```bash
npm init -y
npm install @11ty/eleventy --save-dev
```

## Uso

1. Adicione seus modelos de conteúdo ao arquivo `template.json`.
2. Execute o script de automação:

```bash
node createlead.js
```

3. Seus arquivos gerados estarão disponíveis na pasta `public`.
