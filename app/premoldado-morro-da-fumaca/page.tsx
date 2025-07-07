import { Metadata } from 'next'
import HomeContent from '../components/HomeContent'

export const metadata: Metadata = {
  title: 'Premoldado Morro da Fumaça - Galpões Industriais e Estruturas Metálicas',
  description: 'Premoldado Morro da Fumaça - Especialistas em galpões industriais, estruturas metálicas e projetos estruturais em Morro da Fumaça, SC. Engenheiro CREA ativo. Orçamento gratuito!',
  keywords: [
    'premoldado morro da fumaca',
    'galpões industriais morro da fumaca',
    'estruturas metálicas morro da fumaca',
    'engenharia estrutural morro da fumaca',
    'construção civil morro da fumaca',
    'projetos estruturais morro da fumaca',
    'Morro da Fumaça SC',
    'Santa Catarina'
  ],
  openGraph: {
    title: 'Premoldado Morro da Fumaça - Galpões Industriais e Estruturas Metálicas',
    description: 'Especialistas em galpões industriais e estruturas metálicas em Morro da Fumaça, SC. Engenheiro CREA ativo.',
    url: 'https://premolde.com.br/premoldado-morro-da-fumaca',
  },
  alternates: {
    canonical: 'https://premolde.com.br/premoldado-morro-da-fumaca',
  },
}

export default function MorroDaFumacaPage() {
  return <HomeContent city="Morro da Fumaça" />
} 