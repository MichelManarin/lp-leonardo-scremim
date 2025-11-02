import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Parceria Premoldado Criciúma - Premolde',
  description: 'Conheça nossa parceria com especialistas em premoldado em Criciúma. Trabalhamos em conjunto para oferecer as melhores soluções em construção premoldada.',
  keywords: [
    'parceria premoldado criciuma',
    'premoldado criciuma',
    'construção premoldada criciuma',
    'galpões premoldados criciuma',
    'Criciúma SC',
    'Santa Catarina'
  ],
  openGraph: {
    title: 'Parceria Premoldado Criciúma - Premolde',
    description: 'Conheça nossa parceria com especialistas em premoldado em Criciúma.',
    url: 'https://premolde.com.br/parceria-criciuma',
  },
  alternates: {
    canonical: 'https://premolde.com.br/parceria-criciuma',
  },
}

export default function ParceriaCriciumaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

