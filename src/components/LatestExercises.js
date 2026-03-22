import React from "react";
import Link from "@docusaurus/Link";

export default function LatestExercises() {
  const exercises = [
    {
      title: "Produtos Notáveis e Fatoração",
      link: "/docs/matematica-basica/algebra/exercicios/mat-alg-001",
    },
    {
      title: "FIS-MEC-001 — Movimento uniforme",
      link: "/docs/matematica-basica/algebra/exercicios/mat-alg-001",
    },
    {
      title: "MAT-ALG-001 — Equação do 1º grau",
      link: "/docs/matematica-basica/algebra/exercicios/mat-alg-001",
    },
  ];

  return (
    <div className="container margin-top--xl">
      <h2>Últimos Exercícios</h2>

      <ul className="latest-exercises">
        {exercises.map((ex, index) => (
          <li key={index}>
            <Link to={ex.link}>{ex.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}