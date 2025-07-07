import { Metadata } from 'next'
import HomePage from '../page'

export const metadata: Metadata = {
  title: 'Premolde São Ludgero - Galpões Industriais e Estruturas Metálicas',
  description: 'Premolde São Ludgero - Especialistas em galpões industriais, estruturas metálicas e projetos estruturais em São Ludgero, SC. Engenheiro CREA ativo. Orçamento gratuito!',
  keywords: [
    'premolde sao ludgero',
    'galpões industriais sao ludgero',
    'estruturas metálicas sao ludgero',
    'engenharia estrutural sao ludgero',
    'construção civil sao ludgero',
    'projetos estruturais sao ludgero',
    'São Ludgero SC',
    'Santa Catarina'
  ],
  openGraph: {
    title: 'Premolde São Ludgero - Galpões Industriais e Estruturas Metálicas',
    description: 'Especialistas em galpões industriais e estruturas metálicas em São Ludgero, SC. Engenheiro CREA ativo.',
    url: 'https://premolde.com.br/premolde-sao-ludgero',
  },
  alternates: {
    canonical: 'https://premolde.com.br/premolde-sao-ludgero',
  },
}

export default function SaoLudgeroPage() {
  return <HomePage />
} 