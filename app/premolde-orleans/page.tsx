import { Metadata } from 'next'
import HomePage from '../page'

export const metadata: Metadata = {
  title: 'Premolde Orleans - Galpões Industriais e Estruturas Metálicas',
  description: 'Premolde Orleans - Especialistas em galpões industriais, estruturas metálicas e projetos estruturais em Orleans, SC. Engenheiro CREA ativo. Orçamento gratuito!',
  keywords: [
    'premolde orleans',
    'galpões industriais orleans',
    'estruturas metálicas orleans',
    'engenharia estrutural orleans',
    'construção civil orleans',
    'projetos estruturais orleans',
    'Orleans SC',
    'Santa Catarina'
  ],
  openGraph: {
    title: 'Premolde Orleans - Galpões Industriais e Estruturas Metálicas',
    description: 'Especialistas em galpões industriais e estruturas metálicas em Orleans, SC. Engenheiro CREA ativo.',
    url: 'https://premolde.com.br/premolde-orleans',
  },
  alternates: {
    canonical: 'https://premolde.com.br/premolde-orleans',
  },
}

export default function OrleansPage() {
  return <HomePage />
} 