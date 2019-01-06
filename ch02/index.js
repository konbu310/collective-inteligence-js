const critics = require("./critics");
const simDistance = require("./simDistance");
const simPearson = require("./simPearson");

console.log(
  "ユークリッド距離：",
  simDistance(critics, "Lisa Rose", "Gene Seymour")
);

console.log(
  "ピアソン相関係数：",
  simPearson(critics, "Lisa Rose", "Gene Seymour")
);
