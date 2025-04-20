import React from 'react';
import './Documentation.css';

function Documentation() {
  return (
    <div className="documentation">
      <header className="doc-header">
        <h1>Documentação</h1>
        <p>Guias completos e referências de API</p>
      </header>

      <div className="doc-container">
        <aside className="doc-sidebar">
          <nav>
            <h3>Primeiros Passos</h3>
            <ul>
              <li><a href="#quick-start">Guia Rápido</a></li>
              <li><a href="#installation">Instalação</a></li>
              <li><a href="#basics">Conceitos Básicos</a></li>
            </ul>

            <h3>Referência da API</h3>
            <ul>
              <li><a href="#api-intro">Introdução</a></li>
              <li><a href="#endpoints">Endpoints</a></li>
              <li><a href="#authentication">Autenticação</a></li>
            </ul>

            <h3>Tutoriais</h3>
            <ul>
              <li><a href="#basic-tutorial">Tutorial Básico</a></li>
              <li><a href="#advanced">Tópicos Avançados</a></li>
              <li><a href="#examples">Exemplos Práticos</a></li>
            </ul>
          </nav>
        </aside>

        <main className="doc-content">
          <section id="quick-start">
            <h2>Guia Rápido</h2>
            <p>Comece a desenvolver rapidamente com nossa documentação completa...</p>
            <pre><code>npm install @nossa-lib/core</code></pre>
          </section>

          <section id="installation">
            <h2>Instalação</h2>
            <p>Siga os passos abaixo para configurar o ambiente...</p>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Documentation;