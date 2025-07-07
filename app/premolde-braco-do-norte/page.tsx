import { Metadata } from 'next'
import HomePage from '../page'

export const metadata: Metadata = {
  title: 'Premolde Braço do Norte - Galpões Industriais e Estruturas Metálicas',
  description: 'Premolde Braço do Norte - Especialistas em galpões industriais, estruturas metálicas e projetos estruturais em Braço do Norte, SC. Engenheiro CREA ativo. Orçamento gratuito!',
  keywords: [
    'premolde braco do norte',
    'galpões industriais braco do norte',
    'estruturas metálicas braco do norte',
    'engenharia estrutural braco do norte',
    'construção civil braco do norte',
    'projetos estruturais braco do norte',
    'Braço do Norte SC',
    'Santa Catarina'
  ],
  openGraph: {
    title: 'Premolde Braço do Norte - Galpões Industriais e Estruturas Metálicas',
    description: 'Especialistas em galpões industriais e estruturas metálicas em Braço do Norte, SC. Engenheiro CREA ativo.',
    url: 'https://premolde.com.br/premolde-braco-do-norte',
  },
  alternates: {
    canonical: 'https://premolde.com.br/premolde-braco-do-norte',
  },
}

export default function BracoDoNortePage() {
  return <HomePage />
} 