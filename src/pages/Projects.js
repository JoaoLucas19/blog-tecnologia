import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <div className="projects">
      <header className="projects-header">
        <h1>Vitrine de Projetos</h1>
        <p>Explorando soluções inovadoras em IA e tecnologia</p>
      </header>

      <div className="projects-grid">
        <article className="project-card">
          <div className="project-image"></div>
          <div className="project-content">
            <span className="project-category">Inteligência Artificial</span>
            <h2>Assistente de Código com IA</h2>
            <p>Um assistente de programação inteligente que ajuda desenvolvedores a escrever código melhor e mais rápido...</p>
            <div className="project-tech">
              <span>Python</span>
              <span>TensorFlow</span>
              <span>NLP</span>
            </div>
            <button className="project-link">Ver Estudo de Caso →</button>
          </div>
        </article>

        <article className="project-card">
          <div className="project-image"></div>
          <div className="project-content">
            <span className="project-category">Desenvolvimento Web</span>
            <h2>Plataforma de Análise de Dados</h2>
            <p>Uma solução web moderna para visualização e análise de dados em tempo real...</p>
            <div className="project-tech">
              <span>React</span>
              <span>Node.js</span>
              <span>D3.js</span>
            </div>
            <button className="project-link">Ver Estudo de Caso →</button>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Projects;