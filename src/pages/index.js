import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import HomeCards from "../components/HomeCards";

export default function Home() {
  return (
    <Layout
      title="Banco de Questões"
      description="Problemas resolvidos de matemática, cálculo e física"
    >
      <header className="hero hero--primary">
        <div className="container">
          <h1 className="hero__title">Banco de Questões</h1>

          <p className="hero__subtitle">
            Problemas resolvidos de Matemática, Cálculo e Física
          </p>

          <div style={{ marginTop: "2rem" }}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/exercicios"
            >
              Ver Exercícios
            </Link>

            <Link
              className="button button--outline button--lg"
              to="/blog"
              style={{ marginLeft: "1rem" }}
            >
              Blog
            </Link>
          </div>
        </div>
      </header>

      <main>
        <HomeCards />
      </main>
    </Layout>
  );
}