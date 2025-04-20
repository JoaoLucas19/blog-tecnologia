import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about">
      <header className="about-header">
        <h1>Sobre Nós</h1>
        <p>Explorando a interseção entre tecnologia e inovação</p>
      </header>

      <section className="mission">
        <h2>Nossa Missão</h2>
        <p>Somos dedicados a trazer os últimos insights e desenvolvimentos em tecnologia, 
           com foco especial em inteligência artificial e seu impacto na programação.</p>
      </section>

      <section className="team">
        <h2>Nossa Equipe</h2>
        <div className="team-grid">
          <div className="team-member">
            <div className="member-image"></div>
            <h3>João Silva</h3>
            <p>Especialista em IA</p>
          </div>
          <div className="team-member">
            <div className="member-image"></div>
            <h3>Maria Santos</h3>
            <p>Redatora Técnica</p>
          </div>
        </div>
      </section>

      <section className="contact">
        <h2>Entre em Contato</h2>
        <form className="contact-form" autoComplete='off'>
          <div className="form-group">
            <input type="text" placeholder="Seu Nome" />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Seu Email" />
          </div>
          <div className="form-group">
            <textarea placeholder="Sua Mensagem"></textarea>
          </div>
          <button type="submit">Enviar Mensagem</button>
        </form>
      </section>

      <section className="social">
        <h2>Siga-nos</h2>
        <div className="social-links">
          <a href="https://twitter.com" className="social-link">Twitter</a>
          <a href="https://www.linkedin.com/company/" className="social-link">LinkedIn</a>
          <a href="https://github.com" className="social-link">GitHub</a>
        </div>
      </section>
    </div>
  );
}

export default About;