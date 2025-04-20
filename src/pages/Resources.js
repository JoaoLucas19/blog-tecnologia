import React from 'react';
import './Resources.css';

function Resources() {
  return (
    <div className="resources">
      <header className="resources-header">
        <h1>Recursos de Aprendizagem</h1>
        <p>Conteúdo selecionado para aprimorar seu conhecimento em tecnologia</p>
      </header>

      <section className="resource-categories">
        <div className="resource-card">
          <h2>Vídeo Tutoriais</h2>
          <div className="resource-list">
            <div className="resource-item">
              <h3>Fundamentos do Desenvolvimento com IA</h3>
              <p>Guia completo para começar com desenvolvimento em IA</p>
              <button className="resource-link">Assistir Série</button>
            </div>
            <div className="resource-item">
              <h3>Desenvolvimento Web Moderno</h3>
              <p>Práticas atuais em desenvolvimento web</p>
              <button className="resource-link">Assistir Série</button>
            </div>
          </div>
        </div>

        <div className="resource-card">
          <h2>Guias & Documentação</h2>
          <div className="resource-list">
            <div className="resource-item">
              <h3>Guia de APIs RESTful</h3>
              <p>Melhores práticas para design e implementação de APIs</p>
              <button className="resource-link">Ler Guia</button>
            </div>
            <div className="resource-item">
              <h3>Segurança em Aplicações Web</h3>
              <p>Proteção contra vulnerabilidades comuns</p>
              <button className="resource-link">Ler Guia</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resources;