import { Metadata } from 'next'
import HomeContent from '../components/HomeContent'

export const metadata: Metadata = {
  title: 'Premoldado Urussanga - Galpões Industriais e Estruturas Metálicas',
  description: 'Premoldado Urussanga - Especialistas em galpões industriais, estruturas metálicas e projetos estruturais em Urussanga, SC. Engenheiro CREA ativo. Orçamento gratuito!',
  keywords: [
    'premoldado urussanga',
    'galpões industriais urussanga',
    'estruturas metálicas urussanga',
    'engenharia estrutural urussanga',
    'construção civil urussanga',
    'projetos estruturais urussanga',
    'Urussanga SC',
    'Santa Catarina'
  ],
  openGraph: {
    title: 'Premoldado Urussanga - Galpões Industriais e Estruturas Metálicas',
    description: 'Especialistas em galpões industriais e estruturas metálicas em Urussanga, SC. Engenheiro CREA ativo.',
    url: 'https://premolde.com.br/premoldado-urussanga',
  },
  alternates: {
    canonical: 'https://premolde.com.br/premoldado-urussanga',
  },
}

export default function UrussangaPage() {
  return <HomeContent city="Urussanga" />
} 