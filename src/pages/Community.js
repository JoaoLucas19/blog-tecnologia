import React, { useState } from 'react';
import './Community.css';

function Community() {
  const [activeTab, setActiveTab] = useState('discussions');

  return (
    <div className="community">
      <header className="community-header">
        <h1>Comunidade</h1>
        <p>Junte-se à nossa comunidade tech e compartilhe seu conhecimento</p>
      </header>

      <div className="community-tabs">
        <button 
          className={`tab-btn ${activeTab === 'discussions' ? 'active' : ''}`}
          onClick={() => setActiveTab('discussions')}
        >
          Discussões
        </button>
        <button 
          className={`tab-btn ${activeTab === 'qa' ? 'active' : ''}`}
          onClick={() => setActiveTab('qa')}
        >
          Perguntas e Respostas
        </button>
        <button 
          className={`tab-btn ${activeTab === 'members' ? 'active' : ''}`}
          onClick={() => setActiveTab('members')}
        >
          Membros
        </button>
      </div>

      <div className="community-content">
        <aside className="community-sidebar">
          <div className="user-profile">
            <div className="profile-avatar"></div>
            <h3>Bem-vindo, Visitante</h3>
            <button className="login-btn">Entrar / Registrar</button>
          </div>
          
          <div className="trending-topics">
            <h3>Tópicos em Alta</h3>
            <ul>
              <li>#InovaçãoIA</li>
              <li>#DesenvolvimentoWeb</li>
              <li>#ComputaçãoNuvem</li>
              <li>#Programação</li>
            </ul>
          </div>
        </aside>

        <main className="main-content">
          <div className="content-header">
            <input 
              type="text" 
              placeholder="Pesquisar discussões..." 
              className="search-input"
            />
            <button className="new-post-btn">Nova Publicação</button>
          </div>

          <div className="discussions-list">
            <div className="discussion-card">
              <div className="discussion-votes">
                <button>↑</button>
                <span>42</span>
                <button>↓</button>
              </div>
              <div className="discussion-content">
                <h3>Melhores práticas para implantação de modelos de IA</h3>
                <p>Procurando recomendações sobre implantação de grandes modelos de IA...</p>
                <div className="discussion-meta">
                  <span>Publicado por @techuser</span>
                  <span>2 horas atrás</span>
                  <span>15 comentários</span>
                </div>
                <div className="discussion-tags">
                  <span>IA</span>
                  <span>DevOps</span>
                  <span>Cloud</span>
                </div>
              </div>
            </div>

            <div className="discussion-card">
              <div className="discussion-votes">
                <button>↑</button>
                <span>28</span>
                <button>↓</button>
              </div>
              <div className="discussion-content">
                <h3>React vs Vue em 2024</h3>
                <p>Quais são suas opiniões sobre escolher entre React e Vue...</p>
                <div className="discussion-meta">
                  <span>Publicado por @webdev</span>
                  <span>5 horas atrás</span>
                  <span>23 comentários</span>
                </div>
                <div className="discussion-tags">
                  <span>React</span>
                  <span>Vue</span>
                  <span>Frontend</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Community;