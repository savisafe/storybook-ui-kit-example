import { execSync } from "child_process";
import { readFileSync } from "fs";
import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const packageJson = JSON.parse(
  readFileSync(new URL("./package.json", import.meta.url))
);
console.log(`Текущая версия: ${packageJson.version}`);

rl.question("Какой номер версии установить? ", (version) => {
  if (!version) {
    console.error("Ошибка: Необходимо указать номер версии.");
    process.exit(1);
  }

  try {
    console.log(`Обновление версии пакета до ${version}...`);
    execSync(`npm version ${version} --no-git-tag-version`, {
      stdio: "inherit",
    });

    console.log("Публикация пакета...");
    execSync("npm publish", { stdio: "inherit" });

    console.log("Пакет успешно опубликован.");
  } catch (error) {
    console.error(`Ошибка при публикации: ${error}`);
    process.exit(1);
  }

  rl.close();
});
