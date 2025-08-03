import { Metadata } from 'next'
import HomeContent from '../components/HomeContent'

export const metadata: Metadata = {
  title: 'Premoldado Orleans SC - Galpões Industriais e Estruturas Premoldadas',
  description: 'Premoldado Orleans SC - Especialistas em galpões industriais premoldados, estruturas metálicas e construções premoldadas em Orleans, Santa Catarina. Engenheiro CREA ativo. Orçamento gratuito!',
  keywords: [
    'premoldado orleans',
    'premoldados orleans',
    'premoldado orleans sc',
    'galpões premoldados orleans',
    'estruturas premoldadas orleans',
    'construção premoldada orleans',
    'galpões industriais orleans',
    'estruturas metálicas orleans',
    'engenharia estrutural orleans',
    'construção civil orleans',
    'projetos estruturais orleans',
    'premolde orleans',
    'Orleans SC',
    'Santa Catarina',
    'sistema premoldado',
    'concreto premoldado orleans'
  ],
  openGraph: {
    title: 'Premoldado Orleans SC - Galpões Industriais e Estruturas Premoldadas',
    description: 'Especialistas em galpões industriais premoldados e estruturas metálicas em Orleans, SC. Engenheiro CREA ativo.',
    url: 'https://premolde.com.br/premoldado-orleans',
  },
  alternates: {
    canonical: 'https://premolde.com.br/premoldado-orleans',
  },
}

export default function OrleansPage() {
  return <HomeContent city="Orleans" />
} 