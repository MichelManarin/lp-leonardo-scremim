'use client'

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTools, faHardHat, faBuilding, faClock, faPhone, faEnvelope, faPlayCircle, faTimes, faAward, faRedo, faPause } from '@fortawesome/free-solid-svg-icons';

interface HomeContentProps {
  city?: string;
}

export default function HomeContent({ city }: HomeContentProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTutorial, setShowTutorial] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Controlar a animação de construção
  useEffect(() => {
    let animationInterval: number | undefined;
    
    if (isPlaying) {
      animationInterval = setInterval(() => {
        setCurrentStage(prevStage => {
          // Se chegou no final, para a animação
          if (prevStage >= 7) {
            setIsPlaying(false);
            return 7;
          }
          return prevStage + 1;
        });
      }, 2000); // Cada 2 segundos
    }
    
    return () => {
      if (animationInterval) clearInterval(animationInterval);
    };
  }, [isPlaying]);

  // Atualizar a visualização baseada no estágio atual
  useEffect(() => {
    // Atualiza marcadores
    document.querySelectorAll('.stage-marker').forEach((marker, index) => {
      if (index + 1 <= currentStage) {
        marker.classList.add('active');
      } else {
        marker.classList.remove('active');
      }
    });
    
    // Atualiza barra de progresso
    const progressFill = document.querySelector('.progress-fill') as HTMLElement;
    if (progressFill) {
      progressFill.style.width = `${(currentStage - 1) * (100 / 6)}%`;
    }
    
    // Mostra a camada atual
    document.querySelectorAll('.construction-stage').forEach((stage, index) => {
      if (index + 1 <= currentStage) {
        (stage as HTMLElement).style.opacity = '1';
      } else {
        (stage as HTMLElement).style.opacity = '0';
      }
    });
  }, [currentStage]);

  // Adicionar event listeners aos botões e marcadores de estágio
  useEffect(() => {
    const playBtn = document.querySelector('.btn-play');
    const pauseBtn = document.querySelector('.btn-pause');
    const restartBtn = document.querySelector('.btn-restart');
    const stageMarkers = document.querySelectorAll('.stage-marker');
    
    if (playBtn) playBtn.addEventListener('click', handlePlayAnimation);
    if (pauseBtn) pauseBtn.addEventListener('click', handlePauseAnimation);
    if (restartBtn) restartBtn.addEventListener('click', handleRestartAnimation);
    
    stageMarkers.forEach((marker, index) => {
      marker.addEventListener('click', () => handleStageClick(index + 1));
    });
    
    return () => {
      if (playBtn) playBtn.removeEventListener('click', handlePlayAnimation);
      if (pauseBtn) pauseBtn.removeEventListener('click', handlePauseAnimation);
      if (restartBtn) restartBtn.removeEventListener('click', handleRestartAnimation);
      
      stageMarkers.forEach((marker, index) => {
        marker.removeEventListener('click', () => handleStageClick(index + 1));
      });
    };
  }, []);

  const handleContactWhatsApp = () => {
    window.open("https://wa.me/5548996986266?text=Olá! Gostaria de um orçamento para construção.", "_blank");
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica para processar o formulário
    alert("Formulário enviado com sucesso! Entraremos em contato em breve.");
  };

  const handlePlayAnimation = () => {
    setIsPlaying(true);
  };

  const handlePauseAnimation = () => {
    setIsPlaying(false);
  };

  const handleRestartAnimation = () => {
    setCurrentStage(1);
    setIsPlaying(false);
    setTimeout(() => {
      setIsPlaying(true);
    }, 300);
  };

  const handleStageClick = (stage: number) => {
    setCurrentStage(stage);
    setIsPlaying(false);
  };

  return (
    <div className="app">
      {/* Header */}
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="logo">
            <a href="#home" className="logo-link">
              <span className="logo-text">Pre<span className="logo-accent">molde</span></span>
            </a>
          </div>

          <div className={`menu-toggle ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <nav className={`navigation ${menuOpen ? 'active' : ''}`}>
            <div className="mobile-menu-close" onClick={() => setMenuOpen(false)}>
              <FontAwesomeIcon icon={faTimes} />
            </div>
            <ul className="nav-links">
              <li><a href="#home" className="active">Início</a></li>
              <li><a href="#services">Serviços</a></li>
              <li><a href="#about">Sobre</a></li>
              <li><a href="#projects">Projetos</a></li>
              <li><a href="#testimonials">Depoimentos</a></li>
            </ul>
            <button className="nav-cta" onClick={handleContactWhatsApp}>Solicitar Orçamento</button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section" id="home">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <span className="hero-pre-title">Engenharia de Excelência em Santa Catarina</span>
              <h1 className="hero-title" style={{fontSize: '3rem'}}>
                {city ? (
                  <>
                    <span className="hero-highlight">Premoldado {city}</span>{' '}<br />
                    Galpões Industriais de Alta Qualidade
                  </>
                ) : (
                  <>
                    <span className="hero-highlight">Galpões Industriais</span>{' '}<br />
                    de Alta Qualidade
                  </>
                )}
              </h1>
              <p className="hero-description">
                {city ? (
                  <>
                    Projetos estruturais robustos e duradouros que atendem às mais rigorosas normas de segurança em{' '}
                    <span className="gold-gradient-text">{city}</span>
                    . Cada detalhe é pensado para maximizar funcionalidade e durabilidade.
                  </>
                ) : (
                  'Projetos estruturais robustos e duradouros que atendem às mais rigorosas normas de segurança. Cada detalhe é pensado para maximizar funcionalidade e durabilidade.'
                )}
              </p>
              <div className="hero-stats">
                <div className="hero-stat">
                  <div className="stat-number">+800</div>
                  <div className="stat-label">Obras Executadas</div>
                </div>
                <div className="hero-stat">
                  <div className="stat-number">+10</div>
                  <div className="stat-label">Anos de Experiência</div>
                </div>
                <div className="hero-stat">
                  <div className="stat-number">100%</div>
                  <div className="stat-label">Engenharia Própria</div>
                </div>
              </div>
              <div className="hero-buttons">
                <button className="hero-cta" onClick={handleContactWhatsApp}>Solicitar Orçamento</button>
              </div>
            </div>
            <div className="hero-image">
              <div className="hero-image-dot-pattern"></div>
              <div className="hero-image-line"></div>
              <div className="hero-image-ruler"></div>
              <img src="/assets/section-hero.png" alt={city ? `Projeto de galpão industrial premoldado em ${city}, Santa Catarina` : "Projeto de galpão industrial premoldado em Santa Catarina"} />
            </div>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="investment-section" id="investment">
        <div className="container">
          <div className="investment-content">
            <div className="investment-text">
              <div className="section-header">
                <span className="section-subtitle">Oportunidade de Ouro</span>
                <h2 className="section-title">Galpão Industrial: O Investimento Mais Sólido do Mercado</h2>
                <p className="section-description">
                  Invista no que há de mais sólido no mercado imobiliário. Galpões industriais oferecem segurança, 
                  rentabilidade e baixo risco para investidores inteligentes.
                </p>
              </div>
              
              <div className="investment-features">
                <div className="feature-item">
                  <div className="feature-icon">
                    <FontAwesomeIcon icon={faAward} />
                  </div>
                  <div className="feature-content">
                    <h3>Rentabilidade Excepcional</h3>
                    <p>Taxa de retorno no aluguel pode chegar a <strong>1,5% ao mês</strong>, superando a maioria dos investimentos tradicionais.</p>
                  </div>
                </div>
                
                <div className="feature-item">
                  <div className="feature-icon">
                    <FontAwesomeIcon icon={faBuilding} />
                  </div>
                  <div className="feature-content">
                    <h3>Segurança e Solidez</h3>
                    <p>Investimento em bens tangíveis com alta demanda industrial e menor volatilidade do mercado.</p>
                  </div>
                </div>
                
                <div className="feature-item">
                  <div className="feature-icon">
                    <FontAwesomeIcon icon={faClock} />
                  </div>
                  <div className="feature-content">
                    <h3>Contratos de Longo Prazo</h3>
                    <p>Empresas industriais costumam firmar contratos duradouros, garantindo renda estável por anos.</p>
                  </div>
                </div>
              </div>
              
              <div className="investment-cta">
                <button className="btn-investment" onClick={handleContactWhatsApp}>Quero Investir Agora</button>
              </div>
            </div>
            
            <div className="investment-stats">
              <div className="stat-highlight">
                <div className="stat-number">1,5%</div>
                <div className="stat-label">Retorno Mensal</div>
              </div>
              
              <div className="investment-benefits">
                <div className="benefit-card">
                  <h4>Alta Demanda</h4>
                  <p>Crescimento constante do setor industrial</p>
                </div>
                
                <div className="benefit-card">
                  <h4>Baixa Manutenção</h4>
                  <p>Menor custo operacional comparado a outros imóveis</p>
                </div>
                
                <div className="benefit-card">
                  <h4>Valorização</h4>
                  <p>Imóveis industriais tendem a se valorizar com o tempo</p>
                </div>
                
                <div className="benefit-card">
                  <h4>Segurança Jurídica</h4>
                  <p>Contratos empresariais com maior proteção legal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">+10</div>
              <div className="stat-title">Anos de Experiência</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">+1000</div>
              <div className="stat-title">Projetos Elaborados</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">+800</div>
              <div className="stat-title">Obras Executadas</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-title">Engenharia Própria</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section" id="services">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-subtitle">O Que Fazemos</span>
            <h2 className="section-title">Nossos Serviços</h2>
            <p className="section-description">
              Do projeto conceitual à conclusão, oferecemos soluções de construção<br/>
              abrangentes adaptadas às suas necessidades.
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <h3 className="service-title">Construção Comercial</h3>
              <p className="service-description">
                Soluções completas para edifícios comerciais que cumprem prazos e orçamentos rigorosos.
              </p>
            </div>

            <div className="service-card">
              <h3 className="service-title">Projetos Estruturais</h3>
              <p className="service-description">
                Projetos estruturais otimizados e detalhados com atenção a cada detalhe técnico.
              </p>
            </div>

            <div className="service-card">
              <h3 className="service-title">Galpões Industriais</h3>
              <p className="service-description">
                Estruturas industriais seguras e eficientes projetadas para durabilidade.
              </p>
            </div>

            <div className="service-card">
              <h3 className="service-title">Consultoria Técnica</h3>
              <p className="service-description">
                Assessoria especializada em todos os estágios do seu projeto de construção.
              </p>
            </div>

            <div className="service-card">
              <h3 className="service-title">Reformas & Ampliações</h3>
              <p className="service-description">
                Transformamos espaços existentes com melhorias modernas e ampliações estruturais.
              </p>
            </div>

            <div className="service-card">
              <h3 className="service-title">Gerenciamento de Projetos</h3>
              <p className="service-description">
                Gestão completa de projetos garantindo qualidade, segurança e eficiência.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" id="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <div className="section-header">
                <span className="section-subtitle">CONHEÇA NOSSO</span>
                <div className="about-titles">
                  <h2 className="section-title socio-title">
                    Sócio proprietário e<br/>
                    Engenheiro
                  </h2>
                  <h3 className="engineer-name">Leonardo Scremin Junior</h3>
                  <p className="engineer-title">ENGENHEIRO CIVIL</p>
                </div>
              </div>
              
              <div className="about-info">
                <div className="about-description">
                  <p>
                    Com mais de uma década de experiência em projetos estruturais e construção civil, 
                    Leonardo combina conhecimento técnico avançado com visão inovadora para entregar 
                    soluções que superam expectativas em toda Santa Catarina.
                  </p>
                  
                  <p>
                    Especialista em galpões industriais e estruturas de grande porte, conduz cada projeto 
                    com precisão técnica e comprometimento com a excelência, garantindo segurança, 
                    durabilidade e eficiência em todas as obras.
                  </p>

                  <p>
                    Casado com Ana Paula Lolli e pai da Martina, Leonardo encontra na família a 
                    inspiração para construir não apenas estruturas sólidas, mas também um legado 
                    de qualidade e confiança para as futuras gerações.
                  </p>
                </div>
                
                <div className="engineer-credentials">
                  <div className="credential-item">
                    <div className="credential-icon">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L2 7V10C2 16 6 20.5 12 22C18 20.5 22 16 22 10V7L12 2Z"/>
                      </svg>
                    </div>
                    <div className="credential-text">
                      <h4>CREA Ativo</h4>
                      <p>Registro profissional ativo</p>
                    </div>
                  </div>
                  
                  <div className="credential-item">
                    <div className="credential-icon">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L12 2L3 7V9C3 14.55 6.84 19.74 12 21C17.16 19.74 21 14.55 21 9Z"/>
                      </svg>
                    </div>
                    <div className="credential-text">
                      <h4>10+ Anos</h4>
                      <p>Experiência comprovada</p>
                    </div>
                  </div>
                  
                  <div className="credential-item">
                    <div className="credential-icon">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 11H7V13H9V11ZM13 11H11V13H13V11ZM17 11H15V13H17V11ZM19 4H18V2H16V4H8V2H6V4H5C3.89 4 3.01 4.9 3.01 6L3 20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V9H19V20Z"/>
                      </svg>
                    </div>
                    <div className="credential-text">
                      <h4>+800 Projetos</h4>
                      <p>Obras executadas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="about-image">
              <div className="image-container">
                <img src="/leonardo.png" alt={city ? `Leonardo Scremin Junior - Engenheiro Civil especialista em premoldados em ${city}, SC` : "Leonardo Scremin Junior - Engenheiro Civil especialista em premoldados"} />
                <div className="image-overlay">
                  <div className="overlay-content">
                    <h4>Leonardo Scremin Junior</h4>
                    <p>Engenheiro Civil</p>
                  </div>
                </div>
              </div>
              
              <div className="image-decoration">
                <div className="decoration-dot"></div>
                <div className="decoration-line"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section" id="projects">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Nosso Portfólio</span>
            <h2 className="section-title socio-title">Projetos em Destaque</h2>
            <p className="section-description">
              Confira nossa vitrine de projetos concluídos que demonstram nossa expertise e qualidade.
            </p>
          </div>

          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <img src="/assets/destaque1.jpg" alt="Bebidas Tomasi" />
              </div>
              <div className="project-content">
                <span className="project-category">Industrial</span>
                <h3 className="project-title">Bebidas Tomasi</h3>
                <p className="project-location">Lauro Müller, SC</p>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img src="/assets/destaque2.png" alt="Jean" />
              </div>
              <div className="project-content">
                <span className="project-category">Industrial</span>
                <h3 className="project-title">Jean</h3>
                <p className="project-location">Orleans, SC</p>
              </div>
            </div>

            <div className="project-card next-success-card">
              <div className="project-image next-success-image">
                <div className="next-success-background-pattern"></div>
                <div className="next-success-overlay">
                  <div className="next-success-icon-container">
                    <div className="next-success-icon">
                      <FontAwesomeIcon icon={faAward} />
                    </div>
                    <div className="success-sparkles">
                      <span className="sparkle sparkle-1">✨</span>
                      <span className="sparkle sparkle-2">⭐</span>
                      <span className="sparkle sparkle-3">✨</span>
                    </div>
                  </div>
                  <h3 className="next-success-title">
                    <span className="title-highlight">Seu Projeto</span>
                    <span className="title-main">Pode Ser o Próximo!</span>
                  </h3>
                </div>
              </div>
              <div className="project-content next-success-content">
                <div className="category-container">
                  <span className="project-category next-success-category">
                    <FontAwesomeIcon icon={faAward} className="category-icon" />
                    Próximo Case de Sucesso
                  </span>
                </div>
                <h3 className="project-title next-success-project-title">Seu Projeto Aqui</h3>
                <p className="project-location next-success-location">
                  <FontAwesomeIcon icon={faBuilding} className="location-icon" />
                  Sua Cidade, SC
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cities Section */}
      <section className="cities-section" id="cities">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Nossa Região de Atendimento</span>
            <h2 className="section-title socio-title">Atendemos sul de Santa Catarina</h2>
            <p className="section-description">
              Oferecemos serviços de engenharia estrutural e construção de galpões industriais em toda a região sul de Santa Catarina.
            </p>
          </div>

          <div className="cities-grid">
            <div className="city-card">
              <h3>Premoldado Orleans</h3>
              <p>Galpões industriais premoldados e estruturas metálicas em Orleans, SC. Projetos estruturais com qualidade e segurança utilizando sistema premoldado.</p>
            </div>
            
            <div className="city-card">
              <h3>Premoldado Urussanga</h3>
              <p>Construção de galpões industriais premoldados em Urussanga, SC. Engenharia estrutural de excelência com tecnologia premoldada.</p>
            </div>
            
            <div className="city-card">
              <h3>Premoldado Lauro Müller</h3>
              <p>Estruturas metálicas e galpões industriais premoldados em Lauro Müller, SC. Projetos sob medida com sistema premoldado.</p>
            </div>
            
            <div className="city-card">
              <h3>Premoldado Morro da Fumaça</h3>
              <p>Galpões industriais premoldados em Morro da Fumaça, SC. Construção civil com qualidade garantida usando tecnologia premoldada.</p>
            </div>
            
            <div className="city-card">
              <h3>Premoldado São Ludgero</h3>
              <p>Projetos estruturais e galpões industriais premoldados em São Ludgero, SC. Engenharia de confiança com sistema premoldado.</p>
            </div>
            
            <div className="city-card">
              <h3>Premoldado Braço do Norte</h3>
              <p>Estruturas metálicas e galpões industriais premoldados em Braço do Norte, SC. Qualidade e durabilidade com tecnologia premoldada.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section" id="testimonials">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">O Que Dizem Nossos Clientes</span>
            <h2 className="section-title">Depoimentos</h2>
            <p className="section-description">
              Não acredite apenas em nossa palavra - veja o que nossos clientes têm a dizer sobre nosso trabalho.
            </p>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card enhanced-hover">
              <div className="testimonial-quote">
                <FontAwesomeIcon icon={faCheckCircle} />
              </div>
              <p className="testimonial-text">
                "A Premolde superou nossas expectativas em todas as etapas do projeto. A atenção aos detalhes e o compromisso com a qualidade são inigualáveis no setor."
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  <img src="https://placehold.co/100x100/111111/EEEEEE?text=Cliente+1" alt="João Silva" />
                </div>
                <div className="testimonial-info">
                  <h4 className="testimonial-name">João Silva</h4>
                  <p className="testimonial-role">Diretor, Empresa de Logística</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card enhanced-hover">
              <div className="testimonial-quote">
                <FontAwesomeIcon icon={faCheckCircle} />
              </div>
              <p className="testimonial-text">
                "Trabalhar com a Premolde foi uma experiência tranquila do início ao fim. Eles entregaram nosso complexo projeto dentro do prazo e do orçamento, algo raro nesse setor."
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  <img src="https://placehold.co/100x100/111111/EEEEEE?text=Cliente+2" alt="Maria Oliveira" />
                </div>
                <div className="testimonial-info">
                  <h4 className="testimonial-name">Maria Oliveira</h4>
                  <p className="testimonial-role">Gerente, Desenvolvimento Urbano</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card enhanced-hover">
              <div className="testimonial-quote">
                <FontAwesomeIcon icon={faCheckCircle} />
              </div>
              <p className="testimonial-text">
                "A equipe da Premolde traz um nível de profissionalismo e expertise que é verdadeiramente impressionante. Nosso projeto de galpão foi tratado com cuidado e precisão."
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  <img src="https://placehold.co/100x100/111111/EEEEEE?text=Cliente+3" alt="Carlos Santos" />
                </div>
                <div className="testimonial-info">
                  <h4 className="testimonial-name">Carlos Santos</h4>
                  <p className="testimonial-role">Proprietário, Indústria de Manufatura</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premoldado Explanation Section */}
      <section className="premoldado-section" id="premoldado">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-subtitle">Entenda a Diferença</span>
            <h2 className="section-title">
              {city ? (
                `Premoldado ${city}: Tecnologia e Qualidade`
              ) : (
                'Premoldado: Tecnologia e Qualidade'
              )}
            </h2>
            <p className="section-description">
              {city ? (
                `Conheça as vantagens dos sistemas premoldados em ${city} e toda região sul de Santa Catarina.`
              ) : (
                'Conheça as vantagens dos sistemas premoldados em Santa Catarina.'
              )}
            </p>
          </div>

          <div className="premoldado-content">
            <div className="premoldado-intro">
              <div className="premoldado-icon">
                <FontAwesomeIcon icon={faBuilding} />
              </div>
              <h3>O que é Premoldado?</h3>
              <p>
                O sistema premoldado é uma tecnologia avançada de construção onde as peças estruturais 
                são produzidas em ambiente controlado e depois transportadas e montadas no local da obra. 
                {city && ` Em ${city}, utilizamos esta tecnologia para garantir máxima qualidade e eficiência.`}
              </p>
            </div>
            
            <div className="premoldado-advantages">
              <h3>
                <FontAwesomeIcon icon={faAward} className="section-icon" />
                Vantagens do Sistema Premoldado
              </h3>
              
              <div className="advantages-grid">
                <div className="advantage-card">
                  <div className="advantage-icon">
                    <FontAwesomeIcon icon={faClock} />
                  </div>
                  <div className="advantage-content">
                    <h4>Rapidez na execução</h4>
                    <p>Redução de até 50% no tempo de construção</p>
                  </div>
                </div>

                <div className="advantage-card">
                  <div className="advantage-icon">
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </div>
                  <div className="advantage-content">
                    <h4>Controle de qualidade</h4>
                    <p>Peças produzidas em ambiente controlado</p>
                  </div>
                </div>

                <div className="advantage-card">
                  <div className="advantage-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L12 2L3 7V9C3 14.55 6.84 19.74 12 21C17.16 19.74 21 14.55 21 9Z"/>
                    </svg>
                  </div>
                  <div className="advantage-content">
                    <h4>Economia</h4>
                    <p>Menor desperdício de materiais e mão de obra</p>
                  </div>
                </div>

                <div className="advantage-card">
                  <div className="advantage-icon">
                    <FontAwesomeIcon icon={faHardHat} />
                  </div>
                  <div className="advantage-content">
                    <h4>Durabilidade</h4>
                    <p>Estruturas com vida útil superior a 50 anos</p>
                  </div>
                </div>

                <div className="advantage-card">
                  <div className="advantage-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.17 22L6.58 17.58C8.13 15.36 10.48 13.95 13.25 13.45C15.58 13.06 17.8 12.23 19.77 10.93L21.46 14.25L22.81 13.58C22.81 13.58 21.91 9.08 19.77 7.93L17 8ZM8.35 13.32C9.96 11.71 12.32 11.85 13.93 13.46C15.54 15.07 15.68 17.43 14.07 19.04C12.46 20.65 10.1 20.51 8.49 18.9C6.88 17.29 6.74 14.93 8.35 13.32Z"/>
                    </svg>
                  </div>
                  <div className="advantage-content">
                    <h4>Sustentabilidade</h4>
                    <p>Processo mais limpo e com menos impacto ambiental</p>
                  </div>
                </div>

                <div className="advantage-card highlight-card">
                  <div className="advantage-icon">
                    <FontAwesomeIcon icon={faTools} />
                  </div>
                  <div className="advantage-content">
                    <h4>Engenharia Própria</h4>
                    <p>Projetos calculados e executados com precisão técnica</p>
                  </div>
                </div>
              </div>
            </div>

            {city && (
              <div className="city-highlight">
                <div className="city-highlight-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7V10C2 16 6 20.5 12 22C18 20.5 22 16 22 10V7L12 2Z"/>
                  </svg>
                </div>
                <h4>Premoldado em {city}</h4>
                <p>
                  Nossa empresa atende toda a região com projetos estruturais premoldados, 
                  oferecendo soluções personalizadas para cada necessidade industrial e comercial.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section" id="faq">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-subtitle">Dúvidas Frequentes</span>
            <h2 className="section-title">
              {city ? (
                `FAQ sobre Premoldados em ${city}`
              ) : (
                'Perguntas Frequentes sobre Premoldados'
              )}
            </h2>
            <p className="section-description">
              Tire suas principais dúvidas sobre galpões industriais premoldados e nossos serviços.
            </p>
          </div>

          <div className="faq-grid">
            <div className="faq-item">
              <h3>O que é um galpão premoldado?</h3>
              <p>
                Um galpão premoldado é uma estrutura industrial construída com elementos de concreto 
                pré-fabricados em ambiente controlado. {city && `Em ${city}, `}oferecemos galpões premoldados 
                com maior rapidez de execução, controle de qualidade superior e custos otimizados.
              </p>
            </div>

            <div className="faq-item">
              <h3>Qual a diferença entre premoldado e pré-fabricado?</h3>
              <p>
                Premoldado refere-se a elementos produzidos no próprio canteiro ou próximo à obra, 
                enquanto pré-fabricado é produzido em fábrica. Ambos oferecem vantagens como rapidez 
                e qualidade controlada para galpões industriais.
              </p>
            </div>

            <div className="faq-item">
              <h3>Quanto tempo leva para construir um galpão premoldado?</h3>
              <p>
                {city ? `Em ${city}, um ` : 'Um '}galpão industrial premoldado pode ser construído em 
                30 a 60 dias, dependendo do tamanho e complexidade. Isso representa uma redução de 
                até 50% no tempo comparado à construção convencional.
              </p>
            </div>

            <div className="faq-item">
              <h3>Galpões premoldados são mais econômicos?</h3>
              <p>
                Sim! Os galpões premoldados oferecem economia significativa devido à redução de 
                desperdícios, menor tempo de construção e otimização de materiais. O custo-benefício 
                é superior à construção tradicional.
              </p>
            </div>

            <div className="faq-item">
              <h3>Qual a durabilidade de um galpão premoldado?</h3>
              <p>
                Galpões industriais premoldados têm vida útil superior a 50 anos quando bem projetados 
                e executados. Utilizamos concreto de alta resistência e seguimos rigorosamente as 
                normas técnicas brasileiras.
              </p>
            </div>

            <div className="faq-item">
              <h3>Atendem toda região sul de Santa Catarina?</h3>
              <p>
                Sim! Atendemos {city && `${city}, `}Orleans, Criciúma, Urussanga, Lauro Müller, 
                Morro da Fumaça, São Ludgero, Braço do Norte, Tubarão e toda região sul de Santa Catarina 
                com projetos de galpões premoldados e estruturas metálicas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <div className="container">
          <div className="contact-content">
            <div className="section-header">
              <span className="section-subtitle">Entre em Contato</span>
              <h2 className="section-title socio-title">Fale Conosco</h2>
              <p className="section-description">
                Tem um projeto em mente? Entre em contato conosco pelo WhatsApp e solicite seu orçamento!
              </p>
            </div>

            <div className="whatsapp-contact">
              <div className="whatsapp-card">
                <div className="whatsapp-header">
                  <div className="whatsapp-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.484 3.488"/>
                    </svg>
                  </div>
                  <div className="whatsapp-status">
                    <h4>Atendimento WhatsApp</h4>
                    <p>
                      <span className="status-dot"></span>
                      Disponível • Resposta rápida
                    </p>
                  </div>
                </div>
                
                <div className="whatsapp-info">
                  <h3>Converse Conosco</h3>
                  <p>Resposta rápida • Atendimento personalizado</p>
                  <div className="phone-number">(48) 9698-6266</div>
                </div>
                
                <button onClick={handleContactWhatsApp} className="whatsapp-btn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                  Iniciar Conversa
                </button>
                
                <div className="whatsapp-features">
                  <div className="feature">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 12l2 2 4-4"/>
                    </svg>
                    <span>Orçamento sem compromisso</span>
                  </div>
                  <div className="feature">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M12 6v6l4 2"/>
                    </svg>
                    <span>Atendimento especializado</span>
                  </div>
                  <div className="feature">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 7V10C2 16 6 20.5 12 22C18 20.5 22 16 22 10V7L12 2Z"/>
                    </svg>
                    <span>Engenheiro CREA ativo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-column">
              <div className="footer-logo">
                <a href="#home" className="logo-link">
                  <span className="logo-text">Pre<span className="logo-accent">molde</span></span>
                </a>
              </div>
              <p className="footer-description">
                Construindo excelência com precisão, qualidade e inovação. Sua visão, nossa expertise.
              </p>
            </div>

            <div className="footer-column">
              <h3 className="footer-heading">Links Rápidos</h3>
              <ul className="footer-links">
                <li><a href="#home">Início</a></li>
                <li><a href="#services">Serviços</a></li>
                <li><a href="#projects">Projetos</a></li>
                <li><a href="#testimonials">Depoimentos</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-heading">Serviços</h3>
              <ul className="footer-links">
                <li><a href="#">Construção Comercial</a></li>
                <li><a href="#">Galpões Industriais</a></li>
                <li><a href="#">Projetos Estruturais</a></li>
                <li><a href="#">Consultoria Técnica</a></li>
                <li><a href="#">Reformas & Ampliações</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="copyright">
              © {new Date().getFullYear()} Premolde Engenharia | CNPJ 59.670.329/0001-02 | Todos os direitos reservados.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          <div className="developer-section">
            <p className="developer-info">
              <strong>Desenvolvido por Manatech</strong> | CNPJ 43.314.545/0001-85 | <a href="mailto:michelmanarin@gmail.com">michelmanarin@gmail.com</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 