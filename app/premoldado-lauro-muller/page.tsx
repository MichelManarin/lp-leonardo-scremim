import { Metadata } from 'next'
import HomeContent from '../components/HomeContent'

export const metadata: Metadata = {
  title: 'Premoldado Lauro Müller - Galpões Industriais e Estruturas Metálicas',
  description: 'Premoldado Lauro Müller - Especialistas em galpões industriais, estruturas metálicas e projetos estruturais em Lauro Müller, SC. Engenheiro CREA ativo. Orçamento gratuito!',
  keywords: [
    'premoldado lauro muller',
    'galpões industriais lauro muller',
    'estruturas metálicas lauro muller',
    'engenharia estrutural lauro muller',
    'construção civil lauro muller',
    'projetos estruturais lauro muller',
    'Lauro Müller SC',
    'Santa Catarina'
  ],
  openGraph: {
    title: 'Premoldado Lauro Müller - Galpões Industriais e Estruturas Metálicas',
    description: 'Especialistas em galpões industriais e estruturas metálicas em Lauro Müller, SC. Engenheiro CREA ativo.',
    url: 'https://premolde.com.br/premoldado-lauro-muller',
  },
  alternates: {
    canonical: 'https://premolde.com.br/premoldado-lauro-muller',
  },
}

export default function LauroMullerPage() {
  return <HomeContent city="Lauro Müller" />
} 