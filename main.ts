import * as fs from "node:fs";

const LINE =
  "One star. Sleep takes eight hours a night and returns me still tired. No refund, no support line, and the subscription renews automatically.";

const OUT = "/output/entry.txt";
const DIR = OUT.slice(0, OUT.lastIndexOf("/"));

fs.mkdirSync(DIR, { recursive: true });
fs.writeFileSync(OUT, LINE, "utf8");
console.log(`wrote ${OUT} (${LINE.length} chars)`);
