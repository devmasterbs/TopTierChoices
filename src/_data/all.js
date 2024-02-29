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
            const mdContent = `---
layout: '${item.Layout}'
titulo: '${item.pageName}'
headline: '${item.Headline}'
lead1: '${item.SubHeadline}'
lead2: '${item.Lead}'
lead3: '${item.Lead2}'
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
  });
};
