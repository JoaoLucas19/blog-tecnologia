import React from 'react';
import './Events.css';

function Events() {
  return (
    <div className="events">
      <header className="events-header">
        <h1>Eventos & Webinars</h1>
        <p>Participe dos nossos eventos e aprimore suas habilidades</p>
      </header>

      <section className="upcoming-events">
        <h2>Próximos Eventos</h2>
        <div className="events-grid">
          <div className="event-card">
            <div className="event-date">
              <span className="day">15</span>
              <span className="month">Mai</span>
            </div>
            <div className="event-details">
              <h3>Workshop de Desenvolvimento com IA</h3>
              <p className="event-type">Workshop Online</p>
              <p>Aprenda a construir e implantar modelos de IA usando frameworks modernos.</p>
              <button className="register-btn">Inscrever-se</button>
            </div>
          </div>

          <div className="event-card">
            <div className="event-date">
              <span className="day">22</span>
              <span className="month">Mai</span>
            </div>
            <div className="event-details">
              <h3>Tendências em Desenvolvimento Web 2024</h3>
              <p className="event-type">Webinar ao Vivo</p>
              <p>Explore as últimas tendências em desenvolvimento web e melhores práticas.</p>
              <button className="register-btn">Inscrever-se</button>
            </div>
          </div>
        </div>
      </section>

      <section className="past-events">
        <h2>Eventos Anteriores</h2>
        <div className="events-grid">
          <div className="event-card past">
            <div className="event-details">
              <h3>Conferência de Computação em Nuvem</h3>
              <p className="event-type">Conferência</p>
              <p>Uma visão abrangente das tecnologias em nuvem.</p>
              <button className="watch-btn">Assistir Gravação</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Events;