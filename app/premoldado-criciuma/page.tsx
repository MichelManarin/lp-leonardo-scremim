import { Metadata } from 'next'
import HomeContent from '../components/HomeContent'

export const metadata: Metadata = {
  title: 'Premoldado Criciúma - Galpões Industriais e Estruturas Metálicas',
  description: 'Premoldado Criciúma - Especialistas em galpões industriais, estruturas metálicas e projetos estruturais em Criciúma, SC. Engenheiro CREA ativo. Orçamento gratuito!',
  keywords: [
    'premoldado criciuma',
    'galpões industriais criciuma',
    'estruturas metálicas criciuma',
    'engenharia estrutural criciuma',
    'construção civil criciuma',
    'projetos estruturais criciuma',
    'Criciúma SC',
    'Santa Catarina'
  ],
  openGraph: {
    title: 'Premoldado Criciúma - Galpões Industriais e Estruturas Metálicas',
    description: 'Especialistas em galpões industriais e estruturas metálicas em Criciúma, SC. Engenheiro CREA ativo.',
    url: 'https://premolde.com.br/premoldado-criciuma',
  },
  alternates: {
    canonical: 'https://premolde.com.br/premoldado-criciuma',
  },
}

export default function CriciumaPage() {
  return <HomeContent city="Criciúma" />
} 