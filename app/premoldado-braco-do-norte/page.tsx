import { Metadata } from 'next'
import HomeContent from '../components/HomeContent'

export const metadata: Metadata = {
  title: 'Premoldado Braço do Norte - Galpões Industriais e Estruturas Metálicas',
  description: 'Premoldado Braço do Norte - Especialistas em galpões industriais, estruturas metálicas e projetos estruturais em Braço do Norte, SC. Engenheiro CREA ativo. Orçamento gratuito!',
  keywords: [
    'premoldado braco do norte',
    'galpões industriais braco do norte',
    'estruturas metálicas braco do norte',
    'engenharia estrutural braco do norte',
    'construção civil braco do norte',
    'projetos estruturais braco do norte',
    'Braço do Norte SC',
    'Santa Catarina'
  ],
  openGraph: {
    title: 'Premoldado Braço do Norte - Galpões Industriais e Estruturas Metálicas',
    description: 'Especialistas em galpões industriais e estruturas metálicas em Braço do Norte, SC. Engenheiro CREA ativo.',
    url: 'https://premolde.com.br/premoldado-braco-do-norte',
  },
  alternates: {
    canonical: 'https://premolde.com.br/premoldado-braco-do-norte',
  },
}

export default function BracoDoNortePage() {
  return <HomeContent city="Braço do Norte" />
} 