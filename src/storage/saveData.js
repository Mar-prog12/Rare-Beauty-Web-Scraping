import fs from "fs";
import path from "path";

export function saveData(data) {
  const dir = "data";
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);

  fs.writeFileSync(
    path.join(dir, "final.json"),
    JSON.stringify(data, null, 2)
  );
}
