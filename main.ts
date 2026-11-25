import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Thank you for your email. I have resigned from this inbox to become a barista. Your message is now #9 in my queue — behind a flat white and a man who just asked for 'something not too coffee-y' — and I'll reply once the milk stops screaming.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
