import { Metadata } from 'next'
import HomeContent from '../components/HomeContent'

export const metadata: Metadata = {
  title: 'Premolde Criciúma - Galpões Industriais e Estruturas Metálicas',
  description: 'Premolde Criciúma - Especialistas em galpões industriais, estruturas metálicas e projetos estruturais em Criciúma, SC. Engenheiro CREA ativo. Orçamento gratuito!',
  keywords: [
    'premolde criciuma',
    'galpões industriais criciuma',
    'estruturas metálicas criciuma',
    'engenharia estrutural criciuma',
    'construção civil criciuma',
    'projetos estruturais criciuma',
    'Criciúma SC',
    'Santa Catarina'
  ],
  openGraph: {
    title: 'Premolde Criciúma - Galpões Industriais e Estruturas Metálicas',
    description: 'Especialistas em galpões industriais e estruturas metálicas em Criciúma, SC. Engenheiro CREA ativo.',
    url: 'https://premolde.com.br/premolde-criciuma',
  },
  alternates: {
    canonical: 'https://premolde.com.br/premolde-criciuma',
  },
}

export default function CriciumaPage() {
  return <HomeContent city="Criciúma" />
} 