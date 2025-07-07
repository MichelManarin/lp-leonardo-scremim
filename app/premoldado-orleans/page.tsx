import { Metadata } from 'next'
import HomeContent from '../components/HomeContent'

export const metadata: Metadata = {
  title: 'Premoldado Orleans - Galpões Industriais e Estruturas Metálicas',
  description: 'Premoldado Orleans - Especialistas em galpões industriais, estruturas metálicas e projetos estruturais em Orleans, SC. Engenheiro CREA ativo. Orçamento gratuito!',
  keywords: [
    'premoldado orleans',
    'galpões industriais orleans',
    'estruturas metálicas orleans',
    'engenharia estrutural orleans',
    'construção civil orleans',
    'projetos estruturais orleans',
    'Orleans SC',
    'Santa Catarina'
  ],
  openGraph: {
    title: 'Premoldado Orleans - Galpões Industriais e Estruturas Metálicas',
    description: 'Especialistas em galpões industriais e estruturas metálicas em Orleans, SC. Engenheiro CREA ativo.',
    url: 'https://premolde.com.br/premoldado-orleans',
  },
  alternates: {
    canonical: 'https://premolde.com.br/premoldado-orleans',
  },
}

export default function OrleansPage() {
  return <HomeContent city="Orleans" />
} 