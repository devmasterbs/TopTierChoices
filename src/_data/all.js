require("dotenv").config();
const Airtable = require("airtable");
let base = new Airtable({ apiKey: process.env.KEY }).base("appNeMfbcTP2IASDR");
const fs = require('fs');

module.exports = () => {
  return new Promise((resolve, reject) => {
    let allDatasets = [];
    base("Respostas ao formulário 1")
      .select({ view: "Grid view" })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach((record) => {
            allDatasets.push({
              id: record._rawJson.id,
              ...record._rawJson.fields,
            });
          });
          fetchNextPage();
          allDatasets.forEach((item, index) => {
            const produtosFormatted = JSON.stringify(item.Tags);
            const mdContent = `---
layout: '${item.Layout}'
titulo: '${item.pageName}'
headline: '${item.Headline}'
lead1: '${item.SubHeadline}'
lead2: '${item.Lead}'
lead3: '${item.Lead2}'
produtos: ${produtosFormatted}
img: '${item.ImageUrl}'
---`;
            const filename = `src/posts/post_${index + 1}.md`;

            fs.writeFileSync(filename, mdContent);

            console.log(`Arquivo ${filename} gerado com sucesso.`);
          })
        },
        function done(err) {
          if (err) {
            reject(err);
          } else {
            resolve(allDatasets);
            
          }
        }
      );

      base("Produtos")
      .select({ view: "Grid view" })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach((record) => {
            allDatasets.push({
              id: record._rawJson.id,
              ...record._rawJson.fields,
            });
          });
          fetchNextPage();
          allDatasets.forEach((item, index) => {
            const mdContent = `---
idProduto: '${item.idProduto}'
nomeProduto: '${item.nomeProduto}'
destaqueProduto: '${item.destaqueProduto}'
descProduto: '${item.descProduto}'
imgProduto: '${item.linkImgProduto}'
linkProduto: '${item.linkProduto}'
marcaProduto: '${item.marcaProduto}'
tags: ['${item.Tags}', 'produtos']
precoProduto: '${item.precoProduto}'
tipoProduto: '${item.tipoProduto}'
porcaoProduto: '${item.porcaoProduto}'
proteinaProduto: '${item.proteinaProduto}'
BCAAProduto: '${item.BCAAProduto}'
glutaminaProduto: '${item.glutaminaProduto}'
carboidratoProduto: '${item.carboidratoProduto}'
saborProduto: '${item.saborProduto}'
saboresProduto: '${item.saboresProduto}'
qtdGramasProduto: '${item.qtdGramasProduto}'
layout: 'produtos'
---`;

            const filename = `src/produtos/${item.nomeProduto.replace(/\s+/g, '-').replace(/[^\w-]/g, '').toLowerCase()}.md`;

            fs.writeFileSync(filename, mdContent);

            console.log(`Arquivo ${filename} gerado com sucesso.`);
          })
        },
        function done(err) {
          if (err) {
            reject(err);
          } else {
            resolve(allDatasets);
            
          }
        }
      );
  });
};
