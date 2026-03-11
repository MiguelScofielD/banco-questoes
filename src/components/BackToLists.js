import React from "react";
import Link from "@docusaurus/Link";

export default function BackToLists() {
  return (
    <Link
      className="button button--secondary margin-bottom--md"
      to="/docs/listas"
    >
      ← Voltar para listas
    </Link>
  );
}