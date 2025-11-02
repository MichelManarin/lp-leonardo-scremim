import ParceiroLinks from './ParceiroLinks'

export default function ParceriaCriciumaPage() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f8f9fa',
      padding: '40px 20px',
      fontFamily: 'Poppins, sans-serif'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '12px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{
          fontSize: '32px',
          fontWeight: '700',
          color: '#1a1a1a',
          marginBottom: '20px',
          textAlign: 'center'
        }}>
          Parceria Premoldado em Criciúma
        </h1>

        <div style={{
          fontSize: '18px',
          lineHeight: '1.8',
          color: '#333',
          marginBottom: '30px'
        }}>
          <p style={{ marginBottom: '20px' }}>
            <strong>Premoldado em Criciúma</strong> representa uma das principais soluções construtivas para o desenvolvimento industrial e comercial da região sul catarinense. Criciúma, conhecida como a capital nacional do carvão e importante polo industrial, tem encontrado no sistema premoldado a tecnologia ideal para atender às necessidades de crescimento acelerado do seu parque industrial.
          </p>

          <p style={{ marginBottom: '20px' }}>
            A cidade de Criciúma concentra diversos setores que se beneficiam diretamente do <strong>premoldado</strong>: indústrias cerâmicas, mineradoras, empresas do setor metalúrgico, centros de distribuição e grandes empresas comerciais. Para essas atividades, o sistema premoldado oferece grandes vãos livres, estruturas resistentes e construção rápida, características essenciais para otimizar operações e reduzir custos.
          </p>

          <p style={{ marginBottom: '20px' }}>
            O mercado de <strong>premoldado em Criciúma</strong> tem se expandido significativamente nos últimos anos, acompanhando o crescimento econômico da região. Empresas locais têm investido cada vez mais em galpões premoldados para suas instalações, reconhecendo as vantagens dessa tecnologia: agilidade na execução, custos otimizados, alta qualidade estrutural e menor impacto ambiental durante a construção.
          </p>

          <p style={{ marginBottom: '20px' }}>
            Além disso, Criciúma está estrategicamente localizada no coração do sul de Santa Catarina, servindo como centro de distribuição para toda a região carbonífera. Isso torna o <strong>premoldado em Criciúma</strong> ainda mais relevante, pois permite a construção rápida de centros logísticos, armazéns e estruturas comerciais que atendem não apenas ao município, mas a toda a região metropolitana.
          </p>

          <p style={{ marginBottom: '20px' }}>
            Com a crescente demanda por espaços industriais e comerciais modernos em Criciúma, o sistema premoldado se consolidou como a escolha preferencial de empreendedores que buscam eficiência, economia e qualidade. A tecnologia premoldada oferece flexibilidade arquitetônica, permitindo projetos customizados que atendem às necessidades específicas de cada negócio na região.
          </p>

          <p style={{ marginBottom: '30px' }}>
            Nossa parceria com especialistas em <strong>premoldado em Criciúma</strong> garante acesso às melhores soluções construtivas da região, com profissionais qualificados, projetos estruturais adequados às normas técnicas vigentes e execução especializada, proporcionando resultados de excelência para empresas que buscam expandir ou modernizar suas instalações na região carbonífera.
          </p>
        </div>

        <div style={{
          backgroundColor: '#f0f4f8',
          padding: '30px',
          borderRadius: '8px',
          marginTop: '40px'
        }}>
          <h2 style={{
            fontSize: '24px',
            fontWeight: '600',
            color: '#1a1a1a',
            marginBottom: '20px'
          }}>
            Conheça Nossos Parceiros
          </h2>

          <ParceiroLinks />
        </div>
      </div>
    </div>
  )
}
