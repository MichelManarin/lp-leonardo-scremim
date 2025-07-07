import { Metadata } from 'next'
import HomeContent from '../components/HomeContent'

export const metadata: Metadata = {
  title: 'Premoldado Tubarão - Galpões Industriais e Estruturas Metálicas',
  description: 'Premoldado Tubarão - Especialistas em galpões industriais, estruturas metálicas e projetos estruturais em Tubarão, SC. Engenheiro CREA ativo. Orçamento gratuito!',
  keywords: [
    'premoldado tubarao',
    'galpões industriais tubarao',
    'estruturas metálicas tubarao',
    'engenharia estrutural tubarao',
    'construção civil tubarao',
    'projetos estruturais tubarao',
    'Tubarão SC',
    'Santa Catarina'
  ],
  openGraph: {
    title: 'Premoldado Tubarão - Galpões Industriais e Estruturas Metálicas',
    description: 'Especialistas em galpões industriais e estruturas metálicas em Tubarão, SC. Engenheiro CREA ativo.',
    url: 'https://premolde.com.br/premoldado-tubarao',
  },
  alternates: {
    canonical: 'https://premolde.com.br/premoldado-tubarao',
  },
}

export default function TubaraoPage() {
  return <HomeContent city="Tubarão" />
} 