import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

const TEXT = "I counted every page you printed after 6pm since January. Your novel: 412 pages. HR has the log, and the movie rights.";
// The punch lands on the last two words: HR is not punishing the novel, it is optioning it.

mkdirSync("/output", { recursive: true });
const target = "/output/entry.txt";
writeFileSync(target, TEXT, "utf8");
chmodSync(target, 0o644);
