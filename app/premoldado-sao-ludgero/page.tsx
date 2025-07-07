import { Metadata } from 'next'
import HomeContent from '../components/HomeContent'

export const metadata: Metadata = {
  title: 'Premoldado São Ludgero - Galpões Industriais e Estruturas Metálicas',
  description: 'Premoldado São Ludgero - Especialistas em galpões industriais, estruturas metálicas e projetos estruturais em São Ludgero, SC. Engenheiro CREA ativo. Orçamento gratuito!',
  keywords: [
    'premoldado sao ludgero',
    'galpões industriais sao ludgero',
    'estruturas metálicas sao ludgero',
    'engenharia estrutural sao ludgero',
    'construção civil sao ludgero',
    'projetos estruturais sao ludgero',
    'São Ludgero SC',
    'Santa Catarina'
  ],
  openGraph: {
    title: 'Premoldado São Ludgero - Galpões Industriais e Estruturas Metálicas',
    description: 'Especialistas em galpões industriais e estruturas metálicas em São Ludgero, SC. Engenheiro CREA ativo.',
    url: 'https://premolde.com.br/premoldado-sao-ludgero',
  },
  alternates: {
    canonical: 'https://premolde.com.br/premoldado-sao-ludgero',
  },
}

export default function SaoLudgeroPage() {
  return <HomeContent city="São Ludgero" />
} 