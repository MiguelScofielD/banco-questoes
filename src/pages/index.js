import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import HomeCards from "../components/HomeCards";

export default function Home() {
  return (
    <Layout
      title="Núcleo de Exatas"
      description="Problemas resolvidos de matemática, cálculo e física"
    >
      <header className="hero hero--primary">
        <div className="container">
          <h1 className="hero__title">Núcleo de Exatas</h1>

          <p className="hero__subtitle">
            Problemas resolvidos de Cálculo, Física e Matemática
          </p>

          <div style={{ marginTop: "2rem" }}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/exercicios"
            >
              Conteúdo
            </Link>

            {/* <Link
              className="button button--secondary button--lg"
              to="/blog"
              style={{ marginLeft: "1rem" }}
            >
              Física
            </Link>

            <Link
              className="button button--secondary button--lg"
              to="/blog"
              style={{ marginLeft: "1rem" }}
            >
              Matemática
            </Link> */}

            {/* <Link
              className="button button--outline button--lg"
              to="/blog"
              style={{ marginLeft: "1rem" }}
            >
              Exercícios
            </Link> */}
          </div>
        </div>
      </header>

      <main>
        <HomeCards />
      </main>
    </Layout>
  );
}