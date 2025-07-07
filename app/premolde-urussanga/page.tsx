import { Metadata } from 'next'
import HomePage from '../page'

export const metadata: Metadata = {
  title: 'Premolde Urussanga - Galpões Industriais e Estruturas Metálicas',
  description: 'Premolde Urussanga - Especialistas em galpões industriais, estruturas metálicas e projetos estruturais em Urussanga, SC. Engenheiro CREA ativo. Orçamento gratuito!',
  keywords: [
    'premolde urussanga',
    'galpões industriais urussanga',
    'estruturas metálicas urussanga',
    'engenharia estrutural urussanga',
    'construção civil urussanga',
    'projetos estruturais urussanga',
    'Urussanga SC',
    'Santa Catarina'
  ],
  openGraph: {
    title: 'Premolde Urussanga - Galpões Industriais e Estruturas Metálicas',
    description: 'Especialistas em galpões industriais e estruturas metálicas em Urussanga, SC. Engenheiro CREA ativo.',
    url: 'https://premolde.com.br/premolde-urussanga',
  },
  alternates: {
    canonical: 'https://premolde.com.br/premolde-urussanga',
  },
}

export default function UrussangaPage() {
  return <HomePage />
} 