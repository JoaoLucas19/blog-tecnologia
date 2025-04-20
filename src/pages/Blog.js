import React, { useState } from 'react';
import './Blog.css';

function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['Todos', 'Inteligência Artificial', 'Desenvolvimento Web', 'Computação em Nuvem', 'DevOps', 'Desenvolvimento Mobile', 'Cibersegurança'];
  
  const posts = [
    {
      id: 1,
      title: 'O Impacto da IA no Desenvolvimento de Software Moderno',
      category: 'Inteligência Artificial',
      date: '15 de Maio de 2024',
      excerpt: 'Explorando como a IA está revolucionando a forma como escrevemos e mantemos código, desde completação inteligente até testes automatizados.',
      image: 'ai-dev.jpg',
      readTime: '8 min de leitura'
    },
    {
      id: 2,
      title: 'Construindo Aplicações Escaláveis na Nuvem',
      category: 'Computação em Nuvem',
      date: '14 de Maio de 2024',
      excerpt: 'Aprenda as melhores práticas para desenvolver e implantar aplicações escaláveis na nuvem usando arquiteturas modernas.',
      image: 'cloud-apps.jpg',
      readTime: '12 min de leitura'
    },
    {
      id: 3,
      title: 'React vs Vue vs Angular: Comparação 2024',
      category: 'Desenvolvimento Web',
      date: '13 de Maio de 2024',
      excerpt: 'Uma comparação abrangente dos frameworks frontend mais populares em 2024. Qual você deve escolher?',
      image: 'frameworks.jpg',
      readTime: '15 min de leitura'
    },
    {
      id: 4,
      title: 'Estratégias de Automação DevOps',
      category: 'DevOps',
      date: '12 de Maio de 2024',
      excerpt: 'Descubra como otimizar seu pipeline de desenvolvimento com ferramentas e práticas modernas de DevOps.',
      image: 'devops.jpg',
      readTime: '10 min de leitura'
    },
    {
      id: 5,
      title: 'Machine Learning em Produção',
      category: 'Inteligência Artificial',
      date: '11 de Maio de 2024',
      excerpt: 'Melhores práticas para implantar e manter modelos de machine learning em ambientes de produção.',
      image: 'ml-prod.jpg',
      readTime: '11 min de leitura'
    },
    {
      id: 6,
      title: 'Segurança Essencial para Apps Móveis',
      category: 'Desenvolvimento Mobile',
      date: '10 de Maio de 2024',
      excerpt: 'Práticas essenciais de segurança que todo desenvolvedor mobile deve conhecer para proteger dados dos usuários.',
      image: 'mobile-security.jpg',
      readTime: '9 min de leitura'
    }
  ];

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === 'todos' || post.category.toLowerCase() === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="blog">
      <header className="blog-header">
        <h1>Últimos Artigos</h1>
        <p>Descubra insights e tutoriais sobre tecnologia e programação</p>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Pesquisar artigos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </header>

      <div className="categories">
        {categories.map(category => (
          <button
            key={category}
            className={`category-btn ${selectedCategory === category.toLowerCase() ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category.toLowerCase())}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="blog-grid">
        {filteredPosts.map(post => (
          <article key={post.id} className="blog-card">
            <div className="blog-image"></div>
            <div className="blog-content">
              <div className="blog-meta">
                <span className="category-tag">{post.category}</span>
                <span className="read-time">{post.readTime}</span>
              </div>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <div className="blog-footer">
                <span className="date">{post.date}</span>
                <button className="read-more">Ler Mais</button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="pagination">
        <button>&lt; Anterior</button>
        <span>Página 1 de 5</span>
        <button>Próxima &gt;</button>
      </div>

      <section className="featured-topics">
        <h2>Tópicos em Destaque</h2>
        <div className="topics-grid">
          <div className="topic-card">
            <h3>Começando com IA</h3>
            <p>Recursos essenciais para desenvolvimento com IA</p>
            <button type="button" className="topic-link">Explorar →</button>
          </div>
          <div className="topic-card">
            <h3>Guia de Desenvolvimento Web</h3>
            <p>Tutoriais de desenvolvimento web moderno</p>
            <button type="button" className="topic-link">Explorar →</button>
          </div>
          <div className="topic-card">
            <h3>Computação em Nuvem</h3>
            <p>Arquitetura e implantação na nuvem</p>
            <button type="button" className="topic-link">Explorar →</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;