import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <header className="hero">
        <div className="hero-content">
          <h1>Explorando Tecnologia & IA na Programação</h1>
          <p>Descubra os últimos insights, tendências e inovações em tecnologia</p>
          <Link to="/blog" className="cta-button">Leia Nosso Blog</Link>
        </div>
      </header>

      <section className="featured-posts">
        <h2>Artigos em Destaque</h2>
        <div className="post-grid">
          {[1, 2, 3].map((post) => (
            <div key={post} className="post-card">
              <div className="post-image"></div>
              <div className="post-content">
                <h3>O Futuro do Desenvolvimento com IA</h3>
                <p>Explorando como a inteligência artificial está remodelando o cenário do desenvolvimento...</p>
                <Link to="/blog" className="read-more">Ler Mais →</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="tech-topics">
        <h2>Tópicos Principais</h2>
        <div className="topics-grid">
          <div className="topic-card">
            <h3>Inteligência Artificial</h3>
            <p>Explore o mundo da IA e Machine Learning</p>
          </div>
          <div className="topic-card">
            <h3>Desenvolvimento Web</h3>
            <p>Tecnologias e frameworks modernos</p>
          </div>
          <div className="topic-card">
            <h3>Cloud Computing</h3>
            <p>Soluções e arquiteturas em nuvem</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;