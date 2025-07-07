import './global.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Premolde - Galpões Industriais e Estruturas Metálicas',
  description: 'Premolde - Especialistas em galpões industriais, estruturas metálicas e projetos estruturais em Santa Catarina. Engenheiro CREA ativo. Orçamento gratuito!',
  keywords: [
    'premolde',
    'galpões industriais',
    'estruturas metálicas',
    'engenharia estrutural',
    'construção civil',
    'projetos estruturais',
    'Santa Catarina'
  ],
  openGraph: {
    title: 'Premolde - Galpões Industriais e Estruturas Metálicas',
    description: 'Especialistas em galpões industriais e estruturas metálicas em Santa Catarina. Engenheiro CREA ativo.',
    url: 'https://premolde.com.br',
  },
  alternates: {
    canonical: 'https://premolde.com.br',
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
            "description": "Especialistas em galpões industriais, estruturas metálicas e projetos estruturais em Santa Catarina.",
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
              "Braço do Norte"
            ]
          })
        }} />
      </head>
      <body style={{ margin: 0, padding: 0, fontFamily: 'Poppins, sans-serif' }}>
        {children}
      </body>
    </html>
  )
} 