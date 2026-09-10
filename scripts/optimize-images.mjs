import sharp from "sharp";
import { readdir, stat } from "node:fs/promises";
import { join } from "node:path";
let before = 0;
let after = 0;
for (const directory of ["src/assets", "src/assets/projects"]) {
  for (const name of await readdir(directory)) {
    if (!name.toLowerCase().endsWith(".png")) continue;
    const source = join(directory, name);
    const target = source.replace(/\.png$/i, ".webp");
    await sharp(source)
      .resize({ width: 1200, withoutEnlargement: true })
      .webp({ quality: 84 })
      .toFile(target);
    before += (await stat(source)).size;
    after += (await stat(target)).size;
  }
}
console.log(
  `Images: ${(before / 1024).toFixed(0)} KB → ${(after / 1024).toFixed(0)} KB`,
);
