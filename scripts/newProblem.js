import fs from "fs";
import path from "path";

const [,, categoria, nome] = process.argv;

if (!categoria || !nome) {
  console.log("Uso: npm run new:problem <categoria> <nome>");
  process.exit(1);
}

const dir = `docs/${categoria}`;
const filePath = `${dir}/${nome}.mdx`;

const template = `
import Exercicio from '@site/src/components/math/Exercicio'
import Solucao from '@site/src/components/math/Solucao'

# ${nome.toUpperCase()}

<Exercicio>

Enunciado do problema.

$$
\\lim_{x \\to 0} \\frac{\\sin x}{x}
$$

</Exercicio>

<Solucao>

Solução aqui.

$$
1
$$

</Solucao>
`;

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

fs.writeFileSync(filePath, template);

console.log("Problema criado em:", filePath);