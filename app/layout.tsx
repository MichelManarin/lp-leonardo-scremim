import './global.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Premolde - Galpões Industriais Premoldados e Estruturas Metálicas SC',
  description: 'Premolde - Especialistas em galpões industriais premoldados, estruturas metálicas e projetos estruturais em Santa Catarina. Sistema premoldado com qualidade superior. Engenheiro CREA ativo. Orçamento gratuito!',
  keywords: [
    'premolde',
    'premoldado',
    'premoldados',
    'galpões premoldados',
    'estruturas premoldadas',
    'sistema premoldado',
    'concreto premoldado',
    'construção premoldada',
    'galpões industriais',
    'estruturas metálicas',
    'engenharia estrutural',
    'construção civil',
    'projetos estruturais',
    'Santa Catarina',
    'Orleans',
    'Criciúma',
    'Urussanga'
  ],
  openGraph: {
    title: 'Premolde - Galpões Industriais Premoldados e Estruturas Metálicas SC',
    description: 'Especialistas em galpões industriais premoldados e estruturas metálicas em Santa Catarina. Sistema premoldado com engenheiro CREA ativo.',
    url: 'https://premolde.com.br',
  },
  alternates: {
    canonical: 'https://premolde.com.br',
  },
  verification: {
    google: 'w4z5DWX6C161D4OgugQOzEBl7ZZUL6QU3X4VRvIGCjY',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google-site-verification" content="w4z5DWX6C161D4OgugQOzEBl7ZZUL6QU3X4VRvIGCjY" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Premolde",
            "image": "https://premolde.com.br/leonardo.png",
            "description": "Especialistas em galpões industriais premoldados, estruturas metálicas e projetos estruturais em Santa Catarina. Sistema premoldado com engenheiro CREA ativo.",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "SC",
              "addressCountry": "BR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": -28.3666,
              "longitude": -49.2916
            },
            "url": "https://premolde.com.br",
            "telephone": "+5548996986266",
            "priceRange": "$$",
            "areaServed": [
              "Orleans",
              "Urussanga", 
              "Lauro Müller",
              "Morro da Fumaça",
              "São Ludgero",
              "Braço do Norte",
              "Criciúma",
              "Tubarão"
            ],
            "serviceType": [
              "Galpões Industriais Premoldados",
              "Estruturas Metálicas",
              "Construção Premoldada",
              "Projetos Estruturais",
              "Engenharia Civil",
              "Sistema Premoldado"
            ],
            "founder": {
              "@type": "Person",
              "name": "Leonardo Scremin Junior",
              "jobTitle": "Engenheiro Civil"
            }
          })
        }} />
      </head>
      <body style={{ margin: 0, padding: 0, fontFamily: 'Poppins, sans-serif' }}>
        {children}
      </body>
    </html>
  )
} 