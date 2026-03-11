import React from "react";
import Link from "@docusaurus/Link";

export default function HomeCards() {
  const cards = [
    {
      title: "Matemática Básica",
      description: "Álgebra, trigonometria e fundamentos.",
      link: "/docs/matematica-basica/algebra/mat-alg-001",
    },
    {
      title: "Cálculo",
      description: "Limites, derivadas e integrais.",
      link: "/docs/calculo/limites/calc-lim-001",
    },
    {
      title: "Física",
      description: "Mecânica e outros tópicos de física.",
      link: "/docs/fisica/mecanica/fis-mec-001",
    },
  ];

  return (
    <div className="container margin-top--lg">
      <div className="row">
        {cards.map((card, index) => (
          <div key={index} className="col col--4">
            <div className="card shadow--md padding--lg">
              <h3>{card.title}</h3>
              <p>{card.description}</p>

              <Link
                className="button button--primary button--block"
                to={card.link}
              >
                Acessar
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}