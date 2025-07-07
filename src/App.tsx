import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTools, faHardHat, faBuilding, faClock, faPhone, faEnvelope, faPlayCircle, faTimes, faAward, faRedo, faPause } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/section-hero.png';

// Importe os arquivos usando require se o import padrão não funcionar
// const project1 = require('./assets/projects/56aaee69-8572-4acb-8433-296355a79557.jfif');
// const project2 = require('./assets/projects/01e47198-59ec-4d5d-827a-00a135cb1a40.jfif');
// const project3 = require('./assets/projects/4d34959b-854c-400a-a468-bc736886df9e.jfif');

const App: React.FC = () => {
  const navigate = useNavigate();
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
            <span className="logo-text">Pre<span className="logo-accent">molde</span></span>
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
              <span className="hero-pre-title">Engenharia de Excelência</span>
              <h1 className="hero-title" style={{fontSize: '3rem'}}>
                <span className="hero-highlight">Galpões Industriais</span><br />
                de Alta Qualidade
              </h1>
              <p className="hero-description">
                Projetos estruturais robustos e duradouros que atendem às mais rigorosas normas de segurança. Cada detalhe é pensado para maximizar funcionalidade e durabilidade.
              </p>
              <div className="hero-stats">
                <div className="hero-stat">
                  <div className="stat-number">+800</div>
                  <div className="stat-label">Obras Executadas</div>
                </div>
                <div className="hero-stat">
                  <div className="stat-number">10+</div>
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
              <img src={logo} alt="Projeto de construção" />
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
          <div className="stats-grid mb-2 mt-2">
            <div className="stat-card enhanced-hover">
              <div className="stat-number">+10</div>
              <div className="stat-title">Anos de Experiência</div>
            </div>
            <div className="stat-card enhanced-hover">
              <div className="stat-number">+1000</div>
              <div className="stat-title">Projetos Elaborados</div>
            </div>
            <div className="stat-card enhanced-hover">
              <div className="stat-number">+800</div>
              <div className="stat-title">Obras Executadas</div>
            </div>
            <div className="stat-card enhanced-hover">
              <div className="stat-number">100%</div>
              <div className="stat-title">Engenharia Própria</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section" id="services">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">O Que Fazemos</span>
            <h2 className="section-title">Nossos Serviços</h2>
            <p className="section-description">
              Do projeto conceitual à conclusão, oferecemos soluções de construção abrangentes adaptadas às suas necessidades.
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card enhanced-hover">
              <h3 className="service-title">Construção Comercial</h3>
              <p className="service-description">
                Soluções completas para edifícios comerciais que cumprem prazos e orçamentos rigorosos.
              </p>
            </div>

            <div className="service-card enhanced-hover">
              <h3 className="service-title">Projetos Estruturais</h3>
              <p className="service-description">
                Projetos estruturais otimizados e detalhados com atenção a cada detalhe técnico.
              </p>
            </div>

            <div className="service-card enhanced-hover">
              <h3 className="service-title">Galpões Industriais</h3>
              <p className="service-description">
                Estruturas industriais seguras e eficientes projetadas para durabilidade.
              </p>
            </div>

            <div className="service-card enhanced-hover">
              <h3 className="service-title">Consultoria Técnica</h3>
              <p className="service-description">
                Assessoria especializada em todos os estágios do seu projeto de construção.
              </p>
            </div>

            <div className="service-card enhanced-hover">
              <h3 className="service-title">Reformas & Ampliações</h3>
              <p className="service-description">
                Transformamos espaços existentes com melhorias modernas e ampliações estruturais.
              </p>
            </div>

            <div className="service-card enhanced-hover">
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
                <span className="section-subtitle">Conheça Nosso</span>
                <h2 className="section-title">Sócio proprietário e Engenheiro</h2>
              </div>
              
              <div className="about-info">
                <h3 className="engineer-name">Leonardo Scremin Junior</h3>
                <p className="engineer-title">Engenheiro Civil</p>
                
                <div className="about-description">
                  <p>
                    Com mais de uma década de experiência em projetos estruturais e construção civil, 
                    Leonardo combina conhecimento técnico avançado com visão inovadora para entregar 
                    soluções que superam expectativas.
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
                                 <img src="/leonardo.png" alt="Leonardo Scremin Junior - Engenheiro Civil" />
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
            <h2 className="section-title">Projetos em Destaque</h2>
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
                <img src="/projects/01e47198-59ec-4d5d-827a-00a135cb1a40.jfif" alt="Edifício Comercial" />
              </div>
              <div className="project-content">
                <span className="project-category">Comercial</span>
                <h3 className="project-title">Centro Empresarial</h3>
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
              {/* INSTRUÇÃO: Substitua por foto real do cliente e depoimento verdadeiro */}
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
              {/* INSTRUÇÃO: Substitua por foto real do cliente e depoimento verdadeiro */}
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
              {/* INSTRUÇÃO: Substitua por foto real do cliente e depoimento verdadeiro */}
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
              <h2 className="section-title">Fale Conosco</h2>
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
                    <p><div className="status-dot"></div>Disponível • Resposta rápida</p>
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
                <span className="logo-text">Pre<span className="logo-accent">molde</span></span>
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
              © {new Date().getFullYear()} Premolde Engenharia. Todos os direitos reservados.
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
};

export default App;