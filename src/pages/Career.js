import React, { useState } from 'react';
import './Career.css';

function Career() {
  const [selectedCategory, setSelectedCategory] = useState('todos');

  return (
    <div className="career">
      <header className="career-header">
        <h1>Oportunidades de Carreira</h1>
        <p>Junte-se à nossa equipe e molde o futuro da tecnologia</p>
      </header>

      <div className="job-filters">
        <button 
          className={selectedCategory === 'todos' ? 'active' : ''} 
          onClick={() => setSelectedCategory('todos')}
        >
          Todas as Vagas
        </button>
        <button 
          className={selectedCategory === 'desenvolvimento' ? 'active' : ''} 
          onClick={() => setSelectedCategory('desenvolvimento')}
        >
          Desenvolvimento
        </button>
        <button 
          className={selectedCategory === 'ia' ? 'active' : ''} 
          onClick={() => setSelectedCategory('ia')}
        >
          IA/ML
        </button>
      </div>

      <div className="job-listings">
        <div className="job-card">
          <div className="job-header">
            <h2>Desenvolvedor Full Stack Sênior</h2>
            <span className="job-type">Tempo Integral</span>
          </div>
          <div className="job-details">
            <p>Estamos procurando um Desenvolvedor Full Stack experiente para se juntar à nossa equipe...</p>
            <div className="job-skills">
              <span>React</span>
              <span>Node.js</span>
              <span>MongoDB</span>
            </div>
          </div>
          <button className="apply-btn">Candidatar-se</button>
        </div>

        <div className="job-card">
          <div className="job-header">
            <h2>Engenheiro de Pesquisa em IA</h2>
            <span className="job-type">Tempo Integral</span>
          </div>
          <div className="job-details">
            <p>Junte-se à nossa equipe de pesquisa em IA e trabalhe em projetos inovadores de machine learning...</p>
            <div className="job-skills">
              <span>Python</span>
              <span>TensorFlow</span>
              <span>PyTorch</span>
            </div>
          </div>
          <button className="apply-btn">Candidatar-se</button>
        </div>
      </div>
    </div>
  );
}

export default Career;