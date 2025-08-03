import { Metadata } from 'next'
import HomeContent from '../components/HomeContent'

export const metadata: Metadata = {
  title: 'Premoldado Criciúma SC - Galpões Industriais e Estruturas Premoldadas',
  description: 'Premoldado Criciúma SC - Especialistas em galpões industriais premoldados, estruturas metálicas e construções premoldadas em Criciúma, Santa Catarina. Engenheiro CREA ativo. Orçamento gratuito!',
  keywords: [
    'premoldado criciuma',
    'premoldados criciuma',
    'premoldado criciuma sc',
    'galpões premoldados criciuma',
    'estruturas premoldadas criciuma',
    'construção premoldada criciuma',
    'galpões industriais criciuma',
    'estruturas metálicas criciuma',
    'engenharia estrutural criciuma',
    'construção civil criciuma',
    'projetos estruturais criciuma',
    'premolde criciuma',
    'Criciúma SC',
    'Santa Catarina',
    'sistema premoldado',
    'concreto premoldado criciuma'
  ],
  openGraph: {
    title: 'Premoldado Criciúma SC - Galpões Industriais e Estruturas Premoldadas',
    description: 'Especialistas em galpões industriais premoldados e estruturas metálicas em Criciúma, SC. Engenheiro CREA ativo.',
    url: 'https://premolde.com.br/premoldado-criciuma',
  },
  alternates: {
    canonical: 'https://premolde.com.br/premoldado-criciuma',
  },
}

export default function CriciumaPage() {
  return <HomeContent city="Criciúma" />
} 