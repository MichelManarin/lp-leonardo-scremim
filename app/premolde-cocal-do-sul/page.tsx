import { Metadata } from 'next'
import HomeContent from '../components/HomeContent'

export const metadata: Metadata = {
  title: 'Premolde Cocal do Sul - Galpões Industriais e Estruturas Metálicas',
  description: 'Premolde Cocal do Sul - Especialistas em galpões industriais, estruturas metálicas e projetos estruturais em Cocal do Sul, SC. Engenheiro CREA ativo. Orçamento gratuito!',
  keywords: [
    'premolde cocal do sul',
    'galpões industriais cocal do sul',
    'estruturas metálicas cocal do sul',
    'engenharia estrutural cocal do sul',
    'construção civil cocal do sul',
    'projetos estruturais cocal do sul',
    'Cocal do Sul SC',
    'Santa Catarina'
  ],
  openGraph: {
    title: 'Premolde Cocal do Sul - Galpões Industriais e Estruturas Metálicas',
    description: 'Especialistas em galpões industriais e estruturas metálicas em Cocal do Sul, SC. Engenheiro CREA ativo.',
    url: 'https://premolde.com.br/premolde-cocal-do-sul',
  },
  alternates: {
    canonical: 'https://premolde.com.br/premolde-cocal-do-sul',
  },
}

export default function CocalDoSulPage() {
  return <HomeContent city="Cocal do Sul" />
} 