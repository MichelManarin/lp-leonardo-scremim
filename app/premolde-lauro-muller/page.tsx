import { Metadata } from 'next'
import HomePage from '../page'

export const metadata: Metadata = {
  title: 'Premolde Lauro Müller - Galpões Industriais e Estruturas Metálicas',
  description: 'Premolde Lauro Müller - Especialistas em galpões industriais, estruturas metálicas e projetos estruturais em Lauro Müller, SC. Engenheiro CREA ativo. Orçamento gratuito!',
  keywords: [
    'premolde lauro muller',
    'galpões industriais lauro muller',
    'estruturas metálicas lauro muller',
    'engenharia estrutural lauro muller',
    'construção civil lauro muller',
    'projetos estruturais lauro muller',
    'Lauro Müller SC',
    'Santa Catarina'
  ],
  openGraph: {
    title: 'Premolde Lauro Müller - Galpões Industriais e Estruturas Metálicas',
    description: 'Especialistas em galpões industriais e estruturas metálicas em Lauro Müller, SC. Engenheiro CREA ativo.',
    url: 'https://premolde.com.br/premolde-lauro-muller',
  },
  alternates: {
    canonical: 'https://premolde.com.br/premolde-lauro-muller',
  },
}

export default function LauroMullerPage() {
  return <HomePage />
} 